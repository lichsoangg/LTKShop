const {default: mongoose} = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.DB_URL);
    console.log("Connect success");
  } catch (error) {
    console.log("Connect fail");
  }
};
module.exports = dbConnect;
