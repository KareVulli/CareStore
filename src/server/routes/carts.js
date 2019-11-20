import express from 'express';
import validation from '../middleware/validation';
import authorization from '../middleware/authorization';
import userSchemas from '../schemas/users';
import cartSchemas from '../schemas/carts';
import CartsController from '../controllers/carts';

const router = express.Router();

router.get('/users/:userId/carts', authorization(), validation(userSchemas.userId), (req, res) => CartsController.getAll(req, res));
router.post('/users/:userId/carts', authorization(), validation(userSchemas.userId), (req, res) => CartsController.create(req, res));

router.get('/users/:userId/carts/active', authorization(), validation(userSchemas.userId), (req, res) => CartsController.getActive(req, res));

router.get('/users/:userId/carts/:cartId', authorization(), validation([...userSchemas.userId, ...cartSchemas.cartId]), (req, res) => CartsController.get(req, res));
// TODO:
// router.put('/users/:userId/carts/:cartId', authorization(), validation([...userSchemas.userId, ...cartSchemas.cartId]), (req, res) => CartsController.get(req, res));

export default router;
