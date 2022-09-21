const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
    role: {
      type: Array,
      default: ["user"],
    },
  },
  {
    timsstamps: true,
  }
);

/*-----FUNCTION-----*/

// userSchema.statics.getUsers = async function () {
//   let user = await th;
//   return user;
// };

/*-----CLOSE FUNCTION-----*/

const User = mongoose.model("Users", userSchema);

module.exports = User;
