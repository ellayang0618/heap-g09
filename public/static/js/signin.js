gapi.load('auth2', function(){
  // Retrieve the singleton for the GoogleAuth library and set up the client.
  auth2 = gapi.auth2.init({
    client_id: '927573851076-a2s8k32u9inus298lp3ijlbc1gqog3dc.apps.googleusercontent.com',
    cookiepolicy: 'single_host_origin',
    plugin_name:"chat",
    // Request scopes in addition to 'profile' and 'email'
    // scope: 'additional_scope'
  });
});


function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getEmail());
    pic=googleUser.getBasicProfile().getImageUrl();
    console.log(pic);
    document.getElementById("profilePic").src =pic;
    document.getElementById("profilePic").style.display="block";
    document.getElementById("profile").style.display="block";
    document.getElementById("my-signin2").style.display="none";
    localStorage.setItem("email", googleUser.getBasicProfile().getEmail());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }



  function signOut() {
    localStorage.removeItem("email")
    document.getElementById("my-signin2").style.display="block";
    document.getElementById("profilePic").style.display="none";
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    auth2.disconnect();
    });
    
}