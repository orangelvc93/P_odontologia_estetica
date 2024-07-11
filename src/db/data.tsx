import {
	FaBriefcaseMedical,
	FaHandHoldingMedical,
	FaPumpMedical,
} from "react-icons/fa";
import { TbDental, TbDentalBroken, TbDentalOff } from "react-icons/tb";

export const ServicesCard = [
	{
		id: 1,
		logo: (
			<TbDental
				size={300}
				strokeWidth={1}
				color="#60A5FA"
			/>
		),
		title: "Diseño de sonrisa",
		description:
			"Mejoramos la apariencia dental mediante técnicas personalizadas para lograr una sonrisa armoniosa y atractiva.",
	},
	{
		id: 2,
		logo: (
			<FaHandHoldingMedical
				size={180}
				strokeWidth={1}
				color="#60A5FA"
			/>
		),
		title: "Ortodoncia fija",
		description:
			"Corrige la alineación dental utilizando brackets y alambres, mejorando la función y la estética de la sonrisa.",
	},
	{
		id: 3,
		logo: (
			<FaPumpMedical
				size={140}
				strokeWidth={1}
				color="#60A5FA"
			/>
		),
		title: "Profilaxis o limpieza dental profunda.",
		description:
			"Eliminamos la placa y el sarro acumulados, previniendo enfermedades bucales y manteniendo una sonrisa saludable.",
	},
	{
		id: 4,
		logo: (
			<TbDentalBroken
				size={300}
				strokeWidth={1}
				color="#60A5FA"
			/>
		),
		title: "Prótesis Dentales",
		description:
			"Reemplazan dientes perdidos, restaurando la función masticatoria y la apariencia estética de la sonrisa.",
	},
	{
		id: 5,
		logo: (
			<FaBriefcaseMedical
				size={200}
				strokeWidth={1}
				color="#60A5FA"
			/>
		),
		title: "Odontología general",
		description:
			"Cuidado integral de la salud bucal, incluyendo diagnóstico, prevención y tratamiento de enfermedades dentales comunes",
	},
	{
		id: 6,
		logo: (
			<TbDentalOff
				size={130}
				strokeWidth={1}
				color="#60A5FA"
			/>
		),
		title: "Extracción",
		description: "Extracción de terceros molares o muela del juicio.",
	},
];
