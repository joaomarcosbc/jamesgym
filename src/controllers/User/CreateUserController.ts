import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, cpf, admin } = req.body;

    const createUserService = new CreateUserService();

    const result = await createUserService.execute({
      name,
      email,
      password,
      cpf,
      admin,
    });

    return res.json(result);
  }
}

export { CreateUserController };
