import express from 'express';
import hero from './api/hero';
import villain from './api/villain'
import logger from '../utilities/logger'

const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('Hello Main Application');
});

routes.use('/',logger,hero);

routes.use('/villain',villain);


export default routes;