import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-slate-800 text-white py-10">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<Image
							alt="Logo"
							width={350}
							height={200}
							src="/logo.png"
							className=""
						/>
					</div>
					<div className="text-center md:text-left">
						<h4 className="text-xl font-bold mb-2">Contáctenos</h4>
						<p>Dirección: Av. 6 de diciembre y el inca.</p>
						<p>Teléfono: 099 7291952</p>
						<p>Email: info@clinicadental.com</p>
					</div>
				</div>
				<div className="border-t border-white border-opacity-50 mt-4 pt-4 text-center md:text-left">
					<p className="text-sm">
						&copy; 2024 Odontología Estética. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
