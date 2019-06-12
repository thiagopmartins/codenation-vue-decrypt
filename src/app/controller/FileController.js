const fs = require('fs');
const path = require('path');
const DecryptController = require('./DecryptController');

const dir = path.resolve(`./data/answer.json`)

class FileController {
    async create(content) {
        if (!fs.existsSync(dir))
            fs.mkdirSync(dir);
        fs.writeFileSync(dir, content, (err) => {
            if (err) throw err;
        });
        console.log('Arquivo salvo com sucesso!');

        DecryptController.decrypt(JSON.parse(content));
    }

    async load(){
        return fs.readFileSync(dir);
    }
}

module.exports = new FileController();