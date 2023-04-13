const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const ObjectId = mongoose.Schema.Types.ObjectId;
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
    },
    wishlist: [{type: ObjectId, ref: "Product"}],
    refreshToken: {
      type: String,
    },

    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    cart: {
      type: Array,
      default: [],
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {timestamps: true}
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.isPasswordMatcher = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};
userSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto.createHash("sha256").update(resettoken).digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
  return resettoken;
};
//Export the model
module.exports = mongoose.model("User", userSchema);
