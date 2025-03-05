import express from 'express'
import { isAuthenticated } from '../middleware/auth.middleware.js'
import { getCordinates } from '../controllers/map.controle.js'
import { query } from 'express-validator'
const router=express.Router()



router.get('/get-cordinates',query('address').isString().isLength({min:3}),isAuthenticated,getCordinates)


export default router

