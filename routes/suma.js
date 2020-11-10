const Constr= require("../routes/constructor");


class suma{
     constructor(valueOne,valueTwo){
       return new Constr(valueOne,valueTwo);
      
    }
}

module.exports = suma;