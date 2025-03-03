import express from 'express';
import { body } from 'express-validator';
import {authCaptain} from '../middleware/auth.middleware.js'
import {captainRegister,captainLogin,logoutCaptain,getProfile} from '../controllers/captain.controle.js'

const router = express.Router();

router.post('/register', [
    // Email Validation
    body('email')
        .isEmail()
        .withMessage('Invalid email'),

    // Full Name Validation
    body('fullName.firstName')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),
    
    body('fullName.lastName')
        .optional() // Last name is optional, add validation if present
        .isLength({ min: 3 })
        .withMessage('Last name must be at least 3 characters long'),

    // Password Validation
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),

    // Vehicle Validations
    body('vehicle.color')
        .isLength({ min: 3 })
        .withMessage('Color must be at least 3 characters long'),

    body('vehicle.capacity')
        .isInt({ min: 1 })
        .withMessage('Capacity must be at least 1 passenger'),

    body('vehicle.plate')
        .isLength({ min: 3 })
        .withMessage('Plate must be at least 3 characters long'),

    body('vehicle.vehicleType')
        .isIn(['auto', 'motorcycle', 'car'])
        .withMessage('Vehicle type must be one of auto, motorcycle, or car'),
],captainRegister);

router.post('/login',[
    body('email')
    .isEmail()
    .withMessage('Invalid email'),
    body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

],captainLogin)


router.get('/profile',authCaptain,getProfile)
router.get('/logout',authCaptain,logoutCaptain)

export default router;
