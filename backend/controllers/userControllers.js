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
                               message: "Ya has realizado tu SignUp de esta forma por favor realiza SignIn" })
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
                        message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIN "
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
                        message: "Felicitaciones se ha creado tu usuario con " +from
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
    
                } else {
                    //PASAR EMAIL VERIFICADO A FALSE
                    //ENVIARLE EL E MAIL PARA VERIFICAR
                    await nuevoUsuario.save()
    
                    res.json({
                        success: true, 
                        from:"siggup",
                        message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp "
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
                }
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" }) //CAPTURA EL ERROR
        }
    },
    signInUser: async (req, res) => {

        const { email, password,  from } = req.body.loggedUser
        console.log(req.body.loggedUser)
        try {
            const usuarioExiste = await User.findOne({ email })

            if (!usuarioExiste) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({ success: false, message: "Tu usuarios no ha sido registrado realiza signUp" })

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
                                   message:"Welcome again "+userData.name,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"No has realizado el registro con "+from+"si quieres ingresar con este metodo debes hacer el signUp con " +from
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
                            message:"Bienvenido nuevamente "+userData.name,
                          })
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"El usuario o el password no coinciden",
                              })
                        }
                    }else{
                        res.json({ success: false, 
                            from: from, 
                            message:"No has verificado tu email, por favor verifica ti casilla de emails para completar tu signUp"
                          }) 
                    }

                } //SI NO ESTA VERIFICADO
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }
    },
    signOutUser: async (req, res) => {
       
        const email = req.body.closeuser
        const user = await User.findOne({ email })
        await user.save()
        res.json(console.log('sesion cerrada ' + email))
    },

}
module.exports = usersControllers