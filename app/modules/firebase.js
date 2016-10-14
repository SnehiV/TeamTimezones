import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "some-api-key",
  authDomain: "some-app.firebaseapp.com",
  databaseURL: "https://some-app.firebaseio.com",
  storageBucket: "some-app.appspot.com",
};

var FbApp = firebase.initializeApp(firebaseConfig);
export default FbApp;
