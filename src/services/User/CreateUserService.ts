import { HttpException } from "../../utils/HttpException";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, password, cpf, admin }: IUserRequest) {
    const hashPassword = await hash(password, 0);
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new HttpException(400, "User already exists. ");
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
        cpf,
        admin,
      },
    });

    return user;
  }
}

export { CreateUserService };
