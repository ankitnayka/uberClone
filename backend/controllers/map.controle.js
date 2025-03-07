import {getAddressCoordinate, getAutoCompleteSuggestionss, getDistanceTimee} from '../services/maps.service.js'
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


export const getDistanceTime=async(req,res,next)=>{
    try {
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        const {origin,destination}=req.query;

        const distanceTime=await getDistanceTimee(origin,destination)

        res.status(200).json(distanceTime)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Internal server error + distance & origin"
        })
    }
}

export const getAutoCompleteSuggestions=async(req,res,next)=>{
    
        try {
            const errors=validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()})
            }
            const {input}=req.query;
            const suggestion=await getAutoCompleteSuggestionss(input)

            res.status(200).json(suggestion)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message:"internal server error + suggestion "
            })
        }
}