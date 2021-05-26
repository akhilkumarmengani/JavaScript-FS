import express from 'express';

const hero = express.Router();

hero.get('/',(req,res)=>{
    res.send('I am a Hero');
});

export default hero;