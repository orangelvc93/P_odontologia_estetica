import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import { MdDoubleArrow } from "react-icons/md";

const Banner = () => {
	return (
		<>
			<div
				id="home"
				className="h-1"
			></div>
			<div className="h-[50vh] lg:h-[60vh]  mt-[90px] relative w-full overflow-hidden flex justify-center items-center">
				<Image
					width={500}
					height={500}
					src={"/fondo-banner.jpg"}
					alt="Imagen principal del banner"
					className="w-full h-full object-cover object-center opacity-40  absolute z-10 blur-sm"
				/>
				<div className="absolute z-20 max-w-5xl items-center w-full">
					<div className="flex flex-col text-blue-950 md:w-[60%] w-[100%] text-center md:text-left px-3 md:px-10 lg:px-0">
						<h1 className="font-bold italic text-5xl">Odontología Estética</h1>
						<p className="kalam-regular text-2xl mb-5">
							Transforma tu <span className="text-blue-500">sonrisa</span> con
							nuestros{" "}
							<span className="text-blue-500">
								expertos en diseño de sonrisa
							</span>
						</p>
						<div className="lg:w-1/2">
							<Button
								className="bg-blue-950 hover:bg-blue-900 transition ease-in-out text-white"
								urlLink="#contacto"
								buttonContent="Contáctenos"
							/>
						</div>
					</div>
				</div>

				<Image
					width={300}
					height={200}
					src={"/doc-banner.png"}
					alt="Imagen principal del banner"
					className="absolute bottom-0 z-20 lg:right-60 md:right-10 hidden md:flex "
				/>
			</div>

			<div className="bg-slate-800 py-4 text-center flex justify-center items-center px-3 md:px-5 lg:px-0">
				<MdDoubleArrow className="text-white text-3xl hidden lg:flex" />
				<p className="font-bold text-white text-xl ">
					{" "}
					TODOS LOS TRATAMIENTOS LOS REALIZAMOS CON MATERIAL DE PRIMERA CALIDAD
					Y ALTAMENTE ESTÉTICOS{" "}
				</p>
			</div>
		</>
	);
};

export default Banner;
