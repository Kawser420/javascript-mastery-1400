import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "@/types";
import { getAIResponseStream } from "../services/geminiService";

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mockup-code text-sm my-2 bg-neutral text-neutral-content relative">
      <button
        onClick={handleCopy}
        className="btn btn-xs btn-ghost absolute top-2 right-2"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

const Message: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const parts = message.text.split(/(```[\s\S]*?```)/g);

  return (
    <div
      className={`chat ${
        message.sender === "user" ? "chat-end" : "chat-start"
      }`}
    >
      <div
        className={`chat-bubble prose max-w-none ${
          message.sender === "user"
            ? "chat-bubble-secondary"
            : "chat-bubble-primary"
        }`}
      >
        {parts.map((part, index) => {
          if (part.startsWith("```") && part.endsWith("```")) {
            const code = part.substring(3, part.length - 3).trim();
            const langMatch = code.match(
              /^(javascript|js|html|css|json|bash|sh)\n/
            );
            const codeContent = langMatch
              ? code.substring(langMatch[0].length)
              : code;
            return <CodeBlock key={index} code={codeContent} />;
          }
          return <span key={index}>{part}</span>;
        })}
      </div>
    </div>
  );
};

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "ai",
      text: "Welcome! I'm Master JS, your personal AI mentor. I can remember our conversation. Ask me to explain a concept, debug code, or suggest a problem to tackle!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage: ChatMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { sender: "ai", text: "" }]);

    try {
      const stream = await getAIResponseStream(input);
      for await (const chunk of stream) {
        const chunkText = chunk.text;
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.sender === "ai") {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
              sender: "ai",
              text: lastMessage.text + chunkText,
            };
            return newMessages;
          }
          return prev;
        });
      }
    } catch (error: any) {
      let errorMessageText = `**Error:** An unexpected error occurred. This might be due to a network issue or an invalid API key configuration. Please check the console for details.`;
      if (error.name === "UnsupportedEnvironmentError") {
        errorMessageText = `**AI Features Disabled in This Environment**\n\nFor security reasons, AI requests are blocked when a project is opened directly as a local file (\`file:///\`).\n\n**To enable AI features, please serve this project from a local web server.**\n- Using VS Code's "Live Server" extension is an easy option.\n- Or run \`npx serve\` in the project folder.`;
      } else if (error.name === "ApiKeyMissingError") {
        errorMessageText = `**AI Feature Disabled: API Key Missing**\n\nIt seems the \`VITE_GEMINI_API_KEY\` is not configured correctly in your \`.env\` file. The AI features will work correctly in a properly configured hosted environment.`;
      }
      const errorMessage: ChatMessage = {
        sender: "ai",
        text: errorMessageText,
      };
      setMessages((prev) => {
        const newMessages = [...prev];
        if (newMessages[newMessages.length - 1].sender === "ai") {
          newMessages[newMessages.length - 1] = errorMessage;
        } else {
          newMessages.push(errorMessage);
        }
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="ai-assistant"
      className="py-24 px-4 md:px-8 bg-base-100 scroll-mt-20"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">AI JavaScript Assistant</h2>
          <p className="mt-4 text-lg text-base-content/70">
            Your personal coding tutor, powered by Google Gemini.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-base-200 p-6 rounded-2xl shadow-xl w-full max-w-4xl">
            <div
              ref={chatContainerRef}
              className="h-96 overflow-y-auto mb-4 p-4 bg-base-100 rounded-lg space-y-4"
            >
              {messages.map((msg, index) => (
                <Message key={index} message={msg} />
              ))}
              {isLoading && messages[messages.length - 1].text === "" && (
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
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  disabled={isLoading}
                />
                <button
                  className="btn btn-primary"
                  onClick={handleSend}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Send"
                  )}
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
