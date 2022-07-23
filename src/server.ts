import express from "express";
import "express-async-errors";
import "dotenv/config";

import { catchError } from "./middlewares/catchError";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);
app.use(catchError);
app.listen(3020, () => {
  console.log("Estou rodando na porta 3020");
});
