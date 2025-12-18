"use client"

import { useState, useRef, useEffect } from "react"
import { X, Mic, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface VoiceAgentModalProps {
  isOpen: boolean
  onClose: () => void
  agentName: string
  agentType: string
}

type AgentState = "idle" | "listening" | "thinking" | "speaking"

export function VoiceAgentModal({ isOpen, onClose, agentName, agentType }: VoiceAgentModalProps) {
  const [agentState, setAgentState] = useState<AgentState>("idle")
  const [isPressed, setIsPressed] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      setAgentState("idle")
      setIsPressed(false)
    }
  }, [isOpen])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })
        await sendAudioToAgent(audioBlob)
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setAgentState("listening")
    } catch (error) {
      console.error("[v0] Error accessing microphone:", error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop()
      setAgentState("thinking")
    }
  }

  const sendAudioToAgent = async (audioBlob: Blob) => {
    try {
      const formData = new FormData()
      formData.append("audio", audioBlob)
      formData.append("agentType", agentType)

      const response = await fetch("/api/voice-agent", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to get response from agent")
      }

      const audioData = await response.blob()
      const audioUrl = URL.createObjectURL(audioData)

      if (audioRef.current) {
        audioRef.current.src = audioUrl
        audioRef.current.onplay = () => setAgentState("speaking")
        audioRef.current.onended = () => setAgentState("idle")
        await audioRef.current.play()
      }
    } catch (error) {
      console.error("[v0] Error sending audio to agent:", error)
      setAgentState("idle")
    }
  }

  const handleMouseDown = () => {
    if (agentState === "idle") {
      setIsPressed(true)
      startRecording()
    }
  }

  const handleMouseUp = () => {
    if (isPressed) {
      setIsPressed(false)
      stopRecording()
    }
  }

  const getButtonText = () => {
    switch (agentState) {
      case "idle":
        return "Hold to Talk"
      case "listening":
        return "Listening..."
      case "thinking":
        return "Thinking..."
      case "speaking":
        return "Speaking..."
      default:
        return "Hold to Talk"
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-background border border-border/40 rounded-3xl shadow-2xl p-8 mx-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{agentName}</h2>
                  <p className="text-sm text-muted-foreground">Talk to this AI agent in real time</p>
                </div>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center justify-center my-12">
                <div className="relative">
                  <motion.div
                    animate={
                      agentState === "listening" || agentState === "speaking"
                        ? { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }
                        : {}
                    }
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50"
                  />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    {agentState === "thinking" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <Mic className={`h-12 w-12 text-white ${agentState === "listening" ? "animate-pulse" : ""}`} />
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onTouchStart={handleMouseDown}
                  onTouchEnd={handleMouseUp}
                  disabled={agentState === "thinking" || agentState === "speaking"}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
                    isPressed
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 scale-95"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {getButtonText()}
                </button>

                <Button
                  onClick={onClose}
                  variant="outline"
                  className="w-full rounded-xl border-border/40 hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  End Call
                </Button>
              </div>

              <audio ref={audioRef} className="hidden" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
