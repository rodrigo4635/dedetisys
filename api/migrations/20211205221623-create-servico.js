"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("Servicos", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.STRING(60),
                allowNull: false
            },
            contactName: {
                type: Sequelize.STRING(60),
                allowNull: true
            },
            price: {
                type: Sequelize.FLOAT(11, 2),
                allowNull: true
            },
            amountPaid: {
                type: Sequelize.FLOAT(11, 2),
                allowNull: true
            },
            duration: {
                type: Sequelize.FLOAT(4, 2),
                allowNull: true
            },
            done: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            observations: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            expirationDate: {
                allowNull: false,
                type: Sequelize.DATE,
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
        await queryInterface.dropTable("Servicos");
    },
};