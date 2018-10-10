import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes';


const app = express(),
  port = process.env.PORT;

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json());

app.use('/api-docs', express.static(path.join(__dirname, '../public/api-docs')));

// use the defined routes
app.use('/', routes);


app.listen(port || 3000, () => console.log(`Started on port ${port}`));


export default app;
