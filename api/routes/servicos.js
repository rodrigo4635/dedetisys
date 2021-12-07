const servicos = require("../controllers/servicos");
const { authMiddleware } = require("../util");

module.exports = function(app) {
    app.get("/servicos", authMiddleware, servicos.listAll);
    app.get("/servicos/semana", authMiddleware, servicos.listWeek);
    app.get("/servicos/dashboard", authMiddleware, servicos.dashboard);
    app.get("/servicos/:id", authMiddleware, servicos.findOne);
    app.post("/servicos", authMiddleware, servicos.create);
    app.put("/servicos/:id", authMiddleware, servicos.update);
    app.delete("/servicos/:id", authMiddleware, servicos.destroy);
};