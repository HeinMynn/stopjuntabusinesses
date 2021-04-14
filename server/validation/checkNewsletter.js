const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCDMInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  data.imgURL = !isEmpty(data.imgURL) ? data.imgURL : "";
  data.number = !isEmpty(data.number) ? data.number : "";
  data.link = !isEmpty(data.link) ? data.link : "";
  // Email checks
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  // imgURL checks
  if (Validator.isEmpty(data.imgURL)) {
    errors.imgURL = "Image Link field is required";
  }

  if (Validator.isEmpty(data.number)) {
    errors.number = "Number field is required";
  }

  if (Validator.isEmpty(data.link)) {
    errors.link = "Link field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
