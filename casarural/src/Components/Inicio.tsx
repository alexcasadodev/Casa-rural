import casaEntera from '../public/casa_entera.jpg'

// Sustituye estas importaciones por tus fotos reales
import foto1 from '../public/casa_entera.jpg'
import foto2 from '../public/casa_entera.jpg'
import foto3 from '../public/casa_entera.jpg'
import foto4 from '../public/casa_entera.jpg'

type Tab = "Inicio" | "Habitaciones" | "Entorno" | "Casa" | "Contacto"

const features = [
  { icon: "🌿", title: "Tranquilidad y naturaleza", desc: "Rodeados de pinos y montaña, lejos del ruido de la ciudad." },
  { icon: "🚗", title: "A 1h de Madrid", desc: "Escapada perfecta de fin de semana, sin largas carreteras." },
  { icon: "🏊", title: "Piscina y barbacoa", desc: "Disfruta del exterior con piscina privada y zona de barbacoa." },
  { icon: "🔥", title: "Chimenea y calefacción", desc: "Acogedora en cualquier época del año, incluso en invierno." },
  { icon: "📶", title: "WiFi y comodidades", desc: "Conexión a internet y todo lo necesario para sentirte como en casa." },
  { icon: "🌳", title: "Porche, jardín y garaje", desc: "Amplio jardín con mesas en el porche y garaje cubierto incluido." },
]

const galleryItems: { src: string; label: string; tab: Tab }[] = [
  { src: foto1, label: "Habitaciones", tab: "Habitaciones" },
  { src: foto2, label: "La Casa",      tab: "Casa"         },
  { src: foto3, label: "Entorno",      tab: "Entorno"      },
  { src: foto4, label: "Contacto",     tab: "Contacto"     },
]

function Inicio({ setTab }: { setTab: (value: Tab) => void }) {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <img
          src={casaEntera}
          alt="Casa rural en Prádena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-4">
          <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-3">
            Alojamiento rural · Segovia
          </p>
          <h1 className="font-serif italic text-white text-6xl md:text-7xl drop-shadow-lg mb-3">
            Nombre de la Casa
          </h1>
          <p className="text-stone-300 text-sm tracking-[0.18em] uppercase mb-8">
            Prádena · Sierra de Guadarrama
          </p>
          <div
            onClick={() => setTab("Habitaciones")}
            className="bg-amber-600 hover:bg-amber-500 transition-colors cursor-pointer text-white text-xs tracking-widest uppercase px-8 py-3"
          >
            Conoce el alojamiento
          </div>
        </div>
      </div>

      {/* ── TARJETAS RESUMEN ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
        {[
          { icon: "🛏", label: "Capacidad",  value: "4 habitaciones"        },
          { icon: "🚿", label: "Baños",      value: "3 cuartos de baño"     },
          { icon: "🏊", label: "Exterior",   value: "Piscina · Barbacoa · Jardín" },
        ].map(({ icon, label, value }) => (
          <div key={label} className="bg-white py-8 flex flex-col items-center gap-1">
            <span className="text-2xl mb-1">{icon}</span>
            <span className="text-xs tracking-widest uppercase text-stone-400">{label}</span>
            <span className="font-serif text-stone-800 text-lg">{value}</span>
          </div>
        ))}
      </div>

      {/* ── DESCRIPCIÓN ── */}
      <div className="max-w-2xl mx-auto py-20 px-6 text-center">
        <div className="w-10 h-px bg-amber-500 mx-auto mb-8" />
        <p className="text-stone-600 font-light leading-relaxed mb-6">
          Bienvenidos a nuestro alojamiento en Prádena, un pueblo con encanto en la provincia
          de Segovia. Nuestra casa se encuentra en un entorno rural, ideal para escapar del
          bullicio de la ciudad y conectar con la naturaleza de la Sierra de Guadarrama.
        </p>
        <p className="text-stone-600 font-light leading-relaxed mb-6">
          Contamos con 4 habitaciones y 3 cuartos de baño, una amplia cocina equipada,
          salón comedor con chimenea y todas las comodidades para una estancia relajante.
        </p>
        <p className="text-stone-600 font-light leading-relaxed">
          En el exterior encontrarás jardín con porche y mesas, garaje cubierto, zona de
          barbacoa y una hermosa piscina privada.
        </p>
        <div className="w-10 h-px bg-amber-500 mx-auto mt-8" />
      </div>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <div className="bg-stone-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400 text-xs tracking-[0.25em] uppercase text-center mb-2">
            Nuestras ventajas
          </p>
          <h2 className="font-serif italic text-white text-4xl text-center mb-14">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-start gap-3 p-6 border border-stone-700 rounded-sm hover:border-amber-600 transition-colors">
                <span className="text-3xl">{icon}</span>
                <h3 className="font-serif text-white text-lg">{title}</h3>
                <p className="text-stone-400 font-light text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GALERÍA PREVIEW ── */}
      <div className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-600 text-xs tracking-[0.25em] uppercase text-center mb-2">
            Descubre más
          </p>
          <h2 className="font-serif italic text-stone-800 text-4xl text-center mb-14">
            Un vistazo al alojamiento
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryItems.map(({ src, label, tab }) => (
              <div
                key={label}
                onClick={() => setTab(tab)}
                className="relative group cursor-pointer overflow-hidden rounded-sm aspect-square"
              >
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors flex items-end p-4">
                  <span className="text-white font-serif italic text-lg">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECCIÓN ENTORNO ── */}
      <div className="relative py-28 px-6 overflow-hidden bg-stone-800">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-3">
            El entorno
          </p>
          <h2 className="font-serif italic text-white text-4xl md:text-5xl mb-6">
            Prádena y la Sierra de Guadarrama
          </h2>
          <p className="text-stone-300 font-light leading-relaxed mb-10">
            A los pies del Parque Nacional de la Sierra de Guadarrama, Prádena es un
            pueblo de la provincia de Segovia rodeado de pinares, rutas de senderismo
            y paisajes que cortan la respiración. Todo esto, a solo una hora de Madrid.
          </p>
          <div
            onClick={() => setTab("Entorno")}
            className="border border-amber-500 text-amber-400 hover:bg-amber-600 cursor-pointer hover:text-white hover:border-amber-600 transition-colors text-xs tracking-widest uppercase px-8 py-3"
          >
            Explorar el entorno
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-stone-950 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <p className="font-serif italic text-amber-400 text-lg mb-3">Nombre de la Casa</p>
            <p className="text-stone-500 text-sm font-light leading-relaxed">
              Casa rural en Prádena,<br />Segovia, España
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-500 mb-3">Contacto</p>
            <p className="text-stone-300 text-sm font-light mb-1">📞 +34 600 00 00 00</p>
            <p className="text-stone-300 text-sm font-light">✉️ ifno@gmail.com</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-500 mb-3">Navegar</p>
            {(["Habitaciones", "Entorno", "Casa", "Contacto"] as Tab[]).map(t => (
              <p
                key={t}
                onClick={() => setTab(t)}
                className="text-stone-400 text-sm font-light hover:text-amber-400 cursor-pointer transition-colors mb-1"
              >
                {t}
              </p>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-10 pt-6 border-t border-stone-800 text-center">
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} Nombre de la Casa · Todos los derechos reservados
          </p>
        </div>
      </footer>

    </div>
  )
}

export default Inicio