import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import cadastroContext from "../context/contextCadastros";
function Docs() {
    const { handleSubmit, register } = useForm();
    const { addNewData } = useContext(cadastroContext);
    const onSubmit = (data) => {
        const file = new FormData();
        file.append("file", data);
        addNewData(file, 'docs');
    };
    return (
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <label for="formFileLg" class="form-label">
                Anexa documentos
            </label>
            <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
                {...register("documento")}
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
