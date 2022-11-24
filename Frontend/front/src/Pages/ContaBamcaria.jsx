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

    return (
        <form
            class="form-group"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
        >
        {errors?.contas_bancarias && <h1>Preencha Todos os Campos</h1>}
            <div class="row g-2">
                <div class="col-6">
                    <div class="input-group">
                        <button
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                append({});
                            }}
                        >
                            adicionar nova conta
                        </button>
                        {fields.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <label htmlFor="" class="form-label">
                                        <span>Banco</span>
                                        <select
                                            {...register(
                                                `contas_bancarias.${index}.nomeBanco`,
                                                {
                                                    required:
                                                        "Campo obrigatório",
                                                }
                                            )}
                                            class="form-select"
                                        >
                                            {Bancos.map((item, index) => {
                                                return (
                                                    <option
                                                        value={item}
                                                        key={index}
                                                    >
                                                        {item}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </label>
                                    <label htmlFor="" class="form-label">
                                        <span>Conta</span>
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
                                        <span>Agencia</span>
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
                                    <div form-check>
                                        <input
                                            class="form-check-input mt-0"
                                            type="checkbox"
                                            id=""
                                            {...register(
                                                `contas_bancarias.${index}.isPix`
                                            )}
                                        />
                                        <label className="form-check-label">
                                            Adicionar Pix
                                        </label>
                                    </div>
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
                                    {watch(
                                        `contas_bancarias.${index}.isPix`
                                    ) && (
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
                                                        <option
                                                            value={item}
                                                            key={index}
                                                        >
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
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Conta;
