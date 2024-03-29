import express from "express";
const categoriesRoutes = express.Router();

categoriesRoutes.get("/", (req, res) => {
  res.send("categories!");
});

categoriesRoutes.get("/:id", (req, res) => {
  res.send("categories!");
});

categoriesRoutes.post("/", (req, res) => {
  res.send("categories!");
});

categoriesRoutes.put("/:id", (req, res) => {
  res.send("categories!");
});

categoriesRoutes.delete("/:id", (req, res) => {
  res.send("categories!");
});

export default categoriesRoutes;
