import express from 'express';
import controller from '../../../controllers/user';
import validator from '../../../middlewares/validators/user';

const router = express.Router();

router.post('/', validator.create, controller.userCreate);
router.post('/login', validator.login, controller.login);
router.get('/logout');

export default router;
