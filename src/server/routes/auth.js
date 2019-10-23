import express from 'express';
import AuthController from '../controllers/auth';

const router = express.Router();

router.post('/auth/login', (req, res) => AuthController.login(req, res));
router.post('/auth/verify', (req, res) => AuthController.verify(req, res));

export default router;
