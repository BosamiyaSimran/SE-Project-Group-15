let selectedLanguage = document.getElementById("language");
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  document.getElementById("output").value = selection[0];
});
