import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/isAuthenticated";
import Pessoa from "./pessoa";
import MultiStep from "@armandoroman1016/react-multi-step-form";
import Endereco from "./Endereco";
import Telefone from "./telefone";
import Conta from "./ContaBamcaria";
import Docs from "./Documentos";
import Relacionameto from "./Relacionameto";
import Usuario from "./Usuario";

function Cadastro() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = isAuthenticated();
        if (!token) return navigate("/");
    });

    const steps = [
        { name: "Cadastro de Pessoa", component: Pessoa },
        { name: "Endereços", component: Endereco },
        { name: "Telefone", component: Telefone },
        { name: "Conta bancaria", component: Conta },
        { name: "Documentos", component: Docs },
        { name: "Relacionameto", component: Relacionameto },
        { name: "Usuario", component: Usuario },
    ];
    return <MultiStep steps={steps}></MultiStep>;
}

export default Cadastro;
