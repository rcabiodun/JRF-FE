import getConnection from "../utils/connections";
import { showError } from "../utils/others";

class AuthApi {
  BASE_URL = getConnection().backendUrl;

  async register(data, toast, navigation) {
    toast.loading("Registering...");
    try {
      const response = await fetch(`${this.BASE_URL}/authentication/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          username: data.username,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result);

        toast.dismiss();
        showError(result, toast);
        return;
      }

      // Store token in localStorage
      // localStorage.setItem("token", result.token);
      // localStorage.setItem("user", JSON.stringify(result.user));

      toast.dismiss();
      toast.success(result.message);

      // Navigate to otp after successful registration
      setTimeout(() => {
        navigation(`/otp?email=${data.email}`);
      }, 3000);
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred. Please try again.");
    }
  }

  async login(username, password, toast, navigation) {
    toast.loading("Logging in...");
    try {
      const response = await fetch(`${this.BASE_URL}/authentication/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result);

        toast.dismiss();
        showError(result, toast);
        if(result.message === "User not verified"){
         setTimeout(()=>{ navigation(`/otp?email=${result.email}`)},1000);
        }
        return;
      }

      // Store token in localStorage
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      toast.dismiss();
      toast.success("Login successful");

      // Navigate to home page after successful login
      navigation("/");
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred. Please try again.");
    }
  }

  async ForgotPassword(email, toast) {
    toast.loading("Sending email...");

    try {
      const response = await fetch(
        `${this.BASE_URL}/authentication/reset-password-request/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(result);

        toast.dismiss();
        showError(result, toast);
        return;
      }

      toast.dismiss();
      toast.success(result.message);

      // Navigate to home page after successful login
      //  navigation("/");
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred. Please try again.");
    }
  }

  async resendOTP(email, toast) {
    //the email is gotten from the url
    toast.loading("resending otp...");

    try {
      const response = await fetch(
        `${this.BASE_URL}/authentication/resend-otp/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(result);

        toast.dismiss();
        showError(result, toast);
        return;
      }

      toast.dismiss();
      toast.success(result.message);

      // Navigate to home page after successful login
      //  navigation("/");
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred. Please try again.");
    }
  }

  async verifyOTP(email, otp, toast,navigation) {
    //the email is gotten from the url
    toast.loading("Verifying otp...");

    try {
      const response = await fetch(
        `${this.BASE_URL}/authentication/verify-otp/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            otp: otp,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(result);

        toast.dismiss();
        showError(result, toast);
        return;
      }

      toast.dismiss();
      toast.success(result.message);

      // Navigate to home page after successful login
        setTimeout(() => {
          navigation(`/login`);
        }, 2000);
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred. Please try again.");
    }
  }
  async ResetPassword(password, token, toast, navigation) {
    //The token is gotten from the url
    toast.loading("Sending Details...");

    try {
      const response = await fetch(
        `${this.BASE_URL}/authentication/reset-password/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            token: token,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(result);

        toast.dismiss();
        showError(result, toast);
        return;
      }

      toast.dismiss();
      toast.success(result.message);
      // Navigate to login after successful login
      navigation("/login");
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred. Please try again.");
    }
  }
}

export default AuthApi;
