import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../Redux/actions/userActions';
import './styleSign.css'


function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
    console.log(res)
    console.log(res.name)
      const fullNameSeparado = res.name.split(" ")
      console.log(fullNameSeparado)

     // let nombre = fullNameSeparado[0]
      //let apellido = fullNameSeparado[1]
      //console.log(nombre)
      //console.log(apellido)

    const userData = {
      name:fullNameSeparado[0],
      surname:fullNameSeparado[1] + "" + fullNameSeparado[2],
      email: res.email,
      password: res.id,
      from: "facebook",
      pais:props.pais
    }
    await props.signUpUser(userData)
  }

  return (
      <div className="mb-5">
         <FacebookLogin
            cssClass="buttonsocial my-facebook-button-class"
            icon="fa-facebook"
            textButton=" SignUp with Facebook"
            appId="929972910999686"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}

        />
     </div>
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);