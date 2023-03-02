import nodemailer from "nodemailer";

interface ForgotPasswordResponse {
  message: string;
}

export const forgotPasswordService = async (
  email: string,
  resetLink: string,
  username: string
): Promise<ForgotPasswordResponse> => {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Password reset",
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: sans-serif;
            }
            .button {
              background-color: #008CBA;
              border: none;
              color: white;
              padding: 10px 20px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              border-radius: 4px;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <p>Olá, ${username}</p>
          <p>Recebemos uma solicitação para redefinir sua senha.</p>
          <p>Para redefinir sua senha, clique no botão abaixo:</p>
          <a href="${resetLink}" class="button">Reset password</a>
          <p>Se você não solicitou uma redefinição de senha, por favor, ignore este e-mail.</p>
        </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);

  return {
    message: "A password recovery email was successfully sent.",
  };
};
