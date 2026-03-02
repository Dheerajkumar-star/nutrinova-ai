import { useState, useRef } from 'react'

export function useVoice() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef(null)

  const supported = typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)

  const startListening = () => {
    if (!supported) return
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recognitionRef.current = new SpeechRecognition()
    recognitionRef.current.continuous = false
    recognitionRef.current.interimResults = false
    recognitionRef.current.lang = 'en-US'

    recognitionRef.current.onstart = () => setIsListening(true)
    recognitionRef.current.onresult = (e) => {
      const text = e.results[0][0].transcript
      setTranscript(text)
    }
    recognitionRef.current.onend = () => setIsListening(false)
    recognitionRef.current.onerror = () => setIsListening(false)
    recognitionRef.current.start()
  }

  const stopListening = () => {
    recognitionRef.current?.stop()
    setIsListening(false)
  }

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utter = new SpeechSynthesisUtterance(text)
      utter.rate = 0.9
      window.speechSynthesis.speak(utter)
    }
  }

  return { isListening, transcript, setTranscript, startListening, stopListening, speak, supported }
}
