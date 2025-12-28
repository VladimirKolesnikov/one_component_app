import { DataTypes } from 'sequelize';
import { client } from '../utils/db.js';

export const Coord = client.define('Coord', 
    {
        lat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: 'coords'
    }
);