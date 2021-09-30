const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const ISO6391 = require('iso-639-1');
app.use(bodyParser.urlencoded({
  extended:true
}));

// const credentials = require('./api-credentials')
const credentials = process.env.GOOGLE_TRANSLATE_API;
// console.log(credentials);
app.get("/", function(req, res) {
  res.send("hello");
});

let text = null;
let target = null;

app.post("/translateText", bodyParser.json(), async function(req, res) {
  try {
  text = req.body.text;
  target = req.body.toLanguage;
  translateText().then((result) => {
  res.json(JSON.parse(JSON.stringify(result))).end();
  }).catch(err => {
    console.log("----", err);
    res.status(500).send({"error": err.message});
  })
}
catch(err)  {
  console.log("--------",err);
    // next(err);
  };

});

app.listen(3000, function(){
  console.log("server is running on port 3000");
})

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate({projectId: 'se-project-fall-21', credentials:credentials});


async function translateText() {
  if(text && text.length>0 && target){
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, ISO6391.getCode(target));
  translations = Array.isArray(translations) ? translations : [translations];
 
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });

  return {text: translations[0]};
}
else if(target){
  throw new Error('Text cannot be empty. Please select text');
}
else if(text){
  throw new Error('Please select a language');
}
}

module.exports = app;
