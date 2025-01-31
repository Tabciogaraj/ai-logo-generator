const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const AIDesignIdea = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Nowoczesne logo z maskotką Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice with decription: Indian restaurant and referring to prompt: Wyraziste logo przedstawiające przyjazną, animowaną postać z zabawnym wyrazem twarzy. Postać ubrana jest w klasyczny uniform z charakterystycznym dodatkiem, który dodaje osobowości. W jednej ręce trzyma przedmiot charakterystyczny dla marki, podczas gdy inne elementy projektu – takie jak małe ozdobne akcenty lub naturalne dodatki – uzupełniają wygląd. Tło to wyrazisty, okrągły wzór z subtelnymi akcentami, podkreślającymi postać. Poniżej wyświetlana jest nazwa marki w pogrubionej, stylizowanej czcionce z delikatnym łukiem i uzupełniającymi liniami dekoracyjnymi. Styl jest zabawny, przyjazny i pełen charakteru.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"ideas\": [\n    \"Smiling chef with spice\",\n    \"Turbaned elephant with curry\",\n      \"Friendly tiger with naan\",\n    \"Playful monkey with spices\",\n      \"Cartoon cook holding masala\"\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
  //  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  //  console.log(result.response.text());
