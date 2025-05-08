import "../../assets/img/illustrations/national.jpg";
import "../../assets/css/registration.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthApi from "../../api/AuthApi";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const authApi = new AuthApi();

  useEffect(() => {
    // Extract token from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const tokenParam = queryParams.get("token");
    if (tokenParam) {
      setToken(tokenParam);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords
    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    
    if (!token) {
      toast.error("Reset token is missing. Please use the link from your email.");
      return;
    }
    
    try {
      await authApi.ResetPassword(password, token, toast, navigate);
      // Success is handled in the API function
    } catch (error) {
      toast.error("Failed to reset password");
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
        <p className="title">Reset Password </p>
        <p className="message">Enter your new password. </p>

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
        <label>
          <input 
            required 
            placeholder="" 
            type="password" 
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          <span>Confirm password</span>
        </label>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
