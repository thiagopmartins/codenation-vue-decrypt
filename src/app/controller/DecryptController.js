

class DecryptController {

    async decrypt(content) {
        let decifrado;
        for (const key of content.cifrado) {
            decifrado += String.fromCharCode(key.charCodeAt() - content.numero_casas);
        }
        console.log(`Texto decifrado: ${decifrado}`);
    } 
}

module.exports = new DecryptController();