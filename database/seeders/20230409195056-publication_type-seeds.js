'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    const publicationTypeSeeds = [
      {
        id: '1',
        name: 'Marcas y tiendas',
        description: 'Productos de tienda por departamentos'
      },
      {
        id: '2',
        name: 'Artistas y conciertos',
        description: 'Cantante o grupo favorito'
      },
    ]
    try {
      await queryInterface.bulkInsert("publication_types", publicationTypeSeeds, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    const typeName = ["Aqui va el tipo de publicacion"];
    try {
      await queryInterface.bulkDelete(
        "publication_types",
        {
          username: {
            [Op.or]: typeName,
          },
        },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
