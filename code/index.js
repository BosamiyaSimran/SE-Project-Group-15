let selectedLanguage = document.getElementById("language").value;

let selectedText = null
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  document.getElementById("output").value = selection[0];
  selectedText = selection[0];
 
  let data = {text: selectedText, toLanguage: selectedLanguage};
 
makeRequest('POST',"http://localhost:3000/translateText",data);
});

function makeRequest(method, url, data = null) {
  return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(JSON.stringify(data));
      xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            let temp =  xhr.response
           
              resolve(xhr.response);
            alert(selectedText + " in " + selectedLanguage + " is " + temp);
          } else {
           
              reject({
                  status: this.status,
                  statusText: xhr.statusText
              });
          }
      };
      xhr.onerror = function () {
          reject({
              status: this.status,
              statusText: xhr.statusText
          });
      };
      
  });
}


