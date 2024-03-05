//importamos dependencias de librerias
import express from "express";
import 'dotenv/config';
import { dbConnection } from "./database/db.js";


const app = express()

// parsea el body (si no sale undefined)
app.use(express.json())

const PORT = process.env.PORT || 4001;

dbConnection()
    .then(() => {
        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })

