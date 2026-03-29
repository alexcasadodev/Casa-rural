// Sustituye por tus fotos reales cuando las tengas
import fotoPortada from '../public/casa_entera.jpg'
import fotoRutas from '../public/casa_entera.jpg'
import fotoAventura from '../public/casa_entera.jpg'
import fotoPueblos from '../public/casa_entera.jpg'

const rutas = [
  {
    nombre: "Senda de los Pescadores",
    dificultad: "Fácil",
    descripcion: "Un paseo precioso junto al río Cega, ideal para toda la familia. Discurre entre chopos y pinos siguiendo el curso del río.",
  },
  {
    nombre: "Subida a Peñalara",
    dificultad: "Media-Alta",
    descripcion: "El techo de la Sierra de Guadarrama. Una ruta exigente que recompensa con vistas panorámicas impresionantes y lagunas glaciares.",
  },
  {
    nombre: "Ruta de los Acebos",
    dificultad: "Media",
    descripcion: "Un sendero espectacular para descubrir los acebos de la sierra, especialmente bonito en invierno cuando los frutos rojos contrastan con la nieve.",
  },
  {
    nombre: "La Mujer Muerta",
    dificultad: "Media",
    descripcion: "Una de las rutas más emblemáticas del Guadarrama, con vistas únicas hacia ambas mesetas y una silueta inconfundible en el horizonte.",
  },
  {
    nombre: "Hoces del Duratón y ermita de San Frutos",
    dificultad: "Fácil",
    descripcion: "El cañón del río Duratón y la ermita rupestre de San Frutos, declarado Parque Natural. Buitres leonados sobrevolando el río garantizados.",
  },
]

const aventuras = [
  {
    icon: "⛷️",
    titulo: "Esquí en La Pinilla",
    descripcion: "La estación de esquí más cercana a Madrid. A pocos kilómetros de Prádena, perfecta para una jornada en la nieve en invierno.",
  },
  {
    icon: "🛶",
    titulo: "Canoas en el río Duratón",
    descripcion: "Desciende el cañón del Duratón en canoa, una experiencia única entre paredes de roca y águilas sobrevolando el río.",
  },
]

const pueblos = [
  {
    nombre: "Pedraza",
    km: "20 km",
    descripcion: "Una de las villas medievales mejor conservadas de Castilla. Murallas, castillo, mesones y su famosa fiesta de las velas en verano.",
  },
  {
    nombre: "Sepúlveda",
    km: "25 km",
    descripcion: "Villa románica con el mejor cochinillo de la provincia, junto a las impresionantes Hoces del Duratón.",
  },
  {
    nombre: "Ayllón",
    km: "45 km",
    descripcion: "Conjunto histórico declarado de interés cultural. Casco antiguo con soportales, torreones y una tranquilidad difícil de encontrar.",
  },
  {
    nombre: "Turégano",
    km: "35 km",
    descripcion: "Dominado por su imponente castillo-iglesia, uno de los más curiosos de Segovia. Merece una visita pausada.",
  },
]

const dificultadColor: Record<string, string> = {
  "Fácil":      "bg-green-50 text-green-700",
  "Media":      "bg-amber-50 text-amber-700",
  "Media-Alta": "bg-orange-50 text-orange-700",
  "Alta":       "bg-red-50 text-red-700",
}

function Entorno() {
  return (
    <div className="flex flex-col">

      {/* ── CABECERA ── */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={fotoPortada}
          alt="Entorno de Prádena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4">
          <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-2">
            Sierra de Guadarrama · Segovia
          </p>
          <h1 className="font-serif italic text-white text-5xl">
            El Entorno
          </h1>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className="max-w-2xl mx-auto py-16 px-6 text-center">
        <div className="w-10 h-px bg-amber-500 mx-auto mb-8" />
        <p className="text-stone-600 font-light leading-relaxed">
          Prádena se encuentra a los pies del Parque Nacional de la Sierra de Guadarrama,
          en la provincia de Segovia. Un enclave privilegiado rodeado de pinares, ríos y
          pueblos medievales, a tan solo una hora de Madrid.
        </p>
        <div className="w-10 h-px bg-amber-500 mx-auto mt-8" />
      </div>

      {/* ── RUTAS ── */}
      <div className="bg-stone-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-6 items-start mb-12">
            <img
              src={fotoRutas}
              alt="Rutas de senderismo"
              className="hidden md:block w-64 h-48 object-cover rounded-sm flex-shrink-0"
            />
            <div>
              <p className="text-amber-600 text-xs tracking-[0.25em] uppercase mb-2">A pie</p>
              <h2 className="font-serif italic text-stone-800 text-4xl mb-4">
                Rutas de senderismo
              </h2>
              <p className="text-stone-500 font-light leading-relaxed">
                La sierra ofrece rutas para todos los niveles, desde paseos familiares
                junto al río hasta ascensiones a las cumbres más altas del Guadarrama.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rutas.map(({ nombre, dificultad, descripcion }) => (
              <div
                key={nombre}
                className="bg-white border border-stone-100 rounded-sm p-5 hover:border-amber-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-serif italic text-stone-800 text-lg leading-tight">
                    {nombre}
                  </h3>
                  <span className={`text-xs tracking-wide uppercase px-2 py-1 rounded-sm flex-shrink-0 ${dificultadColor[dificultad]}`}>
                    {dificultad}
                  </span>
                </div>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AVENTURA ── */}
      <div className="bg-stone-900 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-6 items-start mb-12">
            <div className="flex-1">
              <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-2">Más adrenalina</p>
              <h2 className="font-serif italic text-white text-4xl mb-4">
                Actividades de aventura
              </h2>
              <p className="text-stone-400 font-light leading-relaxed">
                Si buscas algo más emocionante, la zona ofrece actividades para los
                que quieren vivir la naturaleza de una forma más intensa.
              </p>
            </div>
            <img
              src={fotoAventura}
              alt="Actividades de aventura"
              className="hidden md:block w-64 h-48 object-cover rounded-sm flex-shrink-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aventuras.map(({ icon, titulo, descripcion }) => (
              <div
                key={titulo}
                className="border border-stone-700 rounded-sm p-6 hover:border-amber-600 transition-colors"
              >
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="font-serif italic text-white text-xl mb-3">{titulo}</h3>
                <p className="text-stone-400 font-light text-sm leading-relaxed">{descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PUEBLOS ── */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-6 items-start mb-12">
            <img
              src={fotoPueblos}
              alt="Pueblos cercanos"
              className="hidden md:block w-64 h-48 object-cover rounded-sm flex-shrink-0"
            />
            <div>
              <p className="text-amber-600 text-xs tracking-[0.25em] uppercase mb-2">Para explorar</p>
              <h2 className="font-serif italic text-stone-800 text-4xl mb-4">
                Pueblos cercanos
              </h2>
              <p className="text-stone-500 font-light leading-relaxed">
                A pocos kilómetros encontrarás algunos de los pueblos más bonitos
                de Castilla, con historia, gastronomía y rincones únicos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pueblos.map(({ nombre, km, descripcion }) => (
              <div
                key={nombre}
                className="bg-stone-50 border border-stone-100 rounded-sm p-5 hover:border-amber-300 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-serif italic text-stone-800 text-xl">{nombre}</h3>
                  <span className="text-xs text-amber-600 font-light">{km}</span>
                </div>
                <div className="w-6 h-px bg-amber-400 mb-3" />
                <p className="text-stone-500 font-light text-sm leading-relaxed">{descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="bg-amber-600 py-14 px-6 text-center">
        <h2 className="font-serif italic text-white text-4xl mb-4">
          ¿Te animas a conocerlo?
        </h2>
        <p className="text-amber-100 font-light mb-8 max-w-md mx-auto">
          Reserva tu estancia y descubre todo lo que Prádena y la Sierra de Guadarrama tienen para ofrecerte.
        </p>
        
        <a href="mailto:alejandrocasadoarribas.03@gmail.com"
          className="inline-block bg-white text-amber-700 hover:bg-amber-50 transition-colors text-xs tracking-widest uppercase px-8 py-3"
        >
          Contactar para reservar
        </a>
      </div>

    </div>
  )
}

export default Entorno