const factory = require("../routes/factory")
const {validationResult} = require("express-validator");


exports.sum = (req,res,next) =>{
   const errors = validationResult(req);
   console.log("entre")
   if(!errors.isEmpty()){
       console.log("entre a lerro 1"+ errors)
       const error = new Error("validation fails......");
       error.statusCode = 422;
       error.data=errors.array();
       throw error;
           }
   
    try{
       const valueOne = +req.body.valueOne;
       const valueTwo = +req.body.valueTwo;
       const fac=factory.create("/sum",valueOne,valueTwo);
       console.log("suma :",fac,"resultado : ", fac.valueOne+fac.valueTwo)
       const resultado = valueOne+valueTwo;
       res.status(201).json({messege:"suma success." ,data :{ resultado }});
       
   
    }catch(e){
       const error = new Error("validation failsssss");
       error.statusCode =500;
       error.data=errors.array();
       throw error;
      }
    
   };




exports.subtraction = (req,res,next) =>{
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        console.log("entre a lerro 1"+ errors)
        const error = new Error("validation fails......");
        error.statusCode = 422;
        error.data=errors.array();
        throw error;
            }
    
     try{
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const fac=factory.create("/subtraction",valueOne,valueTwo);
       console.log("resta :",fac,"resultado : ", fac.valueOne-fac.valueTwo)
        const resultado = valueOne-valueTwo;
        res.status(201).json({messege:"resta success." ,data :{ resultado }});
        
    
     }catch(e){
        const error = new Error("validation failsssss");
        error.statusCode =500;
        error.data=errors.array();
        throw error;
       }
     
    };


    exports.multiplication = (req,res,next) =>{
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            console.log("entre a lerro 1"+ errors)
            const error = new Error("validation fails......");
            error.statusCode = 422;
            error.data=errors.array();
            throw error;
                }
        
         try{
            const valueOne = +req.body.valueOne;
            const valueTwo = +req.body.valueTwo;
            const fac=factory.create("/multiplication",valueOne,valueTwo);
            console.log("multiplicacion :",fac,"resultado : ", fac.valueOne*fac.valueTwo)
            const resultado = valueOne*valueTwo;
            res.status(201).json({messege:"multiplicacion success." ,data :{ resultado }});
            
        
         }catch(e){
            const error = new Error("validation failsssss");
            error.statusCode =500;
            error.data=errors.array();
            throw error;
           }
         
        };

        


exports.division = (req,res,next) =>{
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        console.log("entre a lerro 1"+ errors)
        const error = new Error("validation fails......");
        error.statusCode = 422;
        error.data=errors.array();
        throw error;
            }
    
     try{
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const fac=factory.create("/division",valueOne,valueTwo);
        console.log("devision :",fac,"resultado : ", fac.valueOne/fac.valueTwo)
        const resultado = valueOne/valueTwo;
        res.status(201).json({messege:"divison success." ,data :{ resultado }});
        
    
     }catch(e){
        const error = new Error("validation failsssss");
        error.statusCode =500;
        error.data=errors.array();
        throw error;
       }
     
    };
