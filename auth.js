const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: 'Email already in use' });
  // Hash password before saving (use bcrypt)
  const user = new User({ email, password, name });
  await user.save();
  res.json({ success: true });
});

module.exports = router;
