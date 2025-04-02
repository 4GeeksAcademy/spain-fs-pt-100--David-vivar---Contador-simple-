import React from "react";

const BotonReloj = ({ Pause, Resume, Reset }) => {
	return (
		<div className="BotonReloj d-flex justify-content-center gap-3 mt-4">
			<button className="btn btn-danger" onClick={Pause}>Parar</button>
			<button className="btn btn-primary" onClick={Resume}>Reanudar</button>
			<button className="btn btn-warning" onClick={Reset}>Reiniciar</button>
		</div>
	);
};

export default BotonReloj;
