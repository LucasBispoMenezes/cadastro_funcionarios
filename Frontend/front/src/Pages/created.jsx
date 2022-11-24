import { useEffect, useState } from "react";
import { requestLogin } from "../helpers/requests";
import { useContext } from "react";
import cadastroContext from "../context/contextCadastros";
import { useNavigate } from "react-router-dom";

function Created() {
    const { valueFinal, setValueFinal } = useState();
    const {
        pessoa,
        telefone,
        endereco,
        contas_bancarias,
        docs,
        Relacionameto,
        usuario,
    } = useContext(cadastroContext);
    const data = {
        pessoa,
        ...endereco,
        ...telefone,
        ...contas_bancarias,
        ...Relacionameto,
        usuario,
        docs,
    };
    useEffect(() => {
        requestLogin("/create", data).then((e) => {
            if (typeof e === "object") return setValueFinal(true);
            return e;
        });
    }, []);
    const navigate = useNavigate();

    return valueFinal ? (
        <div>
            <h1 className="text-success">Dados cadastrado Com Sucesso</h1>
            <button onClick={() => navigate(-1)} className="btn btn-primary">
                {" "}
                Voltar
            </button>
        </div>
    ) : (
        <div>
            <h1 className="text-danger">
                {" "}
                Possivelmente o usuario Ja existe, Verifique os Dados{" "}
            </h1>
            <button onClick={() => navigate(-1)} className="btn btn-primary">
                {" "}
                Voltar
            </button>
        </div>
    );
}

export default Created;
