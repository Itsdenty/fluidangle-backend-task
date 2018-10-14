import express from 'express';
import controller from '../../../controllers/contact';
import validator from '../../../middlewares/validators/contact';
import jwtVerify from '../../../middlewares/auth';

const router = express.Router();

router.post('/', jwtVerify.verifyToken, validator.create, controller.createContact);
router.get('/', jwtVerify.verifyToken, controller.getContacts);
export default router;
