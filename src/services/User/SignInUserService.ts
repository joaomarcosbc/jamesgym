import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { HttpException } from "../../utils/HttpException";

const prisma = new PrismaClient();

class SignInUserService {
  async execute({ email, password }) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new HttpException(400, "Incorrect e-mail or password.");
    }

    const correctPassword = await compare(password, user.password);

    if (!correctPassword) {
      throw new HttpException(400, "Incorrect e-mail or password.");
    }

    const token = await sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      },
      process.env.AUTHSECRET
    );

    console.log(process.env.AUTHSECRET);
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      },
      token: token,
    };
  }
}

export { SignInUserService };
