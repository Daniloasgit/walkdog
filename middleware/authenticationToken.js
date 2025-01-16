const jwt = require('jsonwebtoken');

const autenticarToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // Obtendo o token da header 'Authorization'
  
  if (!token) {
      return res.status(401).json({ message: 'Acesso negado. Token ausente.' });
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Passando o segredo
      req.userId = decoded.userId;
      req.email = decoded.email;
      req.nome = decoded.nome;
      next();
  } catch (err) {
      console.error('Erro ao verificar token:', err);
      if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expirado. Faça login novamente.' });
      }
      res.status(401).json({ message: 'Token inválido ou expirado.' });
  }
};
const gerarToken = (usuario) => {
    const token = jwt.sign({ id: usuario.id }, secretKey, { expiresIn: '1h' });
    return token;
  };
  
  const verificarToken = (token) => {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (erro) {
      return null;
    }
  };

  // Função para armazenar o token no localStorage
function armazenarToken(result) {
    if (result.token) {
        // Verifica se já existe um token armazenado no localStorage
        const existingToken = localStorage.getItem('token');
        
        if (!existingToken) {
            // Caso não exista, armazena o novo token
            localStorage.setItem('token', result.token);  
            alert('Login realizado com sucesso');
        } else {
            // Se já existe um token, você pode apenas usar o existente ou atualizá-lo conforme necessário
            console.log('Token já está armazenado.');
        }

        // Redireciona para a página principal ou dashboard
        window.location.href = 'dashboard.html'; 
    } else {
        // Se não houver token, exibe mensagem de erro
        alert('Erro ao fazer login: ' + (result.message || 'Verifique suas credenciais.'));
    }
}
  
  module.exports = { autenticarToken, gerarToken, verificarToken, armazenarToken };


