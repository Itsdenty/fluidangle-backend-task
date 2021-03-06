import express from 'express';
import controller from '../../../controllers/contact';
import validator from '../../../middlewares/validators/contact';
import jwtVerify from '../../../middlewares/auth';

const router = express.Router();

router.post('/', jwtVerify.verifyToken, validator.create, controller.createContact);
router.patch('/:id', jwtVerify.verifyToken, validator.update, controller.updateContact);
router.get('/', jwtVerify.verifyToken, controller.getContacts);
router.get('/:id', jwtVerify.verifyToken, controller.getContact);
router.delete('/:id', jwtVerify.verifyToken, controller.deleteContact);
router.patch('/:id/star', jwtVerify.verifyToken, controller.starContact);
router.get('/get/starred', jwtVerify.verifyToken, controller.getStarredContacts);
export default router;
