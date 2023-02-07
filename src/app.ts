import express from "express";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { join } from "path";
import { indexRouter } from "./routes/index";

const app = express();
const httpServer = createServer(app);

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/tsPublic", express.static(join(__dirname, "public")));

app.use("/", indexRouter.router);

httpServer.listen(3000);
