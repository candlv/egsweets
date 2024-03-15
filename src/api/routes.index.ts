import { Router, Request, Response } from "express";
import userRoutes from "../users/routes.user";

//main route handler
const home = async (req: Request, res: Response) => {
  res.send(`Hello WOrld!`);
};

//main route
const routes = Router();
routes.get("/", home);

//users routes
routes.use(userRoutes);

export default routes;
