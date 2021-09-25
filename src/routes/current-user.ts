import express, { Request, Response } from "express";

import { currentUser } from "@srikar-test/common";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  currentUser,
  async (req: Request, res: Response) => {
    res.send({ user: req.currentUser || null });
  }
);

export { router as currentUser };
