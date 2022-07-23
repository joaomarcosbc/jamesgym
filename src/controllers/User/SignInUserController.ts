import { Request, Response } from "express";
import { SignInUserService } from "../../services/User/SignInUserService";

class SignInUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const signInUserService = new SignInUserService();

    const result = await signInUserService.execute({
      email,
      password,
    });

    return res.json(result);
  }
}

export { SignInUserController };
