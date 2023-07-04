import {movie} from "../protocols/protocols";
import * as moviesRepository from "../repositories/movies.repository";

export async function insertMovie(movieData: movie){

    const result = await moviesRepository.insertMovieIntoDB(movieData);

    if(!result){
        throw{
            type: "internalServerError",
            message: "Erro interno no servidor. Tente novamente mais tarde."
        };
    }
    return result;
}

export async function getMovies(){
    
    const result = await moviesRepository.getMoviesFromDB();

    if(!result){
        throw{
            type: "internalServerError",
            message: "Erro interno no servidor. Tente novamente mais tarde."
        };
    }
    return result;
}

export async function getMovieById(id: string){

    const result = await moviesRepository.getMovieById(id);
    return result;
}

export async function updateMovie(id: string){
    const result = await moviesRepository.updateMovieStatus(id);
    return result;
}