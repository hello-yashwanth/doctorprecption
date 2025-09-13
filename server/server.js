const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/doctorcare')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

app.post('/My-login', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;


  if (firstName && lastName) {
    let existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'User already exists' });

    let user = new User({ firstName, lastName, email, password });
    await user.save();
    return res.json({ message: 'Signup successful', user });
  }

  // login mode
  let user = await User.findOne({ email, password });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  return res.json({ message: 'Login successful', user});
});


app.listen(5000, () => {
  console.log('🚀 Server running on port 5000');
});
