
import db from'../config/db.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// import { sendEmail } from '../services/emailService.js'; 


const registrarCliente = async (req, res) => {
    const { nome, cpf, email, senha } = req.body; // Desestrutura os dados do corpo da requisição

    // Verificar se o usuário já existe no banco de dados
    try {
        const [existingUser] = await db.promise().query('SELECT * FROM clientes WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).send('Usuário já registrado');
        }

        // Criptografar a senha usando bcrypt
        const hashedCPassword = await bcrypt.hash(senha, 10);

        // Inserir o novo usuário no banco de dados
        await db.promise().query(
            'INSERT INTO clientes (nome, cpf, email, senha) VALUES (?, ?, ?, ?)',
            [cpf, email, nome, hashedCPassword]
        );

        res.status(201).send('Usuário registrado com sucesso');
    } catch (err) {
        console.error('Erro ao registrar usuário:', err);
        res.status(500).send('Erro ao registrar usuário');
    }
};

// Função para autenticar um usuário
const loginCliente = async (req, res) => {
    const { email, senha } = req.body; // Desestrutura os dados do corpo da requisição

    // Verificar se o usuário existe no banco de dados
    try {
        const [user] = await db.promise().query('SELECT * FROM clientes WHERE email = ?', [email]);
        if (user.length === 0) {
            return res.status(400).send('Credenciais inválidas');
        }

        // Comparar a senha fornecida com a senha criptografada no banco de dados
        const isMatch = await bcrypt.compare(senha, user[0].senha);
        if (!isMatch) {
            return res.status(400).send('Credenciais inválidas');
        }

        // Gerar um token JWT
        const token = jwt.sign({ userCPF: user[0].cpf }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Erro ao autenticar usuário:', err);
        res.status(500).send('Erro ao autenticar usuário');
    }
};

const registerDogwalker = async (req, res) => {
    const { nome, usuario, email, senha, cpf, telefone } = req.body; // Desestrutura os dados do corpo da requisição

    // Verificar se o usuário já existe no banco de dados
    try {
        const [existingUser] = await db.promise().query('SELECT * FROM dogwalker WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).send('Usuário já registrado');
        }

        // Criptografar a senha usando bcrypt
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Inserir o novo usuário no banco de dados
        await db.promise().query(
            'INSERT INTO dogwalkers (nome, usuario, email, senha, cpf, telefone) VALUES (?, ?, ?, ?, ?, ?)',
            [nome, usuario, email, senha, cpf, telefone]
        );

        res.status(201).send('Usuário registrado com sucesso');
    } catch (err) {
        console.error('Erro ao registrar usuário:', err);
        res.status(500).send('Erro ao registrar usuário');
    }
};

// Função para autenticar um usuário
const loginDogwalker = async (req, res) => {
    const { email, senha } = req.body; // Desestrutura os dados do corpo da requisição

    // Verificar se o usuário existe no banco de dados
    try {
        const [user] = await db.promise().query('SELECT * FROM dogwalker WHERE email = ?', [email]);
        if (user.length === 0) {
            return res.status(400).send('Credenciais inválidas');
        }

        // Comparar a senha fornecida com a senha criptografada no banco de dados
        const isMatch = await bcrypt.compare(senha, user[0].senha);
        if (!isMatch) {
            return res.status(400).send('Credenciais inválidas');
        }

        // Gerar um token JWT
        const token = jwt.sign({ userCPF: user[0].cpf }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Erro ao autenticar usuário:', err);
        res.status(500).send('Erro ao autenticar usuário');
    }
};

export { registrarCliente, loginCliente, registerDogwalker, loginDogwalker }; // Exportando as funções para uso em outros arquivos
