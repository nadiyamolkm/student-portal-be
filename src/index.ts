import express from 'express';
import bodyParser from 'body-parser';
import { Request,Response } from 'express';
import cors from 'cors';
import routes from './routes';
import db from './db';

const app = express();
const PORT =4001;

const initServer = async (): Promise<void> => {
    try {
      app.listen(PORT, () => {
        console.log('info', `Master Started at PORT ${PORT}`);
      });
    } catch (error) {
      console.log(
        'error',
        `Error Starting Server - ${JSON.stringify(error) || error} `,
      );
    }
  };
  
  async function initDB(): Promise<void> {
    await db.init();
    initServer();
  }

  initDB()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use('/',routes);

app.get('/', (req:Request, res:Response) => {

    res.send('Well done!');
})

app.post('/', (req, res) => {
    res.send({
        data : req.body
    });
})

// app.listen(4001, () => {
//     console.log('The application is listening on port 4001!');
// })
