const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ISO6391 = require("iso-639-1");
app.use(bodyParser.urlencoded({
  extended:true
}));

const credentials = require("./api-credentials.json");

app.get("/", function(req, res) {
  res.send("hello");
});

let text = null;
let target = null;

app.post("/translateText", bodyParser.json(), async function(req, res) {

  text = req.body.text;
  target = req.body.toLanguage;
  translateText().then((result) => {

res.send(result).end();
  }).catch(err => console.log(err));

});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});

// Imports the Google Cloud client library
const {Translate} = require("@google-cloud/translate").v2;

// Creates a client
const translate = new Translate({projectId: "se-project-fall-21", credentials:credentials});

async function translateText() {
  
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, ISO6391.getCode(target));
  translations = Array.isArray(translations) ? translations : [translations];
 
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
  return translations;
}

module.exports = app;