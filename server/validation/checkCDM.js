const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCDMInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.imgLink = !isEmpty(data.imgLink) ? data.imgLink : "";
  data.content = !isEmpty(data.content) ? data.content : "";
  data.link = !isEmpty(data.link) ? data.link : "";
  // Email checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // imgLink checks
  if (Validator.isEmpty(data.imgLink)) {
    errors.imgLink = "Image Link field is required";
  }

  if (Validator.isEmpty(data.content)) {
    errors.content = "Content field is required";
  }

  if (Validator.isEmpty(data.link)) {
    errors.link = "Link field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
