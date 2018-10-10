import express from 'express';
import api from './api';
import home from './home';

const router = express.Router();



router.get('/', (req, res) => {
  res.send('You\'ve reached index routes');
});

router.use('/api', api);
router.use('/home', home);

export default router;