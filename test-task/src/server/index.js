import path from "path";
import http from "http";
import express from "express";
const request = require("request");

const DIST_DIR = path.join(__dirname, "../../dist"); // NEW
const HTML_FILE = path.join(DIST_DIR, "index.html"); // NEW

let app = express();
app.use(express.static(DIST_DIR)); // NEW
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

var options = {
  url: "http://test.clevertec.ru/tt/meta/",
  method: "POST",
};

app.get("/meta", (req, response) => {
    request(options, function (err, res, body) {
        response.send(body);
  });
});


app.listen(8080, () => console.log("Example app listening on port 3000!"));
