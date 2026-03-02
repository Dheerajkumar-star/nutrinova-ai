import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatMessage from './ChatMessage'
import QuickOptions from './QuickOptions'
import { useVoice } from '../../hooks/useVoice'
import { CHATBOT_RESPONSES } from '../../utils/constants'

function getBotReply(text) {
  const lower = text.toLowerCase()
  for (const [key, reply] of Object.entries(CHATBOT_RESPONSES)) {
    if (key === 'default') continue
    if (lower.includes(key)) return reply
  }
  return CHATBOT_RESPONSES.default
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: '👋 Hello! I am your NutriNova AI Assistant. How can I help you today? Choose a quick option below or type your question!' }
  ])
  const [input, setInput] = useState('')
  const [voiceDisclaimer, setVoiceDisclaimer] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const bottomRef = useRef(null)
  const { isListening, transcript, setTranscript, startListening, stopListening, speak, supported } = useVoice()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (transcript) {
      sendMessage(transcript)
      setTranscript('')
    }
  }, [transcript])

  const sendMessage = (text) => {
    if (!text.trim()) return
    const userMsg = { id: Date.now(), from: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    setTimeout(() => {
      const reply = getBotReply(text)
      const botMsg = { id: Date.now() + 1, from: 'bot', text: reply }
      setMessages(prev => [...prev, botMsg])
      if (voiceEnabled) speak(reply)
    }, 600)
  }

  const handleEnableVoice = () => {
    setVoiceDisclaimer(false)
    setVoiceEnabled(true)
  }

  return (
    <div className="flex flex-col h-[600px]">
      {/* Voice disclaimer modal */}
      <AnimatePresence>
        {voiceDisclaimer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 rounded-2xl"
          >
            <div className="glass neon-border p-6 max-w-sm mx-4 text-center">
              <div className="text-4xl mb-3">🎙</div>
              <h3 className="font-display text-green-400 mb-2">Voice Mode</h3>
              <p className="text-slate-300 text-sm mb-4">
                This feature uses your microphone to convert speech to text. The AI assistant will also respond with voice. This is for informational purposes only and not medical advice.
              </p>
              <div className="flex gap-3 justify-center">
                <button onClick={handleEnableVoice} className="neon-btn text-sm">Enable Voice</button>
                <button onClick={() => setVoiceDisclaimer(false)} className="px-4 py-2 rounded-lg glass text-slate-300 text-sm">Cancel</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-green-500/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-display text-green-400 text-sm">NutriNova AI Online</span>
        </div>
        {supported && (
          <button
            onClick={() => voiceEnabled ? setVoiceEnabled(false) : setVoiceDisclaimer(true)}
            className={`text-xs px-3 py-1 rounded-full transition-all ${voiceEnabled ? 'bg-green-500 text-black' : 'glass neon-border text-green-400'}`}
          >
            {voiceEnabled ? '🔊 Voice On' : '🔇 Voice Off'}
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={bottomRef} />
      </div>

      {/* Quick options */}
      <div className="px-4 py-2 border-t border-green-500/10">
        <QuickOptions onSelect={sendMessage} />
      </div>

      {/* Input */}
      <div className="p-4 flex gap-2 border-t border-green-500/20">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
          placeholder="Type your health question..."
          className="flex-1 bg-slate-800/50 border border-green-500/20 rounded-xl px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-green-500/50"
        />
        {supported && (
          <button
            onClick={() => isListening ? stopListening() : startListening()}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isListening ? 'bg-red-500 animate-pulse' : 'glass neon-border'}`}
          >
            {isListening ? '⏹' : '🎙'}
          </button>
        )}
        <button
          onClick={() => sendMessage(input)}
          className="neon-btn px-4 py-2 text-sm"
        >
          →
        </button>
      </div>
    </div>
  )
}
