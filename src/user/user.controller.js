const httpStatus = require("http-status");
const userService = require("./user.service");

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res
      .status(httpStatus.CREATED)
      .json({ status: httpStatus.CREATED, message: "success", data: user });
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).json({
      status: httpStatus.BAD_REQUEST,
      message: error.message,
      data: null,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();

    return res
      .status(httpStatus.OK)
      .json({ status: httpStatus.OK, message: "Success", data: users });
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).json({
      status: httpStatus.BAD_REQUEST,
      message: error.message,
      data: null,
    });
  }
};

module.exports = {
  createUser,
  getUsers,
};
