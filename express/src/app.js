const path = require("path");
const express = require("express");

const app = express();

//Path
const publicDirectoryPath = path.join(__dirname, "../public");

//Configuracion Express contenido estatico

app.use(express.static(publicDirectoryPath));


app.get("/", (req, res) => {
    console.log("Funciona!");
    res.send("<h1>Funciona!</h1>");
})

app.listen(3000, () => {
    console.log("Ejecutando en: http://localhost:3000");
})
console.log(app);