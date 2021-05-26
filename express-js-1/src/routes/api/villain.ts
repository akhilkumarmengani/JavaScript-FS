import express from 'express';

const villain = express.Router();

villain.get('/',(req,res)=>{
    res.send('I am a Hero');
});

export default villain;