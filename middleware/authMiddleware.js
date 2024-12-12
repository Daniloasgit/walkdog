const jwt = require ('jsonwebtoken');
const authMiddleware = (req,res,next) => {
    const token = req.header('Authorization').replace('Bearer',);
    if (!token) {
        return res.status(401).send('ACESSO NEGADO, NENHUM TOKEN FORNECIDO.');
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.usuario = decoded; 
        next();
    } catch(err) {
        res.status(400).send('TOKEN INVALIDO.');
    }

};

module.exports = authMiddleware;