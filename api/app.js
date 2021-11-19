"use strict";

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send(`Api dedetisys`);
});

const clientesRoute = require("./routes/clientes");
clientesRoute(app);

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
});