"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Servico extends Model {}

    Servico.init({
        description: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        contactName: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT(11, 2),
            allowNull: true
        },
        amountPaid: {
            type: DataTypes.FLOAT(11, 2),
            allowNull: true
        },
        duration: {
            type: DataTypes.FLOAT(4, 2),
            allowNull: true
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        done: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        observations: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        expirationDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    }, {
        sequelize,
        modelName: "Servico",
    });

    return Servico;
};