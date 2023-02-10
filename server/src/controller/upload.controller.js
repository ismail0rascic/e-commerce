import multer from "multer";

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(
      null,
      req.path === "/uploadBook"
        ? "../client/src/images/books"
        : "../client/src/images/authors"
    );
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only Image is Allowed..."));
  }
};
const up = multer({
  storage: multerConfig,
  fileFilter: isImage,
});

export const uploadImage = up.single("photo");

/*async function exists(path) {
  try {
    await fs.exists(path);
    return true;
  } catch {
    return false;
  }
}*/

export const upload = async (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.file);
  }, 500);
};
