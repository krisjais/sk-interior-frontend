import { useState, useRef, useEffect } from 'react';

const STUDIO_PHONE = '+91 98707 60240';
const STUDIO_PHONE_TEL = 'tel:+919870760240';
const STUDIO_WHATSAPP =
  'https://wa.me/919870760240?text=Hi%20SK%20Interior%2C%20I%27d%20like%20to%20discuss%20an%20interior%20project.';

const QUICK_SUGGESTIONS = [
  '💰 BHK Cost Estimates',
  '📐 Book a Site Visit',
  '📍 Studio Location & Hours',
  '📞 Direct Contact Number',
];

function getDummyAIResponse(input) {
  const text = (input || '').toLowerCase().trim();

  if (
    text.includes('cost') ||
    text.includes('price') ||
    text.includes('rate') ||
    text.includes('package') ||
    text.includes('bhk') ||
    text.includes('estimate') ||
    text.includes('budget') ||
    text.includes('lakh')
  ) {
    return {
      text: `Our bespoke interior investments start from:\n\n• 1 BHK: Starting from ₹4.30 Lakh\n• 2 BHK: Starting from ₹7 Lakh (Most Popular)\n• 3 BHK / Penthouse: Starting from ₹12 Lakh\n\nFor a customized BOQ, space planning, and detailed material catalogue tailored to your home's exact carpet area, please contact our senior designer directly at ${STUDIO_PHONE}.`,
      showActions: true,
    };
  }

  if (
    text.includes('visit') ||
    text.includes('book') ||
    text.includes('consult') ||
    text.includes('meet') ||
    text.includes('appointment') ||
    text.includes('site')
  ) {
    return {
      text: `We would love to schedule a personal design consultation or site visit for your space in Mumbai.\n\nTo confirm your preferred date and time, please connect directly with our design team at ${STUDIO_PHONE}.`,
      showActions: true,
    };
  }

  if (
    text.includes('location') ||
    text.includes('address') ||
    text.includes('where') ||
    text.includes('office') ||
    text.includes('studio') ||
    text.includes('bkc')
  ) {
    return {
      text: `Our studio is located at:\n1012, Commercial Tower, Near Trade Centre, BKC, Mumbai, Maharashtra.\n\nHours: Monday – Saturday · 10:00 AM – 7:00 PM\n(Consultations by appointment only).\n\nPlease call us at ${STUDIO_PHONE} to arrange your visit.`,
      showActions: true,
    };
  }

  if (
    text.includes('number') ||
    text.includes('phone') ||
    text.includes('call') ||
    text.includes('contact') ||
    text.includes('whatsapp')
  ) {
    return {
      text: `You can reach our principal interior design studio directly at:\n\n📞 Primary: ${STUDIO_PHONE}\n📞 Alternate: +91 91674 01020\n\nFeel free to call now or tap WhatsApp below for immediate assistance!`,
      showActions: true,
    };
  }

  // Universal / default response — always sends studio phone number for detail contact
  return {
    text: `Thank you for reaching out to SK Interior!\n\nFor detailed project discussion, custom 3D layouts, and comprehensive pricing for your residence or workspace, please contact our design team directly at:\n\n👉 Contact: ${STUDIO_PHONE}\n\nOur team is available to assist you with floor plans, material curation, and turnkey execution.`,
    showActions: true,
  };
}

export default function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hello! Welcome to SK Interior Design Studio. I am your AI Design Concierge.\n\nHow may I assist you today? Feel free to ask about our BHK pricing, design consultation, or connect directly with our designers.`,
      time: 'Just now',
      showActions: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  const handleSendMessage = (content) => {
    const query = (content || inputValue).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate realistic AI response
    setTimeout(() => {
      const response = getDummyAIResponse(query);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showActions: response.showActions,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* ──────────────────────────────────────────────────────────
          FLOATING CONTACT & CHAT BUTTONS (Bottom-Right)
          Styled exactly like the circular gold button in reference image
      ────────────────────────────────────────────────────────── */}
      <aside
        aria-label="Floating Contact & AI Assistant"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto"
      >
        {/* WhatsApp Quick Circular Button */}
        <a
          href={STUDIO_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group relative"
          aria-label="WhatsApp SK Interior"
          title="WhatsApp Studio"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="hidden sm:block absolute right-14 whitespace-nowrap bg-black/90 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-lg">
            WhatsApp Studio
          </span>
        </a>

        {/* Call Quick Circular Button */}
        <a
          href={STUDIO_PHONE_TEL}
          className="w-11 h-11 rounded-full bg-[#181818] border border-[#B59A62]/60 text-[#B59A62] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group relative"
          aria-label="Call SK Interior Studio"
          title="Call Studio"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="hidden sm:block absolute right-14 whitespace-nowrap bg-black/90 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-lg">
            Call {STUDIO_PHONE}
          </span>
        </a>

        {/* Primary Circular Gold Chat Button (Exact Look of Image 2) */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-[#C8A96A] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(200,169,106,0.6)] hover:brightness-105 hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-[#C8A96A]/20 relative group"
            aria-label="Open SK Interior AI Concierge"
            title="Chat with AI Assistant"
          >
            {/* Speech bubble icon matching reference */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-sm"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>

            {/* Subtle pulse indicator */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#121212] animate-pulse" />

            <span className="hidden sm:block absolute right-16 whitespace-nowrap bg-black/90 backdrop-blur-md text-[#C8A96A] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#C8A96A]/30 shadow-lg">
              Ask AI Concierge
            </span>
          </button>
        )}
      </aside>

      {/* ──────────────────────────────────────────────────────────
          AI CHAT DIALOG MODAL / DRAWER
      ────────────────────────────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-end sm:items-end md:items-end sm:justify-end p-0 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div
            className="w-full sm:w-[420px] max-h-[88vh] sm:max-h-[640px] h-full sm:h-auto bg-[#121212] border border-white/15 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-[#F3F1ED] animate-in fade-in slide-in-from-bottom-6 duration-300"
            role="dialog"
            aria-label="SK Interior AI Concierge Chat"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-[#171717] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C8A96A] to-[#D4BC8A] text-[#111111] flex items-center justify-center font-bold text-sm tracking-wider shadow-md">
                    SK
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#171717]" />
                </div>
                <div>
                  <h3
                    className="text-base font-medium text-[#F3F1ED] flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    SK Design Concierge
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#C8A96A]/20 text-[#C8A96A] border border-[#C8A96A]/30">
                      AI Studio
                    </span>
                  </h3>
                  <p className="text-[11px] text-[#F3F1ED]/50 font-light">
                    Direct Contact: {STUDIO_PHONE}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close Chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Quick Contact Banner inside Chat */}
            <div className="bg-[#191919] px-4 py-2.5 border-b border-white/5 flex items-center justify-between text-xs text-[#C8A96A]">
              <span className="flex items-center gap-1.5 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Studio line active: 10AM – 7PM
              </span>
              <a
                href={STUDIO_PHONE_TEL}
                className="font-semibold hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Call Now</span> →
              </a>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#C8A96A] text-[#111111] font-medium rounded-br-none'
                        : 'bg-[#1C1C1C] border border-white/10 text-[#F3F1ED] rounded-bl-none'
                    }`}
                  >
                    {msg.text}

                    {/* Action buttons inside AI response */}
                    {msg.sender === 'ai' && msg.showActions && (
                      <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                        <a
                          href={STUDIO_PHONE_TEL}
                          className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#C8A96A] text-[#111111] font-semibold text-[11px] hover:brightness-110 transition-all"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <span>Call {STUDIO_PHONE}</span>
                        </a>

                        <a
                          href={STUDIO_WHATSAPP}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-[11px] hover:bg-[#25D366] hover:text-white transition-all"
                        >
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                          </svg>
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-[#F3F1ED]/40 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 bg-[#1C1C1C] border border-white/10 rounded-2xl rounded-bl-none p-3 w-20">
                  <span className="w-2 h-2 rounded-full bg-[#C8A96A] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#C8A96A] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#C8A96A] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="p-2 sm:px-4 bg-[#151515] border-t border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_SUGGESTIONS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(item)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] bg-white/5 hover:bg-[#C8A96A]/20 border border-white/10 hover:border-[#C8A96A]/50 text-[#F3F1ED]/80 hover:text-[#C8A96A] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Message Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 bg-[#171717] border-t border-white/10 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about 1/2/3 BHK, prices, or contact..."
                className="flex-1 bg-black/40 border border-white/15 rounded-full py-2.5 px-4 text-xs sm:text-sm text-[#F3F1ED] placeholder:text-[#F3F1ED]/40 focus:outline-none focus:border-[#C8A96A]"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-[#C8A96A] disabled:opacity-40 text-[#111111] flex items-center justify-center transition-all hover:brightness-110 active:scale-95 flex-shrink-0 shadow-md"
                aria-label="Send Message"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
