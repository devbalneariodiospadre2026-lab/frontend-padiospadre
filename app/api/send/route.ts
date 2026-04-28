import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const {data, error} = await resend.emails.send({
      from: "Parque Acuatico Dios Padre <contacto@padiospadre.com.mx>", // ⚠️ luego cambia a tu dominio
      to: ["informacion@padiospadre.com.mx"], // donde quieres recibir
      subject: `Nuevo mensaje: ${subject}`,
      replyTo:email,
      react: EmailTemplate({
        name,
        phone,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error enviando el correo" },
      { status: 500 }
    );
  }
}