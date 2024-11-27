import { CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

export default function Advantages() {
    const advantages = [
        {
            icon: <CheckCircle className="w-12 h-12 text-primary-500 mx-auto" />,
            title: "Perfil Optimizado",
            description: "Maximiza tu visibilidad con un perfil profesional y atractivo que destaca tus logros clave."
        },
        {
            icon: <TrendingUp className="w-12 h-12 text-primary-500 mx-auto" />,
            title: "Mayor Alcance",
            description: "Aumenta tu presencia en LinkedIn con contenido estratégico que resuena con tu audiencia objetivo."
        },
        {
            icon: <Users className="w-12 h-12 text-primary-500 mx-auto" />,
            title: "Networking Efectivo",
            description: "Establece conexiones valiosas y oportunidades de colaboración a través de un mensaje claro y convincente."
        },
        {
            icon: <Zap className="w-12 h-12 text-primary-500 mx-auto" />,
            title: "Autoridad en tu Industria",
            description: "Posiciónate como un líder de pensamiento con contenido relevante y perspicaz en tu área de experiencia."
        }
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-heading">
                    Ventajas de un Copywriter en LinkedIn para tu Marca Personal
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="bg-background-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                        >
                            {/* Ícono */}
                            <div className="mb-4">{advantage.icon}</div>
                            {/* Título */}
                            <h3 className="text-xl font-semibold mb-2 text-heading">{advantage.title}</h3>
                            {/* Descripción */}
                            <p className="text-text">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
