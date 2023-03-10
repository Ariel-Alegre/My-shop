require('dotenv').config()
 
 module.exports={
  development: {
    username: "postgres",
    password:"A5SDEQFlwAHdyPkIjIQY",
    database: "railway",
    host: "containers-us-west-89.railway.app",
    port:"6043",
    dialect: "postgres",
    define: {
       timestamps: false
    }
  },
  test: {
    username: "postgres",
    password:"A5SDEQFlwAHdyPkIjIQY",
    database: "railway",
    host: "containers-us-west-89.railway.app",
    port:"6043",
    dialect: "postgres",
define: {
   timestamps: false
}
  },
  production: {
    username: "postgres",
    password:"A5SDEQFlwAHdyPkIjIQY",
    database: "railway",
    host: "containers-us-west-89.railway.app",
    port:"6043",

    dialect: "postgres",
define: {
   timestamps: false
}
  }
}
