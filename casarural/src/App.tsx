import { useState } from "react"
import Habitaciones from "./Components/Habitaciones";
import Inicio from "./Components/Inicio";
import Entorno from "./Components/Entorno";
import Casa from "./Components/Casa";
import Contacto from "./Components/Contacto";

function App() {

  const [tab, setTab] = useState("Inicio");

  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-100">
      <div className="h-16 w-full bg-amber-600 flex items-center justify-end gap-8 pr-32">
        {/* Barra de arriba para elegir entra pestañas */}
        <div
          className={`text-xl font-semibold text-black cursor-pointer ${tab === "Inicio" ? "" : " hover:text-gray-500 "}`}
          onClick={()=> {
            setTab("Inicio")
          }}
        >
          Inicio
        </div>
        <div
          className={`text-xl font-semibold text-black cursor-pointer ${tab === "Habitaciones" ? "" : " hover:text-gray-500 "}`}
          onClick={()=> {
            setTab("Habitaciones")
          }}
        >
          Habitaciones
        </div>
        <div
          className={`text-xl font-semibold text-black cursor-pointer ${tab === "Entorno" ? "" : " hover:text-gray-500 "}`}
          onClick={()=> {
            setTab("Entorno")
          }}
        >
          Entorno
        </div>
        <div
          className={`text-xl font-semibold text-black cursor-pointer ${tab === "Casa" ? "" : " hover:text-gray-500 "}`}
          onClick={()=> {
            setTab("Casa")
          }}
        >
          Casa
        </div>
        <div
          className={`text-xl font-semibold text-black cursor-pointer ${tab === "Contacto" ? "" : " hover:text-gray-500 "}`}
          onClick={()=> {
            setTab("Contacto")
          }}
        >
          Contacto
        </div>
      </div>
      {tab === "Inicio" ? (
        <Inicio />
      ) : tab === "Habitaciones" ? (
        <Habitaciones />
      ) : tab === "Entorno" ? (
        <Entorno />
      ) : tab === "Casa" ? (
        <Casa />
      ) : tab === "Contacto" ? (
        <Contacto />
      ) : null}
    </div>
  )
}

export default App