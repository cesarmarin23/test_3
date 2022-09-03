// Desafio 3: Servidores
let express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 8080;

// Se importa la clase del desafio 2
let Contenedor = require("./Contenedor.js");
let contenedor1 = new Contenedor ("productos");

const server = app.listen(port, () => {console.log("Servidor levantado");});

// Primer endpoint
app.get("/productos", function(req, resp) {
    contenedor1.getAll().then(val=>{
        resp.send(`${JSON.stringify(val,null,2)}`);
    }).catch(e => {
        resp.sendStatus(404)});
    }
);

// Segundo endpoint
app.get("/productoRandom", function (req, resp) {
    contenedor1.length_contenedor().then(val=>{
        let random_id = Math.ceil(Math.random()*val);
        contenedor1.getById(random_id).then(
            val2 =>{
                resp.send(`${JSON.stringify(val2,null,2)}`)
            }
        )
    }).catch(e=>{
        resp.sendStatus(404)
    })
});
