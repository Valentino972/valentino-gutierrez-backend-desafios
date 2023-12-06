import express from "express";
import Handlebars from "express-handlebars";
import __dirname from "./utils.js";

const PORT = 8080;
const app = express();


app.engine("handlebars", Handlebars.engine())

app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})