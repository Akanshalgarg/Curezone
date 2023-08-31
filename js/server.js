import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';
const app = express();

// Middleware
app.use(json());

// MongoDB connection
connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new Schema({
  email: String,
  password: String,
});

const User = model('User', userSchema);

// Registration Route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Hash the password
  const hashedPassword = await hash(password, 10);

  const newUser = new User({
    email,
    password: hashedPassword,
  });

  newUser.save((err) => {
    if (err) {
      res.status(500).send('Registration failed');
    } else {
      res.status(201).send('Registration successful');
    }
  });
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send('User not found');
  }

  const passwordMatch = await compare(password, user.password);

  if (passwordMatch) {
    res.send('Login successful');
  } else {
    res.status(401).send('Login failed');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');

});
