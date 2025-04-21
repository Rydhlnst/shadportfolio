"use client"

import { useState } from "react"
import Editor from "react-simple-code-editor"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-python"
import "prismjs/components/prism-json"
import "prismjs/components/prism-markup" // HTML = markup
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from "../ui/button"
import { Copy } from "lucide-react"
import { toast } from "sonner"

interface CodeIntroBlockProps {
  defaultLanguage?: string
  codeSnippets: Record<string, string>
  title?: string
}


const languageMap: Record<string, any> = {
  typescript: Prism.languages.typescript,
  jsx: Prism.languages.jsx,
  python: Prism.languages.python,
  json: Prism.languages.json,
  html: Prism.languages.markup,
}

const HomeIntro = ({defaultLanguage = "typescript", codeSnippets, title}: CodeIntroBlockProps) => {
  const [language, setLanguage] = useState(defaultLanguage)
  const [code, setCode] = useState(codeSnippets[defaultLanguage])

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setCode(codeSnippets[value])
  }

  return (
    <div className="space-y-4 flex flex-col mt-6">
      {title && <h2 className="text-xl font-semibold">{title}</h2>}
      
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(codeSnippets).map((lang) => (
            <SelectItem key={lang} value={lang}>
              {lang}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="rounded-xl relative overflow-hidden border border-border bg-[#1e1e1e] p-4 text-sm font-mono">
        <Button
          onClick={() => {
            navigator.clipboard.writeText(code)
            toast.success("Success Copied")
          }}
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 cursor-pointer z-10"
        >
          <Copy className="w-4 h-4" />
        </Button>

        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => Prism.highlight(code, languageMap[language], language)}
          padding={16}
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 14,
            backgroundColor: "transparent",
            color: "#f8f8f2",
            outline: "none",
          }}
        />

        <p className="text-sm text-muted-foreground mt-2">
          Showing code in: <span className="font-medium capitalize">{language}</span>
        </p>
      </div>
    </div>
  )
}

export default HomeIntro
