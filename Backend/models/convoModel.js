import mongoose from 'mongoose';

const convoSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
}, { timestamps: true });

 export const Conversation = mongoose.model('Conversation', convoSchema);
//  export default Conversation