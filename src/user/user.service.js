const User = require("./user.model");

const createUser = async (userBody) => {
  return User.create(userBody);
};

const getUsers = async () => {
  return await User.find();
};

module.exports = {
  createUser,
  getUsers,
};
