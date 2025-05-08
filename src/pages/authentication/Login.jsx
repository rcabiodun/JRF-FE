import "../../assets/img/illustrations/national.jpg";
import "../../assets/css/registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthApi from "../../api/AuthApi";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authApi = new AuthApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please fill all fields");
      return;
    }
    
    try {
      await authApi.login(username, password, toast, navigate);
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <div
      className="registration-container"
      style={{
        backgroundImage: `url(${require("../../assets/img/illustrations/national.jpg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Login </p>
        <p className="message">Login now and get full access to our app. </p>

        <label>
          <input 
            required 
            placeholder="" 
            type="text" 
            className="input" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Username</span>
        </label>

        <label>
          <input 
            required 
            placeholder="" 
            type="password" 
            className="input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button type="submit" className="submit">Submit</button>
        <p className="signin">
          Forgot Password ? <Link to="/forgot-password">Reset</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
