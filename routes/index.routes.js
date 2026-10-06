import express from 'express';
import usersRouter from './aeropuerto.routes.js';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// AQUÍ CONECTAMOS LAS RUTAS DE USUARIOS:
router.use('/users', usersRouter);

export default router;