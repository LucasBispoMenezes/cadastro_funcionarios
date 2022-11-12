import React, { useState, useContext, useEffect } from "react";
import cadastroContext from "../context/contextCadastros";

function Telefone() {
    const [telefone, setTelefone] = useState([{}]);
    const [isAble, setIsAble] = useState(false);
    const { addNewData } = useContext(cadastroContext);


useEffect(() => {
    if ( telefone[telefone.length - 1] === "") {
       return  setIsAble(true);
    }
    setIsAble(false);

}, [telefone])
    const handleClick = (e) => {
        e.preventDefault();
        setTelefone([...telefone, {}]);
    };
    const handleChange = (e, i) => {
        const inputData = [...telefone];
        inputData[i] = e.target.value;
        setTelefone(inputData);
    };
    const handleClickFinish = (e) => {
        e.preventDefault();
        addNewData(telefone);
    };
    
    const handleDelete = (e, index) => {
        const deleteData = [...telefone];
        deleteData.splice(index, 1);
        setTelefone(deleteData);
    };

    return (
        <form method="post" onSubmit={handleClickFinish}>
            <button onClick={handleClick} disabled={isAble}>
                Adicionar mais Telefones
            </button>
            {telefone.map((item, index) => {
                return (
                    <label htmlFor="" key={index + 10 * 3}>
                        {index === 0
                            ? " Telefone Principal"
                            : "Telefone Secundário:"}
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            onChange={(e) => handleChange(e, index)}
                            required
                            value={item}
                        />
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

export default Telefone;
