import mongoose from 'mongoose';

// MODELS 
const Users = mongoose.model('Users',{
    name: String,
    lastName: String,
    phoneNumber: { type: Number, index: { unique: true } },
    profilePicture: String,
    email: String,
    activePin: Number,
    isActive: {type: Boolean, default: false },
})

export default Users;