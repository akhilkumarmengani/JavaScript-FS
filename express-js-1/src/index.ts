import express from 'express';
import routes from './routes/index' ;

const app = express();
const port = 3000;

app.use('/api',routes);

/*app.get('/api', (req,res)=>{
    res.send("Hello Akhil");
});
*/

app.listen(port, ()=>{
    console.log("Listening...");
});