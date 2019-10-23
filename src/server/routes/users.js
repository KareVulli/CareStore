import express from 'express';
import validation from '../middleware/validation';
import userSchemas from '../schemas/users';
import UsersController from '../controllers/users';

const router = express.Router();

router.get('/users', (req, res) => UsersController.getAll(req, res));
router.post('/users', validation(userSchemas.user), (req, res) => UsersController.create(req, res));
router.delete('/users', (req, res) => UsersController.deleteAll(req, res));

router.get('/users/:id', (req, res) => UsersController.get(req, res));
router.delete('/users/:id', (req, res) => UsersController.delete(req, res));

router.get('/users/by-email', (req, res) => UsersController.isNewEmail(req, res));

export default router;
