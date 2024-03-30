import Category from "../models/CategoryModel";
class CategoryController {
  async getAllCategories(req, res) {
    try {
      const categoryList = await Category.find();
      res.status(200).json({
        message: "get all categories successfully",
        data: categoryList,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async getCategoriesDetail(req, res) {
    try {
      const categoryList = await Category.findById(req.params.id);
      if (!categoryList) {
        return res.status(404).json({
          message: "Category not found",
        });
      }
      res.status(200).json({
        message: "get detail categories successfully",
        data: categoryList,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async createCategory(req, res) {
    try {
      const newCategory = new Category(req.body);
      const saveCategory = await newCategory.save();
      res
        .status(201)
        .json({ message: "Create Category successfully", data: saveCategory });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async updateCategory(req, res) {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (!category) {
        return res.status(404).json({
          message: "Category not found",
        });
      }
      const updateCategory = await Category.findById(req.params.id);
      res.status(200).json({
        message: "Update category successfully",
        data: updateCategory,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async deleteCategory(req, res) {
    try {
      const deleteCategory = await Category.findByIdAndDelete(req.params.id);
      if (!deleteCategory) {
        return res.status(404).json({
          message: "Category not found",
        });
      }
      res.status(200).json({
        message: "Delete category successfully",
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
}
export default CategoryController;
