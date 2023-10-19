import express, { Express, Request, Response } from "express";
const port =8000;
 const app: Express=express();

 app.get("/",(req:Request, res:Response)=>{
    res.send("Hello express running +type script");
 })

app.listen(port,()=>{
    console.log(`now listning on port ${port}`);
})