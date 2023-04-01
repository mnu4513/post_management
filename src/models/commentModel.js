const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true, 
        trim: true
    },
    postId: {
        type: ObjectId,
        required: true,
        ref: 'Post'
    },
    authorId: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);