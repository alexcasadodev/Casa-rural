import casaEntera from '../public/casa_entera.jpg'
function Inicio() {
    return (
        <div>

            <div className="w-full flex-1 flex flex-col items-center "
            >
                <img src={casaEntera} alt="Casa bonita" className='w-full h-full object-cover' />

                <div
                    className='font-serif italic text-7xl text-amber-600 drop-shadow-lg'
                >
                    NOMBRE DE LA CASA
                </div>

                <div className='flex flex-col gap-4 px-96'>

                    <p className='text-lg font-light text-center'>
                        Bienvenidos a nuestro alojamiento en Prádena, un pueblo con encanto en la provincia de Segovia. Nuestra casa se encuentra en un entorno rural, ideal para escapar del bullicio de la ciudad.
                    </p>

                    <p className='text-lg font-light text-center'>
                        Contamos con 4 habitaciones y 3 cuartos de baño, así como una amplia cocina, un acogedor salón comedor con zona de chimenea y todas las comodidades necesarias para una estancia relajante y confortable.
                    </p>

                    <p className='text-lg font-light text-center'>
                        En el exterior, nuestros huéspedes pueden disfrutar de un amplio jardín con porche, garaje, una zona de barbacoa y una hermosa piscina.
                    </p>

                </div>

                <div className='bg-amber-700 hover:bg-amber-500'>
                    Conoce la casa
                </div>

            </div>

        </div>
    )
}
export default Inicio