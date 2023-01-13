import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "components/Layouts/Header";
import Footer from "components/Layouts/Footer";
import Views from "views";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Views />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
