import express from "express";
import cookieSession from "cookie-session";
import "express-async-errors";
import { json } from "body-parser";

import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { currentUser } from "./routes/current-user";
import { signoutRouter } from "./routes/signout";
import { errorHandler } from "@srikar-test/micro-common";
import { NotFoundError } from "@srikar-test/micro-common";

const app = express();
app.set("trust proxy", true);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUser);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
