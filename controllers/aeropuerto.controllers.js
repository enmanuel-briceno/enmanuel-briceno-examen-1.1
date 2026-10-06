import { datos } from '../database/db.js';

class UsersController {
    mostrarTodos() {
        return {
            status: 200,
            data: datos
        };
    }

    crear(body) {
        return {
            status: 201,
            message: "aerolinea creada exitosamente",
            data: body
        };
    }

   actualizar(id, body) {
    const existe = datos.find(item => item.id == id);

    if (!existe) {
      return {
        status: 404,
        message: "la aerolinea con el ID " + id + " no existe."
      };
    }

    return {
      status: 200,
      message: "aerolinea actualizada exitosamente",
      data: body
    };
  }

    eliminar(id) {
        return {
            status: 200,
            message: "aerolinea eliminada exitosamente"
        };
    }
}

const usersController = new UsersController();
export default usersController;