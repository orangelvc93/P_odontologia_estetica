"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuBar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const toogleMenu = () => {
		setOpenMenu(!openMenu);
	};

	const closeMenu = () => {
		setOpenMenu(false);
	};
	return (
		<nav className="fixed top-0 w-full py-2 flex justify-center items-center z-50 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border border-blue border-opacity-50 shadow-lg">
			<div className="w-full max-w-5xl flex justify-between items-center px-3">
				<Image
					alt="Logo"
					width={250}
					height={200}
					src="/logo.png"
					className="z-50"
				/>
				<div className="flex items-center">
					{/* ===========Menu Movil ================ */}
					<button
						onClick={toogleMenu}
						className="z-40 text-blue-500 lg:hidden focus:outline-none pr-4"
					>
						{openMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
					</button>

					{/* ===========Menu ======================== */}
					<ul
						className={`fixed top-0 left-0 bg-white text-slate-800 bg-opacity-70 backdrop-filter backdrop-blur-lg h-[100vw] w-full flex flex-col items-center pt-28 gap-5 font-bold text-md lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:backdrop-filter-none lg:backdrop-blur-none lg:pt-0 ${
							openMenu ? "translate-x-0" : "translate-x-full"
						} transition-transform duration-300 ease-in-out lg:transform-none`}
					>
						<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 lg:border-r-2 border-blue pr-5">
							<Link
								href="#home"
								onClick={closeMenu}
							>
								Inicio
							</Link>
						</li>
						<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 lg:border-r-2 border-blue pr-5">
							<Link
								href="#services"
								onClick={closeMenu}
							>
								Servicios
							</Link>
						</li>
						<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 lg:border-r-2 border-blue pr-5">
							<Link
								href="#promo"
								onClick={closeMenu}
							>
								Promociones
							</Link>
						</li>
						<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 lg:border-r-2 border-blue pr-5">
							<Link
								href="#success"
								onClick={closeMenu}
							>
								Casos Clínicos
							</Link>
						</li>
						<li className="hover:text-blue-500 hover:underline underline-offset-4 transition duration-300 pr-5">
							<Link
								href="#contacto"
								onClick={closeMenu}
							>
								Contacto
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default MenuBar;
