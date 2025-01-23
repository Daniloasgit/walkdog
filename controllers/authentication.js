import db from'../config/db.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import path from 'path';


//função para buscar clientes 

const getAllClientes = async (req, res) => {
    const query = 'SELECT * from clientes ';

    try {
        const [results] = await db.promise().query(query); 
        if (results.length === 0) {
            return res.status(404).json({ message: 'Nenhum cliente encontrado.' });
        }
        return res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao encontrar clientes:', err);
        return res.status(500).json({ message: 'Erro ao encontrar clientes', error: err.message });
    }
};

const registrarCliente = async (req, res) => {
    const { nome, cpf, email, senha } = req.body;

    if (!nome || !cpf || !email || !senha) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Verificar se o usuário já existe
        const [existingUser] = await db.promise().query('SELECT * FROM clientes WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Usuário já cadastrado.' });
        }

        // Criptografar a senha
        const hashedSenha = await bcrypt.hash(senha, 10);

        // Inserir o novo cliente no banco de dados
        await db.promise().query('INSERT INTO clientes (nome, cpf, email, senha) VALUES (?, ?, ?, ?)', [nome, cpf, email, hashedSenha]);

        res.status(201).json({ message: 'Usuário registrado com sucesso.' });
    } catch (err) {
        console.error('Erro ao cadastrar cliente:', err);
        res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
    }
};


const loginCliente = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    try {
        let [user] = await db.promise().query('SELECT * FROM clientes WHERE email = ?', [email]);

        if (user.length === 0) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        const isMatch = await bcrypt.compare(senha, user[0].senha);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign(
            { userId: user[0].cpf, email: user[0].email, nome: user[0].nome },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            token,
            user: { nome: user[0].nome, email: user[0].email }
        });
    } catch (err) {
        console.error('Erro ao autenticar usuário:', err);
        return res.status(500).json({ message: 'Erro ao autenticar usuário', error: err.message });
    }
};

const registrarDogwalker = async (req, res) => {
    const { nome, email, senha, cpf } = req.body;

    // Verificar se todos os campos necessários estão preenchidos
    if (!nome || !email || !senha || !cpf) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Verificar se o usuário já existe
        const [existingUser] = await db.promise().query('SELECT * FROM dogwalker WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ success: false, message: 'Usuário já registrado' });
        }

        // Criptografar a senha usando bcrypt
        const hashedDPassword = await bcrypt.hash(senha, 10);

        // Inserir no banco de dados
        await db.promise().query(
            'INSERT INTO dogwalker (nome, email, senha, cpf) VALUES (?, ?, ?, ?)', // Corrigido o erro no SQL (remover vírgula extra)
            [nome, email, hashedDPassword, cpf]
        );

        res.status(201).json({ success: true, message: 'Usuário cadastrado com sucesso.' });
    } catch (err) {
        console.error('Erro ao registrar usuário:', err);
        res.status(500).json({ success: false, message: 'Erro ao registrar usuário' });
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

// função para deletar clientes 

const deletarCliente = async (req, res) => {
    const { id } = req.params;

    try {
        await db.promise().query('DELETE FROM clientes WHERE id =?', [id]);
        res.status(200).json({ message: 'Cliente deletado com sucesso.' });
    } catch (err) {
        console.error('Erro ao deletar cliente:', err);
        res.status(500).json({ message: 'Erro ao deletar cliente.' });
    }
};


// const logout = async (req, res) => {
//     try {
//       console.log('Sessão do usuário:', req.session); // Verifique se a sessão contém os dados do usuário
//       // Verifica se a sessão está ativa (ou se o usuário está autenticado)
//       if (!req.session.usuario) {
//         return res.status(401).json({ message: 'Usuário não autenticado' });
//       }
//       // 1. Destroi a sessão do usuário
//       req.session.destroy((err) => {
//         if (err) {
//           // Se ocorrer erro ao destruir a sessão, retorna um erro
//           console.error('Erro ao destruir sessão:', err);  // Adicionando log para ver o erro específico
//           return res.status(500).json({ message: 'Erro ao tentar destruir a sessão' });
//         }
//         // 2. Limpa o cookie da sessão
//         res.clearCookie('connect.sid');
//         // 3. Responde ao cliente confirmando o logout
//         return res.status(200).json({ message: 'Logout bem-sucedido' });
//       });
//     } catch (err) {
//       console.error('Erro ao tentar fazer logout:', err);
//       return res.status(500).json({ message: 'Erro no servidor ao tentar fazer logout' });
//     }
// };


export {getAllClientes, registrarCliente, loginCliente, registrarDogwalker, loginDogwalker , deletarCliente}; // Exportando as funções para uso em outros arquivos
