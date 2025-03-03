import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const captainSchema=new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,'First Name must be at least 3 character long']
        },
        lastName:{
            type:String,
            minlength:[3,'Last Name must be at least 3 character long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color name must be at least 3 character long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate name must be at least 3 character long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'capacity must be 1 passanegr']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['auto','motorcycle','car']
        }
        
    },
    location:{
        lat:{
            type:Number,
            default:0
        },
        lng:{
            type:Number,
            default:0
        }
    }
})


captainSchema.methods.generateAuthToken=async function(){
    const token=await jwt.sign({_id:this._id},process.env.SECRET_KEY,{expiresIn:'24h'})
    return token
}

captainSchema.methods.comparePassword=async function (password) {
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}

const captainModel=mongoose.model('captainModel',captainSchema)
export default captainModel

