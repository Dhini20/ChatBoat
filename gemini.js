const apiKey = "AIzaSyB6d31kdMwjVI35RjnfJAABu6sNCdTeyiI";

async function getGeminiResponse(prompt) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

  const requestBody = {
    contents: [{
      parts: [{
        text: prompt
      }]
    }]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    console.log("Gemini API full response:", data);

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I'm here to help, but I couldn't quite understand that. Can you rephrase?";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "An error occurred while contacting the AI service.";
  }
}





