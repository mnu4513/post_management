const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    const data = req.body;
    const userCreated = await userModel.create(data);
    res
      .status(201)
      .send({ status: true, message: "user created", data: userCreated });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const loginUser = async function (req, res) {
  try {
    const data = req.body;
    const { email, password } = data;
    const user = await userModel.findOne({ email: email, password: password });
    res
      .status(200)
      .send({ status: true, message: `welcome ${user.name}`, data: user });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { createUser, loginUser };