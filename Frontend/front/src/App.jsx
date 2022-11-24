import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import React from "react";
import Cadastro from "./Pages/Cadastro";
import DataValueConcat from "./context/cadastroProvider";
import Created from "./Pages/created";

const App = () => {
    return (
        <DataValueConcat>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin/Cadastro" element={<Cadastro />} />
                <Route path="/saving" element={<Created />} />
            </Routes>
        </DataValueConcat>
    );
};

export default App;
