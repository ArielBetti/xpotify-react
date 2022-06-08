import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

// alerts
import { userNotEnabled } from "./alerts";

// recoil: atoms
import { atomUser, atomUserDisbladAlert } from "./store/atoms";

// components
import Header from "./components/Header";
import Modal from "./components/Modal";
import MySpotifyPlayer from "./components/Player";

// pages
import {
  Album,
  Artista,
  Home,
  Login,
  LoadUser,
  Playlist,
  Logout,
} from "./pages";

const AppRouter = () => {
  // local: states
  const [userIsPremium, setUserIsPremium] = useState(false);

  // recoil: states
  const [userDisabled, setUserDisabled] = useRecoilState(atomUserDisbladAlert);
  const user = useRecoilValue(atomUser);

  useEffect(() => {
    if (user && user?.product !== "premium") return setUserIsPremium(false);
    return setUserIsPremium(true);
  }, [user]);

  const onCloseAlertNoPremium = () => {
    setUserDisabled(false);
  };

  return (
    <>
      <Modal
        actionButton={onCloseAlertNoPremium}
        title={userNotEnabled?.title}
        content={userNotEnabled?.content}
        open={user && userIsPremium && userDisabled}
        textButton="Entendi"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/album" element={<Album />}>
          <Route path=":id" />
        </Route>
        <Route path="/autenticando" element={<LoadUser />} />
        <Route path="/artista" element={<Artista />}>
          <Route path=":id" />
        </Route>
        <Route path="/playlist" element={<Playlist />}>
          <Route path=":id" />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/sair" element={<Logout />} />
      </Routes>
      <MySpotifyPlayer />
    </>
  );
};

export default AppRouter;
