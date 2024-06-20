import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import StreetFood from "./components/StreetFood";

const App = () => {
  return (
    <div>
      <Header />
      <StreetFood />
    </div>
  );
};

export default App;
