import jwt from 'jsonwebtoken';
import { usermodel } from '../models/user.model.js';

const  isAuthenticated = async(req, res, next) => {
    try {
        // Check if the token is present in cookies or Authorization header
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        
        const isBlacklisted= await usermodel.findOne({token:token})
        if(isBlacklisted){
            return res.status(401).json({ message: 'Unauthorization user' });

        }

        // Verify the token
      const decode=  jwt.verify(token, process.env.SECRET_KEY, );

        const user =await usermodel.findById(decode)
        req.user=user
        return next()

    } catch (error) {
        console.error("Error in authentication middleware:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export default isAuthenticated