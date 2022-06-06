import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Logo from "../../assets/Logo";

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
        <Logo size="70px" />
        <h1 className="TitleLogin">Xpotify</h1>
      </div>
      <a className="LoginBtn" href="https://xpotify-auth.herokuapp.com/login">
        Login com Spotify{" "}
      </a>
      {/* <a className="LoginBtn" href="http://localhost:8080/login">
        Login com Spotify{" "}
      </a> */}
    </div>
  );
};

export default Login;
