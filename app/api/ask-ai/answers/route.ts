import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { question, content, language, section } = body;

    const prompt = `
You are Riyan's AI assistant.
Context: ${content}
User question: ${question}
Respond in ${language === "id" ? "Indonesian" : "English"}.
    `.trim();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Riyan Portfolio AI"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // 📢 Ganti model stabil
        messages: [{ role: "user", content: prompt }],
        stream: true,
        max_tokens: 800,
      }),
    });

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      }
    });

  } catch (error) {
    console.error("[AI ERROR]", error);
    return NextResponse.json({ error: "Failed to stream AI response." }, { status: 500 });
  }
}
