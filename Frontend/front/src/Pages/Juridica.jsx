import React from "react";

function Juridica(props) {
    return (
        <>
            <label htmlFor="">
                Nome Fantasia
                <input type="text" {...props.p("nomeFantasia")} />
            </label>
            <label htmlFor="">
            Ramo
                <input type="text" {...props.p("ramo")} />
            </label>
            <label htmlFor="">
            Inscrição Estadual
                <input type="text" {...props.p("in")} />
            </label>
        </>
    );
}

export default Juridica;
