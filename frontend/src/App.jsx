import React from "react";
import Layout from "./components/layout/Layout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthContextProvider } from "./context/Authcontext.jsx";

const App = () => {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
};

export default App;
