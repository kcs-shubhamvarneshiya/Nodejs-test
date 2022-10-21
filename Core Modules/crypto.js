const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = '2001MyForever';


crypto.scrypt(password, 'salt', 24, (err, key) => {
    if (err) throw err;
  
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
        if (err) throw err;

        const cipher = crypto.createCipheriv(algorithm, key, iv);

        let encrypted = '';
        cipher.setEncoding('hex');

        cipher.on('data', (chunk) => encrypted += chunk);
        cipher.on('end', () => console.log(encrypted));

        cipher.write('some clear text data');
        cipher.end();
    });
});