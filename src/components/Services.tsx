import { ServicesCard } from "@/db/data";
import Image from "next/image";
import { TbDental } from "react-icons/tb";

const Services = () => {
	return (
		<section className="max-w-5xl mx-auto ">
			<h2 className="text-center my-10 kalam-bold italic text-3xl text-blue-500 shadow-black drop-shadow-lg">
				Mira lo que brindamos para tu salud
			</h2>
			<div className="grid grid-rows-2 grid-cols-3 gap-4">
				{ServicesCard.map((card, i) => (
					<div
						className={`flex items-center gap-2  rounded-xl max-h-[200px] px-4 py-3 shadow-md ${
							i % 2 === 0 ? "bg-slate-100" : "bg-blue-100/50"
						}`}
					>
						{card.logo}
						<div key={card.id}>
							<h3 className="font-bold text-blue-950">{card.title}</h3>
							<p className="text-blue-950 ">{card.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
