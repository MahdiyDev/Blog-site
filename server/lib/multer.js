const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.mimetype.split("/")[0] +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      
      file.mimetype.split("/")[0] === "image"
    //    ||
    //   file.mimetype.split("/")[0] === "video"
    ) {
      cb(null, true);
    } else {
      cb(null, false);

      req.fileFormatError = "Only image and video format allowed!";
    }
  },
});
module.exports = {
  upload,
};