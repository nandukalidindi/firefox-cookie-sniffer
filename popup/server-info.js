document.addEventListener('DOMContentLoaded', function() {
  browser.tabs.query({currentWindow: true}).then((tabs) => {
    tabs.forEach(function(tab){
      if(tab.url.indexOf(":8084") !== -1) {
        var ddtServerElement = document.getElementById('ddt-server');
        ddtServerElement.value = tab.url;
      }
    });
  });

  browser.storage.sync.get('ache', function(response) {
    var acheInputElement = document.getElementById('ache-server');
    if(acheInputElement) {
      acheInputElement.value = response.ache;
    }
  });

  document.getElementById("submit").addEventListener('click', function(event) {
    var acheInputElement = document.getElementById('ache-server');
    if(acheInputElement.value !== "") {
      browser.storage.sync.set({'ache': acheInputElement.value}).then(function(success) {

      }, function(error) {
        console.log("ERROR is ", error);
      });
    }
  })



})
