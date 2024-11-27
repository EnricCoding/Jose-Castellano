import Image from 'next/image';

export default function About() {
    return (
        <section id="sobre-mi" className="py-16 bg-background">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Imagen */}
                <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <Image
                        src="/assets/foto-jose.jpg"
                        alt="José, Ghostwriter para LinkedIn"
                        width={200}
                        height={200}
                        className="rounded-full shadow-lg"
                    />
                </div>
                {/* Texto */}
                <div className="w-full md:w-2/3 md:pl-6 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-heading">¿Quién soy?</h2>
                    <p className="text-base md:text-lg text-text mb-6 leading-relaxed">
                        Soy José, un ghostwriter especializado en potenciar marcas personales en LinkedIn.
                    </p>
                    <ul className="list-none space-y-4">
                        {[
                            "Experto en optimización de perfiles de LinkedIn y creación de contenido impactante.",
                            "Más de 100 clientes han mejorado su visibilidad y oportunidades profesionales.",
                            "Habilidades clave: storytelling profesional, copywriting persuasivo y estrategia de contenidos para LinkedIn.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-4 h-4 bg-primary-500 rounded-full mt-1"></span>
                                <span className="text-text leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
