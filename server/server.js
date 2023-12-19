import express from "express"; //imports express from node modules
import cors from "cors"; //imports cors from node modules

const app = express(); //created an instance of express in the const "app"

app.use(express.json()); //this allows us to look at the json in body of the request

app.use(cors()); //we want to use cors - middleware - bridge between client and server

//endpoint
app.get("/message", function (request, response) {
  response.json({ message: "I am the message" });
});

//start the server
app.listen(8080, function () {
  console.log("Server is listening to port 8080");
});
