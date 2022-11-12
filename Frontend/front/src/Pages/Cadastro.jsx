import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/isAuthenticated";
// import StepZilla from "react-stepzilla";
import Pessoa from "./pessoa";
import { Login } from "./Login";
import MultiStep from "@armandoroman1016/react-multi-step-form";

function Cadastro() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = isAuthenticated();
        if (!token) return navigate("/");
    });

    const steps = [
        { name: "Cadastro de Pessoa", component: Pessoa },
        { name: "Endereços", component: Login },
        { name: "Telefone", component: Login },
        { name: "Conta bancaria", component: Login },
        { name: "Documentos", component: Login },
        { name: "Relacionameto", component: Login },
        { name: "Usuario", component: Login },        
    ];
    return <MultiStep steps={steps}></MultiStep>;
}

export default Cadastro;
