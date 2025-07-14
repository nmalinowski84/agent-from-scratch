import { openai } from "./ai";
export const runLLM = async ({userMessage,}: { userMessage: string }) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.1,
            messages: [
        { role: "system", content: "You are a helpful assistant." },
    ],
})

    return response.choices[0].message.content;
}