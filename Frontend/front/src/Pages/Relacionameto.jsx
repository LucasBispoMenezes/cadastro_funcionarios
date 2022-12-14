import React, { useEffect, useState, useContext } from "react";
import { getUser } from "../helpers/requests";
import { useFieldArray, useForm } from "react-hook-form";
import cadastroContext from "../context/contextCadastros";

function Relacionameto() {
    const { addNewData } = useContext(cadastroContext);
    const [data, setData] = useState();
    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            relacionamento: [
                {
                    value: "",
                    tipo: "",
                },
            ],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "relacionamento", // unique name for your Field Array
    });

    useEffect(() => {
        (async () => {
            const dataAPi = await getUser("/usuario");
            setData(dataAPi?.data?.user);
        })();
    }, []);
    const onSubmit = (data) => {
        addNewData(data, "relacionamento");
    };
    return (
        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    append({});
                }}
                className="btn btn-success"
            >
                Adicionar Relacionamento
            </button>
            {fields.map((item, index) => {
                return (
                    <>
                        <select
                            key={item.id}
                            className="form-control form-control-lg"
                            aria-label="size 3 select example"
                            {...register(`relacionamento.${index}.value`)}
                        >
                            <option value={false}>
                                Selecione um Relacionamento
                            </option>
                            {data?.map((item) => {
                                return (
                                    <>
                                        <option value={item.id}>
                                            {item.nomeCompleto}
                                        </option>
                                    </>
                                );
                            })}
                        </select>
                        <label htmlFor="" className="label">
                            tipo De relacionamento
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            {...register(`relacionamento.${index}.tipo`)}
                        />
                        {index === 0 ? null : (
                            <button
                                className="btn btn-danger"
                                onClick={(e) => {
                                    remove(index);
                                }}
                            >
                                apagar
                            </button>
                        )}
                    </>
                );
            })}

            <label htmlFor="">
                seus Dados est??o corretos ?
                <button class="btn btn-primary">Sim, Est??o!</button>
            </label>
        </form>
    );
}

export default Relacionameto;
