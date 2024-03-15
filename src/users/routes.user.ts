import { Router } from "express";
import { create, index } from "./handler.user";

const userRoutes = Router();

userRoutes
  .post("/users", create)
  .get("/users", index)

export default userRoutes;
