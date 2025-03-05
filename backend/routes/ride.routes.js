import express from 'express'
import {body} from 'express-validator'
import { createRide } from '../controllers/ride.controller'
import { isAuthenticated } from '../middleware/auth.middleware'
const router=express.Router()


router.post('/create',isAuthenticated,
    body('userId').isString().isLength({min:24,max:24}).withMessage('Invalid user'),
    body('pickup').isString().isLength({min:24,max:24}).withMessage('Invalid valid pick up adress'),
    body('destination').isString().isLength({min:24,max:24}).withMessage('Invalid valid destination adress'),
    body('vehicleType').isString().isLength({min:24,max:24}).withMessage('select vehicle type'),
    createRide
)

export default router