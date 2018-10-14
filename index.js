import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import validator from 'express-validator';
import routes from './routes';
import models from './database/models';
import customValidator from './middlewares/validators/custom-validator';
import customSanitizer from './middlewares/validators/custom-sanitizer';


const app = express(),
  port = process.env.PORT;

// logger
app.use(morgan('dev'));

// configure validator
app.use(validator({ customValidators: customValidator, customSanitizers: customSanitizer }));

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json());

app.use('/api-docs', express.static(path.join(__dirname, '../public/api-docs')));

// use the defined routes
app.use('/', routes);

// sync() will create all table if they doesn't exist in database
models.sequelize.sync().then(() => {
  app.listen(port || 3000, () => console.log(`Started on port ${port}`));
});


export default app;
