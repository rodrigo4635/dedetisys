const clientes = require("../controllers/clientes");

module.exports = function(app) {
    app.get("/clientes", clientes.listAll);
    app.get("/clientes/:id", clientes.findOne);
    app.post("/clientes", clientes.create);
    app.put("/clientes/:id", clientes.update);
    app.delete("/clientes/:id", clientes.destroy);
};