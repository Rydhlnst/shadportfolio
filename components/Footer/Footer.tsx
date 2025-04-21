import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <div className='sticky bottom-0 bg-background flex w-full border-t py-6 px-12 justify-between'>
        <div>
            <p className='text-muted-foreground'>Connect with me</p>
        </div>
        <div className='flex space-x-6 items-center justify-center'>
            <a href="https://github.com/ryancode" target="_blank">
            <Github className="w-5 h-5 text-muted-foreground dark:hover:text-white hover:text-foreground" />
        </a>
        <a href="mailto:yourmail@email.com">
            <Mail className="w-5 h-5 text-muted-foreground dark:hover:text-white hover:text-foreground" />
        </a>
        <a href="https://linkedin.com/in/ryancode" target="_blank">
            <Linkedin className="w-5 h-5 text-muted-foreground dark:hover:text-white hover:text-foreground" />
        </a>
        </div>
    </div>
  )
}

export default Footer
