import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Juridica from "./Juridica";
import cadastroContext from "../context/contextCadastros";
import { useMultiStep } from "@armandoroman1016/react-multi-step-form";


function Pessoa() {
    const { addNewData } = useContext(cadastroContext);
    const {  setError } = useMultiStep();
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => {
        addNewData(data);
        setError(false)
    };


    return (
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">
                Nome Completo
                <input
                    type="text"
                    {...register("nomeCompleto", { required: true })}
                />
            </label>
            <label htmlFor="">
                Data de Nascimento
                <input type="date" {...register("dataDeNascimento")} />
            </label>
            <label htmlFor="">
                Sexo
                <select name="" id="" {...register("sexo")}>
                    <option value=""></option>
                    <option value="Homem">Homem</option>
                    <option value="Mulher">Mulher</option>
                    <option value="Outros"> Prefiro Não dizer</option>
                </select>
            </label>
            <label htmlFor="">
                Estado Civil
                <select name="" id="" {...register("estadoCivil")}>
                    <option value=""></option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Namorando">Namorando</option>
                    <option value="Casado">Casado</option>
                </select>
            </label>
            <label htmlFor="">
                Nacionalidade
                <input type="text" {...register("nacionalidade")} />
            </label>
            <label htmlFor="">
                Naturalidade
                <input type="text" {...register("naturalidade")} />
            </label>
            <label htmlFor="">
                Situação
                <select name="" id="" {...register("situação")}>
                    <option value=""></option>
                    <option value="Regular">Regular</option>
                    <option value="Iregular">Iregular</option>
                </select>
            </label>
            <label htmlFor="">
                CPF / CNPJ
                <input type="text" {...register("cpf/cnpj")} />
            </label>
            <label htmlFor="">
                é Pessoa Física?
                <input type="checkbox" {...register("isJuridic")} id="" />
            </label>
            {!watch("isJuridic") ? (
                <label htmlFor="">
                    seus Dados estão corretos ?<button>Sim, Estão!</button>
                </label>
            ) : (
                <>
                    <Juridica p={register} />
                    <label htmlFor="">
                        seus Dados estão corretos ?<button>Sim, Estão!</button>
                    </label>
                </>
            )}
        </form>
    );
}

export default Pessoa;
