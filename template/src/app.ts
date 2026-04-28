import express from "express";
import cors from "cors";
import type { Application, NextFunction, Request, Response } from "express";

const PORT = process.env.PORT || 4000

class App{
    app:Application

    constructor(){
        this.app= express()
        this.configure()
        this.route()
        this.errorHandler()
    }

    private configure(){
        this.app.use(
            cors({
                origin:["Fill your origin here"],
                methods:["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
            })
        )

        this.app.use(express.json())
    }

    private route():void {
        //example
        //import route from "./routers/example.router";
        //const route = new ExampleRouter();

        //main route
        this.app.get("/", (req:Request, res:Response) => {
            res.send("Base API");
        });

        //routers
        //this.app.use(/example-routes, route.getRouter());
    }

    private errorHandler():void {
        this.app.use(
            (error:any, req:Request, res:Response, next:NextFunction) => {
                res.status(500).send({
                    status: error.statusCode || 500,
                    success: false,
                    message: error.message || "Something went wrong",
                });
            }
        )
    }

    public async start():Promise<void> {
        try {
            //if you use prisma
            //await prisma.$connect();
            //console.log("Database connected");
            this.app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        } catch (error) {
            console.log("Error starting server: ", error);
            process.exit(1);
        }
    }
}

export default App