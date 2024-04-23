import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import EveningSchool from './EveningSchool.js';

const Location = sequelize.define(
  'Location',
  {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: EveningSchool,
        key: 'school_id', // foreign key
      },
    },
    zip_code: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				is: /^\d{4}$/ // must be 4 digits
			}
    },
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		street_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		street_number: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
  },
  {
    timestamps: false,
    tableName: 'locations',
  },
);

await sequelize.sync(); // { alter: true } ?

export default Location;