import jwt from 'jsonwebtoken'

const utils = {
    isEmpty: function (obj) {
        return Object.keys(obj).length === 0;
    },

    verifyToken: function(request, response, next) {
        let token = request.header('Authorization');
        if(!token) return response.status(401).json({ error: 'Acceso denegado'});
        try {
            let verificado =  jwt.verify(token, process.env.TOKEN_SECRET);
            request.user = verificado;
            next();
        } catch (error) {
            response.status(400).json({ error: 'Token invalido'});
        }
    }
}


export default utils;