import express from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoriesRoutes = express.Router();
const categoryController = new CategoryController();

categoriesRoutes.get("/", categoryController.getAllCategories);
categoriesRoutes.get("/:id", categoryController.getCategoriesDetail);
categoriesRoutes.post("/", categoryController.createCategory);
categoriesRoutes.put("/:id", categoryController.updateCategory);
categoriesRoutes.delete("/:id", categoryController.deleteCategory);
export default categoriesRoutes;
