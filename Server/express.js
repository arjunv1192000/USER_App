import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import bodyParser from "body-parser";


const expressConfig = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors())



};

export default expressConfig;