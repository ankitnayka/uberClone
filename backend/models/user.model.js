import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, 'first name must be at least 3 characters long']
        },
        lastName: {
            type: String,
            minlength: [3, 'last name must be at least 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    }
});


userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: '24h' });
};


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


// userSchema.methods.hashPassword = async function (password) {
//     return await bcrypt.hash(password, 10);
// };

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

export const usermodel = mongoose.model('user', userSchema);
