import { Request, Response } from "express";
import httpStatus from "http-status";
import {movie} from "../protocols/protocols";
import * as moviesServices from "../services/movies.services";

export async function postMovie(req: Request, res: Response){
    
    const movieData = req.body as movie;

    try{
        const result = moviesServices.insertMovie(movieData);
        res.sendStatus(httpStatus.OK);

    } catch(error){
        if(error.type === "internalServerError"){
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);   
        }
    }

}