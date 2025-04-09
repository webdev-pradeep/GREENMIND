import React from "react";
import { Route, Routes } from "react-router";
import Header from "./Components/Header";
import HomePage from "./Components/Home";
import FooterPage from "./Components/Footer";
import ProductPage from "./Components/Product";
import ContactsPage from "./Components/Contacts";
import NotFoundPage from "./NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/footer" element={<FooterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FooterPage />
    </>
  );
};

export default App;
