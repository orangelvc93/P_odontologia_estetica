import Image from "next/image";

const SuccessStories = () => {
	return (
		<section className="">
			<div className="max-w-5xl mx-auto relative bg-slate-50 shadow-2xl rounded-lg my-5 grid grid-cols-3 items-center p-5">
				<Image
					width={200}
					height={200}
					alt="Imagen de Promo"
					src="/cliente1.jpeg"
					className="w-[250px]  rounded-lg"
				/>
				<Image
					width={200}
					height={200}
					alt="Imagen de Promo"
					src="/cliente2.jpeg"
					className="w-[250px]  rounded-lg"
				/>
				<Image
					width={200}
					height={200}
					alt="Imagen de Promo"
					src="/cliente3.jpeg"
					className="w-[250px]  rounded-lg"
				/>
			</div>
		</section>
	);
};

export default SuccessStories;
