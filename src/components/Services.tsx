import { ServicesCard } from "@/db/data";

import Title from "./ui/Title";

const Services = () => {
	return (
		<>
			<div
				id="services"
				className="h-16 "
			></div>
			<section className="max-w-5xl mx-auto ">
				<Title name="Mira lo que brindamos para tu salud" />
				<div className="flex flex-col sm:grid lg:grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 gap-4 px-5">
					{ServicesCard.map((card, i) => (
						<div
							key={card.id}
							className={`flex items-center gap-2  rounded-xl max-h-[200px] px-4 py-3 shadow-md ${
								i % 2 === 0 ? "bg-slate-100" : "bg-blue-100/50"
							}`}
						>
							{card.logo}
							<div>
								<h3 className="font-bold text-blue-950">{card.title}</h3>
								<p className="text-blue-950 ">{card.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Services;
