const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const routers = require('./src/routes/index')
const db = require("./src/database/models")
const PORT = process.env.PORT || 1998
require('dotenv').config()


app.use(express.json());
app.use('/', routers)
app.use(cors())




   app.listen(PORT, () => {
      console.log("Server on port", PORT);
   } )
