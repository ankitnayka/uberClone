import captainModel from "../models/captain.model.js";
import { validationResult } from "express-validator";
import {createCaptain} from '../services/captain.service.js'
import bcrypt from 'bcryptjs'

export const captainRegister=async(req,res,next)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array()
            })
        }

        const {fullName,email,password,vehicle}=req.body;

        const isCaptainExist=await  captainModel.findOne({email});

        if(isCaptainExist){
            return res.status(400).json({
                message:'email already exist !!'
            })
        }

        const hashedPassword=  await bcrypt.hash(password,10)

        const captain=await createCaptain({
            firstName:fullName.firstName,
            lastName:fullName.lastName,
            email,
            password:hashedPassword,
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType
        })

        
        const token= await captain.generateAuthToken();

        res.status(201).json({token,captain,message:'captain register sucessfully'})
    } catch (error) {
        console.log('Internal error',error);
        
    }
}