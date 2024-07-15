import Image from "next/image";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

const Contacto = () => {
	return (
		<>
			<div
				id="contacto"
				className="h-14"
			></div>
			<section className="bg-gradient-to-tr from-blue-500 to-blue-100 mt-10">
				<div className="max-w-5xl mx-auto flex gap-3 flex-col lg:flex-row py-7 px-5 lg:px-0">
					<div className="w-full lg:w-1/2">
						<Image
							width={500}
							height={200}
							alt="Imagen de Promo"
							src="/fondo-banner.jpg"
							className=" h-[200px] object-cover object-left-bottom rounded-lg shadow-xl w-full"
						/>
						<div className="">
							<h2 className="text-2xl my-3 text-blue-50 font-bold drop-shadow-md text-center md:text-left">
								Contáctanos y Visítanos
							</h2>
							<p className="text-md text-white text-center md:text-left mb-10 md:mb-0">
								Estamos aquí para ayudarte a lograr la sonrisa que siempre has
								deseado. Consulta nuestros horarios de atención y visítenos.
								Nuestro equipo de profesionales está listo para brindarte la
								mejor atención. No dudes en llamarnos para agendar una cita o
								resolver tus dudas.
							</p>
						</div>
					</div>
					<div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
						{/* Horarios de atención ====================== */}
						<div className="w-full md:w-1/2 p-5 md:p-4 bg-gradient-to-t from-slate-50 to-slate-100 rounded-xl shadow-xl text-center">
							<h3 className="font-bold text-blue-950 mt-5 lg:text-lg text-xl ">
								Horarios de atención
							</h3>
							<p className=" mb-8 opacity-60  lg:text-lg text-xl">
								Nuestros horarios están diseñados para adaptarse a tu agenda
							</p>
							<ul className="mt-2 text-gray-700 space-y-2  lg:text-lg text-xl">
								<li>
									<p className="font-bold">Lunes a Viernes</p>{" "}
									<p className="opacity-70">9:00 AM - 7:00 PM</p>
								</li>
								<li>
									<p className="font-bold">Sábados</p>{" "}
									<p className="opacity-70">9:00 AM - 1:00 PM</p>
								</li>
							</ul>
						</div>
						{/* Contacto =================================== */}
						<div className="w-full md:w-1/2 p-5 md:p-4 bg-gradient-to-b from-blue-100 to-blue-300 rounded-xl shadow-xl text-center">
							<h3
								id="contacto"
								className="font-bold text-blue-950 mt-5  lg:text-lg text-xl"
							>
								Contacto
							</h3>
							<ul className="mt-5 space-y-5  lg:text-lg text-xl">
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
									<IoIosMail className="text-blue-950" />
									<p className="text-left text-blue-950">
										drmnovoab@hotmail.com
									</p>
								</li>
								<li className="flex items-center gap-5">
									<IoShareSocialSharp className="text-blue-950" />
									<p className="text-left text-blue-950">Iconos sociales</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="max-w-5xl mx-auto  pb-10 ">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8038196372927!2d-78.47944802552296!3d-0.15447413543532318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59aa86a84bf8f%3A0x850b9721975220d4!2sAv.%206%20de%20Diciembre%20%26%20Av.%20El%20Inca%2C%20170138%20Quito%2C%20Ecuador!5e0!3m2!1ses!2sus!4v1720728006069!5m2!1ses!2sus"
						width="600"
						height="450"
						//style="border:0;"
						//allowfullscreen=""
						loading="lazy"
						style={{
							borderRadius: "20px",
						}}
						//referrerpolicy="no-referrer-when-downgrade"
						className="w-[100%] shadow-xl"
					></iframe>
				</div>
			</section>
		</>
	);
};

export default Contacto;
