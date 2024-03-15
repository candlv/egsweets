import User from "./model.user";
import { Request, Response } from "express";

const user = new User();

//create route controller
export const create = async (req: Request, res: Response) => {
  try {
    const userInfo = await req.body
    const u = await user.register(userInfo);
    res.json({ status: 'success', message: 'You have registerd successfully' });
  } catch (error) {
    res.json({ status: 'error', message: `fail to register ${error}` });
  }
};

//index route controller
export const index = async (req: Request, res: Response) => {
  try {
    const usersList = await user.getUsers();
    res.json(usersList);
  } catch (error) {
    res.json(`fail to get users list: ${error}`);
  }
};
