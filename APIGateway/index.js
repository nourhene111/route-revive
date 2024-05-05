const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const multer = require("multer");
const app = express(); 
const axios = require("axios");
app.use(cors());
app.use(express.json());
const upload = multer({ dest: 'uploads/' });
 
// Endpoint to handle file uploads

// Proxy requests to the demande service running on localhost:6000 
 app.use("/demande", proxy('http://localhost:6000'));  
app.use("/resource", proxy("http://localhost:4000")); // resource service
app.use("/security", proxy("http://localhost:7000")); // SECURITY service
app.use("/file", proxy("http://localhost:5000")); // SECURIT Y service
app.use("/planification", proxy("http://localhost:11000")); // planification Y service
 

app.post('/upload', upload.single('file'),async (req, res) => {
   
    console.log(req.body); // Log the uploaded file
    // Forward the request to the demande service  
      
     let body=req.body
     let file=req.file 
   
    const headers = { 
        'Authorization': req.header('Authorization')
      }; 
      
      const response = await axios.post('http://localhost:8000/demande/api/demande/create', {file , body}, {
        headers: headers
      }); 
     
  });
app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});