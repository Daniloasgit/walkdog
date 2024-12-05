const db = require('../config/db'); //Conexão com banco de dados

const express = require('express');
const router = express.Router();
const servicoController = require('../controles/servicoController');

//Função para chamar todos os serviços
const getAllServices = (req, res) => {
    db.query('SELECT * FROM servico', (err, results) => {
        if(err) {
            console.error('Erro ao obter serviço:', err);
            res.status(500).send('Erro ao obter serviço');
            return;
        }
        res.json(results);
    });
};

const addService = (req, res) => {
    const{id, dogwalker_id, cliente_id, animal_id, preco_servico, entrega, devolucao} = req.body;

    //Verificar duplicidade
    db.query(
        'SELECT * FROM servico WHERE id=? AND dogwalker_id=? AND cliente_id=? AND animal_id=? AND preco_servico=? AND entrega=? AND devolucao=?',
        [id, dogwalker_id, cliente_id, animal_id, preco_servico, entrega, devolucao],
        (err, results) => {
            if(err) {
                console.error('Erro ao verificar serviço', err);
                res.status(500).send('Erro ao verificar serviço');
                return;
            }
            if(results.length > 0) {
                res.status(400).send('Serviço já cadastrado');
                return;
            }

    db.query('INSERT INTO servico(id, dogwalker_id, cliente_id, animal_id, preco_servico, entrega, devolucao) VALUES(?, ?, ?, ?, ?, ?, ?)',
        [id, dogwalker_id, cliente_id, animal_id, preco_servico, entrega, devolucao],
        (err, results) => {
            if(err) {
                console.error('Erro ao adicionar serviço:', err);
                res.status(500).send('Erro ao adicionar serviço');
                return;
            }
            res.status(201).send('Serviço adiconado com sucesso');
        }
    );
        }
    );
}

// //Função para deletar o serviço após 1 ano de conclusão
// function deleteServiceByData() {
//     db.query('DELETE FROM servico WHERE devolucao < DATE_SUB(NOW(), INTERVAL 6 MONTH)');

// //Executar a consulta
// db.execute(query, (err, results) => {
//     if(err) {
//         console.error('Erro ao apagar dados:', err);
//     } else {
//         console.log(`${results.affectedRows} registros apagados.`);
//     }
// });
// }

// //Execução da função
// deleteServiceByData();

    
// const cron = require ('node-cron');
// const db = require('../config/db'); // Importa a conexão com o banco de dados



module.exports = {
    getAllServices,
    addService
};