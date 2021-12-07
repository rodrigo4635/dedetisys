const { Cliente } = require("../models");

exports.listAll = async(req, res) => {
    const clientes = await Cliente.findAll({
        order: [
            ["name", "ASC"]
        ]
    });
    res.json(clientes);
};

exports.findOne = async(req, res) => {
    const { id } = req.params;

    const cliente = await Cliente.findOne({
        where: {
            id,
        }
    });

    if (!!cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ error: "Cliente não encontrado" });
    }
};

exports.create = async(req, res) => {
    console.log(req.body)
    const novoCliente = await Cliente.create(req.body);
    res.json(novoCliente);
};

exports.update = async(req, res) => {
    const { id } = req.params;

    const updCliente = await Cliente.update(req.body, {
        where: {
            id,
        },
    });

    res.json({ success: !!updCliente });
};

exports.destroy = async(req, res) => {
    const { id } = req.params;

    const updCliente = await Cliente.destroy({
        where: {
            id,
        },
    });

    res.json({ success: !!updCliente });
};