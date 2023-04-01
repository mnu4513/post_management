const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    authorId: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);