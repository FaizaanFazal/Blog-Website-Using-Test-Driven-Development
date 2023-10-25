import moduleAlias from 'module-alias';
moduleAlias.addAlias('@', __dirname);
moduleAlias();
import express, { Express, Request, Response ,NextFunction} from "express";
import authRoute from './routes/authRoute' 
import blogRoute from './routes/blogRoutes' 
import tagRoute from './routes/tagRoutes' 
import likeRoute from './routes/likeRoutes'
import logger from "./utils/logger";
import swaggerDocs from './utils/swagger';
import cookieParser from 'cookie-parser';
import { isProtectedRouteMiddleware } from './utils/protectedRoutes';

export interface userRequest extends Request {
    user: any 
  }

const port = 8000;
const app: Express = express();

app.use(express.json());
app.use(cookieParser());
swaggerDocs(app, port);
logger.info("calling")


// Cross origin checking
const whitelist = ['http://localhost:8000']
app.use((req:Request,res:Response,next:NextFunction)=>{
    console.log(req.headers.origin);
    console.log(whitelist.includes(req.headers.origin as string))
    if (whitelist.includes(req.headers.origin as string)) {
        console.log('HERE')
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin as string);
        res.setHeader("Access-Control-Allow-Methods", '*')
    } else {
        res.setHeader("Access-Control-Allow-Origin", '');//undefined cannot be used because of string property
    }
    next()
})

//protected routes authenticate
app.use(isProtectedRouteMiddleware)
//middlewares 
app.use("/users/",authRoute)
app.use("/blogs/",blogRoute)
app.use("/likes/",likeRoute)
app.use("/tags/",tagRoute)
app.get("/", (req: Request, res: Response) => {
    res.send("Hello express running +type script... kachao");
})
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    res.status(403).send({
        success:false,
        error:err.message
    });
});


app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
    
  });