import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";


export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};
export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    };
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    const { redirectToReferrer } = this.state;

    return redirectToReferrer ? (
      <Redirect to={from} />
    ) : (
      <div className="wrapper">
      <div className="form-wrapper">
      <div className="container">
        <p>Vous devez vous connecter pour voir la page sur /{from.pathname}</p>
      
        <form>
        <div className="email">
             <label htmlFor="email" className="emaill">Email</label>
             <input 
             id="email"
             type="text" 
             className=""
             placeholder="Email" 
             name="email" 
             noValidate
            
               />
               
           </div>

           <div className="password">
             <label htmlFor="password">Mot de passe</label>
             <input 
             id="password" 
             className=""
             placeholder="Mot de passe" 
             type="password" 
             name="password" 
             noValidate
             
               />
           </div>
           <div>
          
           <Button color="info" onClick={() => this.login()} >
           connecter
           </Button>
           
        </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}
