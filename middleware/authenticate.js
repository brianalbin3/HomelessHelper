const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { db } = require('../database/db');

// Did not come from tutorial, not sure if its the best way
// return null if token is not legitimate or user does not exist anymore
// TODO: TEST THE HECK OUT OF THIS
getCurrentUserId = async (req) => {
    if (req.cookies.jwt) {
        try {
            const decoded = await jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);

            let id = decoded.id;
            return id;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
    
    return null;
}

getDecoded = async (a,b) => {
    return await promisify(a)(b);
}

const authenticate = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            //1) verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

            //2) Check if the user still exists
            db.query('SELECT * FROM users WHERE id = ? LIMIT 1', [decoded.id], (error, result) => {
                if ( error ) { // TODO: Is this right?
                    res.status(500).send();
                    return;
                }

                if (!result) {
                    res.status(401).send();
                    return;
                }

                req.user = result[0];
                return next();
            });
        }
        catch (error) {
            console.error(error);
            res.status(401).send();
            return;
        }
    }
    else {
        res.status(401).send();
        return;
    }
};

module.exports = {authenticate, getCurrentUserId};