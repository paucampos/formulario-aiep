import express from "express";
import indexRoutes from "./routes/index.routes";

const app = express();

app.use(indexRoutes);

app.listen(3000);
console.log("Server on port", 3000);