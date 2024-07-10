import { ServicesCard } from "@/db/data";
import Image from "next/image";
import { TbDental } from "react-icons/tb";

const Services = () => {
    return (
        <section className="max-w-5xl mx-auto ">
            <h2 className="text-center my-10 kalam-bold italic text-3xl text-blue-950 ">
                Mira lo que brindamos para tu salud
            </h2>
            <div className="grid grid-rows-3 grid-cols-3 gap-4">
                {ServicesCard.map(card => (
                    <div className="flex items-center gap-2 bg-blue-200/50 rounded-xl max-h-[200px]">
                        {card.logo}
                        <div key={card.id}>
                            <h3 className="font-bold">{card.title}</h3>
                            <p className="text-blue-950">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
