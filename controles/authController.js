const db = require('../config/db'); //Importa a configuração do banco de dados
const bcrypt = require('bcrypt'); //Importa o bcrypt para criptografar senhas
const jwt = require('jsonwebtoken'); //Importa o jsonwebtoken para gerar tokens JWT


//Função para registrar um novo usuário
const registerUser = async (req, res) => {
    const { id, nome, usuario, email, senha, telefone, atuacao } = req.body;


//Verificar se  o usuário já existe no banco de dados
try {
    const [existingUser] = await db.promise().query('SELECT * FROM clientes WHERE email = ?',
    [email]);

    if(existingUser.length > 0) {
        return res.status(400).send('USUÁRIO JÁ REGISTRADO');
    }

const hashedPassword = await bcrypt.hash(senha,10);

await db.promise().query(
    'INSERT INTO clientes (id, nome, usuario, email, senha, telefone, atuacao) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [id, nome, usuario, email, hashedPassword, telefone, atuacao]
);
res.status(201).send('Usuário registrado com sucesso');
} catch (err) {
console.error('ERRO AO REGISTRAR USUÁRIO:', err);
res.status(500).send('ERRO AO REGISTRAR USUÁRIO');
}

};

//Função para autenticar um usuário
const loginUser = async(req, res) => {
    const { email, senha } = req.body;

    //Verificar se o usuário existe no banco de dados
    try {
        const [user] = await db.promise().query('SELECT FROM clientes WHERE email = ?', [email]);
        if(user.length === 0) {
            return res.status(400).send('Credenciais inválidas');
        }



const isMatch = await bcrypt.compare(senha, user[0].senha);
if (!isMatch) {
    return res.status(400).send('CREDENCIAIS INVÁLIDAS');
}
const token = jwt.sign({usuarioId:user[0].id},process.env.JWT_SECRET,{expiresIn:'1h'});
res.json({token});
    } catch (err) {
        console.error('ERRO AO AUTENTICAR USUÁRIO:', err);
        res.status(500).send('ERRO AO AUTENTICAR USUÁRIO:')
    }

};
 module.exports = {
    registerUser,
    loginUser
 }