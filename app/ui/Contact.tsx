'use client';

import { useState } from 'react';

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [toastVisible, setToastVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' });
                setToastVisible(true);
                setErrorMessage('');
                setTimeout(() => setToastVisible(false), 3000);
            } else {
                console.log('res', response.json())
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Error enviando el correo.');
            }
        } catch {
            setErrorMessage('Hubo un problema al intentar enviar el correo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contacto" className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-heading">Contacto</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nombre"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Mensaje"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 resize-none"
                            rows={5}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 rounded-lg text-white font-semibold transition-colors duration-300 ${isLoading ? 'bg-primary-300 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600'
                            }`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
                {errorMessage && (
                    <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
                )}
            </div>
            {toastVisible && (
                <div className="fixed bottom-4 right-4 bg-secondary-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300">
                    Mensaje enviado con éxito
                </div>
            )}
        </section>
    );
}
