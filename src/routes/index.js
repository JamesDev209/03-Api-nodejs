

const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTER = __dirname;

const cleanFileName= (fileName) =>{
    const clean = fileName.split(".").shift();
return clean;
}
fs.readFileSync(PATH_ROUTER).filter((fileName) =>{
    if(prefixRoute !== "index"){
        console.log(`Cargando la ruta... ${prefixRoute}`)
        router.use(`./${prefixRoute}`, require(`./${prefixRoute}`))
        const prefixRoute  = cleanFileName(fileName);
    }
})

module.exports = { router }