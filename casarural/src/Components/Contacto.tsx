// Para usar Formspree:
// 1. Ve a https://formspree.io y crea una cuenta gratuita
// 2. Crea un nuevo formulario y copia tu endpoint
// 3. Sustituye "TU_ID_DE_FORMSPREE" por tu ID real (ej: "xpzvwkgb")

const FORMSPREE_ID = "TU_ID_DE_FORMSPREE"

import { useState } from "react"

type FormData = {
    nombre: string
    email: string
    telefono: string
    llegada: string
    salida: string
    personas: string
    mensaje: string
}

type Estado = "idle" | "enviando" | "enviado" | "error"

function Contacto() {
    const [form, setForm] = useState<FormData>({
        nombre: "", email: "", telefono: "",
        llegada: "", salida: "", personas: "", mensaje: "",
    })
    const [estado, setEstado] = useState<Estado>("idle")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setEstado("enviando")
        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(form),
            })
            if (res.ok) {
                setEstado("enviado")
                setForm({ nombre: "", email: "", telefono: "", llegada: "", salida: "", personas: "", mensaje: "" })
            } else {
                setEstado("error")
            }
        } catch {
            setEstado("error")
        }
    }

    return (
        <div className="flex flex-col">

            {/* ── CABECERA ── */}
            <div className="bg-stone-900 py-16 px-6 text-center">
                <p className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-2">
                    Estamos encantados de ayudarte
                </p>
                <h1 className="font-serif italic text-white text-5xl">
                    Contacto
                </h1>
            </div>

            {/* ── CONTENIDO PRINCIPAL ── */}
            <div className="max-w-5xl mx-auto w-full py-16 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    {/* ── INFO DE CONTACTO ── */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <div className="w-10 h-px bg-amber-500 mb-6" />
                            <p className="text-stone-600 font-light leading-relaxed">
                                Para consultas sobre disponibilidad, precios o cualquier duda sobre
                                el alojamiento, no dudes en contactarnos. Te respondemos lo antes posible.
                            </p>
                        </div>

                        {/* Teléfono */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-sm bg-amber-50 flex items-center justify-center flex-shrink-0">
                                <span className="text-lg">📞</span>
                            </div>
                            <div>
                                <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Teléfono</p>

                                <a href="tel:+34612345678"
                                    className="text-stone-700 font-serif text-lg hover:text-amber-600 transition-colors"
                                >
                                    +34 612 345 678
                                </a>
                                <p className="text-stone-400 text-xs font-light mt-0.5">
                                    También disponible por WhatsApp
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-sm bg-amber-50 flex items-center justify-center flex-shrink-0">
                                <span className="text-lg">✉️</span>
                            </div>
                            <div>
                                <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Email</p>

                                <a href="mailto:info@casaruralpradena.es"
                                    className="text-stone-700 font-serif text-lg hover:text-amber-600 transition-colors"
                                >
                                    info@casaruralpradena.es
                                </a>
                                <p className="text-stone-400 text-xs font-light mt-0.5">
                                    Respondemos en menos de 24 horas
                                </p>
                            </div>
                        </div>

                        {/* Ubicación */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-sm bg-amber-50 flex items-center justify-center flex-shrink-0">
                                <span className="text-lg">📍</span>
                            </div>
                            <div>
                                <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Ubicación</p>
                                <p className="text-stone-700 font-serif text-lg">Prádena, Segovia</p>
                                <p className="text-stone-400 text-xs font-light mt-0.5">
                                    A 1 hora de Madrid por la A-1
                                </p>
                            </div>
                        </div>

                        {/* Mapa */}
                        <div className="rounded-sm overflow-hidden border border-stone-100 h-56">
                            <iframe
                                title="Ubicación Prádena"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022!2d-3.7749!3d41.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41e4b0b4b4b4b4b%3A0x0!2sPr%C3%A1dena%2C+Segovia!5e0!3m2!1ses!2ses!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* ── FORMULARIO ── */}
                    <div className="bg-white border border-stone-100 rounded-sm p-8">
                        <h2 className="font-serif italic text-stone-800 text-2xl mb-1">
                            Consulta disponibilidad
                        </h2>
                        <div className="w-8 h-px bg-amber-400 mb-6" />

                        {estado === "enviado" ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                                <span className="text-5xl">✉️</span>
                                <h3 className="font-serif italic text-stone-800 text-2xl">
                                    ¡Mensaje enviado!
                                </h3>
                                <p className="text-stone-500 font-light text-sm leading-relaxed">
                                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                                </p>
                                <button
                                    onClick={() => setEstado("idle")}
                                    className="mt-4 text-xs tracking-widest uppercase text-amber-600 hover:text-amber-500 transition-colors underline"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                                {/* Nombre */}
                                <div>
                                    <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        required
                                        value={form.nombre}
                                        onChange={handleChange}
                                        placeholder="Tu nombre completo"
                                        className="w-full border border-stone-200 rounded-sm px-4 py-2.5 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors"
                                    />
                                </div>

                                {/* Email y Teléfono */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="tu@email.com"
                                            className="w-full border border-stone-200 rounded-sm px-4 py-2.5 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={form.telefono}
                                            onChange={handleChange}
                                            placeholder="+34 600 000 000"
                                            className="w-full border border-stone-200 rounded-sm px-4 py-2.5 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Fechas */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">
                                            Llegada
                                        </label>
                                        <input
                                            type="date"
                                            name="llegada"
                                            value={form.llegada}
                                            onChange={handleChange}
                                            className="w-full border border-stone-200 rounded-sm px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-amber-400 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">
                                            Salida
                                        </label>
                                        <input
                                            type="date"
                                            name="salida"
                                            value={form.salida}
                                            onChange={handleChange}
                                            className="w-full border border-stone-200 rounded-sm px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-amber-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Número de personas */}
                                <div>
                                    <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">
                                        Número de personas
                                    </label>
                                    <select
                                        name="personas"
                                        value={form.personas}
                                        onChange={handleChange}
                                        className="w-full border border-stone-200 rounded-sm px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-amber-400 transition-colors bg-white"
                                    >
                                        <option value="">Selecciona...</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                            <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label className="text-xs tracking-widest uppercase text-stone-400 block mb-1.5">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        name="mensaje"
                                        required
                                        value={form.mensaje}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Cuéntanos qué necesitas, cualquier duda sobre el alojamiento..."
                                        className="w-full border border-stone-200 rounded-sm px-4 py-2.5 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                                    />
                                </div>

                                {estado === "error" && (
                                    <p className="text-red-500 text-xs text-center">
                                        Algo ha salido mal. Inténtalo de nuevo o contáctanos directamente por teléfono.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={estado === "enviando"}
                                    className="bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 transition-colors text-white text-xs tracking-widest uppercase px-8 py-3 mt-2"
                                >
                                    {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
                                </button>

                                <p className="text-stone-400 text-xs text-center font-light">
                                    * Campos obligatorios
                                </p>

                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto