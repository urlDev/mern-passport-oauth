import googleImage from "../../assets/imageGoogle.jpg";
import "./LoginPage.css";

const LoginPage = () => {
  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h1>Login</h1>
        <div className="googleContainer" onClick={googleLogin}>
          <img src={googleImage} alt="google transparent logo" />
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
