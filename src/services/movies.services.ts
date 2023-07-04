import {movie} from "../protocols/protocols";
import * as moviesRepository from "../repositories/movies.repository";

export function insertMovie(movieData: movie){
    const result = moviesRepository.insertMovieIntoDB(movieData);

    if(!result){
        throw{
            type: "internalServerError",
            message: "Erro interno no servidor. Tente novamente mais tarde."
        };
    }
    return result;
}