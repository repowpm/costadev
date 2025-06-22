import express from 'express';
import { createContact, getContacts, updateContactStatus } from '../controllers/contactController.js';

const router = express.Router();

// Rutas públicas
router.post('/', createContact);

// Rutas privadas (para admin - aquí podrías agregar middleware de autenticación)
router.get('/', getContacts);
router.put('/:id', updateContactStatus);

export default router; 