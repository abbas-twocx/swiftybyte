import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message, phone } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                // user: process.env.GMAIL_USER,
                // pass: process.env.GMAIL_PASS,
                user: 'abbas143186@gmail.com',
                pass: 'mlbu nhcc cdhh sxbm',
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `Contact Form Submission: ${subject}`,
            text: `
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Message: ${message}
      `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
