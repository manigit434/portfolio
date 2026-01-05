import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('CONTACT BODY:', body);

    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['kattamanikanta434@gmail.com'],
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) return Response.json({ ok: false, error }, { status: 500 });
    return Response.json({ ok: true, data });
  } catch (err) {
    console.error('CONTACT ERROR:', err);
    return Response.json({ ok: false, error: String(err) }, { status: 400 });
  }
}
