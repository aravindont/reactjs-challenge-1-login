import { useState } from "react";

import amazonLogo from "../assets/images/amazon-logo.png";
import googleLogo from "../assets/images/google-logo.png";
import facebookLogo from "../assets/images/facebook-logo.jpg";
import treeLogo from "../assets/images/tree.png";
import backgroundTrees from "../assets/images/backgound-trees.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="background-image">
        <img
          src={backgroundTrees}
          alt="background-images"
          className="bg-trees"
        />
      </div>
      <div className="login-container">
        <div className="logo">
          <img src={amazonLogo} alt="Amazon Logo" />
        </div>
        <h1 className="login-heading">Login</h1>
        <img src={treeLogo} alt="tree-logo" className="tree-logo" />
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              style={{ color: "green" }}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>

        <div className="forgot-password">
          <a href="#" className="forgot-pass">
            Forgot password?
          </a>
          <a href="#" className="new-user">
            New User? Sign Up
          </a>
        </div>
        <p>or</p>
        <div className="signup">
          <a href="#">
            <img src={googleLogo} alt="Google Logo" />
            continue with Google
          </a>
          <a href="#">
            <img src={facebookLogo} alt="Facebook Logo" />
            continue with Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
