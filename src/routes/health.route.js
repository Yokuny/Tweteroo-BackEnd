import express from "express";

export const healthRouter = express.Router();

healthRouter.get("/", (req, res) => {
  res.send("OK");
});

healthRouter.get("/health", (req, res) => {
  res.send("I`m Ok!");
});
