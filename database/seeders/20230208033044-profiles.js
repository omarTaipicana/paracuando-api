'use strict'
const { Op } = require('sequelize')
const rolesServices = require('../../services/roles.service')
const usersServices = require('../../services/users.service')

const rolesService = new rolesServices()
const usersService = new usersServices()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      const adminUser = await usersService.findUserByEmailOr404('fernando@academlo.com')
      const adminRole = await rolesService.findRoleByName('admin')
      const adminUser1 = await usersService.findUserByEmailOr404('angel@academlo.com')
      const adminRole1 = await rolesService.findRoleByName('admin')
      const profiles = [
        {
          user_id: adminUser.id,
          role_id: adminRole.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: adminUser1.id,
          role_id: adminRole1.id,
          created_at: new Date(),
          updated_at: new Date(),
        }
      ]

      await queryInterface.bulkInsert('profiles', profiles, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      const adminUser = await usersService.findUserByEmailOr404('example@academlo.com')
      const adminRole = await rolesService.findRoleByName('admin')

      await queryInterface.bulkDelete('profiles', {
        user_id: {
          [Op.and]: [adminUser.id]
        },
        role_id: {
          [Op.and]: [adminRole.id]
        }
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}
