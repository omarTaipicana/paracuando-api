"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    const citiesSeeds = [
      {
        id: '1',
        state_id: '2',
        name: 'Lima'

      }
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
    const citiName = ["Quito"];
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
