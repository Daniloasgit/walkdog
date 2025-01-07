// import crypto from 'crypto';
// const db = require('../config/db'); // Importa a configuração da conexão com o banco de dados a partir do arquivo 'db' localizado na pasta 'config'.
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { sendEmail } from '../services/emailService';

// // Função utilitária para buscar usuário no banco
// const getWalkerByEmail = async (email) => {
//   const [user] = await db.promise().query('SELECT * FROM dogwalker WHERE email = ?', [email]);
//   return user[0];
// };

// // Função para registrar um novo usuário
// const registerWalker = async (req, res) => {
//   const { id,nome, email, senha } = req.body;

//   try {
//     const existingUser = await getWalkerByEmail(email);
//     if (existingUser) {
//       return res.status(400).send('Usuário já registrado');
//     }

//     const hashedPassword = await bcrypt.hash(senha, 10);
//     await db.promise().query(
//       'INSERT INTO users (id ,nome, email, senha) VALUES (?, ?, ?, ?)',
//       [ id, nome, email, hashedPassword]
//     );

//     res.status(201).send('Usuário registrado com sucesso');
//   } catch (err) {
//     console.error('Erro ao registrar usuário:', err);
//     res.status(500).send('Erro ao registrar usuário');
//   }
// };

// // Função para autenticar um usuário
// const loginWalker = async (req, res) => {
//   const { email, senha } = req.body;

//   try {
//     const user = await getWalkerByEmail(email);
//     if (!user) {
//       return res.status(400).send('Credenciais inválidas');
//     }

//     const isMatch = await bcrypt.compare(senha, user.senha);
//     if (!isMatch) {
//       return res.status(400).send('Credenciais inválidas');
//     }

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     console.error('Erro ao autenticar usuário:', err);
//     res.status(500).send('Erro ao autenticar usuário');
//   }
// };

// // Função para solicitar redefinição de senha
// const requestPasswordReset = async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await getWalkerByEmail(email);
//     if (!user) {
//       return res.status(404).send('Usuário não encontrado');
//     }

//     const token = crypto.randomBytes(20).toString('hex');
//     const expireDate = new Date(Date.now() + 3600000); // 1 hora para expiração

//     await db.promise().query('UPDATE users SET reset_password_token = ?, reset_password_expires = ? WHERE email = ?', [token, expireDate, email]);

//     const resetLink = `http://localhost:3000/reset-password/${token}`;
//     sendEmail(email, 'Recuperação de Senha', `Clique no link para redefinir sua senha: ${resetLink}`);

//     res.send('E-mail de recuperação de senha enviado');
//   } catch (err) {
//     console.error('Erro ao solicitar redefinição de senha:', err);
//     res.status(500).send('Erro ao solicitar redefinição de senha');
//   }
// };

// // Função para redefinir a senha
// const resetPassword = async (req, res) => {
//   const { token, newPassword } = req.body;

//   try {
//     const [user] = await db.promise().query('SELECT * FROM users WHERE reset_password_token = ? AND reset_password_expires > NOW()', [token]);

//     if (user.length === 0) {
//       return res.status(400).send('Token inválido ou expirado');
//     }

//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     await db.promise().query('UPDATE users SET password = ?, reset_password_token = NULL, reset_password_expires = NULL WHERE id = ?', [hashedPassword, user[0].id]);

//     res.send('Senha redefinida com sucesso');
//   } catch (err) {
//     console.error('Erro ao redefinir senha:', err);
//     res.status(500).send('Erro ao redefinir senha');
//   }
// };

// // Função para enviar o e-mail de boas-vindas
// const sendWelcomeEmail = async (userEmail) => {
//     const subject = 'Bem-vindo ao nosso sistema';
//     const text = 'Olá! Seu cadastro foi realizado com sucesso!';
  
//     try {
//       await sendEmail(userEmail, subject, text);
//       console.log('E-mail de boas-vindas enviado');
//     } catch (error) {
//       console.error('Erro ao enviar o e-mail de boas-vindas:', error.message);
//     }
//   };
  
// export {
//     getWalkerByEmail, 
//     registerWalker,
//     loginWalker,
//     requestPasswordReset,
//     resetPassword };