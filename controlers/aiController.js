import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// MOCK OR REAL setup:
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "mock_key");
console.log("API Key:", process.env.GEMINI_API_KEY);

export const generateTaskDescription = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Please provide a task title" });

  try {
    console.log("API Key:", process.env.GEMINI_API_KEY);
    if (!process.env.GEMINI_API_KEY) {
      // Mocking AI generated task description when API key is missing
      return res.status(200).json({ description: `AI description for ${title}: In this task, you should gather all required resources and execute the necessary steps to complete ${title} effectively.` });
    }
    
    // Real implementation
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const prompt = `Write a short, concise, and professional task description for a task titled: "${title}"`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ description: text });
  } catch (error) {
    res.status(500).json({ message: "AI generation failed: " + error.message });
  }
};