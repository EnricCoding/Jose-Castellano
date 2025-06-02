import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Todos los campos son obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });


    await transporter.sendMail({
      from: `"${name}" <${email}>`, 
      to: process.env.EMAIL_USER, 
      subject: `Nuevo mensaje de ${name}`,
      text: message, 
    });

    return new Response(
      JSON.stringify({ message: "Correo enviado correctamente" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return new Response(
      JSON.stringify({ message: "Error enviando el correo" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
