import { Router } from "express";
import validateSchema from "../middlewares/validateSchema";
import {moviesSchema} from "../schemas/movies.schema";
import {postMovie, getMovies, updateMovie, deleteMovie} from "../controllers/movies.controllers";


const moviesRouter = Router();

moviesRouter.post("/movie",validateSchema(moviesSchema),postMovie);
moviesRouter.get("/movies",getMovies);
moviesRouter.patch("/movie/:id",updateMovie);
moviesRouter.delete("/movie/:id",deleteMovie);

export default moviesRouter;