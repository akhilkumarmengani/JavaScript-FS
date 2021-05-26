import express from 'express';

const villain = express.Router();

villain.get('/',(req,res)=>{
    res.send('I am a Thanos');
});

export default villain;