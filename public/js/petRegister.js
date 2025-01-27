import { cadastrarPet } from "../js/apicontroller.js";


// CADASTRO DOS PETS RECEBIDO DOS INPUTS DO FRONT

document.getElementById('form-pet').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário
    
    const nomePet = document.getElementById('nomePet').value;
    const racaPet = document.getElementById('raçaPet').value;
    const pesoPet = document.getElementById('pesoPet').value;
    const idadePet = document.getElementById('idadePet').value;
    const cliente_cpf = document.getElementById('cpfDono').value;
    
    // Verificar se o token de cliente está presente no localStorage
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Você precisa estar logado para cadastrar um pet!');
        window.location.href = 'cliente.html'; // Redireciona para a página de cliente
        return;
    }

    // Validação para garantir que todos os campos estão preenchidos
    if (!nomePet || !racaPet || !pesoPet || !idadePet || !cliente_cpf) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Monta o objeto com os dados do pet
    const petData = {
        nome: nomePet,
        raca: racaPet,
        peso: pesoPet,
        idade: idadePet,
        cliente_cpf: cliente_cpf
    };

    try {
        // Chama a função de cadastro do pet (substitua 'cadastrarPet' pela sua função de API real)
        const data = await cadastrarPet(petData, token); // Envia o token junto com os dados do pet
        console.log(data); // Mostra a resposta no console
        
        // Verificando sucesso ou falha no registro
        if (data.success) {  // Altere para 'data' em vez de 'result'
            alert('Pet registrado com sucesso');
            document.getElementById('form-pet').reset(); // Limpa o formulário
            window.location.href = 'cliente.html'; // Redireciona para a página do cliente
        } else {
            console.error('Erro ao registrar pet:', data.message); // Exibe o erro no console
            alert(data.message || 'Erro ao registrar seu pet');  // Exibe mensagem de erro
        }
    } catch (error) {
        console.error('Erro ao enviar os dados do pet:', error);
        alert('Erro ao tentar cadastrar o pet. Tente novamente.');
    }
});