import React from "react";
import { Route, Routes } from "react-router";
import Header from "./Components/Header";
import Pages from "./Components/Pages";
import HomePage from "./Components/Home";
import FooterPage from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/footer" element={<FooterPage />} />
        {/* <Route path="/:message" element={<Message />} /> */}
      </Routes>
    </>
  );
};

export default App;
