import { Linkedin, PenTool, TrendingUp } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: 'Perfiles de LinkedIn',
            description: 'Optimizo tu perfil para destacar tu experiencia y atraer oportunidades.',
            icon: Linkedin
        },
        {
            title: 'Publicaciones de LinkedIn',
            description: 'Creo contenido atractivo y profesional que resuena con tu audiencia.',
            icon: PenTool
        },
        {
            title: 'Estrategia de contenido',
            description: 'Desarrollo un plan de contenido para aumentar tu visibilidad y engagement.',
            icon: TrendingUp
        },
    ];

    return (
        <section id="servicios" className="py-16 bg-background-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-heading">Servicios de Ghostwriting para LinkedIn</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-background p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                            <service.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
                            <h3 className="text-xl font-bold mb-4 text-heading">{service.title}</h3>
                            <p className="text-text">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

