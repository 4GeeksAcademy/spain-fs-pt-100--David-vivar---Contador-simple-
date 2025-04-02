import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.png";
import Contador from "./Contador.jsx";
import BotonReloj from "./BotonReloj.jsx";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [initialValue, setInitialValue] = useState(0);
	const [isCountdown, setIsCountdown] = useState(false);
	const [timeObjective, setTimeObjective] = useState(0);


	useEffect(() => {
		let interval = null;

		if (isRunning) {
			interval = setInterval(() => {
				setCounter(prev =>
					isCountdown
						? (prev > 0 ? prev - 1 : 0)
						: prev + 1
				);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning, isCountdown]);

	// funciones de control
	const pausar = () => setIsRunning(false);
	const reanudar = () => setIsRunning(true);
	const reiniciar = () => {
		setCounter(0);
		setIsRunning(false);
		setIsCountdown(false);
	};

	// funciones nuevas
	const empezarDesde = () => {
		setCounter(initialValue);
		setIsCountdown(false);
		setIsRunning(true);
	};

	const cuentaRegresivaDesde = () => {
		setCounter(initialValue);
		setIsCountdown(true);
		setIsRunning(true);
	};

	// dígitos
	const digitUni = counter % 10;
	const digitDeci = Math.floor(counter / 10) % 10;
	const digiCente = Math.floor(counter / 100) % 10;
	const digitMil = Math.floor(counter / 1000) % 10;
	const digitDeceMil = Math.floor(counter / 10000) % 10;
	const digitCenteMil = Math.floor(counter / 100000) % 10;

	return (

		<div className="text-center">
			<h1 className="text-center mt-5">Javier y Patricia!</h1>
			<p><img src={rigoImage} /></p>

			<p className="text-white mt-3">
				MODO: {isCountdown ? "Cuenta regresiva" : "Contador normal"}
			</p>

			<div className="row justify-content-center mb-4">
				<Contador
					digitUni={digitUni}
					digitDeci={digitDeci}
					digiCente={digiCente}
					digitMil={digitMil}
					digitDeceMil={digitDeceMil}
					digitCenteMil={digitCenteMil}
				/>
			</div>

			<div className="d-flex justify-content-center align-items-center gap-3 mb-4 text-white">
				<label htmlFor="inicio">Número inicial:</label>
				<input
					id="inicio"
					type="number"
					min="0"
					value={initialValue}
					onChange={(e) => setInitialValue(Number(e.target.value))}
					style={{ width: "100px", textAlign: "center" }}
				/>
				<button className="btn btn-success" onClick={empezarDesde}>Contar hacia arriba</button>
				<button className="btn btn-info" onClick={cuentaRegresivaDesde}>Cuenta regresiva</button>
			</div>

			<BotonReloj
				Pause={pausar}
				Resume={reanudar}
				Reset={reiniciar}
			/>

		</div>
	);
};

export default Home;
