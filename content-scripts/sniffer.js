$(document).ready(function() {
  var passwordInputPresent = false,
        url = "";
  try {
    var passwordInput = $("input:password")[0];
    if (typeof passwordInput === "object") {
      passwordInputPresent = true;
      url = document.documentURI;
      passwordInput.addEventListener('blur', function(event) {
        // alert("HAHA YOUR PASSWORD IS " + event.target.value);
      });
    }

  } catch(error) {
    passwordInputPresent = false;
  }

  if(passwordInputPresent) {
     browser.runtime.sendMessage({
       method: 'startTailing',
       domain: document.domain,
       origin: window.location.origin
      }, function(response) {
     }
   );
  }
});
