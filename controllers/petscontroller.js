import db from '../config/db.js';
import path from 'path';

 export const getAllPets = async (req, res) => {
    const query = 'SELECT * FROM animais';

    try {
        const [results] = await db.promise().query(query);  // Uso de await, sem callback
        if (results.length === 0) {
            return res.status(404).json({ message: 'Nenhum pet encontrado.' });
        }
        return res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao encontrar pet:', err);
        return res.status(500).json({ message: 'Erro ao encontrar pet', error: err.message });
    }
};


export const addPet = async (req, res) => {
    const { nome, raca, peso, idade, cliente_cpf } = req.body;

    // Verificando se algum campo está faltando
    if (!nome || !raca || !peso || !idade || !cliente_cpf) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        const [existingUser] = await db.promise().query('SELECT * FROM animais WHERE nome = ? AND cliente_cpf = ?', [nome, cliente_cpf]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Pet já cadastrado.' });
        }

        await db.promise().query('INSERT INTO animais (nome, raca, peso, idade, cliente_cpf) VALUES (?, ?, ?, ?, ?)', [nome, raca, peso, idade, cliente_cpf]);

        return res.status(201).json({ message: 'Pet registrado com sucesso.' });
    } catch (err) {
        console.error('Erro ao cadastrar Pet:', err);
        return res.status(500).json({ message: 'Erro ao cadastrar Pet.' });
    }
};

 export const updatePet = async (req, res) => {
    const { id } = req.params;
    const { nome, raca, peso, idade } = req.body;

    try {
        const [pet] = await db.promise().query('SELECT * FROM animais WHERE id =?', [id]);
        if (pet.length === 0) {
            return res.status(404).json({ message: 'Pet não encontrado.' });
        }
        await db.promise().query('UPDATE animais SET nome =?, raca =?, peso =?, idade =? WHERE id =?', [nome, raca, peso, idade, id]);
        return res.status(200).json({ message: 'Pet atualizado com sucesso.' });
    } catch (err) {
        console.error('Erro ao atualizar Pet:', err);
        return res.status(500).json({ message: 'Erro ao atualizar Pet.' });
    }
};


 export const deletePet = async (req, res) => {
    const { id } = req.params;

    try {
        const [pet] = await db.promise().query('SELECT * FROM animais WHERE id =?', [id]);
        if (pet.length === 0) {
            return res.status(404).json({ message: 'Pet não encontrado.' });
        }
        await db.promise().query('DELETE FROM animais WHERE id =?', [id]);
        return res.status(200).json({ message: 'Pet deletado com sucesso.' });
    } catch (err) {
        console.error('Erro ao deletar Pet:', err);
        return res.status(500).json({ message: 'Erro ao deletar Pet.' });
    }
};

