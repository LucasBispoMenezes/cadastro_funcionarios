/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import React from "react";
import { Admin } from "./Pages/Admin";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/Cadastro" element={<Admin />} />
        </Routes>
    );
};

export default App;
