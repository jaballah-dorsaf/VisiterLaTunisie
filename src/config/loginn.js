import React from 'react'
import {AuthContext} from "./Auth.js";
import { withRouter } from 'react-router-dom';

const loginn = () => {
    const handleLoginn = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }


    return (
        <div>
            <h1>Loginn</h1>
            <form onSubmit={handleLoginn}>
                <label>Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Loginn</button>
            </form>
        </div>
    );
};

export default withRouter(loginn)
