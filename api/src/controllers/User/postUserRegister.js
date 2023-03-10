const { Users } = require('../../database/models')

module.exports= {
    userRegister: async (req, res) => {
          const { name, lastName, email,password, confirmPassword } = req.body
          try {
           /*  if (!name || !lastName || !email || !password || !confirmPassword ) {
                res.status(404).json({
                    message: "Complete los datos correctamente"
                });
            };

            const users = await Users.findAll();
            const checkEmail = users.find(data => data.email === email);
           

            checkEmail 
            ? res.status(404).send({
                message: "El email esta registrado"
            })
            :  await Users.create({
                    name,
                    lastName,
                    email,
                    password,
                    confirmPassword
                })

            
             res.send(users) */

            
          } catch (error) {
            console.log(error);
          }
    }
}