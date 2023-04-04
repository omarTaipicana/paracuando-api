'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersTags.belongsTo(models.Tags, { as: 'tags', foreignKey: 'tag_id' })
      UsersTags.belongsTo(models.Users, { as: 'users', foreignKey: 'user_id' })
    }
  }
  UsersTags.init({
    tag_id: DataTypes.INTEGER,
    user_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UsersTags',
    tableName: 'users_tags',
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  })
  return UsersTags;
};