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


var respuesta = [];


 async function obtenerPersonas(){
  //var objPersona = {};      
  var ref = firebase.database().ref("persona");
    
    ref.on("child_added", function(snapshot) {
      var objPersona = {};      
      objPersona.nombre = snapshot.val().nombre;
      objPersona.edad = snapshot.val().edad;
      objPersona.talla = snapshot.val().talla;
      respuesta.push(objPersona);
      //console.log(respuesta);
    });
    console.log(respuesta);
}

async function obtenerPersona2(){
  
  return firebase.database().ref('persona').limitToLast(10).once('child_added').then((snapshot) => {
    
     var objPersona = {};    
     objPersona.nombre =(snapshot.val() && snapshot.val().nombre) || 'Anonymous';
      objPersona.edad = (snapshot.val() && snapshot.val().edad) || 'Anonymous';
      objPersona.talla = (snapshot.val() && snapshot.val().talla) || 'Anonymous';
      respuesta.push(objPersona);  
  });
}






module.exports.obtenerPersona = async (sevent) => {
  
  await obtenerPersona2();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Ejecutado correctamente',
        resul : respuesta
      },
      null,
      2
    ),
  };
  
};
