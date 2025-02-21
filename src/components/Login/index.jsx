import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import classes from "./index.module.css";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useUser();
    const [name, setName] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());

    function generateCaptcha() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captcha !== generatedCaptcha) {
            alert("Captcha is incorrect!");
            setGeneratedCaptcha(generateCaptcha());
            return;
        }

        login(name);
        navigate(location.state?.from || "/");
    };

    return (
        <div className={classes.loginContainer}>
            <form onSubmit={handleSubmit} className={classes.loginForm}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <div className={classes.captchaBox}>
                    <span>{generatedCaptcha}</span>
                    <button type="button" onClick={() => setGeneratedCaptcha(generateCaptcha())}>↻</button>
                </div>
                <input
                    type="text"
                    placeholder="Enter captcha"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    required
                />
                <button className={classes.loginButton} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
