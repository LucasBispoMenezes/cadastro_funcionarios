import React, { useState, useContext, useEffect } from "react";
import cadastroContext from "../context/contextCadastros";
import { useForm, useFieldArray } from "react-hook-form";
import { useMultiStep } from "@armandoroman1016/react-multi-step-form";

function Telefone() {
    const { addNewData } = useContext(cadastroContext);
    const { setError } = useMultiStep();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            telefone: [{}],
        },
    });

    useEffect(() => {
        setError(!!Object.keys(errors.endereco || errors).length > 0);
    }, [errors]);

   
    const [isHiden, setIsHiden] = useState(true);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "telefone",
    });

    useEffect(() => {
        if (fields.length > 0) return setIsHiden(false);
        setIsHiden(true);
    }, [fields]);
    const onSubmit = (data) => {
        addNewData(data, "telefone");
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
                {" "}
                adicionar Telefone
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
                                type="tel"
                                class="form-control"
                                placeholder="Digite seu endereço"
                                {...register(`telefone.${index}.numero`, {
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
            <label hidden={isHiden}>
                seus Dados estão corretos ?
                <button class="btn btn-primary" hidden={isHiden}>
                    Sim, Estão!
                </button>
            </label>
        </form>
    );
}

export default Telefone;
