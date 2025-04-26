const { Product, Category } = require("../models");
const { Op } = require("sequelize");


const createProduct = async (req, res) => {
  try {
    const { name, price, categoryId, description, quantity } = req.body;

    if (!name || !price || !categoryId || !description) {
      return res.status(400).json({ error: "الرجاء ملء جميع الحقول المطلوبة" });
    }

    const product = await Product.create({
      name,
      price,
      categoryId,
      description,
      quantity,
    });

    // إذا فيه صور مرفوعة
    if (req.files && req.files.length > 0) {
      const imageRecords = req.files.map(file => ({
        image: file.path,
        productId: product.id,
      }));

      await Image.bulkCreate(imageRecords);
    }

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
      include: [
        { model: Category, attributes: ["name"] },
        { model: Image, as: 'images', attributes: ["image"] }, // إضافة الصور
      ],
    });

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب المنتجات" });
  }
};

  

  module.exports = { createProduct, getProducts };