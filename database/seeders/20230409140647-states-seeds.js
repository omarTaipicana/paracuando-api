"use strict";
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    const stateSeeds = [
      {
        id: "1",
        country_id: "1",
        name: "Quito",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        country_id: "2",
        name: "Lima",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    try {
      await queryInterface.bulkInsert("states", stateSeeds, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    const stateName = ["District of a city"];
    try {
      await queryInterface.bulkDelete(
        "states",
        {
          username: {
            [Op.or]: stateName,
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
