import { GoogleGenAI, Type } from "@google/genai";
import { TravelTip } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateTravelPreview = async (destination: string): Promise<TravelTip[]> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Give me 3 distinct travel recommendations for a trip to ${destination}. 
      1. A 'Hidden Gem' (non-touristy).
      2. A 'Must See' (popular landmark).
      3. A 'Local Bite' (food recommendation).
      Keep descriptions under 20 words.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              category: { type: Type.STRING, description: "Category like Hidden Gem, Must See, or Local Bite" },
              name: { type: Type.STRING, description: "Name of the place or food" },
              description: { type: Type.STRING, description: "Short description" },
            },
            required: ["category", "name", "description"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as TravelTip[];
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate travel tips. Please try again.");
  }
};