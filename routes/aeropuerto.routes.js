import express from 'express';
import usersController from '../controllers/aeropuerto.controllers.js';

const router = express.Router();

//  Consultar todos
router.get('/all', function(req, res) {
    const response = usersController.mostrarTodos();
    res.status(response.status).json(response.data);
});

//  Crear nuevo
router.post('/create', function(req, res) {
    const response = usersController.crear(req.body);
    res.status(response.status).json(response);
});

//  Actualizar por ID
router.put('/update/:id', function(req, res) {
    const { id } = req.params;
    const response = usersController.actualizar(id, req.body);
    res.status(response.status).json(response);
});

// Eliminar por ID
router.delete('/delete/:id', function(req, res) {
    const { id } = req.params;
    const response = usersController.eliminar(id);
    res.status(response.status).json(response);
});

export default router;