const { Users } = require('../../database/models');
const { compare } = require('../../helpers/handleBcrypt');

module.exports= {
    userLogin: async (req, res) => {
          const { email,password } = req.body
          try {
       
                res.send('esperando')

          } catch (error) {
            console.log("controllers/User/postUserLogin:", error);
          }
    }
}