import express from 'express'
import { isAuthenticated } from '../middleware/auth.middleware.js'
import { getAutoCompleteSuggestions, getCordinates } from '../controllers/map.controle.js'
import { query } from 'express-validator'
import { getDistanceTime } from '../controllers/map.controle.js'



const router=express.Router()



router.get('/get-cordinates',query('address').isString().isLength({min:3}),getCordinates)
router.get('/get-distanceTime',
            query('origin').isString().isLength({min:3}),
            query('destination').isString().isLength({min:3}),getDistanceTime
)

router.get('/get-suggestion',query('input').isString().isLength({min:3}),getAutoCompleteSuggestions)

export default router

