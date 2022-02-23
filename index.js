const express = require('express');
const path = require('path');
const port = 5001;
const cookieParser = require('cookie-parser');
const { db } = require('./database/db');
const { DateTime } = require('luxon');

const {authenticate, getCurrentUserId} = require('./middleware/authenticate');

const { generateCode } = require('./util/codeGenerator');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var  {Error} = require('./models/error');
const { get } = require('http');

const app = express();

// const publicDirectory = path.join(__dirname, './public');
// app.use(express.static(publicDirectory));

app.use(express.static(path.join(__dirname, 'build')));


// Pass URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

db.connect((error) => {
    if (error) {
        console.error(error)
    }
    else {
        console.log('MYSQL Connected...');
    }
});

const passwordIsValid = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,32}$/

    return regex.test(password);
}

const emailIsValid = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
}

// TODO: Check to make sure they aren't posting too often using IP

app.post('/api/users', (req, res) => {
    const { email, password } = req.body;

    if (!emailIsValid(email)) {
        res.status(400).send(new Error(400, 'Invalid email.'));
        return;
    }

    if (!passwordIsValid(password)) {
        res.status(400).send(new Error(400, 'Password must be between 8 and 32 characters and include a letter, number, and special character.'));
        return;
    }

    db.query('SELECT email FROM users WHERE email= ? LIMIT 1', [email], async (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        if ( results.length > 0 ) {
            res.status(409).send(new Error(409, 'An account with this email address already exists.'));
            return;
        }

        let hashedPassword;

        try {
            let salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }
        catch(error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        const now = DateTime.local().toJSDate();
        db.query('INSERT INTO users SET ? ', {email, passHash: hashedPassword, createdOn: now }, (error, result) => {
            if ( error ) {
                console.error(error)
                res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
                return;
            }
            else {
                const id = result.insertId;
                
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000 // Ackit: is too long
                    ),
                    httpOnly: false
                }

                res.cookie('jwt', token, cookieOptions);
                res.status(200).send();
            }
        })
    });
});

app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body;

    if ( !email || !password ) {
        res.status(400).send(new Error(400, 'Please provide email and password'));
        return;
    }

    try {
        db.query('SELECT id, passHash, failedLoginAttempts, lastLogin FROM users WHERE email = ? LIMIT 1', [email], async (error, results) => {
            if ( results.length > 0 && results[0].failedLoginAttempts >= 10 ) {
                res.status(401).send(new Error(401, 'Account locked')); // Keep this text the same on the client
                return;
            }
            
            if ( results.length === 0 || !(await bcrypt.compare(password, results[0].passHash)) ) {
                res.status(401).send(new Error(401, 'Email or password is incorrect'));

                if ( results.length > 0 ) {
                    const id = results[0].id;
                    db.query('UPDATE users SET failedLoginAttempts = failedLoginAttempts + 1 WHERE id = ?', [id], (error, result) => {
                        if ( error ) {
                            console.error(error)
                        }
                    });
                }
                return;
            }

            const id = results[0].id;

            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            const cookieOptions = {
                expires: new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                ),
                httpOnly: false
            }
            res.cookie('jwt', token, cookieOptions);
            res.status(200).send();

            const now = DateTime.local().toJSDate();
            db.query('UPDATE users SET lastLogin = ?, failedLoginAttempts = ? WHERE id = ?', [now, 0, id], (error, result) => {
                if ( error ) {
                    console.error(error)
                } 
            });
        });
    }
    catch(error) {
        console.error(error)
        res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
        return;
    }
});

app.delete('/api/users/logout', (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 2*1000),
        httpOnly: false
    });

    res.status(200).send(); // TODO: Think about 204 or 205
});

// TODO: DO A TIME CHECK FOR IPs between searches

app.get('/api/users/findaccount/:account', (req, res) => {
    const account = req.params.account;

    db.query('SELECT email, phoneNumber FROM users WHERE email = ? OR phoneNumber = ? LIMIT 1', [account, account], async (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        if ( results.length > 0 ) {

            const email = results[0].email;
            const phone = results[0].phoneNumber ? results[0].phoneNumber.substring(0, 2) + "*-***-**" +  results[0].phoneNumber.substring(8,10) : '';

            const contactInformation = { email, phone }
            res.status(200).send({contactInformation});
            return;
        }

        res.status(404).send();
        return;
    });
});

app.post('/api/users/sendresetcode', (req, res) => {
    const { email, selectedContactMethod } = req.body;

    if (!email || !selectedContactMethod) {
        res.status(400).send(new Error(400, 'Email and/or selectedContactMethod not sent')); // TODO: think of better error message
        return;
    }

    // TODO: Do I need to pull the phone number?
    db.query('SELECT id, email, phoneNumber from users WHERE email= ? LIMIT 1', [email], async (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        if ( results.length === 0 ) {
            res.status(404).send(new Error(404, 'Account not found.')); // TODO: Consider an error message
            return;
        }
        const id = results[0].id;
        const phoneNumber = results[0].phoneNumber;

        if ( selectedContactMethod === 'phone' && !phoneNumber ) {
            res.status(404).send(404, 'User does not have a phone number setup');
            return;
        }

        const resetCode = generateCode();

        console.log('resetCode=',resetCode);

        if ( selectedContactMethod === 'phone' ) { /*TODO: sendSMS with resetCode*/ }
        else { /*TODO: send email with resetCode*/ }

        const now = DateTime.local().toJSDate();
        db.query('UPDATE users SET resetCode = ?, resetCodeCreated = ?, failedResetCodeAttempts = 0 WHERE id = ?', [resetCode, now, id], (error, result) => {
            if ( error ) {
                console.error(error);
                res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
                return;
            }

            res.status(200).send();
        });
    });
});

app.get('/api/users/checkresetcode', (req, res) => {
    const email = req.query.email;
    const resetCodeToTest = req.query.resetCode;

    if (!email || !resetCodeToTest) {
        res.status(400).send(new Error(400, 'Email and/or resetCode not sent')); // TODO: think of better error message
        return;
    }

    db.query('SELECT resetCode, resetCodeCreated, failedResetCodeAttempts FROM users WHERE email = ? AND resetCode is NOT NULL LIMIT 1', [email], (error, results) => {
        if ( error ) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        if ( results.length === 0 ) {
            res.status(401).send(new Error(401, 'Invalid email/passcode combination'));
            return;
        }
            
        const actualResetCode = results[0].resetCode;
        const failedResetCodeAttempts = results[0].failedResetCodeAttempts;

        if ( failedResetCodeAttempts >= 10 ) {
            res.status(401).send(new Error(401, 'Too many failed attempts'));
            return;
        }

        if ( resetCodeToTest !== actualResetCode ) {
            res.status(401).send(new Error(401, 'Invalid email/passcode combination'));

            db.query('UPDATE users SET failedResetCodeAttempts = failedResetCodeAttempts + 1 WHERE email = ?', [email], (error, result) => {
                if ( error ) {
                    console.error(error)
                }

            });
            return;
        }

        const resetCodeCreated = DateTime.fromJSDate(results[0].resetCodeCreated);
        const now = DateTime.local();

        const diffInMinutes = now.diff(resetCodeCreated, 'minutes').toObject().minutes;

        if ( diffInMinutes >= 20 ) {
            res.status(401).send(new Error(401, 'Reset code has expired'));
            return;
        }

        res.status(200).send();
        return;
    });
});

// DELETE ME - actually dont, BUT TODO: ADD AUTHENTICATION
app.get('/api/users/', (req, res) => {
    db.query('SELECT * from users', (error, result) => {
        if ( error ) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        res.status(200).send(result);
    });
});

// TODO: Test the heck out of this
app.get('/api/users/me', async (req, res) => {
    const userId = await getCurrentUserId(req);

    if (!userId) {
        res.status(401).send(new Error(401, 'Unauthorized'));
        return;
    }

    // TODO: probably can just grab the fields I need rather than everything
    db.query('SELECT * FROM users where id= ?', [userId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        const { id, email, phoneNumber, nameFirst, nameLast} = result[0];

        res.status(200).send({id, email, phoneNumber, nameFirst, nameLast});
    });
});

// TODO: Test on app
app.post('/api/users/changepassword', (req, res) => {
    const { email, password } = req.body;
    const resetCodeToTest = req.body.resetCode;

    if (!email || !resetCodeToTest || !password) {
        res.status(400).send(new Error(400, 'Email, resetCode and/or new password not sent')); // TODO: think of better error message
        return;
    }
    
    if (!passwordIsValid(password)) {
        res.status(400).send(new Error(400, 'Password must be between 8 and 32 characters and include a letter, number, and special character.'));
        return;
    }


    db.query('SELECT id, resetCode, resetCodeCreated, failedResetCodeAttempts FROM users WHERE email = ? AND resetCode IS NOT NULL LIMIT 1', [email], async (error, results) => {
        if ( error ) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        if ( results.length === 0 ) {
            res.status(401).send(new Error(401, 'Invalid email/passcode combination'));
            return;
        }

        const id = results[0].id;

        const actualResetCode = results[0].resetCode;

        if ( resetCodeToTest !== actualResetCode ) {
            res.status(401).send(new Error(401, 'Invalid email/passcode combination'));

            db.query('UPDATE users SET failedResetCodeAttempts = failedResetCodeAttempts + 1 WHERE email = ?', [email], (error, result) => {
                if ( error ) {
                    console.error(error)
                }

            });
            return;
        }

        const failedResetCodeAttempts = results[0].failedResetCodeAttempts;

        if ( failedResetCodeAttempts >= 10 ) {
            res.status(401).send(new Error(401, 'Too many failed attempts'));
            return;
        }

        const resetCodeCreated = DateTime.fromJSDate(results[0].resetCodeCreated);
        const now = DateTime.local();

        const diffInMinutes = now.diff(resetCodeCreated, 'minutes').toObject().minutes;

        if ( diffInMinutes >= 20 ) {
            res.status(401).send(new Error(401, 'Reset code has expired'));
            return;
        }

        let hashedPassword;

        try {
            let salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }
        catch(error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }
        db.query('UPDATE users SET resetCode = NULL, resetCodeCreated = NULL, failedResetCodeAttempts = 0, passHash = ? WHERE email = ?', [hashedPassword, email], (error, result) => {
            if ( error ) {
                console.error(error);
                res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
                return;
            }
            
            // TODO: This is alot of duplicated code
            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            const cookieOptions = {
                expires: new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000 // Ackit: is too long
                ),
                httpOnly: false
            }

            res.cookie('jwt', token, cookieOptions);
            res.status(200).send();
            return;

        });
    });

});

app.patch('/api/users/namefirst', async (req, res) => {
    const { id, nameFirst } = req.body;

    if ( !id ) {
        res.status(400).send(new Error(400, 'id was not supplied'));
        return;
    }

    if ( !nameFirst ) {
        res.status(400).send(new Error(400, 'nameFirst was not supplied'));
        return;
    }

    const userId = await getCurrentUserId(req);

    if ( id !== userId ) {
        res.status(401).send(new Error(401, 'You do not have permission to do this action'));
        return;
    }

    db.query('UPDATE users SET nameFirst = ? WHERE id = ?', [nameFirst, id], (error, result) => {
        if ( error ) {
            console.error(error)
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
        }

        res.status(200).send(); // TODO: 200 or 204?
    });
});

app.patch('/api/users/namelast', async (req, res) => {
    const { id, nameLast } = req.body;

    if ( !id ) {
        res.status(400).send(new Error(400, 'id was not supplied'));
        return;
    }

    if ( !nameLast ) {
        res.status(400).send(new Error(400, 'nameLast was not supplied'));
        return;
    }

    const userId = await getCurrentUserId(req);

    if ( id !== userId ) {
        res.status(401).send(new Error(401, 'You do not have permission to do this action'));
        return;
    }

    db.query('UPDATE users SET nameLast = ? WHERE id = ?', [nameLast, id], (error, result) => {
        if ( error ) {
            console.error(error)
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
        }

        res.status(200).send(); // TODO: 200 or 204?
    });
});

// TODO: Regex for only numbers and force length requirements

app.patch('/api/users/phonenumber', async (req, res) => {
    const { id, phoneNumber } = req.body;

    if ( !id ) {
        res.status(400).send(new Error(400, 'id was not supplied'));
        return;
    }

    if ( !phoneNumber ) {
        res.status(400).send(new Error(400, 'phoneNumber was not supplied'));
        return;
    }

    const userId = await getCurrentUserId(req);

    if ( id !== userId ) {
        res.status(401).send(new Error(401, 'You do not have permission to do this action'));
        return;
    }

    db.query('UPDATE users SET phoneNumber = ? WHERE id = ?', [phoneNumber, id], (error, result) => {
        if ( error ) {
            console.error(error)
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
        }

        res.status(200).send(); // TODO: 200 or 204?
    });
});

// TODO: Authenticate
app.get('/api/events', (req, res) => {
    db.query('SELECT id, title, start, end, description from events', (error, result) => {
        if ( error ) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        res.status(200).send(result);
    });
});

app.post('/api/events', authenticate, (req, res) => {
    const { title, start, end, description } = req.body;

    if ( !title ) {
        res.status(400).send(new Error(400, 'Title is empty'));
        return;
    }

    if ( !start ) {
        res.status(400).send(new Error(400, 'start was not supplied'));
        return;
    }

    if ( !end ) {
        res.status(400).send(new Error(400, 'end was not supplied'));
        return;
    }

    // TODO: Event overlap?

    // TODO: Events in the past?

    db.query('INSERT INTO events SET ? ', {title, start, end, description}, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        res.status(200).send({id: result.insertId, title, start, end, description});
    });
});

app.delete('/api/events/:eventId', authenticate, (req, res) => {
    const eventId = req.params.eventId;

    db.query('DELETE  FROM events WHERE id = ?', [eventId], async (error, results) => {
        // TODO: Test
        if (error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        if (results.affectedRows === 0) {
            res.status(404).send(new Error(404, 'event not found'));
            return;
        }

        res.status(200).send();
    });
});

app.put('/api/events', authenticate, (req, res) => {

    const { id, title, start, end, description } = req.body.event;

    if ( !title ) {
        res.status(400).send(new Error(400, 'Title is empty'));
        return;
    }

    if ( !start ) {
        res.status(400).send(new Error(400, 'start was not supplied'));
        return;
    }

    if ( !end ) {
        res.status(400).send(new Error(400, 'end was not supplied'));
        return;
    }
 
    // TODO: Event overlap?

    // TODO: Events in the past?

    db.query('UPDATE events SET title = ?, start = ?, end = ?, description = ? WHERE id = ?', [title, start, end, description, id], (error, result) => {
        // TODO: Make sure it actually exists
        
        if (error) {
            console.error(error);
            res.status(500).send(new Error(500, 'The server encountered an unknown error.'));
            return;
        }

        res.status(200).send(); // TODO: 200 or 204?
    });
})

app.get('/api/testauthenticate', authenticate, (req, res) => {
    res.status(200).send({message: 'YAY'});
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});