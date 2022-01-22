import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import StudentRegistration from "./pages/studentRegistration";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import * as S from "./AppStyled";

function App() {
  return (
    <>
      <S.Container>
        <Router>
          <Sidebar />
          <S.AlignContent>
            <TopBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/studentregistration"
                element={<StudentRegistration />}
              />
            </Routes>
          </S.AlignContent>
        </Router>
      </S.Container>
    </>
  );
}

export default App;
