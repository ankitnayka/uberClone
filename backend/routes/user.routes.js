import express from 'express'
import {body} from 'express-validator'
import { registerUser,loginUser, getProfile,logoutUser } from '../controllers/user.controle.js';
import {isAuthenticated} from '../middleware/auth.middleware.js';


const router=express.Router();

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('fullName.firstName').isLength({min:3}).withMessage('First name must be 3 character long'),
    body('fullName.lastName').isLength({min:3}).withMessage('Last name must be 3 character long'),
    body('password').isLength({min:6}).withMessage('Password must be 6 letter atleast')
],registerUser)
// router.post('/register',registerUser)


router.post('/login',[
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 letter atleast')
],loginUser)


router.get('/profile',isAuthenticated,getProfile)

router.get('/logout',logoutUser)

export default router;