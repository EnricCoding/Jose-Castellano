import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json(); // Extraer el cuerpo de la solicitud
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ message: 'Todos los campos son obligatorios' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        

        // Configurar transporte de correo
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Cambiar a otro proveedor si es necesario
            auth: {
                user: process.env.EMAIL_USER, // Correo electrónico en variables de entorno
                pass: process.env.EMAIL_PASS, // Contraseña en variables de entorno
            },
        });
        
        console.log(name, email, message)

        // Enviar correo
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // Remitente
            to: process.env.EMAIL_USER, // Receptor
            subject: `Nuevo mensaje de ${name}`,
            text: message, // Mensaje en texto plano
        });

        return new Response(
            JSON.stringify({ message: 'Correo enviado correctamente' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error enviando el correo:', error);
        return new Response(
            JSON.stringify({ message: 'Error enviando el correo' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
