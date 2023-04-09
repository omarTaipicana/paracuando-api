"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    const citiesSeeds = [
      {
        id: "1",
        state_id: "2",
        name: "Los Olivos",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        state_id: "1",
        name: "Guayas",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    try {
      await queryInterface.bulkInsert("cities", citiesSeeds, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    const citiName = ["Lomas de Sargentillo"];
    try {
      await queryInterface.bulkDelete(
        "cities",
        {
          username: {
            [Op.or]: citiName,
          },
        },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
