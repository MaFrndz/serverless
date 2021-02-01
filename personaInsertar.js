'use strict';
var firebase = require("firebase/app");
var bd = require("firebase");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyBbV3e0wTWhqD8cV4y1n6JYxYAGNzYywvc",
  authDomain: "zhat-b2aba.firebaseapp.com",
  databaseURL: "https://zhat-b2aba.firebaseio.com",
  projectId: "zhat-b2aba",
  storageBucket: "zhat-b2aba.appspot.com",
  messagingSenderId: "278106215479",
  appId: "1:278106215479:web:eab08f2e0a061728fd5bb2",
  measurementId: "G-HMMEJM32CG"
};
firebase.initializeApp(firebaseConfig);




async function insertarPersona(params){

    var ref = firebase.database().ref("persona");
    ref.child(new Date().getMilliseconds()).set(JSON.parse(params) );
}



module.exports.insertarPersona = async (sevent) => {
  
  await insertarPersona( sevent.body);
 
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Ejecutado correctamente'
      },
      null,
      2
    ),
  };
  
};
