import Image from "next/image";
import Link from "next/link";


const MenuBar = () => {
    return (
        <nav className="fixed top-0 w-full py-2   flex justify-center items-center z-50 backdrop-blur-lg" >
            <div className="w-full max-w-5xl flex justify-between items-center">

                <Image alt="Logo"
                    width={250}
                    height={200}
                    src={"/logo.png"} />
                <ul className="flex gap-5 font-bold text-slate-800 text-md">
                    <Link href="#" id="home" className="hover:text-blue-500">Inicio</Link>
                    <Link href="#" id="about" className="hover:text-blue-500">Acerca de nosotros</Link>
                    <Link href="#" id="services" className="hover:text-blue-500">Servicios</Link>
                    <Link href="#" id="contact" className="hover:text-blue-500">Contacto</Link>
                </ul>
            </div>
        </nav>
    );
}

export default MenuBar;
