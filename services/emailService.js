const nodemailer = require('nodemailer'); // Importa o módulo 'nodemailer' para envio de e-mails

// Função para criar o transporter (configuração do serviço de e-mail)
const createTransporter = () => {
  // Verificação das variáveis de ambiente
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error('As variáveis de ambiente EMAIL_USER e EMAIL_PASS não estão definidas!');
  }

  return nodemailer.createTransport({
    service: 'gmail', // Serviço de e-mail (pode ser alterado conforme necessidade)
    host: 'smtp.gmail.com', // Servidor SMTP do Gmail
    port: 465,
    secure: true, // Porta 465 usa TLS/SSL
    auth: {
      user: EMAIL_USER, // E-mail de envio
      pass: EMAIL_PASS, // Senha de e-mail de envio
    }
  });
};

// Função para enviar e-mail
const sendEmail = async (to, subject, text) => {
  try {
    const transporter = createTransporter(); // Cria o transporter com as credenciais

    const mailOptions = {
      from: process.env.EMAIL_USER, // E-mail de envio
      to, // Destinatário
      subject, // Assunto do e-mail
      text, // Corpo do e-mail
    };

    // Envia o e-mail
    const info = await transporter.sendMail(mailOptions);

    console.log('E-mail enviado com sucesso:', info.response); // Confirmação de sucesso
    return info;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error); // Tratamento de erros
    throw new Error('Erro ao enviar o e-mail');
  }
};

// Exporta a função sendEmail para ser usada em outros módulos
module.exports = { sendEmail };
