import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../Admin/Login";
//import { AuthContext } from "../Acceuil/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("PrivateRoute -> authed", fakeAuth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;