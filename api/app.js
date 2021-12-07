"use strict";

const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors'
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.get("/", function(req, res) {
    res.send(`Api dedetisys`);
});

const clientesRoute = require("./routes/clientes");
const servicosRoute = require("./routes/servicos");
const usuariosRoute = require("./routes/usuarios");
clientesRoute(app);
servicosRoute(app);
usuariosRoute(app);

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
});