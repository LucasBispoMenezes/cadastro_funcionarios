import React from "react";

function Juridica(props) {
    return (
        <>
            <label htmlFor="">
                Nome Fantasia
                <input
                    type="text"
                    {...props.p("nomeFantasia", { required: false, value: "" })}
                />
            </label>
            <label htmlFor="">
                Ramo
                <input
                    type="text"
                    {...props.p("ramo", { required: false, value: "l" })}
                />
            </label>
            <label htmlFor="">
                Inscrição Estadual
                <input
                    type="text"
                    {...props.p("inscricaoEstadual", {
                        required: false,
                        value: "",
                    })}
                />
            </label>
        </>
    );
}

export default Juridica;
