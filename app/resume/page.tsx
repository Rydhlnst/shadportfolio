import HomeIntro from '@/components/Editor/HomeIntro'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import React from 'react'

const defaultResumeCodes: Record<string, string> = {
    typescript: `const myResume = {
    name: "Muhammad Riyadhul Jinan Nasution",
    role: "Computer Engineering Student",
    university: "Telkom University",
    summary:
      "Passionate about building impactful and scalable web applications that combine technology and empathy. Currently diving into Web3, Machine Learning, and building innovative SaaS.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Sanity CMS",
      "Node.js",
      "Python",
      "Web3",
      "Git"
    ],
    experience: [
      {
        title: "Freelance Web Developer",
        duration: "2023 - present",
        description:
          "Built and deployed full-stack applications using Next.js, Sanity CMS, and Vercel. Focused on SaaS and Web3 integration."
      }
    ],
    projects: [
      {
        name: "Form2WA",
        description: "SaaS tool that connects forms to WhatsApp with automation.",
        techStack: ["Next.js", "ShadCN UI", "Sanity", "EmailJS"]
      },
      {
        name: "Tumbuhin",
        description: "AgriTech startup idea for financial tracking and AI crop recommendations.",
        techStack: ["Next.js", "OpenBanking API", "AI Advisor"]
      }
    ],
    education: {
      degree: "Bachelor in Computer Engineering",
      institution: "Telkom University",
      status: "Ongoing"
    }
  }
  
  export default myResume;`,
  
    python: `def my_resume():
    return {
      "name": "Muhammad Riyadhul Jinan Nasution",
      "role": "Computer Engineering Student",
      "university": "Telkom University",
      "summary": "Passionate about building impactful and scalable web applications that combine technology and empathy. Currently diving into Web3, Machine Learning, and building innovative SaaS.",
      "skills": [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Sanity CMS",
        "Node.js",
        "Python",
        "Web3",
        "Git"
      ],
      "experience": [
        {
          "title": "Freelance Web Developer",
          "duration": "2023 - present",
          "description": "Built and deployed full-stack applications using modern technologies."
        }
      ],
      "projects": [
        {
          "name": "Form2WA",
          "description": "SaaS tool that connects forms to WhatsApp with automation.",
          "techStack": ["Next.js", "ShadCN UI", "Sanity", "EmailJS"]
        },
        {
          "name": "Tumbuhin",
          "description": "AgriTech startup idea for financial tracking and AI crop recommendations.",
          "techStack": ["Next.js", "OpenBanking API", "AI Advisor"]
        }
      ],
      "education": {
        "degree": "Bachelor in Computer Engineering",
        "institution": "Telkom University",
        "status": "Ongoing"
      }
    }`,
  
    json: `{
    "name": "Muhammad Riyadhul Jinan Nasution",
    "role": "Computer Engineering Student",
    "university": "Telkom University",
    "summary": "Passionate about building impactful and scalable web applications that combine technology and empathy. Currently diving into Web3, Machine Learning, and building innovative SaaS.",
    "skills": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Sanity CMS",
      "Node.js",
      "Python",
      "Web3",
      "Git"
    ],
    "experience": [
      {
        "title": "Freelance Web Developer",
        "duration": "2023 - present",
        "description": "Built and deployed full-stack applications using modern technologies."
      }
    ],
    "projects": [
      {
        "name": "Form2WA",
        "description": "SaaS tool that connects forms to WhatsApp with automation.",
        "techStack": ["Next.js", "ShadCN UI", "Sanity", "EmailJS"]
      },
      {
        "name": "Tumbuhin",
        "description": "AgriTech startup idea for financial tracking and AI crop recommendations.",
        "techStack": ["Next.js", "OpenBanking API", "AI Advisor"]
      }
    ],
    "education": {
      "degree": "Bachelor in Computer Engineering",
      "institution": "Telkom University",
      "status": "Ongoing"
    }
  }`,
  
    html: `<main>
    <h1>Muhammad Riyadhul Jinan Nasution</h1>
    <h2>Computer Engineering Student</h2>
    <p>Telkom University</p>
    <section>
      <h3>Summary</h3>
      <p>Passionate about building impactful and scalable web applications that combine technology and empathy. Currently diving into Web3, Machine Learning, and building innovative SaaS.</p>
    </section>
    <section>
      <h3>Skills</h3>
      <ul>
        <li>Next.js</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>Sanity CMS</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Web3</li>
        <li>Git</li>
      </ul>
    </section>
    <section>
      <h3>Projects</h3>
      <p><strong>Form2WA</strong>: SaaS tool that connects forms to WhatsApp with automation.</p>
      <p><strong>Tumbuhin</strong>: AgriTech startup idea for financial tracking and AI crop recommendations.</p>
    </section>
  </main>`
  }
  

const Resume = () => {
  return (
    <main className="flex flex-col pb-6">
        <div className="flex flex-col">
        <h1 className="text-4xl">About me</h1>
        <p className="text-muted-foreground max-w-3.5xl text-justify mt-4 text-sm">This page is a quick dive into my background as a developer — showcasing the tools I love to work with, the projects I&apos;ve built, and the knowledge I&apos;ve gained along the way. Think of it as a digital summary of my resume, but with a developer&apos;s twist.</p>
        <HomeIntro codeSnippets={defaultResumeCodes} title="Hello World  I'm Riyan! 🚀" defaultLanguage='typescript'/>
        {/* <p className="text-muted-foreground max-w-3.5xl text-justify mt-4 text-sm">
        Hi, I’m Muhammad Riyadhul Jinan Nasution, or just Riyan — a Computer Engineering student at Telkom University. I’m passionate about building impactful and scalable web applications that combine technology and empathy.
        Currently exploring Web3, AI, and cloud development, I’m always driven by curiosity and a desire to learn. I believe that great tech comes from blending creativity, logic, and human-centered design.
        </p> */}
        
        <p className="text-sm text-muted-foreground mt-4 italic">
            &quot;Great engineering isn&apos;t just about what works — it&apos;s about what improves lives.&quot;
        </p>
        </div>
        <div className='flex flex-col mt-6'>
            <a href="/assets/CV_Muhammad Riyadhul Jinan Nasution.pdf" download>
                <Button className='gap-2 flex flex-row'>
                    <Download size={16}/> Download CV
                </Button>
            </a>
        </div>
    </main>
  )
}

export default Resume
