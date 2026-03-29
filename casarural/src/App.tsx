import { useState } from "react"
import Habitaciones from "./Components/Habitaciones"
import Inicio from "./Components/Inicio"
import Entorno from "./Components/Entorno"
import Casa from "./Components/Casa"
import Contacto from "./Components/Contacto"

const TABS = ["Inicio", "Habitaciones", "Entorno", "Casa", "Contacto"] as const
type Tab = typeof TABS[number]

function App() {
  const [tab, setTab] = useState<Tab>("Inicio")

  return (
    <div className="w-screen min-h-screen flex flex-col bg-stone-50">
      {/* Navbar */}
      <nav className="h-16 w-full bg-stone-900 flex items-center justify-between px-12 sticky top-0 z-50">
        <span className="font-serif italic text-amber-400 text-lg tracking-wide">
          Casa Rural · Prádena
        </span>
        <div className="flex items-center gap-8">
          {TABS.map(t => (
            <div
              key={t}
              onClick={() => setTab(t)}
              className={`
                text-sm tracking-widest uppercase font-light transition-colors duration-200 pb-0.5
                ${tab === t
                  ? "text-amber-400 border-b border-amber-400"
                  : "text-stone-400 hover:text-stone-200 cursor-pointer border-b border-transparent"
                }
              `}
            >
              {t}
            </div>
          ))}
        </div>
      </nav>

      {/* Contenido */}
      <main className="flex-1">
        {tab === "Inicio"       && <Inicio setTab={setTab} />}
        {tab === "Habitaciones" && <Habitaciones />}
        {tab === "Entorno"      && <Entorno />}
        {tab === "Casa"         && <Casa />}
        {tab === "Contacto"     && <Contacto />}
      </main>
    </div>
  )
}

export default App