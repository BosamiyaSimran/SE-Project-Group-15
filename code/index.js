let selectedLanguage = document.getElementById("language");
let selectedText = null
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  document.getElementById("output").value = selection[0];
  selectedText = selection[0];
  console.log(selectedText);
  let request = new XMLHttpRequest();
  console.log(request);
  request.open("POST", "http://localhost:3000/translateText", true);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.send(JSON.stringify({"text": selectedText}));
  console.log(request.response);
  // $.ajax({

  //   url : 'http://localhost:3000/translateText',
  //   type : 'POST',
  //   data : {
  //       'selectedText' : selectedText
  //   },
  //   dataType:'json',
  //   success : function(data) {
  //     console.log("here success");              
  //       alert('Data: '+data);
  //   },
  //   error : function(request,error)
  //   {
  //       alert("Request: "+JSON.stringify(request));
  //   }
  // });
});


