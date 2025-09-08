import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { getAIResponse } from '../services/geminiService';

const Message: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const parts = message.text.split(/(```[\s\S]*?```)/g);

  return (
    <div className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'}`}>
      <div className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-secondary' : 'chat-bubble-primary'}`}>
        {parts.map((part, index) => {
          if (part.startsWith('```') && part.endsWith('```')) {
            const code = part.substring(3, part.length - 3).trim();
            const langMatch = code.match(/^(javascript|js|html|css|json)\n/);
            const language = langMatch ? langMatch[1] : '';
            const codeContent = langMatch ? code.substring(langMatch[0].length) : code;
            
            return (
              <div key={index} className="mockup-code text-sm my-2 bg-neutral text-neutral-content">
                 <pre><code>{codeContent}</code></pre>
              </div>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </div>
    </div>
  );
};

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hi there! I'm your JavaScript assistant, powered by Gemini. Ask me to explain a concept, debug your code, or solve a problem!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await getAIResponse(input);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
      console.error("AI Assistant Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 px-4 md:px-8 bg-base-100 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">AI JavaScript Assistant</h2>
          <p className="mt-4 text-lg text-base-content/70">Your personal coding tutor, powered by Google Gemini.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-base-200 p-6 rounded-2xl shadow-xl w-full max-w-3xl">
            <div ref={chatContainerRef} className="h-96 overflow-y-auto mb-4 p-4 bg-base-100 rounded-lg space-y-4">
              {messages.map((msg, index) => <Message key={index} message={msg} />)}
              {isLoading && (
                 <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">
                        <span className="loading loading-dots loading-md"></span>
                    </div>
                 </div>
              )}
            </div>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Ask a JavaScript question..."
                  className="input input-bordered w-full"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSend()}
                  disabled={isLoading}
                />
                <button className="btn btn-primary" onClick={handleSend} disabled={isLoading}>
                  {isLoading ? <span className="loading loading-spinner"></span> : 'Send'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
