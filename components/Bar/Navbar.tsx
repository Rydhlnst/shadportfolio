"use client"

import React, { useState } from 'react'
import { DarkModeToggle } from '../Toggle/DarkModeToggle'
import Profile from '../Profile/Profile'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Github, MenuIcon, X } from 'lucide-react'
import { sideBarLinks } from './SideBar'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='flex justify-between items-center fixed z-50 w-full p-6 sm:px-12 border-b font-semibold bg-background'>
      <div>
        <h1>RyanCode</h1>
      </div>
      <div className='flex flex-row items-center justify-center gap-3'>
        <div className='flex flex-row gap-3 border p-1 rounded-md'>
            <Link href={"https://github.com/Rydhlnst"}>
                <Button className='dark:bg-background dark:hover:bg-primary-foreground' size={"icon"} variant={"outline"}>
                    <Github size={12}/>
                </Button>
            </Link>
            <DarkModeToggle/>
        </div>
        <Profile/>
        <Button variant={"outline"} className='dark:bg-background dark:hover:bg-primary-foreground sm:hidden' size={"icon"} onClick={() => setIsMenuOpen(true)}>
            <MenuIcon size={12}/>
        </Button>

        {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col items-start pl-12 justify-center gap-8 text-2xl font-semibold transition-all duration-300">
          <h1 className='absolute top-6'>RyanCode</h1>
          {Object.entries(sideBarLinks).map(([key, link]) => (
              <Link
                key={key}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-4xl transition duration-100"
              >
                  {link.label}
              </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <X />
          </Button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
