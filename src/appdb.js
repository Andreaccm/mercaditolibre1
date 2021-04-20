const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const app         = express();
const bcrypt      = require('bcrypt');
const mongoose    = require('mongoose');
const user = require('./user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

const mongo_uri = 'mongodb://localhost/todos';

mongoose.connect(mongo_uri, function(err){
    if(err){
        throw err;
    }else{
        console.log(`Successfully connected to ${mongo_uri}`);
    }
});

app.post('/register',(req,res) =>{
    const {name,sname,email,password} = req.body;

    const user = new user({name, sname,email, password});

    user.save(err =>{
        if(err){
            res.status(500).send('ERROR WHEN REGISTERING USER');
        }else{
            res.status(200).send('REGISTERED USER');
        }
    })

});

app.post('/authenticate',(req,res) =>{
    const {email, password} =req.body;

    user.findOne({email},(err,user)=>{
        if(err){
            res.status(500).send('ERROR AUTHENTICATE');
        }else if(!user){
            res.status(500).send('');
        }else{
            user.isCorrectPassword(password, (err, result)=>{
                if(err){
                    res.status(500).send('ERROR AL AUTHENTICAR');
                }else if(result){
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            });
        }
    });
});

app.listen(3000,() =>{
    console.log('server started');
})
module.exports = app;

