require("dotenv").config();

const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESSTOKEN,
});
