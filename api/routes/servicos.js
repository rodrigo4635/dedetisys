const servicos = require("../controllers/servicos");

module.exports = function(app) {
    app.get("/servicos", servicos.listAll);
    app.get("/servicos/semana", servicos.listWeek);
    app.get("/servicos/dashboard", servicos.dashboard);
    app.get("/servicos/:id", servicos.findOne);
    app.post("/servicos", servicos.create);
    app.put("/servicos/:id", servicos.update);
    app.delete("/servicos/:id", servicos.destroy);
};