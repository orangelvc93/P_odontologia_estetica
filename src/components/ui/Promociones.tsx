import Image from "next/image";

const Promociones = () => {
	return (
		<>
			<section className="bg-gradient-to-tr from-blue-500 to-blue-100 my-10 py-3">
				<div className="max-w-5xl mx-auto relative bg-slate-50 shadow-xl rounded-lg my-5">
					<Image
						width={600}
						height={200}
						alt="Imagen de Promo"
						src="/avatar-promo.png"
						className="absolute bottom-0 -left-[180px] shadow-black drop-shadow-2xl"
					/>
					<h2 className="text-center p-5 kalam-bold italic text-3xl text-blue-500 shadow-black drop-shadow-lg">
						Promociones
					</h2>

					<div className="grid grid-cols-3 gap-4 pb-5 px-5">
						<div></div>
						<Image
							width={200}
							height={200}
							alt="Imagen de Promo"
							src="/promo1.jpg"
							className="w-full h-full shadow-black drop-shadow-lg rounded-lg"
						/>
						<Image
							width={200}
							height={200}
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
