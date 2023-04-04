'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicationsImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PublicationsImages.belongsTo(models.Publications, { as: 'publications', foreignKey: 'publication_id' })
    }
  }
  PublicationsImages.init({
    publication_id: DataTypes.UUID,
    image_url: DataTypes.TEXT,
    order: DataTypes.INTEG
  }, {
    sequelize,
    modelName: 'PublicationsImages',
    tableName: 'states',
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  })
  return PublicationsImages;
};