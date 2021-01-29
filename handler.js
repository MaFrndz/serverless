'use strict';


var respuesta = [];


async function obtenerPersonas(){ 
  const axios = require('axios');
  // Make a request for a user with a given ID
  await axios.get('https://swapi.py4e.com/api/people')
  .then(function (response) {
    // handle success
    //console.log(response.data.results);
    var data = response.data.results;

    data.forEach(elemnt => {
      var objPersona = {};      
      objPersona.nombre = elemnt.name;
      objPersona.talla = elemnt.height;
      respuesta.push(objPersona);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  console.log(respuesta);
  //return JSON.stringify(respuesta);
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // User is signed in
      var email = user.email;
      // ...
  } else {
      // User is not signed in
      // ...
  }
});

async function insertarPersona(){
  // Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  var xx= database.list('conversation/'+2);
  console.log(xx);
}

module.exports.hello = async (sevent) => {
  //var blanco = [];
  await obtenerPersonas();
  console.log(respuesta);

  //obtenerPersonas().then((val)=>{ console.log( val ); } ) ;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: respuesta
      },
      null,
      2
    ),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.actualizarPersona = async (sevent) => {
  //var blanco = [];
  await insertarPersona();
  

  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: respuesta
      },
      null,
      2
    ),
  };
};
