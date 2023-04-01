const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const replySchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        trim: true
    },
    commentId: {
        type: ObjectId,
        required: true,
        ref: 'Comment'
    },
    authorId: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Reply', replySchema);