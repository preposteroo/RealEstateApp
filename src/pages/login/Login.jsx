import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };


    const handleLogin = () => {
        axios.post("http://localhost:8800/broker", { email, password })
            .then((response) => {
                const token = response.data.token;
                const user = response.data.user;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                console.log(response.data);
                openInNewTab("http://localhost:3000/brokerpage");
            })
            .catch((error) => {
                console.error(error);
            });
                            };

    return (
        <div>
            <Navbar />
            <div className="background">
                <div className="login_container">
                    <h1>Login</h1>
                    <div className="logo"></div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            className="headerSearchInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            className="headerSearchInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login_button">
                        <button className="loginbtn" onClick={handleLogin}>
                            Login!
                        </button>
                    </div>
                    <div className="register">
                        <button
                            className="registerBtn"
                            onClick={() => openInNewTab("http://localhost:3000/registration")}
                        >
                            I don't have an account, yet!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
