"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("Clientes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING(60),
                allowNull: false
            },
            type: {
                type: Sequelize.INTEGER(1),
                allowNull: false
            },
            taxvat: {
                type: Sequelize.STRING(14),
            },
            email: {
                type: Sequelize.STRING(100),
            },
            tel_1: {
                type: Sequelize.STRING(14),
            },
            tel_2: {
                type: Sequelize.STRING(14),
            },
            address: {
                type: Sequelize.STRING(60),
            },
            number: {
                type: Sequelize.INTEGER,
            },
            complement: {
                type: Sequelize.STRING(60),
            },
            district: {
                type: Sequelize.STRING(40),
            },
            city: {
                type: Sequelize.STRING(40),
            },
            state: {
                type: Sequelize.STRING(2),
            },
            latitude: {
                type: Sequelize.GEOMETRY('POINT'),
            },
            longitude: {
                type: Sequelize.GEOMETRY('POINT'),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable("Clientes");
    },
};