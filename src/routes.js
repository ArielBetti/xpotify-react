import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// components
import Header from "./components/Header/header";
import MySpotifyPlayer from "./components/Player";

// pages
import { Album, Artista, Home, Login, LoadUser } from "./pages";

const AppRouter = () => {
  return (
    <>
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
        <Route path="/home" element={<Home />} />
      </Routes>
      <MySpotifyPlayer />
    </>
  );
};

export default AppRouter;
