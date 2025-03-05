import {getAddressCoordinate} from '../services/maps.service.js'
import { validationResult } from 'express-validator';

export const getCordinates=async(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array()
            })
        }
        
        const {address}=req.query;
        console.log(address)
        try {
            const coordinates=await getAddressCoordinate(address)
            res.status(200).json(coordinates)
            
        } catch (error) {
            console.log("Internal server error + coordinate not found ",error)
            res.status(500).json({
                message:"Internal server error +  coordinate not found"
            })
        }
}