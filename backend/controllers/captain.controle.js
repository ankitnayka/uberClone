import captainModel from "../models/captain.model.js";
import { validationResult } from "express-validator";
import {createCaptain} from '../services/captain.service.js'
import bcrypt from 'bcryptjs'
import BlacklistTokenModel from "../models/blacklistToken.model.js";

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

export const captainLogin=async(req,res,next)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array()
            })
        }

        const {email,password} =req.body;
        console.log(email,password);
        
        const captain = await captainModel.findOne({email}).select('+password')
        console.log(captain);
        
        if(!captain){
            return res.status(404).json({message:'invalid email or password'})
        }

        const isMatch=await  captain.comparePassword(password)
        console.log(isMatch);
        
        if(!isMatch){
            return res.status(404).json({message:'invalid email or password'})
        }

         // Generate authentication token
         const token =await captain.generateAuthToken();

         res.cookie("token",token)
         // Send response with a 200 status code
         res.status(200).json({ token, captain });

    } catch (error) {
        console.log('internal Error',error);
        
    }
}


export const getProfile=async(req,res,next)=>{
    try {
        res.status(201).json(req.captain)
    } catch (error) {
        console.log('Internal Error',error);
        
    }
}

export const  logoutCaptain=async(req,res,next)=>{
    try {
        res.clearCookie('token');
        const token=req.cookies.token || req.headers?.authoriztion.split(' ')[1];

        await BlacklistTokenModel.create({token})
        res.status(200).json({message:'Logout Captain !!'})
    } catch (error) {
        console.log('Internal error',error);
        
    }
}