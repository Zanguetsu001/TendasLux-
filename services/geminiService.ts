
import { GoogleGenAI } from "@google/genai";

// Fix: Correctly initialize GoogleGenAI using only process.env.API_KEY without fallbacks
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTentImage = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `A high quality, professional photograph of a ${prompt}, elegant, set up in a beautiful outdoor garden or event space, realistic lighting, commercial photography style.` }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      }
    });

    // Fix: Iterate through all parts to find the image part as per guidelines
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image found in response");
  } catch (error) {
    console.error("Error generating tent image:", error);
    // Return a high-quality placeholder if AI fails
    return `https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200`;
  }
};
