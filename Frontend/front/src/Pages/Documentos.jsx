import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import cadastroContext from "../context/contextCadastros";
function Docs() {
    const { handleSubmit, register, watch } = useForm();
    const { addNewData } = useContext(cadastroContext);
    const onSubmit = (data) => {
        const file = new FormData();
        file.append("file", data);
        addNewData(file)
    };
    console.log(watch("documento"));
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
                onChange={(e) => console.log(e.target.files)}
            ></input>
            <label htmlFor="" class="form-label">
                Numero do Registro
                <input
                    class="form-control form-control-lg"
                    type="number"
                    {...register("numeroRegistro")}
                />
            </label>
            <button type="submit"> esse dados estão correto ?</button>
        </form>
    );
}

export default Docs;
