const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serves static files from the 'public' directory

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).send("No message provided");
  }

  try {
    // Making the API call
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Using the correct model
      messages: [{ role: "user", content: userMessage }],
    });

    // Extracting the bot's reply
    const botReply = response.choices[0].message.content;
    
    // Returning the response to the frontend
    res.json({ reply: botReply });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).send("Something went wrong.");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
