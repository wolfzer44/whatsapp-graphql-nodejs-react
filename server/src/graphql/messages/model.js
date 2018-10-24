import mongoose from 'mongoose';

const Messages = mongoose.model('Messages',{
    owner_id: String,
    conversation_id: String,
    message: String,
    messageType: String
})

export default Messages;