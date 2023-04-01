const commentModel = require("../models/commentModel");
const postModel = require("../models/postModel");

const createPost = async function (req, res) {
  try {
    const data = req.body;
    const postCreated = await postModel.create(data);
    res.status(201).send({status: true, message: 'post created', data: postCreated});
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  };
};

const getPost = async function (req, res) {
  try {
    const postId = req.params.postId;
    const post = await postModel.findById(postId).select({title: 1, description: 1 }).populate('author').select({name: 1, email: 1});
    const comments = await commentModel.find({postId: postId}).select({message: 1});
    const data = {post, comments}
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  };
};

const updatePost = async function (req, res) {
  try {
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const deletePost = async function (req, res) {
  try {
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { createPost, getPost, updatePost, deletePost };
