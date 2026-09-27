import { useState, useRef, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';

/* ─── EmailJS config ───────────────────────────────────────────
   Follow the setup guide at the bottom of this file to fill these in.
   ────────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'service_c8zaplw';
const EMAILJS_TEMPLATE_ID = 'template_7p9yi8p';
const EMAILJS_PUBLIC_KEY  = 'qp1-un4zuBkO513t2';
const OWNER_EMAIL         = 'petnikotinagasai@gmail.com';

/* ─── Types ─────────────────────────────────────────────────── */
interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  time: Date;
}

/* ─── Bot Brain ─────────────────────────────────────────────── */
const BOT_NAME = 'Naga AI';

function generateResponse(input: string): string {
  const q = input.toLowerCase();

  // Greetings
  if (/^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|yo)\b/.test(q))
    return `Hey there! 👋 I'm ${BOT_NAME}, Nagasai's AI assistant. I can tell you about his services, past work, pricing, or how to get started. What are you looking for?`;

  // Services
  if (/service|offer|what do you do|help me|capabilities/.test(q))
    return `Nagasai offers three core services:\n\n🔷 **Full-Stack Development** — Business websites, web apps & clean REST APIs.\n\n🔍 **SEO & Search** — Technical audits, on-page optimisation & organic traffic growth.\n\n📊 **Data Analytics** — Power BI dashboards, SQL pipelines & business intelligence.\n\nWhich one are you most interested in?`;

  // Pricing / cost
  if (/price|cost|rate|charge|budget|quote|how much/.test(q))
    return `Pricing depends on the scope of your project. Nagasai works on both fixed-price and hourly models.\n\nFor a quick estimate, the best step is to share your project details directly — you can use the **Contact** page or just drop your email here and Nagasai will reach out personally. 📩`;

  // Timeline / how long
  if (/how long|timeline|deadline|turnaround|deliver|time/.test(q))
    return `Most projects follow this rough timeline:\n\n• Small website or landing page — **1–2 weeks**\n• Full web application — **3–6 weeks**\n• SEO audit + strategy — **5–7 days**\n• Power BI dashboard — **1–2 weeks**\n\nComplex builds are scoped in detail during discovery. Want to discuss your specific project?`;

  // Full-stack / development
  if (/full.?stack|web app|website|react|next\.?js|api|backend|frontend|develop/.test(q))
    return `Nagasai builds modern full-stack solutions using:\n\n⚡ React / Next.js · TypeScript · Node.js\n🗄️ PostgreSQL · MongoDB · REST & GraphQL APIs\n☁️ Vercel · AWS · Docker\n\nHe focuses on performance, accessibility, and clean code that scales. Do you have a specific project in mind?`;

  // SEO
  if (/seo|search engine|rank|google|keyword|organic|traffic|audit/.test(q))
    return `Nagasai's SEO work covers:\n\n🔬 Technical SEO audits (Core Web Vitals, indexation, schema)\n📝 On-page & content strategy\n🔗 Backlink analysis & internal linking\n📈 Local SEO & Google Business optimisation\n\nMost clients see measurable ranking improvements within 60–90 days. Would you like to learn more?`;

  // Data / analytics
  if (/data|analytics|power bi|dashboard|sql|report|pipeline|bi|metrics|kpi/.test(q))
    return `Nagasai's data work includes:\n\n📊 Power BI & Tableau dashboards\n🗃️ SQL query optimisation & ETL pipelines\n🐍 Python (Pandas, Polars) for data transformation\n📉 Business KPI tracking & automated reporting\n\nAre you looking to visualise existing data or build a reporting pipeline from scratch?`;

  // Portfolio / work / projects
  if (/work|portfolio|project|example|case study|past|previous/.test(q))
    return `Nagasai has worked on projects spanning e-commerce platforms, SaaS dashboards, SEO campaigns, and analytics pipelines.\n\nYou can explore selected case studies on the **Work** page of this site. Want me to summarise any specific type of project?`;

  // About / who
  if (/who|about|nagasai|background|experience|years/.test(q))
    return `Nagasai is a full-stack developer, SEO strategist, and data analytics consultant based in Hyderabad, India — working with clients globally.\n\nHe's the rare type who bridges the gap between engineering, search visibility, and business intelligence — so you get one person who understands the full picture. Want to know more?`;

  // Contact / email / reach
  if (/contact|email|reach|message|get in touch|talk|call|schedule/.test(q))
    return `You can reach Nagasai directly at **petnikotinagasai@gmail.com**, or use the **Contact** page on this site.\n\nAlternatively, drop your email here and I'll flag this conversation for a personal reply! 📬`;

  // User provides email
  const emailMatch = q.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch)
    return `Got it! I've noted your email **${emailMatch[0]}** and Nagasai will follow up with you personally. Is there anything else I can help you with in the meantime?`;

  // Yes / no / ok
  if (/^(yes|yeah|yep|sure|ok|okay|absolutely|definitely|of course)\b/.test(q))
    return `Great! To get things moving, you can:\n\n1. 📄 Head to the **Contact** page to send a detailed message\n2. 📧 Email directly: petnikotinagasai@gmail.com\n3. 💬 Or just share your requirements here and I'll pass them along!\n\nWhat would you like to do?`;

  if (/^(no|nope|not really|nah)\b/.test(q))
    return `No worries! Feel free to ask me anything else about Nagasai's services, or just browse the site. I'm here if you need me. 😊`;

  // Thanks
  if (/thank|thanks|thx|appreciate/.test(q))
    return `You're very welcome! 🙏 If you ever want to start a project or have more questions, just come back and ask. Nagasai would love to work with you!`;

  // Bye
  if (/bye|goodbye|see you|later|cya/.test(q))
    return `Goodbye! 👋 It was great chatting with you. Don't hesitate to reach out when you're ready to start your project. Have a great day!`;

  // Fallback
  return `That's a great question! For detailed answers, the best next step is to connect with Nagasai directly.\n\n📩 **Email:** petnikotinagasai@gmail.com\n🌐 **Contact page:** Available in the navigation above\n\nIs there anything else about his services — development, SEO, or data analytics — I can help with?`;
}

/* ─── Helper ─────────────────────────────────────────────────── */
function uid() {
  return Math.random().toString(36).slice(2, 10);
}
function formatTime(d: Date) {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/* ─── Main Component ─────────────────────────────────────────── */
export function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uid(),
      role: 'bot',
      text: `Hi! I'm **${BOT_NAME}** 👋\n\nI'm Nagasai's AI assistant. Ask me anything about his services, past projects, or how to get started!`,
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [unread, setUnread] = useState(0);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);
  const sessionStart = useRef(new Date());

  /* Auto-scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  /* Focus input when opened */
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  /* Send email transcript via EmailJS */
  const sendEmailTranscript = useCallback(async (msgs: Message[]) => {
    if (emailSent) return;

    const transcript = msgs
      .map(m => `[${formatTime(m.time)}] ${m.role === 'bot' ? BOT_NAME : 'Visitor'}: ${m.text.replace(/\*\*/g, '')}`)
      .join('\n');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email:    OWNER_EMAIL,
          from_name:   'Naga AI Chat Widget',
          subject:     `New Chat Conversation — ${new Date().toLocaleDateString()}`,
          transcript,
          session_start: sessionStart.current.toLocaleString(),
          message_count: msgs.filter(m => m.role === 'user').length,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setEmailSent(true);
    } catch (err) {
      console.error('EmailJS error:', err);
    }
  }, [emailSent]);

  /* Send a user message */
  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: uid(), role: 'user', text, time: new Date() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setTyping(true);

    // Simulate bot "thinking"
    const delay = 600 + Math.random() * 700;
    setTimeout(() => {
      const botMsg: Message = {
        id: uid(),
        role: 'bot',
        text: generateResponse(text),
        time: new Date(),
      };
      const final = [...updated, botMsg];
      setMessages(final);
      setTyping(false);
      if (!open) setUnread(u => u + 1);

      // Send email transcript after every user message
      sendEmailTranscript(final);
    }, delay);
  }, [input, messages, open, sendEmailTranscript]);

  /* Enter key */
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /* Render bold markdown (**text**) simply */
  const renderText = (text: string) =>
    text.split('\n').map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i} className="block">
          {parts.map((part, j) =>
            j % 2 === 1
              ? <strong key={j} className="font-semibold">{part}</strong>
              : part
          )}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });

  /* ── JSX ───────────────────────────────────────────────────── */
  return (
    <>
      {/* ── Floating Toggle Button ──────────────────────────── */}
      <button
        id="ai-chat-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Open AI Chat"
        className={`
          fixed bottom-6 right-6 z-[9999]
          w-14 h-14 rounded-2xl
          bg-gradient-to-br from-blue-600 to-indigo-700
          shadow-2xl shadow-blue-600/40
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 hover:shadow-blue-500/60
          ${open ? 'rotate-0 scale-110' : ''}
        `}
      >
        {open ? (
          /* X icon */
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Chat icon */
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
        {/* Unread badge */}
        {unread > 0 && !open && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow">
            {unread}
          </span>
        )}
      </button>

      {/* ── Chat Panel ─────────────────────────────────────── */}
      <div
        className={`
          fixed bottom-24 right-6 z-[9998]
          w-[360px] max-w-[calc(100vw-24px)]
          flex flex-col
          rounded-2xl overflow-hidden
          shadow-2xl shadow-slate-900/40
          border border-slate-200/20
          transition-all duration-300 origin-bottom-right
          ${open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'}
        `}
        style={{ height: '520px' }}
      >

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border-b border-white/5 shrink-0">
          {/* Avatar */}
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shrink-0">
            <svg className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1.8M5 14.5l-1.8 1.8M5 14.5l1.8 1.8M19.8 15l1.8 1.8M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H12.75a.75.75 0 01-.75-.75V20.25z" />
            </svg>
            {/* Online dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-white">{BOT_NAME}</div>
            <div className="text-[11px] text-slate-400 font-mono">Nagasai's AI Assistant · Online</div>
          </div>

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-slate-950 px-4 py-4 space-y-4 scroll-smooth">

          {/* Date header */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-[10px] font-mono text-slate-600">
              {new Date().toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              {msg.role === 'bot' && (
                <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1.8M5 14.5l-1.8 1.8" />
                  </svg>
                </div>
              )}

              {/* Bubble */}
              <div className={`max-w-[78%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`
                    px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed
                    ${msg.role === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-tr-sm shadow-md shadow-blue-600/20'
                      : 'bg-slate-800/80 text-slate-100 rounded-tl-sm border border-white/5'}
                  `}
                >
                  {renderText(msg.text)}
                </div>
                <span className="text-[10px] text-slate-600 mt-1 font-mono px-1">
                  {formatTime(msg.time)}
                </span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex gap-2.5 items-end">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1.8M5 14.5l-1.8 1.8" />
                </svg>
              </div>
              <div className="bg-slate-800/80 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick suggestions */}
        <div className="px-3 py-2 bg-slate-900 border-t border-white/5 flex gap-1.5 overflow-x-auto scrollbar-none shrink-0">
          {['Services', 'Pricing', 'Timeline', 'Contact'].map(s => (
            <button
              key={s}
              onClick={() => { setInput(s); setTimeout(handleSend, 0); }}
              className="shrink-0 text-[11px] font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input area */}
        <div className="px-3 py-3 bg-slate-900 border-t border-white/5 flex items-center gap-2 shrink-0">
          <input
            ref={inputRef}
            id="ai-chat-input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me anything…"
            className="
              flex-1 bg-slate-800/60 border border-white/10 rounded-xl
              px-3.5 py-2.5 text-sm text-white placeholder-slate-500
              focus:outline-none focus:border-blue-500/50 focus:bg-slate-800
              transition-all font-sans
            "
          />
          <button
            id="ai-chat-send"
            onClick={handleSend}
            disabled={!input.trim() || typing}
            aria-label="Send message"
            className="
              w-10 h-10 rounded-xl shrink-0
              bg-gradient-to-br from-blue-600 to-indigo-600
              hover:from-blue-500 hover:to-indigo-500
              disabled:opacity-40 disabled:cursor-not-allowed
              flex items-center justify-center
              shadow-md shadow-blue-600/30
              transition-all hover:scale-105 active:scale-95
            "
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>

        {/* Footer label */}
        <div className="text-center py-1.5 bg-slate-950 border-t border-white/5">
          <span className="text-[10px] font-mono text-slate-700">
            Powered by Naga AI · All chats delivered to Nagasai
          </span>
        </div>
      </div>
    </>
  );
}

export default AiChatWidget;

/*
─────────────────────────────────────────────────────────────
  EMAILJS SETUP GUIDE (one-time, 5 minutes)
─────────────────────────────────────────────────────────────

1. Go to https://www.emailjs.com and create a FREE account

2. Add an Email Service:
   - Dashboard → Email Services → Add New Service
   - Choose Gmail → connect petnikotinagasai@gmail.com
   - Note your SERVICE ID (e.g. "service_abc123")

3. Create an Email Template:
   - Dashboard → Email Templates → Create New Template
   - Set To Email: petnikotinagasai@gmail.com
   - Subject:  {{subject}}
   - Body:
       New chat from your website AI assistant.

       Session start: {{session_start}}
       Messages from visitor: {{message_count}}

       ── Conversation Transcript ──
       {{transcript}}
   - Note your TEMPLATE ID (e.g. "template_xyz456")

4. Get your Public Key:
   - Dashboard → Account → General → Public Key

5. Fill them in at the top of this file:
   const EMAILJS_SERVICE_ID  = 'service_abc123';
   const EMAILJS_TEMPLATE_ID = 'template_xyz456';
   const EMAILJS_PUBLIC_KEY  = 'your_public_key';

─────────────────────────────────────────────────────────────
*/
