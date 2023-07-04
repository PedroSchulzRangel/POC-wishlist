import joi from "joi";
import {movie} from "../protocols/protocols"

export const moviesSchema = joi.object<movie>({
    name: joi.string().required(),
    platform: joi.string().required(),
    kind: joi.string().required(),
});