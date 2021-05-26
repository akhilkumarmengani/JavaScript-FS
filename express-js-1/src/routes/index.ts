import express from 'express';
import hero from './api/hero';
import villain from './api/villain'

const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('Hello Main Application');
});

routes.use('/hero',hero);

routes.use('/hero',villain);


export default routes;