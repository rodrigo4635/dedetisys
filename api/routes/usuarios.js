const usuarios = require("../controllers/usuarios");

module.exports = function(app) {
    app.post("/usuarios", usuarios.create);
    app.post("/login", usuarios.login);
};