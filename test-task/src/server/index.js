import path from "path";
import express from "express";
import bodyParser from 'body-parser';
const request = require("request");

const DIST_DIR = path.join(__dirname, "../../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

let app = express();
app.use(express.static(DIST_DIR));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});


const options = {
  url: "http://test.clevertec.ru/tt/meta/",
  method: "POST",
};

const option = {
  headers: {
    "content-type": "application/json",
  },
  url: "http://test.clevertec.ru/tt/data/",
  method: "POST",
};

app.get("/meta", (req, response) => {
  request(options, (err, res, body) => {
    response.send(body);
  });
});


app.post("/data", (req, response) => {
  request({ ...option, body: req.body, json: true }, (err, res, body) => {
    response.send(body);
  });
});

app.listen(8080, () => console.log("Example app listening on port 3000!"));
