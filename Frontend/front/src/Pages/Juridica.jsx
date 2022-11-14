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
                                required: false,
                                value: "",
                            })}
                        />
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
                                required: false,
                                value: "l",
                            })}
                        />
                    </label>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <label htmlFor="">
                        Inscrição Estadual
                        <input
                        className="form-control"
                            type="text"
                            {...props.p("inscricaoEstadual", {
                                required: false,
                                value: "",
                            })}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Juridica;
