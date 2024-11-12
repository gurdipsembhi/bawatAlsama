// Server Route in sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        });

        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, message: 'Email not sent' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
