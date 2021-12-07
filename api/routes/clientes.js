const clientes = require("../controllers/clientes");
const { authMiddleware } = require("../util");

module.exports = function(app) {
    app.get("/clientes", authMiddleware, clientes.listAll);
    app.get("/clientes/:id", authMiddleware, clientes.findOne);
    app.post("/clientes", authMiddleware, clientes.create);
    app.put("/clientes/:id", authMiddleware, clientes.update);
    app.delete("/clientes/:id", authMiddleware, clientes.destroy);
};