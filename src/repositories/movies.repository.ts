import connection from "../database/index";
import {movie} from "../protocols/protocols";

export async function insertMovieIntoDB(movieData: movie){

    const {name, platform, kind} = movieData;

    return await connection.query(`INSERT INTO movies (name, platform, kind) VALUES ($1, $2, $3)`,[name, platform, kind]);
}
