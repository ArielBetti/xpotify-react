import React from "react";
import api from "../../services/api";
import Routes from "../../routes";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Authenticated = () => {
  const navigate = useNavigate();

  function TokenRemain() {
    function getHashParams() {
      let hashParams = {};
      let e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    let params = getHashParams();

    if (localStorage.access_token == "undefined") {
      let access_token = params.access_token,
        refresh_token = params.refresh_token,
        error = params.error;

      localStorage.access_token = access_token;
    }

    let access_token = params.access_token,
      refresh_token = params.refresh_token,
      error = params.error;

    localStorage.access_token = access_token;
  }

  /* Persiste o token na aplicação */
  TokenRemain();

  const token = "access_token=" + localStorage.access_token;

  function getUser() {
    api
      .get("/me?" + token)
      .then(function (response) {
        // handle success
        const userDetails = {
          userName: response.data.display_name,
          userImg: response.data.images[0].url,
        };

        localStorage.userName = userDetails.userName;
        localStorage.userImg = userDetails.userImg;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  getUser();

  /*Faz Animação especial de loading*/
  setTimeout(function teste() {
    navigate("/home");
  }, 2000);

  return (
    <div>
      <div className="loader-cont">
        <span>Carregando</span>
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Authenticated;
