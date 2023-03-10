require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "qLpBOaZWBkcDpcJmtwqw",
    database:"railway" ,
    host: "containers-us-west-50.railway.app",
    port: "7922",
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
