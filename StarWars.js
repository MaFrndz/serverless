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
      objPersona.peso =  elemnt.mass
      objPersona.colorCabello = elemnt.hair_color;
      objPersona.coloPiel = elemnt.skin_color;
      objPersona.colorOjos = elemnt.eye_color;
      objPersona.Cumpleanio = elemnt.birth_year;
      objPersona.genero = elemnt.gender;
      objPersona.sitoWeb = elemnt.homeworld;
      respuesta.push(objPersona);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  //console.log(respuesta);
};


module.exports.personas = async (sevent) => {
  //var blanco = [];
  await obtenerPersonas();
  //console.log(respuesta);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Ejecutado correctamente',
        input: respuesta
      },
      null,
      2
    ),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


