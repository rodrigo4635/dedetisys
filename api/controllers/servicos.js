const { Servico, sequelize } = require("../models");

exports.listAll = async(req, res) => {
    const servicos = await Servico.findAll({
        order: [
            ["date", "DESC"]
        ]
    });
    res.json(servicos);
};

exports.listWeek = (req, res) => {
    sequelize.query(
            "SELECT * FROM `servicos` WHERE yearweek(`date`) = yearweek(curdate()) or yearweek(`expirationDate`) = yearweek(curdate()) ORDER BY date", { type: sequelize.QueryTypes.SELECT })
        .then(servicos => {
            res.json(servicos);
        });
};

exports.dashboard = (req, res) => {
    sequelize.query(
            "SELECT \
            (SELECT ifnull(SUM(price),0)  \
            FROM `Servicos` \
            WHERE month(`date`) = month(curdate()) and year(`date`) = year(curdate())) AS valoresMes, \
            (SELECT count(id) \
            FROM `Servicos` \
            WHERE done = 0 and yearweek(`date`) = yearweek(curdate())) AS fazerSemana, \
            (SELECT count(id) \
            FROM `Servicos` \
            WHERE done = 1 and yearweek(`date`) = yearweek(curdate())) AS feitosSemana ", { type: sequelize.QueryTypes.SELECT })
        .then(dashboard => {
            res.json(dashboard[0]);
        });
};

exports.findOne = async(req, res) => {
    const { id } = req.params;

    const servico = await Servico.findOne({
        where: {
            id,
        }
    });

    if (!!servico) {
        res.json(servico);
    } else {
        res.status(404).json({ error: "Serviço não encontrado" });
    }
};

exports.create = async(req, res) => {
    const novoServico = await Servico.create(req.body);
    res.json(novoServico);
};

exports.update = async(req, res) => {
    const { id } = req.params;

    const updServico = await Servico.update(req.body, {
        where: {
            id,
        },
    });

    res.json({ success: !!updServico });
};

exports.destroy = async(req, res) => {
    const { id } = req.params;

    const updServico = await Servico.destroy({
        where: {
            id,
        },
    });

    res.json({ success: !!updServico });
};
