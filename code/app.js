const http = require('http');

const credentials = require('./api-credentials.json')
// const background = require('./background');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate({projectId: 'se-project-fall-21', credentials:credentials});

// translate = TranslateOptions.getDefaultInstance().getService();
/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
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
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
