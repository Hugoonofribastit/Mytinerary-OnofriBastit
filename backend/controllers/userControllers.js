const User = require('../models/usersModel')
const bcryptjs = require('bcryptjs')

const usersControllers = {

    signUpUsers:async (req,res)=>{
console.log(req.body)
        let {name, surname, email, password, from } = req.body.userData
        console.log(req.body)

        try {
    
            const usuarioExiste = await User.findOne({ email }) //BUSCAR SI EL USUARIO YA EXISTE EN DB
            
            if (usuarioExiste) {
                console.log(usuarioExiste.from.indexOf(from))
                if (usuarioExiste.from.indexOf(from) !== -1) {
                /*     console.log("resultado de if " +(usuarioExiste.from.indexOf(from) === 0 )) */ //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
                    res.json({ success: false,
                               from:"form-Signup", 
                               message: "You've already signedUp, please signIn" })
                } else {
                    const contraseñaHasheada = bcryptjs.hashSync(password, 10)
                    usuarioExiste.from.push(from)
                    usuarioExiste.password.push(contraseñaHasheada) 
                    if(from === "form-Signup"){ 
                        //PORSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
                        await usuarioExiste.save()
    
                    res.json({
                        success: true, 
                        from:"signup", 
                        message: "We've already sent you an email, please check your mailbox "
                    }) 
                    
                    }else{
                    usuarioExiste.save()
                    
                    res.json({ success: true,
                               from:"signup", 
                               message: "Agregamos "+from+ " a tus medios para realizar signIn" })
                }
            }
            } else {
                //SI EL USUARIO NO ESXITE
               
                const contraseñaHasheada = bcryptjs.hashSync(password, 10) //LO CREA Y ENCRIPTA LA CONTRASEÑA
                console.log(contraseñaHasheada)
                // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
                const nuevoUsuario = await new User({
                    name,
                    surname,
                    email,
                    password:[contraseñaHasheada],
                    emailVerificado:true,
                    from:[from],
                
                })
              
                //SE LO ASIGNA AL USUARIO NUEVO
                if (from !== "form-Signup") { //SI LA PETICION PROVIENE DE CUENTA GOOGLE
                    await nuevoUsuario.save()
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "User has been created from: " +from
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
    
                } else {
                    //PASAR EMAIL VERIFICADO A FALSE
                    //ENVIARLE EL E MAIL PARA VERIFICAR
                    await nuevoUsuario.save()
    
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "We've already sent you an email, please check your mailbox "
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
                }
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong, please try again later" }) //CAPTURA EL ERROR
        }
    },
    signInUser: async (req, res) => {

        const { email, password,  from } = req.body.loggedUser
        console.log(req.body.loggedUser)
        try {
            const usuarioExiste = await User.findOne({ email })

            if (!usuarioExiste) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({ success: false, message: "Wrong username, please check your signUp user id or email" })

            } else {
                if (from !== "form-Signin") { 
                    
                    let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                    
                    if (contraseñaCoincide.length >0) { 

                        const userData = {
                                        name: usuarioExiste.name,
                                        surname: usuarioExiste.surname,
                                        email: usuarioExiste.email,
                                        from:usuarioExiste.from
                                        }
                        await usuarioExiste.save()

                        res.json({ success: true, 
                                   from:from,
                                   response: {userData }, 
                                   message:"Welcome again "+ userData.name,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not done the signUp "+from+"si quieres ingresar con este metodo debes hacer el signUp with " +from
                          })
                    }
                } else { 
                    if(usuarioExiste.emailVerificado){
                        
                        let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                        if(contraseñaCoincide.length >0){
                            
                        const userData = {
                            name: usuarioExiste.name,
                            surname: usuarioExiste.surname, 
                            email: usuarioExiste.email,
                            from:usuarioExiste.from
                            }
                        
                        res.json({ success: true, 
                            from: from, 
                            response: {userData }, 
                            message:"Welcome! ",
                          })
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"User and PW do not match",
                              })
                        }
                    }else{
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not verified your email"
                          }) 
                    }

                } //SI NO ESTA VERIFICADO
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Something went wrong, please try again later" })
        }
    },
    signOutUser: async (req, res) => {
       
        const email = req.body.closeuser
        const user = await User.findOne({ email })
        await user.save()
        res.json(console.log('signed ' + email))
    },

}
module.exports = usersControllers
