"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {}

    Usuario.init({
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: {
                    msg: "E-mail inválido",
                },
            },
        },
        password: DataTypes.STRING,
        type: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "Usuario",
    });

    return Usuario;
};