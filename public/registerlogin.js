import{ register, login, expiredToken } from '../integracao.js'

const btnLogin = document.querySelector('#ent-login-but');
const btnRegisClient = document.querySelector('#ent-but-res');
const btnRegisWalk = document.querySelector('#ent-but-wal');

const dropdown = document.querySelector(".dropdown");
const URL = 'http;//localhost:3000/api'

document.querySelector('#form-regis').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.querySelector('nomeC').value;
    const cpf = document.querySelector('cpfC').value;
    const email = document.querySelector('emailC').value;
    const senha = document.querySelector('senhaC').value;

    if( !nome || !cpf || !email || !senha ) {
        alert('Preencha todos os campos');
        return;
    }
    const result = await register (nome,cpf,email,senha);
    if(result.success) {
        alert('Usuário registrado com sucesso');
        document.getElementsByClassName('form-regis').reset();
        window.location.href = 'cliente.html';
    } else{
        alert('Erro ao registrar usuário');
    }
});


document.querySelector('#form-login').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const result = await login(email, senha);
//     if (result.token) {
//         console.log('Token recebido do servidor', result.token);
//         localStorage.setItem('token', result.token);
//         // Busca o setor do usuário
//         const setorResult = await buscarSetor(result.token);
//         if (setorResult.setor) {
//             const setor = setorResult.setor;
//             // Redireciona com base no setor
//             if (setor === 'docente') {
//                 window.location.href = 'docente.html';
//             } else if (setor === 'coordenação') {
//                 window.location.href = 'coordenacao.html';
//             } else if (setor === 'gestão') {
//                 window.location.href = 'gestao.html';
//             } else {
//                 window.location.href = 'setor_de_compras.html'; // Página padrão
//             }
//         } else {
//             alert(setorResult.message || 'Erro ao obter setor do usuário.');
//         }
//     } else {
//         alert(result.message || 'Login falhou! Verifique suas credenciais.');
//     }
// });

