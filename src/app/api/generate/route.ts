import { NextResponse } from "next/server";
import { generateContent } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { topic, tone, wordCount } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    const content = await generateContent(topic, tone, wordCount);

    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json(
      { error: "Error generating content" },
      { status: 500 }
    );
  }
}