const express = require("express");
const app = express();
const router = express.Router();
const upload = require("./uploadMiddleware");
const Resize = require("./Resize");

// sharp can't install
// 1) install the .NET Framework 2.0 SDK,
// 2) install Microsoft Visual Studio 2005 or
// 3) add the location of the component to the system path if it is installed elsewhere.

router.get("/", async function(req, res) {
  await res.render("index");
});

// Save the image in the file system
router.post("/post", upload.single("image"), async function(req, res) {
  const imagePath = path.join(__dirname, "/public/images");
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: "Please provide an image" });
  }
  const filename = await fileUpload.save(req.file.buffer);
  return res.status(200).json({ name: filename });
  // await console.log("post");
});
module.exports = router;
