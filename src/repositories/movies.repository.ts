import connection from "../database/index";
import {movie} from "../protocols/protocols";

export async function insertMovieIntoDB(movieData: movie){

    const {name, platform, kind} = movieData;

    return await connection.query(`INSERT INTO movies (name, platform, kind) VALUES ($1, $2, $3);`,[name, platform, kind]);
}

export async function getMoviesFromDB(){
    return await connection.query(`SELECT * FROM movies;`);
}

export async function getMovieById(id: string){
    return await connection.query(`SELECT * FROM movies WHERE id=$1;`,[id]);
}

export async function updateMovieStatus(id: string){
    return await connection.query(`UPDATE movies SET seen=true WHERE id=$1;`,[id]);
}

export async function deleteMovieById(id: string){
    return await connection.query(`DELETE FROM movies WHERE id=$1;`,[id]);
}