import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

const clientId =
    "766508560950-bpsjjq39ehndpk86kkjr59o6t89g8k65.apps.googleusercontent.com";
function Login() {
    let history = useHistory();
    const onSuccess = () => {
        localStorage.setItem("isLoggedIn", "true");
        history.push("/home");
    };

    const onFailure = () => {
        alert(`Failed to login.`);
    };

    const [username, setUser] = useState("");
    const [pass, setPass] = useState("");
    const login = () => {
        localStorage.setItem("isLoggedIn", "true");
        history.push("/home");
    };
    return (
        <div>
            <p>Username</p>
            <form onSubmit={login}>
                <input
                    value={username}
                    required={true}
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                />
                <p>Password</p>
                <input
                    value={pass}
                    required={true}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                />
                <br />
                <p></p>
                <button type="submit">Login</button>
            </form>
            <p>or sign in with Google</p>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;
