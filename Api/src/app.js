const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

module.exports = app;


//Ajuste de aporte pq no tengo tiempo para mas
//XD
