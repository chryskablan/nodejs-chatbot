// TODO: copier le code de l'exercice précédent

// TODO: ajouter le point d'entrée `POST /chat` comme spécifié dans l'énoncé

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

let app = express();
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('Bonjour !');
});

app.get('/hello', function(req, res) {    
    const nom = req.query.nom;

    if(nom !== undefined && nom !==  null){
        res.send('Bonjour, '+nom+' !'); 
    }
    res.send('Quel est votre nom ?');
});

app.post('/chat', function(req, res){

    let responseContent = '{"error":"invalid json"}';

    if(req.body === undefined || req.body === null || req.body.msg === undefined || req.body.msg === null){
        res.send(responseContent);
        return;
    }

    const message = req.body.msg;

    if(message === 'ville'){
        responseContent = 'Nous sommes à Paris';
    }

    if(message === 'météo'){
        responseContent = 'Il fait beau';
    }
    
    res.send(responseContent);
    return;
});

app.listen(PORT, () => {
  console.log('Example app listening at http://localhost:${PORT}')
})