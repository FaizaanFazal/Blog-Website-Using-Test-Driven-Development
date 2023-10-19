import moduleAlias from 'module-alias';
moduleAlias.addAlias('@', __dirname);
// moduleAlias.addPath(__dirname + '/src')
moduleAlias();

import express, { Express, Request, Response } from "express";
import {add} from '@/utils/helper';

const result = add(1, 2);
console.log(result)

const port =8000;
 const app: Express=express();

 app.get("/",(req:Request, res:Response)=>{
    res.send("Hello express running +type script");
 })

app.listen(port,()=>{
    console.log(`now listning on port ${port} and result is ${result}`);
})