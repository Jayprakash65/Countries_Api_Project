import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <>
        <ThemeProvider>
          <Header />
          <Outlet />
        </ThemeProvider>
      
    </>
  );
}

export default App;
