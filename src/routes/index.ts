import { Router } from "express";
import { auth } from "../middlewares/auth";
import { routerUsers } from "./user.routes";
import { Request, Response } from "express";

const router = Router();

router.use("/", routerUsers);

export { router };
