import { Router } from "express";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { SignInUserController } from "../controllers/User/SignInUserController";

const routerUsers = Router();

const createUserController = new CreateUserController();
const signInUserController = new SignInUserController();

routerUsers.post("/cadastro", createUserController.handle);
routerUsers.post("/login", signInUserController.handle);

export { routerUsers };
