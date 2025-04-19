import * as Icons from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const sideBarLinks = {
    home: {
        label: "Home",
        path: "/",
        icon: "home", // kamu bisa sesuaikan dengan ikon library seperti lucide-react
      },
      about: {
        label: "About Me",
        path: "/about",
        icon: "user",
      },
      projects: {
        label: "Projects",
        path: "/projects",
        icon: "folder",
      },
      blog: {
        label: "Blog",
        path: "/blog",
        icon: "pen-line",
      },
      skills: {
        label: "Skills",
        path: "/skills",
        icon: "code",
      },
      contact: {
        label: "Contact",
        path: "/contact",
        icon: "mail",
      },
      resume: {
        label: "Resume",
        path: "/resume",
        icon: "file-text",
      },
}

const SideBar = () => {

  return (
    <div className="sticky left-0 top-0 h-screen flex flex-col overflow-y-auto border-r p-6 pt-36 dark:shadow-none max-sm:hidden lg:w-[266px]">
        <div className='flex flex-col space-y-4'>
        {Object.entries(sideBarLinks).map(([key, link]) => {
            return (
            <Link
                key={key}
                href={link.path}
                className="flex items-center rounded-lg hover:bg-muted transition-colors"
            >
                <Button variant={'ghost'}>
                    <span>{link.label}</span>
                </Button>
            </Link>
            );
        })}
        </div>
    </div>
  )
}

export default SideBar
