// backend/routes/user.route.js
import express from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { uploadSingle, handleMulterError } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', verifyToken, getUser);
router.put('/:id', verifyToken, uploadSingle, handleMulterError, updateUser); 
router.delete('/:id', verifyToken, deleteUser);

export default router;