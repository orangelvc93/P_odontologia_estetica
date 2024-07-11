import Image from "next/image";

const SuccessStories = () => {
	return (
		<section className="">
			<div className="max-w-5xl mx-auto relative bg-slate-50 shadow-2xl rounded-lg my-5  p-5">
				<Image
					width={500}
					height={500}
					alt="Imagen de Promo"
					src="/casos-clinicos.png"
					className="w-[280px]  rounded-lg absolute bottom-0 -right-0"
				/>

				<h2 className="text-center font-bold italic text-3xl text-blue-500 shadow-black drop-shadow-lg mb-5">
					Casos clínicos realizados
				</h2>

				<div className="grid grid-cols-4">
					<Image
						width={500}
						height={500}
						alt="Imagen de Promo"
						src="/cliente1.jpeg"
						className="w-[250px]  rounded-lg"
					/>
					<Image
						width={500}
						height={500}
						alt="Imagen de Promo"
						src="/cliente2.jpeg"
						className="w-[250px]  rounded-lg"
					/>
					<Image
						width={500}
						height={500}
						alt="Imagen de Promo"
						src="/cliente3.jpeg"
						className="w-[250px]  rounded-lg"
					/>
					<div></div>
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
