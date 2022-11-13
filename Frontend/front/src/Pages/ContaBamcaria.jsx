
import React, {  useContext  } from "react";
import cadastroContext from "../context/contextCadastros";
import { useForm, useFieldArray } from "react-hook-form";
function Conta() {
    const { register, control, watch } = useForm({
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
    const TipoPix = [
        "",
        "CPF",
        "CNPJ",
        "E-mail",
        "Telefone",
        "chave aleatoria",
    ];
    console.log(watch("contas_bancarias"));
    return (
        <form onSubmit={(data) => console.log(data)} class="mb-3">
            <button
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
                                    `contas_bancarias.${index}.nomeBanco`
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
                                type="text"
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
                                type="text"
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
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addNewData(watch("contas_bancarias"));
                }}
            >
                os dados estão corretos ?
            </button>
        </form>
    );
}

export default Conta;
