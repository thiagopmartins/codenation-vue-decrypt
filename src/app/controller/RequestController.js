const request = require('request');
const FileController = require('./FileController');

class RequestController {
    async get(token) {
        const urlGet = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`;
        console.log(`Inciando processo de get, buscando dados do usuário token: ${token}.`);
        request.get(urlGet, async (_err, res, body) => {          
            if (_err)
                throw new Error(_err);
            console.log(`Resultado obtido com sucesso: ${body}`, '\x1b[0m') ;
            await FileController.create(body);
        });
    }

    async post() {
        const urlPost = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=`;
        console.log(`Inciando processo de post...`);
        await FileController.load();
    }
}

module.exports = new RequestController();