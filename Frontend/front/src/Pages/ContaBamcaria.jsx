import React, { useContext, useEffect } from "react";
import cadastroContext from "../context/contextCadastros";
import { useForm, useFieldArray } from "react-hook-form";
import { useMultiStep } from "@armandoroman1016/react-multi-step-form";

function Conta() {  

    const { setError } = useMultiStep();
    const {
        register,
        control,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            contas_bancarias: [
                {
                    nomeBanco: "",
                    numeroConta: "",
                    agencia: "",
                    isPix: false,
                    pix: {},
                },
            ],
        },
    });
    const { fields, append, remove } = useFieldArray({
        name: "contas_bancarias",
        control,
    });

    const isError =
        Array.isArray(errors.contas_bancarias) &&
        errors.contas_bancarias.length;
    useEffect(() => {
        if (isError) {
            return setError(true);
        }
        return setError(false);
    }, [isError]);
    const { addNewData } = useContext(cadastroContext);
    const Bancos = [
        "",
        "C6 Bank",
        "Banco do Brasil",
        "Bradesco",
        "Caixa",
        "Itaú",
        "Nubank",
        "Santander",
        "Outro",
    ];
    const TipoPix = ["", "CPF", "E-mail", "Telefone", "chave aleatoria"];

    const onSubmit = (data) => {
        addNewData(data, "conta");
    };

    console.log(isError);
    return (
        <form class="mb-3" method="post" onSubmit={handleSubmit(onSubmit)}>
            <button
                className="btn btn-primary"
                onClick={(e) => {
                    e.preventDefault();
                    append({});
                }}
            >
                add new bank
            </button>
            {fields.map((item, index) => {
                return (
                    <div key={item.id}>
                        <label htmlFor="" class="form-label">
                            <span>nomeConta</span>
                            <select
                                {...register(
                                    `contas_bancarias.${index}.nomeBanco`,
                                    { required: "Campo obrigatório" }
                                )}
                                class="form-select"
                            >
                                {Bancos.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>
                        </label>
                        <label htmlFor="" class="form-label">
                            <span>numeroConta</span>
                            <input
                                class="form-control form-control-lg"
                                type="number"
                                minLength="6"
                                {...register(
                                    `contas_bancarias.${index}.numeroConta`
                                )}
                                id=""
                            />
                        </label>
                        <label htmlFor="" class="form-label">
                            <span>agencia</span>
                            <input
                                class="form-control form-control-lg"
                                type="number"
                                minLength="6"
                                {...register(
                                    `contas_bancarias.${index}.agencia`
                                )}
                                id=""
                            />
                        </label>
                        <input
                            class="form-check-input mt-0"
                            type="checkbox"
                            id=""
                            {...register(`contas_bancarias.${index}.isPix`)}
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                remove(index);
                            }}
                        >
                            apagar
                        </button>
                        {watch(`contas_bancarias.${index}.isPix`) && (
                            <div>
                                tipo Pix
                                <select
                                    {...register(
                                        `contas_bancarias.${index}.pix.tipo`
                                    )}
                                    class="form-select"
                                >
                                    {TipoPix.map((item, index) => {
                                        return (
                                            <option value={item} key={index}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        )}
                    </div>
                );
            })}
            <label htmlFor="">
                seus Dados estão corretos ?
                <button class="btn btn-primary">Sim, Estão!</button>
            </label>
        </form>
    );
}

export default Conta;
