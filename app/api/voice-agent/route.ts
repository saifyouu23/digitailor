import { type NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const AGENT_PROMPTS: Record<string, string> = {
  support:
    "You are a helpful customer support agent. Be friendly, professional, and solve customer issues efficiently.",
  sales:
    "You are a sales qualification agent. Ask qualifying questions to understand customer needs and determine if they're a good fit.",
  automation:
    "You are a data processing and automation agent. Help users understand how to automate their workflows and manage data.",
  analytics: "You are an analytics agent. Help users understand their data and provide actionable insights.",
  content: "You are a content generation agent. Help users create engaging content for their business.",
  workflow: "You are a workflow management agent. Help users design and optimize their business processes.",
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const audioFile = formData.get("audio") as File
    const agentType = formData.get("agentType") as string

    if (!audioFile) {
      return NextResponse.json({ error: "No audio file provided" }, { status: 400 })
    }

    // Convert audio to text using Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: "whisper-1",
    })

    console.log("[v0] Transcription:", transcription.text)

    // Get system prompt based on agent type
    const systemPrompt = AGENT_PROMPTS[agentType] || AGENT_PROMPTS.support

    // Generate response using GPT
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: transcription.text },
      ],
      max_tokens: 150,
    })

    const responseText = completion.choices[0].message.content || "I'm sorry, I didn't understand that."

    console.log("[v0] AI Response:", responseText)

    // Convert text to speech
    const speechResponse = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: responseText,
    })

    // Convert response to buffer
    const buffer = Buffer.from(await speechResponse.arrayBuffer())

    // Return audio stream
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("[v0] Error in voice agent:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
