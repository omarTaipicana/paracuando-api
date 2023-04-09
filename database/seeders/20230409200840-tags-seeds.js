"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    const tagsSeeds = [
      {
        id: "1",
        name: "Deportes",
        description: "Todo relacionado al mundo de la competencia",
        image_url:
          "https://th.bing.com/th/id/OIP.vzH0M8gE3cAVFGlcq7QoRgHaE8?pid=ImgDet&rs=1",
      },
      {
        id: "2",
        name: "Tecnología",
        description: "La tecnología busca mejorar la eficiencia, la productividad y la capacidad humana para comunicarse, crear y compartir información.",
        image_url:
          "https://th.bing.com/th/id/OIP.3Daj1mGNsawywUyqPVlLQQHaEV?pid=ImgDet&rs=1",
      },
    ];
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
