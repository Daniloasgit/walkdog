import db from '../config/db.js';
import path from 'path';


 export const getAllClientes = async (req, res) => {
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



// função deletar cliente
 export const deletarCliente = async (req, res) => {
    const { id } = req.params;

    try {
        await db.promise().query('DELETE FROM clientes WHERE id =?', [id]);
        res.status(200).json({ message: 'Cliente deletado com sucesso.' });
    } catch (err) {
        console.error('Erro ao deletar cliente:', err);
        res.status(500).json({ message: 'Erro ao deletar cliente.' });
    }
};



//função para buscar clientes 


