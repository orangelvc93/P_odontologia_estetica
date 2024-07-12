import Image from "next/image";
import Title from "./ui/Title";

const SuccessStories = () => {
	return (
		<>
			<div
				id="success"
				className="h-14"
			></div>

			<section className="">
				<div className="max-w-5xl mx-auto relative bg-slate-50 shadow-2xl rounded-lg my-5  p-5">
					<Image
						width={500}
						height={500}
						alt="Imagen de Promo"
						src="/casos-clinicos.png"
						className="hidden md:flex md:w-[230px] lg:w-[330px]  rounded-lg absolute bottom-0 -right-0"
					/>

					<Title name="Casos clínicos realizados" />

					<div className="grid justify-center md:grid-cols-4">
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
		</>
	);
};

export default SuccessStories;
