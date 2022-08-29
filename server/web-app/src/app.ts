import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
// Controllers (route handlers)
import * as wordsController from "./controllers/words";
import * as posController from "./controllers/part-of-speech";
import * as rankController from "./controllers/ranks";


// Create Express server
const app = express();

// allow cors 
app.use(cors({origin:"http://localhost:4200"}));

// parse request body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Express configuration
app.set("port", process.env.PORT || 3000);



/**
 * API examples routes.
 */
app.get("/api/pos", posController.partOfSpeechTypes);
app.get("/api/words", wordsController.words);
app.post("/api/rank", rankController.rank);



app.use(express.static("./views"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "index.html"));
});

export default app;
