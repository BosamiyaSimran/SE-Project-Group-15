// import fetch from "node-fetch";
// console.log("here");
// const res = await fetch("https://libretranslate.com/translate", {

// 	method: "POST",
// 	body: JSON.stringify({
// 		q: "",
// 		source: "en",
// 		target: "es"
// 	}),
// 	headers: { "Content-Type": "application/json" }
// });

// console.log(await res.json());


// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';

const func =  async function translateText() {
console.log("here");
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
// export default


// /**
//  * Calls the translation.googleapis
//  * @param {Object} term, term to be translated the shape of `{key:"", value:""}`, eg. `{key:"fullName", value:"Full name"}
//  * @param {String} target language code eg `en`
//  * @param {String} key Google Api Key generated with `gcloud auth application-default print-access-token`
//  * @returns {Promise} resolve object is in the same shape as input
//  */
// const getTranslation = (term, target, key) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // lets avoid throttle issue with googleapis request
//       // Google API limit number of concurrent calls, we'll call the API each 50 miliseconds 
//       fetch("https://translation.googleapis.com/language/translate/v3", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//           Authorization: `Bearer ${key}`
//         },
//         redirect: "follow",
//         referrer: "no-referrer",
//         body: JSON.stringify({
//           q: term.value,
//           target: target
//         })
//       })
//         .then(response =>
//           response.ok
//             ? response
//             : reject(`Fetch failed with status code ${response.status}`)
//         )
//         .then(response => response.json()) // parses response to JSON
//         .then(json => // check if the result is valid, 
//           json.error
//             ? reject(json.error) // reject if response contains error
//             : resolve({ // resole the translation 
//                 key: term.key,
//                 value: json.data.translations[0].translatedText
//               })
//         )
//         .catch(error => reject(error)); // reject in case of any error 
//     }, 50);
//   });
// };
// /**
//  * Converts object to array
//  * @param {Object} obj
//  * @returns {Array}
//  * @example
//  * 
//  * convertToArray({fullName:"Full Name"}) // returns [{key:"fullName", value:"Full name"}]
//  */
//  const convertToArray = obj =>
//  Object.keys(obj).map(key => ({ key, value: obj[key] }));

// /**
// * Converts array to object
// * @param {Array} obj
// * @returns {Object}
// * @example
// * 
// * convertToObject([{key:"fullName", value:"Full name"}]) // returns {fullName:"Full Name"}
// */
// const convertToObject = arr =>
//  arr.reduce((acc = {}, curr) => ({ ...acc, [curr.key]: curr.value }), {});