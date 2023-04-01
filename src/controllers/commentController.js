const commentModel = require("../models/commentModel");
const replyModel = require('../models/replyModel');

const createComment = async function (req, res) {
    try {
        const data = req.body;
        const commentCreated = await commentModel.create(data);
        res.status(201).send({ status: true, message: 'comment created', data: commentCreated });
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    };
};

const getComment = async function (req, res) {
    try {
        const commentId = req.params.commentId;
        const comment = await commentModel.findById(commentId).select({ message: 1 }).populate('authorId');
        const replies = await replyModel.find({ commentId }).select({ message: 1 }).populate('authorId');
        const data = {
            comment: comment,
            replies: replies
        };
        res.status(200).send({ status: true, data: data });
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    };
};

module.exports = { createComment, getComment };