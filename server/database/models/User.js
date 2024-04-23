import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'users',
  },
);

// adde fejlhåndtering
await sequelize.sync(); // { alter: true } ?

export default User;
