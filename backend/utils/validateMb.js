const mongoose = require("mongoose");
const validateMbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("This id is valid or not Found");
};
module.exports = validateMbId;
