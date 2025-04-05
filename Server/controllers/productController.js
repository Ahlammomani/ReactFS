const { Product, Category } = require("../models");
const { Op } = require("sequelize");


const createProduct = async (req, res) => {
    try {
      const { name, price, categoryId } = req.body; // ✅ استخدم categoryId الصحيح
      const image = req.file ? req.file.filename : null;
  
      if (!name || !price || !categoryId) {
        return res.status(400).json({ error: "الرجاء ملء جميع الحقول المطلوبة" });
      }
  
      const product = await Product.create({
        name,
        price,
        categoryId, // ✅ تأكد أنك ترسل الـ categoryId الصحيح
        image,
      });
  
      res.status(201).json(product);
    } catch (error) {
      console.error("خطأ أثناء إضافة المنتج:", error);
      res.status(500).json({ error: "Error creating product" });
    }
  };

const getProducts = async (req, res) => {
    try {
      const { search, categoryId } = req.query;
  
      const where = {};
      if (search) {
        where.name = { [Op.iLike]: `%${search}%` };
      }
      if (categoryId) {
        where.categoryId = categoryId;
      }
  
      const products = await Product.findAll({
        where,
        include: [{ model: Category, attributes: ["name"] }],
      });
  
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "حدث خطأ أثناء جلب المنتجات" });
    }
  };
  

  module.exports = { createProduct, getProducts };