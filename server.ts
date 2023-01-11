import express from "express"
import cityRouter from "./router/city"

const app = express();

const localhost: string = "127.0.0.1"
const port: number = 5000

import conn from "./config/db_conn";
import close from "./config/db_conn";

app.use(express.json());

// Default
app.get('/', (req, res) => {
    res.status(200).send(`Welcome to Weather tracking API`)
})

// City route
app.use('/city', cityRouter)

// Other routes - [404]
app.use((req, res) => {
    res.status(404).send(`Not found`)
})

// Listening Port
app.listen(port, localhost, () => {
    console.log(`Sever started at http://${localhost}:${port} \nSearch weather at http://${localhost}:${port}/city/ \nIf today is prime day data will not show..so go to -> controller -> line 14 make checkPrimeCondition = false`)
})