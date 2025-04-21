import HomeIntro from '@/components/Editor/HomeIntro'
import { Card, CardContent } from '@/components/ui/card'
import { BrainCog, Cloud, Code, Database, Layers, LogIn } from 'lucide-react'
import React from 'react'

const defaultCodes: Record<string, string> = {
  typescript: `const myIntroduction = () => {
  return (
    <main>
      <h1>My Name is Muhammad Riyadhul Jinan Nasution</h1>
      <p>
        I’m a Computer Engineering student at Telkom University, passionate about building
        impactful and scalable web applications that combine technology and empathy.
        Currently exploring Web3, and AI.
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
        I’m a Computer Engineering student at Telkom University, passionate about building
        impactful and scalable web applications that combine technology and empathy.
        Currently exploring Web3, and AI.
      </p>
    </main>
  )
}

export default myIntroduction
`,
  python: `def my_introduction():
  return {
    "name": "Muhammad Riyadhul Jinan Nasution",
    "about": "Computer Engineering student at Telkom University, passionate about building impactful and scalable web applications that combine technology and empathy. Exploring Web3, and AI."
  }
`,
  json: `{
  "name": "Muhammad Riyadhul Jinan Nasution",
  "about": "Computer Engineering student at Telkom University, passionate about building impactful and scalable web applications that combine technology and empathy. Exploring Web3, and AI."
}
`,
  html: `<main>
  <h1>My Name is Muhammad Riyadhul Jinan Nasution</h1>
  <p>
    I’m a Computer Engineering student at Telkom University, passionate about building
    impactful and scalable web applications that combine technology and empathy.
    Currently exploring Web3, and AI.
  </p>
</main>`
}

const techStacks = [
  { name: "HTML", icon: <Code className="w-6 h-6" /> },
  { name: "Next.js", icon: <Layers className="w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <Code className="w-6 h-6" /> },
  { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
  { name: "Mongo DB", icon: <Database className="w-6 h-6" /> },
  { name: "Web3", icon: <Cloud className="w-6 h-6" /> },
  { name: "AI / OpenAI", icon: <BrainCog className="w-6 h-6" /> },
  { name: "Auth JS", icon: <LogIn className="w-6 h-6" /> },
]

const About = () => {
  return (
    <main className="flex flex-col pb-6">
      <div className="flex flex-col">
        <h1 className="text-4xl">About me</h1>
        <p className="text-muted-foreground max-w-3.5xl text-justify mt-4 text-sm">This page gives a quick look into who I am, what I do, and what I&apos;m passionate about as a developer.</p>
        <HomeIntro codeSnippets={defaultCodes} title="Hello World  I'm Riyan! 🚀" defaultLanguage='typescript'/>
        {/* <p className="text-muted-foreground max-w-3.5xl text-justify mt-4 text-sm">
        Hi, I’m Muhammad Riyadhul Jinan Nasution, or just Riyan — a Computer Engineering student at Telkom University. I’m passionate about building impactful and scalable web applications that combine technology and empathy.
        Currently exploring Web3, AI, and cloud development, I’m always driven by curiosity and a desire to learn. I believe that great tech comes from blending creativity, logic, and human-centered design.
        </p> */}
        
        <p className="text-sm text-muted-foreground mt-4 italic">
          &quot;My goal is to empower people through technology — combining creativity, empathy, and engineering to create meaningful solutions.&quot;
        </p>
      </div>
      <div className='flex flex-col mt-6'>
        <div className='flex flex-col'>
          <h1 className='text-3xl'>Education History</h1>
          <Card className="mb-4 mt-4 pt-4">
            <CardContent className='flex flex-col space-y-4'>
              <div>
                <p className="text-sm text-muted-foreground">2024 – Present</p>
                <h3 className="text-base font-semibold">Telkom University</h3>
                <p className="text-sm">Computer Engineering – Bachelor Degree</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">2022 – 2024</p>
                <h3 className="text-base font-semibold">SMAS Shafiyyatul Amaliyyah</h3>
                <p className="text-sm">Cambridge Curriculum</p>
              </div>
            </CardContent>
          </Card>

        </div>

        <div>
          <h1 className='text-3xl'>Tech Stack</h1>
          <p className="text-muted-foreground max-w-3.5xl text-justify mt-4 text-sm">A collection of tools and technologies I use and enjoy working with in building modern web applications.</p>
          <section className="mt-6 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStacks.map((stack) => (
                <Card key={stack.name} className="flex flex-col items-center justify-center py-6 dark:hover:shadow-card-foreground dark:hover:shadow-sm hover:shadow-md transition">
                  {stack.icon}
                  <p className="mt-2 text-sm font-medium">{stack.name}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default About
