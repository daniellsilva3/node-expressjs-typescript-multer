import express from "express";
import  { router }from "./router";
import moongoose from "mongoose";

export class App{
    public server: express.Application = express();
constructor(){
    this.server;
    this.middleware();
    this.connectDatabase();
    this.router();
}

private middleware(){
    this.server.use(express.json());
}
private router(){
    this.server.use(router)
}
public async connectDatabase() {

 let urlDB= "mongodb+srv://user2003:teste1234@cluster0.0thuhqo.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

    try {
        await moongoose.connect(urlDB)
         
            console.log('connected to the database'), 
            () => console.log('App is running on port -> 3001 ')
       
    } catch (error) {
        console.error("Erro in the database connection MongoDB:", error)
    }
}
}