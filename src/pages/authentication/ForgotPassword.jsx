import "../../assets/img/illustrations/national.jpg";
import "../../assets/css/registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthApi from "../../api/AuthApi";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const authApi = new AuthApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    try {
      await authApi.ForgotPassword(email, toast);
      // Success is handled in the API function with toast
    } catch (error) {
      toast.error("Failed to process request");
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
        <p className="title">Forgot Password </p>
        <p className="message">Enter your email to reset your password. </p>
       
        <label>
          <input 
            required 
            placeholder="" 
            type="email" 
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>
        
        <button type="submit" className="submit">Submit</button>
        <p className="signin">
          Already have an account? <Link to="/login">Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
