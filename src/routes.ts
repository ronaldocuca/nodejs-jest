import { Router } from "express";
import { UsersController } from "./controllers/usersController";

const routes = Router();

const userController = new UsersController();

routes.get('/users', userController.listarUsuario);

routes.post('/users', userController.criarUsuario)


export { routes };