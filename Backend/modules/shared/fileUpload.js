const express = require('express');
const fileuploder = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../../uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage })
fileuploder.post('/upload', function(req, res) {
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        let uploadedFile = { filename: item.originalname }

    })
    res.json({ progress: 100, file: uploadedFile });
})
module.exports = fileuploder;