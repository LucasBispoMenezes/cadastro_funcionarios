import React, { useState } from 'react';
import cadastroContext from './contextCadastros.js';

export default function DataValueConcat({ children }) {
    const [pessoa, setPessoa] = useState({ });
    const [endereco, setEndereco] = useState([]);
    const [telefone, setTelefone] = useState([]);
    const [contas_bancarias, setConta] = useState([]);
    const [docs, setDocs] = useState([]);
    const [Relacionameto, setRelacionameto] = useState([]);
    const [usuario, setUsuario] = useState({});

    function addNewData(data, type) {
        switch (type) {
            case 'pessoa':
                setPessoa({ ...data })
                break;
            case 'endereco':
                setEndereco(data)
                break;
            case 'telefone':
                setTelefone(data)
                break;
            case 'conta':
                setConta(data)
                break;
            case 'docs':
                setDocs(data)
                break;
            case "relacionamento":
                setRelacionameto(data)
                break;
            case "usuario":
                setUsuario({ ...data })
                break;
            default:
                console.log('erro', type);
        }
    }

    const total = {
        pessoa,
        telefone,
        endereco,
        contas_bancarias,
        docs,
        Relacionameto,
        usuario,
        addNewData,
    }
    return (
        <cadastroContext.Provider value={total}>
            <div>
                {children}
            </div>
        </cadastroContext.Provider>
    );
}