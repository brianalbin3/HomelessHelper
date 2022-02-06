const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { db } = require('../database/db');

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

module.exports = {authenticate};