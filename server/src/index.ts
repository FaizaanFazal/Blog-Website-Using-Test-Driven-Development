import moduleAlias from 'module-alias';
moduleAlias.addAlias('@', __dirname);
moduleAlias();
import express, { Express, Request, Response ,NextFunction} from "express";
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

// Cross origin checking
const whitelist = ['http://localhost:3000']
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
app.get("/", (req: Request, res: Response) => {
    res.send("Hello express running +type script... kachao");
})


app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
    
  });