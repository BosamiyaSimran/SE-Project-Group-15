# Class / Functions Used in the Project

### 1. makeRequest in index.js - 

This function takes three parameters, namely method, url and data.
Method refers to the http method. For example - get, post, put, delete
Url refers to backend url which needs to opened in order to call api
Data refers to the data which will be passed to post/put api requests as body.

This function returns a javascript promise. In the promise, an XMLHttpRequest object is created. That object is used to open backend url and we are setting request header to application-json as we are sending json object as request body. Once we receive the api response, we return the translated text as a promise.

### 2. translateText in app.js -
 
This function translate function, which is an inbuilt function in google-cloud/translate api. Google api returns an array of translated text and we further return the translation. We also check if input data is valid or not. If not, we throw relevant error.

