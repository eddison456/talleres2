const suma = require("./suma")
const resta = require("./resta");
const multiplicacion = require("./multiplicacion")
const division = require("./division")



class Factory{
   create(type,valueOne,valueTwo){
    switch(type){
        
        case '/sum' :
         return new suma(valueOne,valueTwo);
        

         case '/subtraction' :
         return new resta(valueOne,valueTwo);

         case '/multiplication' :
         return new multiplicacion(valueOne,valueTwo);

         case '/division' :
         return new division(valueOne,valueTwo);

        default :{
            console.log("operacion no dada")
        }
    }
   }
}

module.exports = new Factory;