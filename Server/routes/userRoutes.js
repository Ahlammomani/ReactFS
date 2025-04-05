const express = require('express');
const { signup, login, logout, protect } = require('../controllers/userController');

const router = express.Router();

// تسجيل مستخدم جديد
router.post('/signup', signup);

// تسجيل الدخول
router.post('/login', login);

// تسجيل الخروج
router.post('/logout', logout);

// راوت محمي (اختبار)
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'مرحبًا بك في ملفك الشخصي', user: req.user });
});

module.exports = router;
