import "../../assets/img/illustrations/national.jpg";
import "../../assets/css/registration.css";
import "../../assets/css/otp.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthApi from "../../api/AuthApi";

function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const authApi = new AuthApi();

  useEffect(() => {
    // Extract email from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const emailParam = queryParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`input${index + 2}`).focus();
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Email address is missing");
      return;
    }

    try {
      await authApi.resendOTP(email, toast);
      // Success is handled in the API function
    } catch (error) {
      toast.error("Failed to resend OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // e.preventDefault();
    
    const otpValue = otp.join("");
    
    if (otpValue.length !== 6) {
      toast.error("Please enter the complete 6-digit code");
      return;
    }
    
    // Here you would add the API call to verify OTP
    // toast.info("OTP verification functionality to be implemented");
    
    // Example of what the verification might look like:
    // try {
      await authApi.verifyOTP(email, otpValue, toast, navigate);
    // } catch (error) {
    //   toast.error("Failed to verify OTP");
    // }
  };

  return (
    <div
      className="otp-container"
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
        <div className="title">OTP</div>
        <div className="title">Verification Code</div>
        <p className="message">
          We have sent a verification code to your email
        </p>
        <div className="inputs">
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <input
              key={num}
              id={`input${num}`}
              type="text"
              maxLength="1"
              value={otp[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <button type="submit" className="action">verify me</button>
        <p className="resend-text">
          Didn't receive code? {" "}
          <span className="resend-link" onClick={handleResendOtp}>
            Resend Code
          </span>
        </p>
      </form>
    </div>
  );
}

export default OtpPage;
