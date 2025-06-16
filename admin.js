const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware to ensure only admin
function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') return next();
  return res.status(403).json({ error: 'Forbidden' });
}

// Get all users
router.get('/users', isAdmin, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Disable a user
router.patch('/users/:id/disable', isAdmin, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { isActive: false });
  res.json({ success: true });
});

// Enable a user
router.patch('/users/:id/enable', isAdmin, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { isActive: true });
  res.json({ success: true });
});

// Delete a user
router.delete('/users/:id', isAdmin, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
