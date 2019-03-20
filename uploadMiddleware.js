// create a middleware inside the root of the project
const multer = require("multer");
const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024
  }
});

module.exports = upload;
