const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cors = require("cors");
dotenv.config();
const app = express();

app.use(cors()); 
app.use(express.json()); 

const data = {
  email: "manojkumar@gmail.com",
};

app.get("/login", (req, res) => {
  console.log("Login attempt");
  const { email, password } = req.query;

  console.log(`Email: ${email}, Expected Email: ${data.email}`);

  if (email === data.email) {
    const resdata = {
      email: data.email,
      name: "Umamahesh",
    };
    
    if (!process.env.JSON_TOKEN) {
      return res.status(500).json({ error: "JWT secret is not defined" });
    }

    const token = jwt.sign({ email: data.email }, process.env.JSON_TOKEN, {
      expiresIn: "1m",
    });

    res.json({ token,resdata });
  } else {
    console.log('Email does not match');
    res.status(401).json({ error: 'Invalid email' });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
