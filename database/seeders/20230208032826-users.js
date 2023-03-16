'use strict'
const uuid = require('uuid')
const { Op } = require('sequelize')
const { hashPassword } = require('../../libs/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const usersSeeds = [
      {
        id: uuid.v4(),
        first_name: 'Fernando',
        last_name: 'Taipicaña',
        email: 'fernando@academlo.com',
        username: 'fernando@academlo.com',
        password: hashPassword('12345678910'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuid.v4(),
        first_name: 'Angel',
        last_name: 'Cuaquira',
        email: 'angel@academlo.com',
        username: 'angel@academlo.com',
        password: hashPassword('12345678910'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuid.v4(),
        first_name: 'prueba123',
        last_name: 'prueba123',
        email: 'angel@academlo.com',
        username: 'angel@academlo.com',
        password: hashPassword('12345678910'),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]

    try {
      await queryInterface.bulkInsert('users', usersSeeds, { transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const userNames = [
      'fernando@academlo.com',
      'angel@academlo.com'      
    ]

    try {
      await queryInterface.bulkDelete(
        'users',
        {
          username: {
            [Op.or]: userNames,
          },
        },
        { transaction }
      )

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
}
