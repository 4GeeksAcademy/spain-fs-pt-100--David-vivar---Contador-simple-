// src/js/components/Contador.jsx
import React from "react";

const Contador = ({ digitUni, digitDeci, digiCente, digitMil, digitDeceMil, digitCenteMil }) => {
    return (
        <div className="reloj row">
            <div className="relojitoIzquierda">
                <i className="fa-solid fa-clock"></i>
            </div>
            <div className="centenasDeMil">{digitCenteMil}</div>
            <div className="decenasDeMil">{digitDeceMil}</div>
            <div className="milesimas">{digitMil}</div>
            <div className="centesimas">{digiCente}</div>
            <div className="decimales">{digitDeci}</div>
            <div className="unidades">{digitUni}</div>
            <div className="relojitoDerecha">
                <i className="fa-solid fa-clock"></i>
            </div>
        </div>
    );
};

export default Contador;
