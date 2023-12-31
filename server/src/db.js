require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const modelCountrie = require('./models/Country')
const modelActivities = require('./models/Activity')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  native: false,
});

modelCountrie(sequelize)
modelActivities(sequelize)

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
Country.belongsToMany(Activity,{through: 'countryActivity', timestamps: false})
Activity.belongsToMany(Country,{through: 'countryActivity', timestamps: false})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};