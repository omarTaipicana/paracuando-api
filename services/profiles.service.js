const models = require('../database/models')
const { Op } = require('sequelize')
const  {CustomError}  = require('../utils/helpers')

class ProfilesService {

  constructor() {
  }
  
  //Return Instance if we do not converted to json (or raw:true)
  async getProfileOr404(id) {
    let profile = await models.Profiles.findByPk(id, { raw: true })
    if (!profile) throw new CustomError('Not found Profile', 404, 'Not Found')
    return profile
  }

  //Return not an Instance raw:true | we also can converted to Json instead
  async getProfile(id) {
    let profile = await models.Profiles.findByPk(id)
    if (!profile) throw new CustomError('Not found Profile', 404, 'Not Found')
    return profile
  }

  async findProfileByUserID(user_id) {
    let profile = await models.Profiles.findOne({where: {user_id}}, { raw: true })
    if (!profile) throw new CustomError('Not found profile', 404, 'Not Found')
    return profile
  }
  async isAdminOr403(user_id){
    let adminRole = await models.Roles.findOne({ where: { name: "admin"}, attributes: ['id', 'name']}, {raw: true})
    if (!adminRole) throw new CustomError('Missing record in DB', 500, 'Not Found Core Record (Role)')
    let profile = await models.Profiles.findOne({ where: {user_id, role_id: adminRole.id}})
    if (!profile) throw new CustomError('User does not have admin role', 403, 'Permissions Denied')
    return profile
  }


}

module.exports = ProfilesService