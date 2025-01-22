// O código JavaScript que faz a requisição ao servidor
fetch('http://localhost:3000/perfil', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer <seu_token_jwt_aqui>' // Substitua pelo token real
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Exibe os dados do perfil no console
  })
  .catch(err => {
    console.error('Erro:', err); // Se algo der errado, exibe o erro
  });