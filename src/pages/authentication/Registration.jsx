import "../../assets/img/illustrations/national.jpg";
import "../../assets/css/registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthApi from "../../api/AuthApi";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  const authApi = new AuthApi();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.first_name || !formData.last_name || !formData.email || 
        !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    // Generate username if not provided
    if (!formData.username) {
      formData.username = formData.email.split('@')[0];
    }
    
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // Validate password length
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    
    try {
      await authApi.register(formData, toast, navigate);
      // Success is handled in the API function
    } catch (error) {
      toast.error("Registration failed");
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
        alignItems: "center"
      }}
    >
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input 
              required 
              placeholder="" 
              type="text" 
              className="input"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input 
              required 
              placeholder="" 
              type="text" 
              className="input"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input 
            required 
            placeholder="" 
            type="email" 
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>Email</span>
        </label>

        <label>
          <input 
            required 
            placeholder="" 
            type="text" 
            className="input"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <span>Username (optional)</span>
        </label>

        <label>
          <input 
            required 
            placeholder="" 
            type="password" 
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span>Password</span>
        </label>
        <label>
          <input 
            required 
            placeholder="" 
            type="password" 
            className="input"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span>Confirm password</span>
        </label>
        <button type="submit" className="submit">Submit</button>
        <p className="signin">
          Already have an account? <Link to="/login">Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default RegistrationPage;
