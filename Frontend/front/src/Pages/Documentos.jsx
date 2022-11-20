import { useForm } from "react-hook-form";
import React, { useContext, useEffect } from "react";
import cadastroContext from "../context/contextCadastros";
import { useMultiStep } from "@armandoroman1016/react-multi-step-form";

function Docs() {
    const { setError } = useMultiStep();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const { addNewData } = useContext(cadastroContext);
    const onSubmit = (data) => {
        const file = {
            name: data.file[0].name,
            numeros: data.numeroRegistro,
        };
        addNewData(file, "docs");
    };

    useEffect(() => {
        setError(!!Object.keys(errors.endereco || errors).length > 0);
    }, [errors]);

    return (
        <form
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
        >
            <label for="formFileLg" class="form-label">
                Anexa documentos
            </label>
            <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
                {...register("file")}
            ></input>
            <label htmlFor="" class="form-label">
                Numero do Registro
                <input
                    class="form-control form-control-lg"
                    type="number"
                    {...register("numeroRegistro")}
                />
            </label>
            <label htmlFor="">
                seus Dados estão corretos ?
                <button class="btn btn-primary">Sim, Estão!</button>
            </label>
        </form>
    );
}

export default Docs;
