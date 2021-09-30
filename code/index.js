languageSelectDropdown = document.getElementById("language");

selectedLanguage = languageSelectDropdown.value;
languageSelectDropdown.addEventListener("change", () => {
  selectedLanguage = languageSelectDropdown.value;
  const data = { text: selectedText, toLanguage: selectedLanguage };
  makeRequest("POST", "http://localhost:3000/translateText", data);
});

let selectedText = null;
chrome.tabs.executeScript(
  {
    code: "window.getSelection().toString();",
  },
  function (selection) {
    document.getElementById("output").value = selection[0];
    selectedText = selection[0];

    const data = { text: selectedText, toLanguage: selectedLanguage };

    makeRequest("POST", "http://localhost:3000/translateText", data);
  }
);

function makeRequest(method, url, data = null) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json'
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        
        const temp = xhr.response["text"];

        resolve(xhr.response);
        alert(selectedText + " in " + selectedLanguage + " is " + temp);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
        console.log(xhr.response, xhr.response['error']);
        alert("Error - " + xhr.response['error']);
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
  });
}
