import React, { useState, useContext, useEffect } from "react";
import cadastroContext from "../context/contextCadastros";

function Endereco() {
    const [endereco, setEndereco] = useState([""]);
    const [isAble, setIsAble] = useState(false);
    const { addNewData } = useContext(cadastroContext);

    useEffect(() => {
        if (endereco[endereco.length - 1] === "") {
            return setIsAble(true);
        }
        setIsAble(false);
    }, [endereco]);
    const handleClick = (e) => {
        e.preventDefault();
        setEndereco([...endereco, ""]);
    };
    const handleChange = (e, i) => {
        const inputData = [...endereco];
        inputData[i] = e.target.value;
        setEndereco(inputData);
    };
    const handleClickFinish = (e) => {
        e.preventDefault();
        addNewData(endereco);
    };
    const handleDelete = (e, index) => {
        const deleteData = [...endereco];
        deleteData.splice(index, 1);
        setEndereco(deleteData);
    };

    return (
        <form method="post" onSubmit={handleClickFinish}>
            <button onClick={handleClick} disabled={isAble}>
                Adicionar mais Endereço
            </button>
            {endereco.map((item, index) => {
                return (
                    <label htmlFor="" key={index + 10 * 3}>
                        {index === 0
                            ? " Endereço Principal"
                            : "Endereço Secundário:"}
                        <input
                            type="text"
                            placeholder="Digite seu endereço"
                            onChange={(e) => handleChange(e, index)}
                            required
                            value={item}
                        />{" "}
                        {index !== 0 && (
                            <button
                                onClick={(e) => {
                                    handleDelete(e, index);
                                }}
                            >
                                x
                            </button>
                        )}
                    </label>
                );
            })}
            <button onClick={handleClickFinish}>
                os dados estão corretos?
            </button>
        </form>
    );
}

export default Endereco;
