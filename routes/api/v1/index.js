import swaggerJSDoc from 'swagger-jsdoc';
import express from 'express';
import user from './user';

const router = express.Router();


// Swagger jsdoc configuration
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Api documentation for the TSS inventory app.',
  },
  host: 'localhost:3100/',
  basePath: 'api/v1',
};


// options for the swagger docs
const options = {

  // import swaggerDefinitions
  swaggerDefinition,

  // path to the API docs
  apis: ['./swagger/*.js']

};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);


router.get('/swagger.json', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.get('/', (req, res) => {
  res.send('You\'ve reached api/v1 routes');
});
router.use('/user', user);

export default router;
