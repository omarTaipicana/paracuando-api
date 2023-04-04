'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publications.belongsTo(models.Users, { as: 'users', foreignKey: 'user_id' })
      Publications.belongsTo(models.PublicationTypes, { as: 'publication_types', foreignKey: 'publication_type_id' })
      Publications.belongsTo(models.Cities, { as: 'cities', foreignKey: 'city_id' })
      Publications.hasMany(models.PublicationImages, { as: 'PublicationImages', foreignKey: 'publication_id' })
      Publications.hasMany(models.Votes, { as: 'votes', foreignKey: 'publication_id' })
      Publications.hasMany(models.PublicationsTags, { as: 'publications_tags', foreignKey: 'publication_id' })

    }
  }
  Publications.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
    },
    publication_type_id: {
      type: DataTypes.INTEGER,
    },
    city_id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    content: {
      dtype: DataTypes.TEXT
    },
    reference_link: {
      dtype: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Publications',
    tableName: 'publications',
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  })
  return Publications;
};