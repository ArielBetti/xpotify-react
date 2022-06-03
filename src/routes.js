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
        <Route path="/autenticando" element={<LoadUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artista" element={<Artista />}>
          <Route path=":id" />
        </Route>
      </Routes>
      <MySpotifyPlayer />
    </>
  );
};

export default AppRouter;
