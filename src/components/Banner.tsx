import Image from 'next/image';
import React from 'react';
import Button from './ui/Button';
import { MdDoubleArrow } from "react-icons/md";

const Banner = () => {
    return (
        <>
            <div className='h-[60vh]  mt-[90px] relative w-full overflow-hidden flex justify-center items-center'>

                <Image width={500} height={500} src={"/fondo-banner.jpg"} alt='Imagen principal del banner' className="w-full h-full object-cover object-center opacity-40  absolute z-10 blur-sm" />
                <div className="absolute z-20 max-w-5xl flex items-center w-full">
                    <div className="flex flex-col text-blue-950 w-[60%]">
                        <h1 className="font-bold italic text-5xl">Odontología Estética</h1>
                        <p className="kalam-regular text-2xl mb-5">
                            Transforma tu <span className='text-blue-500'>sonrisa</span> con nuestros <span className='text-blue-500'>expertos en diseño dental</span>
                        </p>
                        <div className='w-1/2'>
                            <Button className='bg-blue-500 hover:bg-blue-600 transition ease-in-out text-white' urlLink='#' buttonContent='Contáctenos' />
                        </div>
                    </div>
                </div>

                <Image width={300} height={200} src={"/doc-banner.png"} alt='Imagen principal del banner' className='absolute bottom-0 z-20 right-60' />
            </div>

            <div className='bg-blue-400 py-4 text-center flex justify-center items-center'>
                <MdDoubleArrow className='text-white text-3xl' />
                <p className='font-bold text-white text-xl'> TODOS LOS TRATAMIENTOS LOS REALIZAMOS CON MATERIAL DE PRIMERA CALIDAD Y ALTAMENTE ESTÉTICOS </p>
            </div>
        </>
    );
}

export default Banner;
