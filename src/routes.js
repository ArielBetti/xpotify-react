import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

// alerts
import { userNotEnabled } from "./alerts";

// recoil: atoms
import { atomUser, atomUserDisbladAlert } from "./store/atoms";

// components
import Header from "./components/Header";
import Modal from "./components/Modal";

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

// ::
const AppRouter = () => {
  // local: states
  const [userIsFree, setUserIsFree] = useState(false);

  // recoil: states
  const [userDisabled, setUserDisabled] = useRecoilState(atomUserDisbladAlert);
  const user = useRecoilValue(atomUser);

  useEffect(() => {
    if (user && user?.product !== "premium") return setUserIsFree(true);
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
        open={user && userIsFree && userDisabled}
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
    </>
  );
};

export default AppRouter;
