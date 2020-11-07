const express = require("express");
const { body } = require("express-validator");
const Route = express.Router();
const operationes_contro =require("../controllers/operationes_contro")

Route.post(
    "/sum",
    [
        body("valueOne")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")  
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("valueTwo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),

    ],operationes_contro.sum);

    Route.post(
        "/subtraction",
        [
            body("valueOne")
            .exists()
            .withMessage("EL VALOR DE ONE ES REQUERIDO")  
            .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
            .trim()
            .escape(),
            body("valueTwo")
            .exists()
            .withMessage("EL VALOR DE ONE ES REQUERIDO")
            .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
            .trim()
            .escape(),
    
        ],operationes_contro.subtraction);

     Route.post(
            "/multiplication",
            [
                body("valueOne")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")  
                .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
                .trim()
                .escape(),
                body("valueTwo")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")
                .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                .trim()
                .escape(),
        
            ],operationes_contro.multiplication);

            Route.post(
                "/division",
                [
                    body("valueOne")
                    .exists()
                    .withMessage("EL VALOR DE ONE ES REQUERIDO")  
                    .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
                    .trim()
                    .escape(),
                    body("valueTwo")
                    .exists()
                    .withMessage("EL VALOR DE ONE ES REQUERIDO")
                    .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                    .trim()
                    .escape(),
            
                ],operationes_contro.division);

            

module.exports = Route;


