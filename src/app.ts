import express, {Request, Response} from "express";
import httpStatus from "http-status";
import moviesRouter from "./routers/movies.router";

const app = express();

app.use(express.json());
app.use(moviesRouter);

app.get('/health',(req: Request, res: Response) => {
    res.status(httpStatus.OK).send("I'm ok");
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});