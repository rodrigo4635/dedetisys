const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../env");
const { encryptSHA256 } = require("../util");
const { Usuario } = require("../models");

exports.login = async(req, res) => {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({
        attributes: ["id", "name", "email", "type"],
        where: {
            email,
            password: encryptSHA256(password),
        },
        raw: true,
    });

    if (!!usuario) {
        const token = jwt.sign(usuario, TOKEN_SECRET);
        res.json({
            usuario,
            token,
            success: true,
            error: false,
        });
    } else {
        res.status(401).json({ error: "Usuário e/ou Senha inválido(s)" });
    }
};

exports.create = async(req, res) => {
    req.body.password = encryptSHA256(req.body.password);
    const novoUsuario = await Usuario.create(req.body);
    res.json(novoUsuario);
};