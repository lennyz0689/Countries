const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isFloat: false,
                isInt: true,
                min: 1,
                max: 5
            }
        },
        temporada: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}