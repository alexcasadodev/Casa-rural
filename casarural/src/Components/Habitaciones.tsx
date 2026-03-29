import { useState } from "react"

// Sustituye por tus importaciones reales
import hab1foto1 from '../public/casa_entera.jpg'
import hab1foto2 from '../public/casa_entera.jpg'
import hab1foto3 from '../public/casa_entera.jpg'
import hab2foto1 from '../public/casa_entera.jpg'
import hab2foto2 from '../public/casa_entera.jpg'
import hab3foto1 from '../public/casa_entera.jpg'
import hab3foto2 from '../public/casa_entera.jpg'
import hab4foto1 from '../public/casa_entera.jpg'
import hab4foto2 from '../public/casa_entera.jpg'

type Habitacion = {
  id: number
  nombre: string
  descripcion: string
  cama: string
  personas: number
  bano: string
  extras: string[]
  fotos: string[]
}

const habitaciones: Habitacion[] = [
  {
    id: 1,
    nombre: "Habitación de la Terraza",
    descripcion: "Nuestra habitación más especial, con salida directa a la terraza y vistas al entorno natural. Ideal para parejas que buscan un toque extra de romanticismo y privacidad.",
    cama: "Cama de matrimonio",
    personas: 2,
    bano: "Baño privado",
    extras: ["Salida a terraza", "Escritorio", "Armario", "Baño en suite"],
    fotos: [hab1foto1, hab1foto2, hab1foto3],
  },
  {
    id: 2,
    nombre: "Habitación del Jardín",
    descripcion: "Amplia y luminosa habitación de matrimonio, decorada con materiales naturales. Perfecta para una escapada en pareja.",
    cama: "Cama de matrimonio",
    personas: 2,
    bano: "Baño compartido",
    extras: ["Armario", "Baño compartido"],
    fotos: [hab2foto1, hab2foto2],
  },
  {
    id: 3,
    nombre: "Habitación del Pinar",
    descripcion: "Cómoda habitación de matrimonio con un ambiente tranquilo y acogedor. Perfecta para descansar tras un día de rutas por la sierra.",
    cama: "Cama de matrimonio",
    personas: 2,
    bano: "Baño compartido",
    extras: ["Armario", "Baño compartido"],
    fotos: [hab3foto1, hab3foto2],
  },
  {
    id: 4,
    nombre: "Habitación de las Cumbres",
    descripcion: "Habitación con dos camas individuales, ideal para amigos o hermanos. Espaciosa y con todo lo necesario para una estancia cómoda.",
    cama: "Dos camas individuales",
    personas: 2,
    bano: "Baño compartido",
    extras: ["Armario", "Baño compartido"],
    fotos: [hab4foto1, hab4foto2],
  },
]

function GaleriaFotos({ fotos, nombre }: { fotos: string[]; nombre: string }) {
  const [fotoActiva, setFotoActiva] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      {/* Foto principal */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-sm">
        <img
          src={fotos[fotoActiva]}
          alt={nombre}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      {/* Miniaturas */}
      {fotos.length > 1 && (
        <div className="flex gap-2">
          {fotos.map((foto, i) => (
            <button
              key={i}
              onClick={() => setFotoActiva(i)}
              className={`flex-1 aspect-[4/3] overflow-hidden rounded-sm border-2 transition-colors ${
                fotoActiva === i ? "border-amber-500" : "border-transparent"
              }`}
            >
              <img
                src={foto}
                alt={`${nombre} - foto ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Habitaciones() {
  const [habActiva, setHabActiva] = useState<number>(1)
  const hab = habitaciones.find(h => h.id === habActiva)!

  return (
    <div className="flex flex-col">

      {/* ── CABECERA ── */}
      <div className="bg-stone-900 py-16 px-6 text-center">
        <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-2">
          El alojamiento
        </p>
        <h1 className="font-serif italic text-white text-5xl">
          Habitaciones
        </h1>
      </div>

      {/* ── SELECTOR DE HABITACIÓN ── */}
      <div className="bg-stone-800 flex overflow-x-auto">
        {habitaciones.map(h => (
          <button
            key={h.id}
            onClick={() => setHabActiva(h.id)}
            className={`flex-1 min-w-[160px] py-4 px-4 text-center transition-colors duration-200 border-b-2 ${
              habActiva === h.id
                ? "border-amber-500 bg-stone-700 text-amber-400"
                : "border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-750"
            }`}
          >
            <p className="text-xs tracking-widest uppercase font-light">Hab. {h.id}</p>
            <p className="font-serif italic text-sm mt-0.5">{h.nombre}</p>
          </button>
        ))}
      </div>

      {/* ── DETALLE DE HABITACIÓN ── */}
      <div className="max-w-5xl mx-auto w-full py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Galería */}
          <GaleriaFotos fotos={hab.fotos} nombre={hab.nombre} />

          {/* Info */}
          <div className="flex flex-col">
            {hab.id === 1 && (
              <span className="self-start text-xs tracking-widest uppercase bg-amber-100 text-amber-700 px-3 py-1 rounded-sm mb-4">
                Habitación especial
              </span>
            )}
            <h2 className="font-serif italic text-stone-800 text-4xl mb-2">
              {hab.nombre}
            </h2>
            <div className="w-8 h-px bg-amber-500 mb-6" />
            <p className="text-stone-500 font-light leading-relaxed mb-8">
              {hab.descripcion}
            </p>

            {/* Características rápidas */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: "🛏", label: "Cama",     value: hab.cama        },
                { icon: "👥", label: "Personas", value: `${hab.personas} personas` },
                { icon: "🚿", label: "Baño",     value: hab.bano        },
                { icon: "🪟", label: "Armario",  value: "Incluido"      },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-stone-50 border border-stone-100 rounded-sm p-3">
                  <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">{icon} {label}</p>
                  <p className="font-serif text-stone-700">{value}</p>
                </div>
              ))}
            </div>

            {/* Extras */}
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-3">Incluye</p>
              <ul className="flex flex-wrap gap-2">
                {hab.extras.map(extra => (
                  <li
                    key={extra}
                    className="text-xs text-stone-600 bg-stone-100 px-3 py-1.5 rounded-sm"
                  >
                    {extra}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── RESUMEN DE TODAS LAS HABITACIONES ── */}
      <div className="bg-stone-50 border-t border-stone-200 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-600 text-xs tracking-[0.25em] uppercase text-center mb-2">
            De un vistazo
          </p>
          <h2 className="font-serif italic text-stone-800 text-3xl text-center mb-10">
            Todas las habitaciones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {habitaciones.map(h => (
              <div
                key={h.id}
                onClick={() => {
                  setHabActiva(h.id)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="group cursor-pointer bg-white border border-stone-100 rounded-sm overflow-hidden hover:border-amber-300 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={h.fotos[0]}
                    alt={h.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="font-serif italic text-stone-700 mb-1">{h.nombre}</p>
                  <p className="text-xs text-stone-400">{h.cama} · {h.bano}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Habitaciones