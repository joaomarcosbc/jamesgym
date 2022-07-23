import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface TokenUser {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  iat: number;
}

function auth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(404).json({ error: "Token is missing." });
  }

  const [, token] = authToken.split(" ");

  try {
    const user = verify(token, process.env.AUTHSECRET);
    req.user = user as TokenUser;

    return next();
  } catch (error) {
    return res.status(404).json({ error: "Token invalid." });
  }
}

export { auth };
