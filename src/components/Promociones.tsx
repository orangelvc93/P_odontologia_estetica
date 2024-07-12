import Image from "next/image";
import Title from "./ui/Title";

const Promociones = () => {
	return (
		<>
			<div
				id="promo"
				className="h-14"
			></div>
			<section className="bg-gradient-to-tr from-blue-500 to-blue-100 my-10 py-3">
				<div className="max-w-5xl mx-auto relative bg-slate-50 shadow-xl rounded-lg my-5">
					<Image
						width={600}
						height={500}
						alt="Imagen de Promo"
						src="/avatar-promo.png"
						className="absolute bottom-0 lg:-left-[180px] lg:w-[600px] shadow-black drop-shadow-2xl hidden md:flex md:w-[400px] md:-left-[90px]"
					/>
					<Title name="Promociones" />

					<div className="grid  md:grid-cols-3 gap-4 pb-5 px-5">
						<div></div>
						<Image
							width={500}
							height={500}
							alt="Imagen de Promo"
							src="/promo1.jpg"
							className="w-full h-full shadow-black drop-shadow-lg rounded-lg"
						/>
						<Image
							width={500}
							height={500}
							alt="Imagen de Promo"
							src="/promo2.jpg"
							className="w-full h-full shadow-black drop-shadow-lg rounded-lg"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Promociones;
