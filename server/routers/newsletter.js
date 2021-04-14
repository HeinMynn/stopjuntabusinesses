const express = require("express");
const newsletterRoutes = express.Router();
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

let Newsletter = require("../models/newsletter.model");

const validateNewsletterInput = require("../validation/checkNewsletter");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.secretOrKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

newsletterRoutes.route("/").get(function (req, res) {
  Newsletter.find(function (err, newsletter) {
    if (err) {
      console.log(err);
    } else {
      res.json(newsletter);
    }
  });
});

newsletterRoutes.post("/add", authenticateJWT, (req, res) => {
  const { errors, isValid } = validateNewsletterInput(req.body);
  const { email } = req.user;
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  if (email !== "admin@010221.org") {
    return res
      .status(403)
      .send({ auth: false, message: "Failed to authenticate token." + email });
  }
  const title = req.body.title;
  const imgURL = req.body.imgURL;
  const number = req.body.number;
  const link = req.body.link;

  const newNewsletterData = {
    title,
    imgURL,
    number,
    link,
  };

  const newNewsletter = new Newsletter(newNewsletterData);
  newNewsletter
    .save()
    .then((newsletter) => {
      res.status(200).json({ newsletter: "Newsletter added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new Newsletter failed");
    });
});

newsletterRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Newsletter.findById(id, function (err, newsletter) {
    res.json(newsletter);
  });
});

newsletterRoutes.route("/update/:id").post((req, res) => {
  const title = req.body.title;
  const imgURL = req.body.imgURL;
  const number = req.body.number;
  const link = req.body.link;

  const newNewsletterData = {
    title,
    imgURL,
    number,
    link,
  };

  const newNewsletter = new Newsletter(newNewsletterData);
  newNewsletter
    .save()
    .then((newsletter) => {
      res.status(200).json({ newsletter: "Newsletter added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new Newsletter failed");
    });
});

let cloudinaryConfig = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
};

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

let upload = multer({ storage: storage }).single("file");

const uploadRiderImage = async (req, res) => {
  try {
    let filePath = req.file;

    const uploadImage = new Promise((resolve, reject) => {
      cloudinary.config(cloudinaryConfig);
      cloudinary.uploader
        .upload(filePath.path, {
          folder: "010221.org",
          unique_filename: true,
        })
        .then((result) => {
          let imageUrl = result.secure_url;
          return resolve(imageUrl);
        })
        .catch((err) => err);
    });

    let image = await uploadImage;
    return res.status(200).json({ success: true, data: image });
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({ success: true, data: {} });
  }
};
const uploadStore = multer({
  storage,
});

newsletterRoutes.post(
  "/imageupload",
  uploadStore.single("file"),
  uploadRiderImage
);

module.exports = newsletterRoutes;
