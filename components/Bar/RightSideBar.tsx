"use client";

import { useState, useRef, useEffect } from "react";
import { ai } from "@/api";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton"; // 🧠 Import Skeleton ShadCN

const sectionContents = {
  about: "Riyan adalah mahasiswa Teknik Komputer di Telkom University yang tertarik pada pengembangan Web2, Web3, Artificial Intelligence, dan Machine Learning.",
  project: "Riyan telah membuat berbagai proyek seperti DevFlow, AgriSense, dan CodeMate yang fokus pada inovasi teknologi.",
  resume: "Riyan memiliki pengalaman di bidang web development dan sedang mendalami Web3 serta kecerdasan buatan.",
  contact: "Riyan dapat dihubungi melalui LinkedIn: https://www.linkedin.com/in/muhammad-riyadhul-jinan-nasution-aa26101b8/ atau email: rydhlnst@gmail.com.",
};

const autoQuestions = {
  about: "Ceritakan tentang Riyan.",
  project: "Apa saja proyek-proyek yang pernah dibuat Riyan?",
  resume: "Apa pengalaman dan keahlian Riyan?",
  contact: "Bagaimana cara menghubungi Riyan?",
};

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [section, setSection] = useState<"about" | "project" | "resume" | "contact">("about");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleAsk = async (question: string, sectionKey?: keyof typeof sectionContents) => {
    const selectedSection = sectionKey || section;

    if (!question.trim()) return;

    const userMessage = { role: "user" as const, content: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Tampilkan fake AI typing skeleton sebelum real jawab
      const loadingMessage = { role: "ai" as const, content: "" };
      setMessages((prev) => [...prev, loadingMessage]);

      const aiResponse = await ai.ask(
        userMessage.content,
        sectionContents[selectedSection],
        "id",
        selectedSection
      );

      setMessages((prev) => [
        ...prev.slice(0, -1), // Hapus skeleton dulu
        { role: "ai", content: aiResponse },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAsk(input);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="pt-28 sticky right-0 top-0 flex h-screen w-[400px] flex-col gap-6 overflow-y-auto dark:shadow-none border-l max-xl:hidden">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <div className={`flex mb-1 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {/* 🔥 Bubble */}
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-primary dark:bg-primary-foreground text-accent dark:text-primary"
                    : "bg-accent text-primary"
                }`}
              >
                {/* Kalau content masih kosong => berarti masih loading => tampilkan Skeleton */}
                {msg.content ? (
                  msg.content
                ) : (
                  <div className="flex gap-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                )}
              </div>
            </div>

            {/* 🔥 Kalau ini AI message yang sudah ada, render Dropdown tepat setelahnya */}
            {msg.role === "ai" && msg.content && (
              <div className="flex justify-start mt-2">
                <div className="flex flex-col gap-2 items-center">
                  <Select
                    value={section}
                    onValueChange={(value) => {
                      setSection(value as any);
                      const autoQuestion = autoQuestions[value as keyof typeof autoQuestions];
                      if (autoQuestion) {
                        handleAsk(autoQuestion, value as keyof typeof sectionContents);
                      }
                    }}
                  >
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="about">Tentang Riyan</SelectItem>
                      <SelectItem value="project">Proyek Riyan</SelectItem>
                      <SelectItem value="resume">Pengalaman & Skill</SelectItem>
                      <SelectItem value="contact">Hubungi Riyan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center border-t px-3 pt-5 pb-4 gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pertanyaanmu..."
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading}>
          <Send className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
}
