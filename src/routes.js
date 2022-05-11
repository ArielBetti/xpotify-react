import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header/header";

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
    </>
  );
};

export default AppRouter;
