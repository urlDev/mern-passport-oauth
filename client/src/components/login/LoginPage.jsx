import googleImage from "../../assets/imageGoogle.jpg";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginForm">
        <h1>Login</h1>
        <div className="googleContainer">
          <img src={googleImage} alt="google transparent logo" />
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
