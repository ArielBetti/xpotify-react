import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Album, Artista, Home, Login, LoadUser } from "./pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/autenticando" element={<LoadUser />} />
        <Route path="/home" element={<Home />}>
          <Route path="artista/:id" element={<Artista />} />
          <Route path="album/:id" element={<Album />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
