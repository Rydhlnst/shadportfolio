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

const languageMap: Record<string, any> = {
  typescript: Prism.languages.typescript,
  jsx: Prism.languages.jsx,
  python: Prism.languages.python,
  json: Prism.languages.json,
  html: Prism.languages.markup,
}

const defaultCodes: Record<string, string> = {
    typescript: `const myIntroduction = () => {
    return (
      <main>
        <h1>My Name is Muhammad Riyadhul Jinan Nasution</h1>
        <p>
          I'm a Computer Engineering student passionate about building useful and impactful web applications.
        </p>
      </main>
    )
  }
  
  export default myIntroduction
  `,
    jsx: `function myIntroduction() {
    return (
      <main>
        <h1>My Name is Muhammad Riyadhul Jinan Nasution</h1>
        <p>
          I'm a Computer Engineering student passionate about building useful and impactful web applications.
        </p>
      </main>
    )
  }
  
  export default myIntroduction
  `,
    python: `def my_introduction():
    return {
      "name": "Muhammad Riyadhul Jinan Nasution",
      "about": "I'm a Computer Engineering student passionate about building useful and impactful web applications."
    }
  `,
    json: `{
    "name": "Muhammad Riyadhul Jinan Nasution",
    "about": "I'm a Computer Engineering student passionate about building useful and impactful web applications."
  }
  `,
    html: `<main>
    <h1>My Name is Muhammad Riyadhul Jinan Nasution</h1>
    <p>
      I'm a Computer Engineering student passionate about building useful and impactful web applications.
    </p>
  </main>`
  }

const HomeIntro = () => {
  const [language, setLanguage] = useState("typescript")
  const [code, setCode] = useState(defaultCodes[language])

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setCode(defaultCodes[value])
  }

  return (
    <div className="space-y-4 flex flex-col mt-6">
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="jsx">JSX</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="json">JSON</SelectItem>
          <SelectItem value="html">HTML</SelectItem>
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
            className="absolute top-3 right-3 cursor-pointer z-50"
            >
            <Copy className="w-4 h-4" />
        </Button>
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) =>
            Prism.highlight(code, languageMap[language], language)
          }
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
