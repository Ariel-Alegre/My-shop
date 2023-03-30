const { Users } = require('../../database/models');
const { encrypt } = require('../../helpers/handleBcrypt');

module.exports= {
    userRegister: async (req, res) => {
          const { name, lastName, email,password, confirmPassword } = req.body
          try {
            if (!name || !lastName || !email || !password || !confirmPassword ) {
              return   res.status(404).json({
                    message: "Complete los datos correctamente"
                });
            };

            const users = await Users.findAll();
            const checkEmail = users.find(data => data.email === email);

            if (checkEmail) {
                
               return res.status(404).send({
                    message: "El email esta registrado"
                })
            }
           
            const hashPassword = await encrypt(password)
            const userCreate = await Users.create({
                name,
                lastName,
                email,
                password:hashPassword,
                confirmPassword:hashPassword
            }) 
           
            if (userCreate) {
                res.status(200).send({
                    message: "Felicidades se registrado correctamente"
                   }) 
                  
            }


          } catch (error) {
            console.log("controllers/User/postUserRegister:", error);
          }
    }
}