import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user-routes.ts";
import { notFound, errorHandler } from "./middleware/error-middleware.ts";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
