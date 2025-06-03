const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user profile', error: err.message });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update profile', error: err.message });
  }
};
