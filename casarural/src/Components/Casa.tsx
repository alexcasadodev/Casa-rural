import { useState } from "react"

// Sustituye por tus fotos reales
import fotoPortada   from '../public/casa_entera.jpg'
import fotoSalon1    from '../public/casa_entera.jpg'
import fotoSalon2    from '../public/casa_entera.jpg'
import fotoCocina    from '../public/casa_entera.jpg'
import fotoExterior  from '../public/casa_entera.jpg'
import fotoPiscina   from '../public/casa_entera.jpg'
import fotoGaraje    from '../public/casa_entera.jpg'
import fotoBarbacoa  from '../public/casa_entera.jpg'

const zonas = [
  {
    id: "salon-principal",
    nombre: "Salón principal",
    emoji: "🛋️",
    descripcion: "El corazón de la casa. Amplio salón con dos sofás, mesa grande y mesa auxiliar, televisión y chimenea de leña para las noches de invierno. El lugar perfecto para reunirse toda la familia.",
    fotos: [fotoSalon1],
    detalles: ["Chimenea de leña", "Smart TV", "Dos sofás", "Mesa grande y auxiliar", "Calefacción"],
  },
  {
    id: "salon-secundario",
    nombre: "Salón secundario",
    emoji: "📺",
    descripcion: "Un segundo salón más íntimo, ideal para quien quiera descansar o ver una película con más tranquilidad. Cuenta con sofá cama, televisión y mesa grande.",
    fotos: [fotoSalon2],
    detalles: ["Sofá cama", "Smart TV", "Mesa grande", "Ideal para descanso"],
  },
  {
    id: "cocina",
    nombre: "Cocina",
    emoji: "🍳",
    descripcion: "Cocina completamente equipada con todo lo necesario para preparar desde un desayuno rápido hasta una gran comida. Con mesa para comer en la propia cocina.",
    fotos: [fotoCocina],
    detalles: ["Horno", "Lavavajillas", "Microondas", "Cafetera", "Nevera y frigorífico", "Mesa de comedor"],
  },
  {
    id: "exterior",
    nombre: "Porche y jardín",
    emoji: "🌿",
    descripcion: "El porche techado tiene una mesa con sillas perfecta para tomar algo al aire libre, con sombra a ciertas horas y sol a otras según el momento del día. El jardín que lo rodea invita a pasear y relajarse.",
    fotos: [fotoExterior],
    detalles: ["Porche techado", "Mesa con sillas exterior", "Jardín", "Zona de sombra y sol"],
  },
  {
    id: "piscina",
    nombre: "Piscina",
    emoji: "🏊",
    descripcion: "Una bonita piscina de madera, perfecta para refrescarse en verano. Pequeña y acogedora, rodeada de tumbonas para tomar el sol con comodidad.",
    fotos: [fotoPiscina],
    detalles: ["Piscina de madera", "Tumbonas", "Zona de baño privada"],
  },
  {
    id: "barbacoa",
    nombre: "Barbacoa",
    emoji: "🔥",
    descripcion: "Zona de barbacoa exterior para disfrutar de una buena comida al aire libre. Imprescindible en las tardes de verano.",
    fotos: [fotoBarbacoa],
    detalles: ["Barbacoa exterior", "Zona de comida al aire libre"],
  },
  {
    id: "garaje",
    nombre: "Garaje",
    emoji: "🚗",
    descripcion: "Garaje cubierto incluido para aparcar con tranquilidad. Y como bonus, una diana de dardos para los ratos de ocio.",
    fotos: [fotoGaraje],
    detalles: ["Garaje cubierto", "Diana de dardos", "Parking privado"],
  },
]

const comodidades = [
  { icon: "🔥", label: "Chimenea de leña"     },
  { icon: "🍳", label: "Cocina equipada"       },
  { icon: "🏊", label: "Piscina de madera"     },
  { icon: "🔥", label: "Barbacoa exterior"     },
  { icon: "🌿", label: "Jardín y porche"       },
  { icon: "🚗", label: "Garaje cubierto"       },
  { icon: "📶", label: "WiFi"                  },
  { icon: "🌡️", label: "Calefacción"           },
  { icon: "🛋️", label: "Sofá cama"             },
  { icon: "🎯", label: "Diana de dardos"       },
  { icon: "📺", label: "Smart TV (x2)"         },
  { icon: "🍽️", label: "Lavavajillas"          },
]

function ZonaCard({ zona, activa, onClick }: {
  zona: typeof zonas[0]
  activa: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border rounded-sm overflow-hidden transition-all duration-200 ${
        activa
          ? "border-amber-400 shadow-md"
          : "border-stone-100 hover:border-amber-200"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={zona.fotos[0]}
          alt={zona.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {activa && (
          <div className="absolute inset-0 bg-amber-500/10" />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <p className="text-white font-serif italic text-sm">{zona.nombre}</p>
        </div>
      </div>
    </div>
  )
}

function Casa() {
  const [zonaActiva, setZonaActiva] = useState(zonas[0])

  return (
    <div className="flex flex-col">

      {/* ── CABECERA ── */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={fotoPortada}
          alt="La casa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4">
          <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-2">
            El alojamiento
          </p>
          <h1 className="font-serif italic text-white text-5xl">
            La Casa
          </h1>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className="max-w-2xl mx-auto py-16 px-6 text-center">
        <div className="w-10 h-px bg-amber-500 mx-auto mb-8" />
        <p className="text-stone-600 font-light leading-relaxed">
          Una casa rural con todo lo necesario para que tu estancia sea cómoda y memorable.
          Dos salones, cocina equipada, piscina de madera, jardín con porche y garaje.
          Todo pensado para que no te falte de nada.
        </p>
        <div className="w-10 h-px bg-amber-500 mx-auto mt-8" />
      </div>

      {/* ── ZONAS DE LA CASA ── */}
      <div className="bg-stone-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-600 text-xs tracking-[0.25em] uppercase text-center mb-2">
            Recorre la casa
          </p>
          <h2 className="font-serif italic text-stone-800 text-4xl text-center mb-12">
            Zonas del alojamiento
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Panel detalle zona activa */}
            <div className="bg-white border border-stone-100 rounded-sm overflow-hidden sticky top-20">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={zonaActiva.fotos[0]}
                  alt={zonaActiva.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{zonaActiva.emoji}</span>
                  <h3 className="font-serif italic text-stone-800 text-2xl">
                    {zonaActiva.nombre}
                  </h3>
                </div>
                <div className="w-8 h-px bg-amber-400 mb-4" />
                <p className="text-stone-500 font-light leading-relaxed text-sm mb-5">
                  {zonaActiva.descripcion}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {zonaActiva.detalles.map(d => (
                    <li key={d} className="text-xs text-stone-600 bg-stone-100 px-3 py-1.5 rounded-sm">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Grid de zonas para seleccionar */}
            <div className="grid grid-cols-2 gap-3">
              {zonas.map(zona => (
                <ZonaCard
                  key={zona.id}
                  zona={zona}
                  activa={zonaActiva.id === zona.id}
                  onClick={() => setZonaActiva(zona)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── COMODIDADES ── */}
      <div className="bg-stone-900 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400 text-xs tracking-[0.25em] uppercase text-center mb-2">
            Todo incluido
          </p>
          <h2 className="font-serif italic text-white text-4xl text-center mb-12">
            Comodidades
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {comodidades.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 border border-stone-700 rounded-sm px-4 py-3 hover:border-amber-600 transition-colors"
              >
                <span className="text-xl flex-shrink-0">{icon}</span>
                <span className="text-stone-300 font-light text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Casa