import React from "react";

function Juridica(props) {
    return (
        <div class="row g-2">
            <div class="col-6">
                <div class="input-group">
                    <label htmlFor="">
                        Nome Fantasia
                        <input
                            type="text"
                            className="form-control"
                            {...props.p("nomeFantasia", {
                                required: "Nome fantasia é obrigatório",
                            })}
                        />
                        <span class="text-danger">
                            {props.error?.nomeFantasia?.message}
                        </span>
                    </label>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <label htmlFor="">
                        Ramo
                        <input
                            type="text"
                            className="form-control"
                            {...props.p("ramo", {
                                required: "Ramo é obrigatório",
                            })}
                        />
                        <span class="text-danger">
                            {props.error?.ramo?.message}
                        </span>
                    </label>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <label htmlFor="">
                        Inscrição Estadual
                        <input
                            className="form-control"
                            type="number"
                            {...props.p("inscricaoEstadual", {
                                required: "Inscrição Estadual é obrigatório",
                            })}
                        />
                        <span class="text-danger">
                            {props.error?.inscricaoEstadual?.message}
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Juridica;
