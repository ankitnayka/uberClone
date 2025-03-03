import mongoose from 'mongoose'

const blacklistSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400 //in sec
    }
})

const BlacklistTokenModel=mongoose.model('BlacklistTokenModel',blacklistSchema)

export default BlacklistTokenModel;