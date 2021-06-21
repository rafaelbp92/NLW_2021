import express, { request, response } from "express";

//@types/express
const app = express();

app.get("/teste", (request, response) => {
    return response.send("Olá NLW");
});

app.post("/testePost", (request, response) => {
    return response.send("Olá POST");
})

app.listen(3000, () => console.log("Server is running"));
