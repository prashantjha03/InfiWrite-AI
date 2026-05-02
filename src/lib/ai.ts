import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateContent(
  topic: string,
  tone: string,
  wordCount: number
) {
  try {
    // ✅ USE VALID FREE MODEL
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    const prompt = `
You are an expert content writer.

Write a ${tone} article about "${topic}" in approximately ${wordCount} words.

Make it engaging, clear, and well-structured with headings and paragraphs.
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    return text;
  } catch (error: any) {
    console.error("Gemini Error:", error);
    throw new Error(error?.message || "Gemini API failed");
  }
}