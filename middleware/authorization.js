import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET;

 const autenticarToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Obtém o token da autorização

    // Verifica se o token está presente
    if (!token) {
        return res.status(401).send('Acesso negado. Token ausente.');
    }

    try {
        // Verifica a validade do token
        const decoded = jwt.verify(token, SECRET_KEY);
        req.userId = decoded.userId;
        req.email = decoded.email;
        req.nome = decoded.nome;

        // Chama o próximo middleware ou controlador
        next();
    } catch (err) {
        console.error('Erro ao verificar token:', err);

        // Tratamento específico para token expirado
        if (err.name === 'TokenExpiredError') {
            return res.status(401).send('Token expirado. Faça login novamente.');
        }

        // Para token inválido
        return res.status(401).send('Token inválido ou expirado.');
    }
};




// export async function obterPerfil() {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Você precisa estar logado para acessar o perfil.');
//       return;
//     }
  
//     try {
//       const response = await fetch('/api/auth/perfil', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`  // Inclui o token no cabeçalho
//         }
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//         console.log('Perfil:', result);
//       } else {
//         console.error('Erro ao acessar o perfil:', result);
//       }
//     } catch (error) {
//       console.error('Erro ao acessar o perfil:', error);
//     }
//   }

export default autenticarToken;
