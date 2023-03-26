const ProfilesService = require('../services/profiles.service')


const isAdmin = async (req, res, next) => {
    try {
        let { id } = req.user
        let isAdmin = await ProfilesService.isAdminOr403(id);
        return next();
    } catch {
        return next();
    }
}

module.exports = {isAdmin}