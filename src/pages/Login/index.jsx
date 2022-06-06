import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useRecoilValue } from "recoil";
import Logo from "../../assets/spotify.svg";
import { atomUser } from "../../store/atoms";
import "./style.css";

const Login = () => {
  const navigateTo = useNavigate();

  const hasUser = useRecoilValue(atomUser);

  useEffect(() => {
    if (hasUser) navigateTo("/home");
  }, [hasUser]);

  return (
    <div className="AppLogin">
      <div className="logo">
        <img src={Logo} alt="Xpotify logo" />
        <h1 className="TitleLogin">Xpotify</h1>
      </div>
      {/* <a className="LoginBtn" href='https://xpotify-auth.herokuapp.com/login' >Login com Spotify </a>  */}
      <a className="LoginBtn" href="http://localhost:8080/login">
        Login com Spotify{" "}
      </a>
    </div>
  );
};

export default Login;
