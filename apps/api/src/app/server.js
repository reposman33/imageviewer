const express = require('express');
const fs = require('fs');
const multer = require('multer');
const bodyParser = require('body-parser');

const CONSTANTS = {
	IMAGEFOLDER: './uploads/',
};
//  setup server
const app = express();

app.use(express.static(__dirname + CONSTANTS.IMAGEFOLDER));

// setup bodyParser
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

// setup storage
var storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, CONSTANTS.IMAGEFOLDER);
	},
	filename: function (req, file, callback) {
		callback(null, file.originalname);
	},
});

// setup multer
const upload = multer({ storage: storage }).single('file');

app.use(express.static(CONSTANTS.IMAGEFOLDER));

// start server
app.listen(3000, function () {
	console.log('127.0.0.1 Running on port 3000');
});

// setup POST endpoints
app.post('/file-upload', function (req, res) {
	upload(req, res, function (err) {
		if (err) {
			return res.end('Error uploading file.');
		}
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end(`Bestand ${req.body.fileName} is succesvol verzonden`);
	});
});

// setup GET endpoints
app.get('/filelist', (req, res) => {
	fs.readdir(CONSTANTS.IMAGEFOLDER, (err, files) => {
		if (err) {
			res.send(`Error retrieving filelist: ${err}`);
		} else {
			res.send(files);
		}
	});
});
