const db = require('../config/db'); // Importa a conexão com o banco de dados

const express = require('express');
const router = express.Router();
const transactionsController = require('../controles/transactionsController');

// Função para obter todas as transações 
const getALLPets = (req, res) => { 
    db.query('SELECT * FROM animal', (err, results) => { 
    if (err) { 
    console.error('Erro ao obter pet:', err); 
    res.status(500).send('Erro ao obter pet'); 
    return; 
    } 
    res.json(results); 
    }); 
    }; 

const addPet = (req, res) => {
    const{id, nome, raca, detalhes, cliente_id} = req.body;
    db.query ('INSERT INTO animal (id, nome, raca, detalhes, cliente_id) VALUES(?, ?, ?, ?, ?)',
    [id, nome, raca, detalhes, cliente_id],
    (err,results) => {
        if (err) {
            console.error('Erro ao adicionar pet:', err);
            res.status(500).send('Erro ao adicionar pet');
            return;
        }
        res.status(201).send('Pet adicionado com sucesso');
    }
    );
};

const updatePetPatch = (req, res) => { 
    const { id } = req.params; 
    const fields = req.body; 
    const query = []; 
    const values = []; 
   
    for (const [key, value] of Object.entries(fields)) { 
      query.push(`${key} = ?`); 
      values.push(value); 
    } 
   
    values.push(id); 
   
    db.query( 
      `UPDATE animal SET ${query.join(', ')} WHERE id = ?`, 
      values, 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao atualizar pet:', err); 
          res.status(500).send('Erro ao atualizar pet'); 
          return; 
        } 
        res.send('Pet atualizado com sucesso'); 
      } 
    ); 
  }; 





       const deletePet =  (req, res) => {
        const{id} = req.params;
        db.query('DELETE FROM animal WHERE id = ?', [id],
            (err, results) => {
                if(err) {
                    console.error('Erro ao deletar pet', err);
                    res.status(500).send('Pet não encontrado');
                return;
            }

            if(results.affectedRows===0) {
                res.status(404).send('Pet não encontrado');
                return;
            }

            res.send('Pet deletado com sucesso')
            }
        );
       };

       
    
    module.exports = { 
        getALLPets,
        addPet,
        updatePetPatch,
        deletePet
    };