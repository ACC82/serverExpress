const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const fs = require('fs');
const puerto = process.env.PORT || 8443;

https.createServer({

    key: fs.readFileSync(path.join(__dirname, '/ssl/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '/ssl/cert.pem'))
}, app).listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});


app.use(express.static(path.join(__dirname, 'public')));




