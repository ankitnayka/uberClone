import mongoose from 'mongoose'

const rideSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    captain:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'captain'
    },
    pickup:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    fare:{
        type:Number,
        required:true
    },
    staus:{
        type:String,
        enum:['pending','accepted','ongoing','completed'],
        default:'pending'
    },
    duraton:{
        type:Number,
    },
    distnace:{
        type:Number
    },
    paymentId:{
        type:String
    },
    orderId:{
        typeL:String
    },
    signature:{
        type:String
    },
    otp:{
        type:String,
        select:false
    }
})

export const  rideModel=mongoose.model('ride',rideSchema)