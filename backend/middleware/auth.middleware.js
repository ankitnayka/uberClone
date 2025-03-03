import jwt from 'jsonwebtoken';
import { usermodel } from '../models/user.model.js';
import BlacklistTokenModel from '../models/blacklistToken.model.js';
import captainModel from '../models/captain.model.js';

export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);


    if (!token) {
        return res.status(401).json({ message: 'unAuthorization' });
    }
    const isBlacklisted = await BlacklistTokenModel.findOne({ token: token })
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorization user' });

    }
    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY,);

        const user = await usermodel.findById(decode)
        req.user = user
        return next()

    } catch (error) {
        console.error("Error in authentication middleware:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const authCaptain = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);


    if (!token) {
        return res.status(401).json({ message: 'Unauthorization captain' });
    }
    const isBlacklisted = await BlacklistTokenModel.findOne({ token: token })
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorization captain' });

    }
    try {



        // Verify the token
        const decode = jwt.verify(token, process.env.SECRET_KEY,);

        const captain = await captainModel.findById(decode)
        req.captain = captain
        return next()

    } catch (error) {
        console.error("Error in authentication middleware:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


