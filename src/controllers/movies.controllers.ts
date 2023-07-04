import { Request, Response } from "express";
import httpStatus from "http-status";
import {movie} from "../protocols/protocols";
import * as moviesServices from "../services/movies.services";

export async function postMovie(req: Request, res: Response){
    
    const movieData = req.body as movie;

    try{
        const result = await moviesServices.insertMovie(movieData);
        res.sendStatus(httpStatus.OK);

    } catch(error){
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }

}

export async function getMovies(req: Request, res: Response){
    try{
        const movies = await moviesServices.getMovies();
        
        res.status(httpStatus.CREATED).send(movies.rows);

    } catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
        }
}

export async function updateMovie(req: Request, res: Response){

    const {id} = req.params;

    try{
        const selectedMovie = await moviesServices.getMovieById(id);

        if(selectedMovie.rowCount === 0) return res.sendStatus(httpStatus.NOT_FOUND);

        const updatedMovie = await moviesServices.updateMovie(id);
        
        res.sendStatus(httpStatus.OK);

    } catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}