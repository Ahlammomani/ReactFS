const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const cookieParser = require("cookie-parser");
const path = require("path");

// تحميل متغيرات البيئة من ملف .env
dotenv.config();

const app = express();
app.use(cookieParser());

// إعداد CORS
app.use(
  cors({
    origin: "http://localhost:5173", // تأكد من عدم وجود مسافة زائدة في النهاية
    credentials: true,
  })
);

// إعداد body-parser
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// خدمة الملفات الثابتة من مجلد uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// اختبار الاتصال بقاعدة البيانات
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// مزامنة الموديلات مع قاعدة البيانات (اختياري)
sequelize.sync()
  .then(() => {
    console.log('Models synced with database.');
  })
  .catch(err => {
    console.error('Unable to sync models with database:', err);
  });

// تعريف route بسيط
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// بدء الخادم
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});