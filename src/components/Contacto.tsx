import Image from "next/image";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

const Contacto = () => {
	return (
		<section className="bg-gradient-to-tr from-blue-500 to-blue-100 my-10">
			<div className="max-w-5xl mx-auto flex py-7">
				<div className="w-full md:w-1/2">
					<Image
						width={500}
						height={200}
						alt="Imagen de Promo"
						src="/fondo-banner.jpg"
						className=" h-[200px] object-cover object-left-bottom rounded-lg shadow-xl"
					/>
					<div className="">
						<h2 className="text-2xl my-3 text-blue-800 font-bold drop-shadow-md">
							Contáctanos y Visítanos
						</h2>
						<p className="text-md text-blue-950">
							Estamos aquí para ayudarte a lograr la sonrisa que siempre has
							deseado. Consulta nuestros horarios de atención y visítanos en
							nuestra ubicación céntrica. Nuestro equipo de profesionales está
							listo para brindarte la mejor atención. No dudes en llamarnos para
							agendar una cita o resolver tus dudas.
						</p>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex gap-4">
					{/* Horarios de atención ====================== */}
					<div className="w-full md:w-1/2 p-4 bg-gradient-to-t from-slate-50 to-slate-100 rounded-xl shadow-xl text-center">
						<h3 className="font-bold text-blue-950 mt-5 text-lg">
							Horarios de atención
						</h3>
						<p className="text-sm mb-8 opacity-60">
							Nuestros horarios están diseñados para adaptarse a tu agenda
						</p>
						<ul className="mt-2 text-gray-700 space-y-2">
							<li>
								<p className="font-bold">Lunes a Viernes</p>{" "}
								<p className="opacity-70">8:00 AM - 6:00 PM</p>
							</li>
							<li>
								<p className="font-bold">Sábados</p>{" "}
								<p className="opacity-70">8:00 AM - 6:00 PM</p>
							</li>
							<li>
								<p className="font-bold">Domingos</p>{" "}
								<p className="opacity-70">8:00 AM - 6:00 PM</p>
							</li>
						</ul>
					</div>
					{/* Contacto =================================== */}
					<div className="w-full md:w-1/2 p-4 bg-gradient-to-b from-blue-100 to-blue-300 rounded-xl shadow-xl text-center">
						<h3 className="font-bold text-blue-950 mt-5 text-lg">Contacto</h3>
						<ul className="mt-5 space-y-5">
							<li className="flex items-center gap-5">
								<FaMapMarkerAlt className="text-blue-950" />
								<p className="text-left text-blue-950">
									Av. 6 de diciembre y el inca.
								</p>
							</li>
							<li className="flex items-center gap-5">
								<IoLogoWhatsapp className="text-blue-950" />
								<p className="text-left text-blue-950">099 7291952</p>
							</li>
							<li className="flex items-center gap-5">
								<FaPhone className="text-blue-950" />
								<p className="text-left text-blue-950">3261-065</p>
							</li>
							<li className="flex items-center gap-5">
								<IoShareSocialSharp className="text-blue-950" />
								<p className="text-left text-blue-950">Iconos sociales</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacto;
