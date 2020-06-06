import React ,{Component} from 'react';
//import "../../components/Acceuil/form.css";




const emailRegex = RegExp(/^[a-zA-Z0-9.!#%&'*+/#?^_`{|}~~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  //validate form errors being empty
  Object.values(formErrors).forEach(val =>{
    val.length > 0 && (valid = false);
    
  });
   
  //validate the from was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false)
    
  });



  return valid;
};
 
class LoginRegister extends Component {
  constructor(props){
    super(props);

    this.state= {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName:"",
        lastName:"",
        email:"",
        password:""
      }
    };
  }



  handleSubmit = e =>{
     e.preventDefault();

     if(formValid(this.state)){
      console.log(`
      --SUBMUTTING--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `)
       window.alert('Félicitations, vous êtes inscrit');
     }else{
       console.error("FORMULAIRE NON VALIDE - MESSAGE D'ERREUR D'AFFICHAGE");
       window.alert("FORMULAIRE NON VALIDE");
     }

  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    switch(name) {
      case 'firstName':
        formErrors.firstName = 
        value.length < 3 ? '3 caractères minimum requis': "";
        break;

        case 'lastName':
        formErrors.lastName = 
        value.length < 3 ? '3 caractères minimum requis': "";
        break;

        case 'email':
        formErrors.email = 
        emailRegex.test(value)  ? '': 'Adresse e-mail invalide';
        break;

        case 'password':
        formErrors.password = 
        value.length < 8 ? '8 caractères minimum requis': "";
        break;
     default:
     break;
    }
    this.setState({formErrors, [name]: value}, () => console.log(this.state));

    
  };
  render(){
    const {formErrors} = this.state;

  return (
    <center>
     <div className="wrapper">
      <div className="form-wrapper">
        <h2>Registrer</h2>
        <form id="contactForm" onSubmit={this.handleSubmit} noValidate>
           
           <div className="firstName">
             <label htmlFor="firstName">Prénom</label>
             <input 
             id="firstname"
             type="text" 
             className={formErrors.firstName.length > 0 ? "error" : null}
             placeholder="Prénom" 
             name="firstName"
             noValidate
             onChange={this.handleChange}
               />
               {formErrors.firstName.length > 0 && (
                 <span className="errorMessage">{formErrors.firstName} </span>
               )}
           </div>

           <div className="lastName">
             <label htmlFor="lastName" className="lastname">Nom</label>
             <input
             id="lastname"
             type="text" 
             className={formErrors.lastName.length > 0 ? "error" : null} 
             placeholder="Nom" 
             name="lastName" 
             noValidate
             onChange={this.handleChange}
               />
               {formErrors.lastName.length > 0 && (
                 <span className="errorMessage">{formErrors.lastName} </span>
               )}
           </div>

           <div className="email">
             <label htmlFor="email" className="emaill">Email</label>
             <input 
             id="email"
             type="text" 
             className={formErrors.email.length > 0 ? "error" : null} 
             placeholder="Email" 
             name="email" 
             noValidate
             onChange={this.handleChange}
               />
               {formErrors.email.length > 0 && (
                 <span className="errorMessage">{formErrors.email} </span>
               )}
           </div>

           <div className="password">
             <label htmlFor="password">Mot de passe</label>
             <input 
             id="password" 
             className={formErrors.password.length > 0 ? "error" : null}
             placeholder="Mot de passe" 
             type="password" 
             name="password" 
             noValidate
             onChange={this.handleChange}
               />
               {formErrors.password.length > 0 && (
                 <span className="errorMessage">{formErrors.password} </span>
               )}
           </div>
           <div className="createAccount">
             <button type="submit" >Registrer</button>
             <small>Vous avez déjà un compte? <a href="login.js"k>Login</a></small>
           </div>
        </form>
         </div>
         </div>
         </center>
  );
}
}
export default LoginRegister;