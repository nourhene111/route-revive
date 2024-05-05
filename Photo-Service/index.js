const express = require('express');
const multer  = require('multer');
require('dotenv').config()
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
   
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      console.log(file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix +'-'+ file.originalname);
    }
  });
const upload = multer({ storage: storage });

// Route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  console.log("hello");
  console.log(req);
  // Handle file upload logic here
  const file = req.file;
  console.log(file);
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  // Assuming you save the file path
  const filePath = '/uploads/' + file.originalname;
  console.log(filePath);
  return res.send({ filePath: filePath });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`File upload microservice listening on port ${PORT}`);
});