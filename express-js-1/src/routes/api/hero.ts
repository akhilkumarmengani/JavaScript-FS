import express from 'express';

const hero = express.Router();

hero.get('/Avengers',(req,res)=>{
    res.send('I am an Avenger');
});

export default hero;