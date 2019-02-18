const storage = require("azure-storage");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const keys = require("../../config/key");
require("dotenv").config();

const blobServiceWithoutSas = storage.createBlobService(keys.connectionStr);
router.get("/list", (req, res) => {
  blobServiceWithoutSas.listBlobsSegmented(keys.containerName, null, (err, data) => {
    if (err) {
      res.json({ blobs: [], status: true, err:err });
    } else {
      res.json({ message: `${data.entries.length} blob(s) in '${keys.containerName}'`, status:true, blobs: data.entries });
    }
  });
  
});

router.post("/upload", (req, res) => {
  let storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, "./server/storage/");
    },
    filename: function(req, file, callback) {
      callback(null, file.originalname);
    }
  });
  
  let upload = multer({ storage: storage }).single("firmare");
  upload(req, res, function(error) {
    console.log('file: ', req.file)
    if (error) {
      console.log(error);
      res.status(500).json({
        message: "Upload Failure",
        error: error,
        status: false
      });
    } else {
      const readStream = fs.createReadStream(
        "./server/storage/"+req.file.originalname
      );
      blobServiceWithoutSas.createContainerIfNotExists(
        keys.containerName,
        {publicAccessLevel : 'blob'},
        (error, container) => {
          if (error) {
            console.log("Error creating blob container: ", error);
            res.status(500).json({
              message: "Upload Failure",
              error: error,
              status: false
            });
          } else {
            readStream.pipe(
              blobServiceWithoutSas.createWriteStreamToBlockBlob(
                keys.containerName,
                req.file.originalname,
                (error, result, response) => {
                  if (error) {
                    console.log("Error writing in blob: ", error);
                    res.status(500).json({
                      message: "Upload Failure",
                      error: error,
                      status: false
                    });
                  } else {
                    //console.log(result, response);
                    res.status(201).json({
                      message: `File uploaded in blob : ${keys.blobAccountName}/${keys.containerName}`,
                      data: result,
                      status: true
                    });
                  }
                }
              )
            );
          }
        }
      );
    }
  });
});


module.exports = router;
