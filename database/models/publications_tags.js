'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicationsTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PublicationsTags.belongsTo(models.Tags, { as: 'tags', foreignKey: 'tag_id' })
      PublicationsTags.belongsTo(models.Publications, { as: 'publications', foreignKey: 'publication_id' })
    }
  }
  PublicationsTags.init({
    tag_id: DataTypes.INTEGER,
    publication_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'PublicationsTags',
    tableName: 'publications_tags',
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  })
  return PublicationsTags;
};