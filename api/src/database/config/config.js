require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "password",
    database:"My_Local" ,
    host: "localhost",
    port: "5432",
    dialect: "postgres",
    define: {
      timestamps: false
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    define: {
      timestamps: false
    }
  },
}
