import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            {/* Imagen de fondo */}
            <Image
                src="/assets/hero-image.jpeg"
                alt="Professional networking on LinkedIn"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 opacity-60"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-3xl animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                    Potencia tu Marca Personal en{' '}
                    <span className="text-blue-500 transition duration-300 hover:text-blue-400 font-extrabold">
                        LinkedIn
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-background mb-8">
                    Únete a la red donde están todos los profesionales de tu sector
                </p>
                <a
                    href="#contacto"
                    className="px-6 py-3 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 hover:scale-105 transform transition-transform duration-300"
                >
                    Impulsa tu Perfil
                </a>
            </div>
        </section>
    );
}
