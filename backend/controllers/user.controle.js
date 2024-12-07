import express from 'express';
import { usermodel } from '../models/user.model.js';
import { createUser } from '../services/user.service.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs'
import BlacklistTokenModel from '../models/blacklistToken.model.js';

export const registerUser = async (req, res, next) => {
    console.log("request body"+req.body);
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        
        const { fullName, email, password } = req.body;
        console.log(fullName);
        
        const isuserExist=await usermodel.findOne({email});
        
        if(isuserExist){
            return res.status(400).json({
                message:"Already exist user email "
            });
        }
        const hashedPassword =  await bcrypt.hash(password, 10);

        // Create the user
        const user = await createUser({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            password: hashedPassword,
            email
        });

        // Generate an authentication token (ensure `generateAuthToken` is defined)
        const token = user.generateAuthToken();

        // Send response
        res.status(201).json({ token, user,message:"Account Create Successfully" });
    } catch (error) {
        console.error("Error registering user:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const loginUser = async (req, res, next) => {
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { email, password } = req.body;
        console.log(email, password);

        // Find the user by email, including the password
        const user = await usermodel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        console.log(user);

        // Compare the provided password with the stored password
        const isMatch = await user.comparePassword(password);
        console.log(isMatch);

        // Check if password matches
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate authentication token
        const token = user.generateAuthToken();

        res.cookie("token",token)
        // Send response with a 200 status code
        res.status(200).json({ token, user });

    } catch (error) {
        console.error("Error login user:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const getProfile=(req,res,next)=>{
    res.status(201).json(req.user)
}


export const  logoutUser=async(req,res,next)=>{
        res.clearCookie('token');
        const token=req.cookies.token || req.headers?.authoriztion.split(' ')[1];

        await BlacklistTokenModel.create({token})
        res.status(200).json({message:'Logout User !!'})
}