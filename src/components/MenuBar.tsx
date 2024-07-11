import Image from "next/image";
import Link from "next/link";

const MenuBar = () => {
	return (
		<nav className="fixed top-0 w-full py-2 flex justify-center items-center z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-blue border-opacity-50 shadow-lg">
			<div className="w-full max-w-5xl flex justify-between items-center">
				<Image
					alt="Logo"
					width={250}
					height={200}
					src="/logo.png"
				/>
				<ul className="flex gap-5 font-bold text-blue-900 text-md">
					<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 border-r-2 border-blue pr-5">
						<Link href="#home">Inicio</Link>
					</li>
					<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 border-r-2 border-blue pr-5">
						<Link href="#services">Servicios</Link>
					</li>
					<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 border-r-2 border-blue pr-5">
						<Link href="#promo">Promociones</Link>
					</li>
					<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 border-r-2 border-blue pr-5">
						<Link href="#success">Casos Clínicos</Link>
					</li>
					<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 pr-5">
						<Link href="#contacto">Contacto</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default MenuBar;
