import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Juridica from "./Juridica";
import cadastroContext from "../context/contextCadastros";
import { useMultiStep } from "@armandoroman1016/react-multi-step-form";

function Pessoa() {
    const { addNewData } = useContext(cadastroContext);
    const { setError } = useMultiStep();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: { isJuridic: false, ramo: "" },
    });

    const onSubmit = (data) => addNewData(data);

    useEffect(() => {
        setError(!!Object.keys(errors).length > 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    return (
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">
                Nome Completo
                <input
                    type="text"
                    {...register("nomeCompleto", {
                        required: "Nome completo é obrigatório",
                    })}
                />
                <span>{errors.nomeCompleto?.message}</span>
            </label>
            <label htmlFor="">
                Data de Nascimento
                <input
                    type="date"
                    {...register("dataDeNascimento", {
                        required: "Data de nascimento é obrigatório",
                    })}
                />
                <span>{errors.dataDeNascimento?.message}</span>
            </label>
            <label htmlFor="">
                Sexo
                <select
                    name=""
                    id=""
                    {...register("sexo", { required: "Sexo é obrigatório" })}
                >
                    <option value=""></option>
                    <option value="Homem">Homem</option>
                    <option value="Mulher">Mulher</option>
                    <option value="Outros"> Prefiro Não dizer</option>
                </select>
                <span>{errors.sexo?.message}</span>
            </label>
            <label htmlFor="">
                Estado Civil
                <select
                    name=""
                    id=""
                    {...register("estadoCivil", {
                        required: "Estado civil é obrigatório",
                    })}
                >
                    <option value=""></option>
                    <option value="Solteiro(a)">Solteiro(a)</option>
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Divorciado(a)">Divorciado(a)</option>
                    <option value="Viúvo(a)">Viúvo(a)</option>
                </select>
                <span>{errors.estadoCivil?.message}</span>
            </label>
            <label htmlFor="">
                Nacionalidade
                <input
                    type="text"
                    {...register("nacionalidade", {
                        required: "Nacionalidade é obrigatório",
                    })}
                />
                <span>{errors.nacionalidade?.message}</span>
            </label>
            <label htmlFor="">
                Naturalidade
                <input
                    type="text"
                    {...register("naturalidade", {
                        required: "Naturalidade é obrigatório",
                    })}
                />
                <span>{errors.naturalidade?.message}</span>
            </label>
            <label htmlFor="">
                Situação
                <select
                    name=""
                    id=""
                    {...register("situação", {
                        required: "Situação é obrigatório",
                    })}
                >
                    <option value=""></option>
                    <option value="Regular">Regular</option>
                    <option value="Irregular">Iregular</option>
                </select>
                <span>{errors.situação?.message}</span>
            </label>
            <label htmlFor="">
                CPF / CNPJ
                <input
                    type="text"
                    {...register("cpfcnpj", {
                        required: "CPF/CNPJ é obrigatório",
                    })}
                />
                <span>{errors.cpfcnpj?.message}</span>
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
