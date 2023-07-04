import { Router } from "express";
import validateSchema from "../middlewares/validateSchema";
import {moviesSchema} from "../schemas/movies.schema";
import {postMovie} from "../controllers/movies.controllers";


const moviesRouter = Router();

moviesRouter.post("/movie",validateSchema(moviesSchema),postMovie);
//moviesRouter.get("/movies",???);
//moviesRouter.patch("/movie/:id",???,???);
//moviesRouter.delete("/movie/:id",???);

export default moviesRouter;