import React, { useContext, useEffect, useState } from "react";
import cadastroContext from "../context/contextCadastros";
import { useForm, useFieldArray } from "react-hook-form";
// import { useMultiStep } from "@armandoroman1016/react-multi-step-form";

function Endereco() {
    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            endereco: [{}],
        },
    });

    const [isHiden, setIsHiden] = useState(true);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "endereco",
    });

    useEffect(() => {
        if (fields.length > 0) return setIsHiden(false);
        setIsHiden(true);
    }, [fields]);

    const { addNewData } = useContext(cadastroContext);
    const onSubmit = (data) => {
        addNewData(data, "endereco");
    };

    return (
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <button
                className="btn btn-primary"
                onClick={(e) => {
                    e.preventDefault();
                    append({});
                }}
            >
                adicionae novo endereço
            </button>
            {fields.map((item, index) => {
                return (
                    <>
                        <div>
                            <label htmlFor="" key={index + 10 * 3}>
                                {index === 0
                                    ? " Endereço Principal"
                                    : "Endereço Secundário:"}
                            </label>
                        </div>
                        <div key={item.id} class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Digite seu endereço"
                                {...register(`endereco.${index}.endereco`, {
                                    required: "Digite um endereço válido",
                                })}
                            />

                            {index === 0 ? (
                                <></>
                            ) : (
                                <div class="input-group-btn">
                                    <button
                                        className="btn btn-danger"
                                        onClick={(e) => {
                                            remove(index);
                                        }}
                                    >
                                        Remover
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                );
            })}
            <label htmlFor="">
                seus Dados estão corretos ?
                <button class="btn btn-primary">Sim, Estão!</button>
            </label>
        </form>
    );
}

export default Endereco;
