import React from "react";
import { Route, Routes as MainRoutes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import StudentRegistration from "./pages/studentRegistration";
import ReportStudentActive from "./pages/reports";

function Routes() {
  return (
    <>
      <MainRoutes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentregistration" element={<StudentRegistration />} />
        <Route
          path="/relatorios/alunoativos"
          element={<ReportStudentActive />}
        />
      </MainRoutes>
    </>
  );
}

export default Routes;
