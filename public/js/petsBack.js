import db from'../config/db.js';
import path from 'path';

 export const registrarPets = async (req, res) => {
    const { nome,raca,peso,idade,cliente_cpf } = req.body;

    // Verificar se todos os campos necessários estão preenchidos
    if (!nome || !raca || !peso ||!idade|| !cliente_cpf ) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Verificar se o Pet já existe
        const [existingUser] = await db.promise().query('SELECT * FROM animais WHERE cliente_cpf = ?', [cliente_cpf]);
        if (existingUser.length > 0) {
            return res.status(400).json({ success: false, message: 'Pet já cadastrado com esse e-mail.' });
        }

        // Inserir no banco de dados
        await db.promise().query(
            'INSERT INTO animais (nome,raca,peso,idade,cliente_cpf) VALUES (?, ?, ?, ?, ?)', 
            [nome,raca,peso,idade,cliente_cpf]
        );

        res.status(201).json({ success: true, message: 'Pet cadastrado com sucesso.' });
    } catch (err) {
        console.error('Erro ao registrar Pet:', err);
        res.status(500).json({ success: false, message: 'Erro ao registrar Pet' });
    }
};


