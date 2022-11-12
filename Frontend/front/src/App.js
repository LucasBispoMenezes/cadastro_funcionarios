/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import React from "react";
import { Admin } from "./Pages/Admin";
import Cadastro from './Pages/Cadastro';
import DataValueConcat from "./context/cadastroProvider";

const App = () => {
    return (
        <DataValueConcat>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/Cadastro" element={<Cadastro />} />
            </Routes>
            </DataValueConcat>
    );
};

export default App;