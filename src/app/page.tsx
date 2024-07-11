import Banner from "@/components/Banner";
import Contacto from "@/components/Contacto";
import MenuBar from "@/components/MenuBar";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Promociones from "@/components/ui/Promociones";

export default function Home() {
	return (
		<>
			<MenuBar />
			<Banner />
			<main>
				<Services />
				<Promociones />
				<SuccessStories />
				<Contacto />
			</main>
		</>
	);
}
