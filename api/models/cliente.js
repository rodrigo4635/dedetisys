"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Cliente extends Model {}

    Cliente.init({
        name: {
            type: DataTypes.STRING(60),
        },
        type: {
            type: DataTypes.INTEGER(1),
        },
        taxvat: {
            type: DataTypes.STRING(14),
        },
        email: {
            type: DataTypes.STRING(100),
            validate: {
                isEmail: {
                    msg: "E-mail inválido",
                },
            }
        },
        tel_1: {
            type: DataTypes.STRING(14),
        },
        tel_2: {
            type: DataTypes.STRING(14),
        },
        address: {
            type: DataTypes.STRING(60),
        },
        number: {
            type: DataTypes.INTEGER,
        },
        complement: {
            type: DataTypes.STRING(60),
        },
        district: {
            type: DataTypes.STRING(40),
        },
        city: {
            type: DataTypes.STRING(40),
        },
        state: {
            type: DataTypes.STRING(2),
        },
        latitude: {
            type: DataTypes.GEOMETRY('POINT'),
        },
        longitude: {
            type: DataTypes.GEOMETRY('POINT'),
        },
    }, {
        sequelize,
        modelName: "Cliente",
    });

    return Cliente;
};