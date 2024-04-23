import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import User from './User.js';

const EveningSchool = sequelize.define(
  'EveningSchool',
  {
    school_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: 'user_id', // foreign key
      },
    },
  },
  {
    timestamps: false,
    tableName: 'evening_schools',
  },
);

await sequelize.sync(); // { alter: true } ?

export default EveningSchool;
