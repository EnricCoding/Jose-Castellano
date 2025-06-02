import { BarChart, TrendingUp } from 'lucide-react';

export default function MissedOpportunities() {

    const statistics = [
        {
            stat: "80%",
            description: "de los leads B2B generados en redes sociales provienen de LinkedIn.",
            icon: <BarChart className="w-12 h-12 text-primary-500" />
        },
        {
            stat: "1%",
            description: "de los usuarios de LinkedIn publican contenido semanalmente.",
            icon: <TrendingUp className="w-12 h-12 text-primary-500" />
        },
    ];

    return (
        <section className="py-16 bg-background-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-heading">
                    El poder de LinkedIn para tu marca personal
                </h2>
                <div className=" rounded-lg  p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {statistics.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                {item.icon}
                                <p className="text-4xl font-bold text-secondary-500 my-4">{item.stat}</p>
                                <p className="text-text max-w-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>

    )
}
