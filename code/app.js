const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended:true
}));

const credentials = require('./api-credentials.json')

app.get("/", function(req, res) {
  // console.log("here----", req.body);
  res.send("hello");
});


app.post("/translateText", function(req, res) {
  console.log("here----", req);
  res.send("text received");
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
})

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate({projectId: 'se-project-fall-21', credentials:credentials});


const text = 'What is your name?';
const target = 'fr';

async function translateText() {
  console.log("in func");
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}

translateText();
