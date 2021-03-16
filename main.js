var mainApp = {};

(function() {
  var firebase = app_firebase;
  
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      uid = user.uid;
    } else{
      uid = null;
      window.location.replace("index.html");
    }
  });

  function logout() {
    firebase.auth().signOut();
  }

  mainApp.logout = logout;
})();
