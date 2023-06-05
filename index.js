import express from "express";
import path from "path";
import router from "./src/routes/index.route.js";

const app = express();

// setting index router
app.use(router);

// setting static files
app.use(express.static(path.resolve("src", "public")));

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

export default app;
