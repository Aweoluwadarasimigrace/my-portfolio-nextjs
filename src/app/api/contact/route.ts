import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const { name, email, message } = await req.json();
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transport.sendMail({
         from: `"${name}" <${email}>`,
      to: process.env.EMAIL, 
      subject: `New contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
    return Response.json({message:"Message sent successfully"});
  } catch (error) {
    console.log(error);
  }
};
