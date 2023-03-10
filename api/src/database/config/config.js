require('dotenv').config()
 
 module.exports = {
  development: {
    username: "postgres",
    password: "aeveLJVuunpTyLRpkeh0",
    database:"railway",
    host: "containers-us-west-43.railway.app",
    port: "7889",
    dialect: "postgres",
    define: {
       timestamps: false
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,   
    database:process.env.DB_DATABASE,
    host: process.env.DB_PORT,
    dialect: "postgres",
define: {
   timestamps: false
}
  },
  "production": {
    "username": "postgres",
    "password": "password",
    "database": "My_Local",
    "host": "localhost",
    "dialect": "postgres",
"define": {
   "timestamps": false
}
  }
}
