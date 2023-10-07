const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { cleanApi } = require("./src/controllers/countries");
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  cleanApi()
})
}).catch(error => console.error(error))
