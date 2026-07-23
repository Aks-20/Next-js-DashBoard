"use client";

import { useState } from "react";
import { useRole } from "@/context/RoleContext";
import { Send, Search, Paperclip, CheckCheck } from "lucide-react";

type Message = {
  id: number;
  sender: string;
  role: string;
  text: string;
  time: string;
  isSelf: boolean;
};

const initialConversations = [
  { id: 1, name: "Sarah Jenkins (Math)", role: "Teacher", avatar: "SJ", lastMessage: "Please submit chapter 4 assignments by Friday.", unread: 2, online: true },
  { id: 2, name: "Robert Hunt (Parent)", role: "Parent", avatar: "RH", lastMessage: "Will the parent-teacher meeting start at 4 PM?", unread: 0, online: false },
  { id: 3, name: "Principal Wilson", role: "Admin", avatar: "PW", lastMessage: "Quarterly review metrics have been updated.", unread: 1, online: true },
];

const MessagesPage = () => {
  const { role } = useRole();
  const [activeChat, setActiveChat] = useState(initialConversations[0]);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "Sarah Jenkins", role: "Teacher", text: "Hello! Don't forget about the upcoming mid-term math exam.", time: "10:15 AM", isSelf: false },
    { id: 2, sender: "You", role: role, text: "Thank you for the update! What chapters will be covered?", time: "10:18 AM", isSelf: true },
    { id: 3, sender: "Sarah Jenkins", role: "Teacher", text: "Chapters 1 through 5. Please submit chapter 4 assignments by Friday.", time: "10:20 AM", isSelf: false },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: Date.now(),
      sender: "You",
      role: role,
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSelf: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex h-[calc(100vh-140px)] overflow-hidden">
      {/* CONVERSATION LIST */}
      <div className="w-full md:w-80 border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Messages Hub</h2>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-xs">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
          {initialConversations.map((c) => (
            <div
              key={c.id}
              onClick={() => setActiveChat(c)}
              className={`p-3.5 flex items-center gap-3 cursor-pointer transition-colors ${
                activeChat.id === c.id ? "bg-indigo-50/70 border-l-4 border-indigo-600" : "hover:bg-gray-50"
              }`}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {c.avatar}
                </div>
                {c.online && <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white absolute bottom-0 right-0" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-xs font-bold text-gray-900 truncate">{c.name}</h4>
                  <span className="text-[10px] text-gray-400">10:20 AM</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{c.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT MAIN PANEL */}
      <div className="hidden md:flex flex-1 flex-col bg-slate-50/50">
        {/* CHAT HEADER */}
        <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
              {activeChat.avatar}
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">{activeChat.name}</h3>
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active Now
              </span>
            </div>
          </div>
        </div>

        {/* MESSAGES BODY */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col max-w-[70%] ${m.isSelf ? "ml-auto items-end" : "items-start"}`}
            >
              <div
                className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-xs ${
                  m.isSelf
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 border border-gray-200/80 rounded-bl-none"
                }`}
              >
                {m.text}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                {m.time} {m.isSelf && <CheckCheck className="w-3 h-3 text-indigo-500 inline" />}
              </span>
            </div>
          ))}
        </div>

        {/* INPUT FOOTER */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
          <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder={`Message ${activeChat.name}...`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
          <button
            type="submit"
            className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagesPage;
