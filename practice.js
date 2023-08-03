
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDfvwudrO60-ZZ68yyFGYTu1Ubg44mLvqk",
    authDomain: "classtest-23372.firebaseapp.com",
    databaseURL: "https://classtest-23372-default-rtdb.firebaseio.com",
    projectId: "classtest-23372",
    storageBucket: "classtest-23372.appspot.com",
    messagingSenderId: "838009761641",
    appId: "1:838009761641:web:b743d15de168fbabb3d7f8",
    measurementId: "G-XTE16Q1MD4"
  };

function addUser()
{
    user_name = document.getElementById(user_name).value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}