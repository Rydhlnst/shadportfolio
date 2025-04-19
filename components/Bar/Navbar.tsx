import React from 'react'
import { DarkModeToggle } from '../Toggle/DarkModeToggle'
import Profile from '../Profile/Profile'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed z-50 w-full p-6 sm:px-12 border-b font-semibold bg-background'>
      <div>
        <h1>RyanCode</h1>
        <ul>
            <li></li>
        </ul>
      </div>
      <div className='flex flex-row items-center justify-center gap-3'>
        <div className='flex flex-row gap-3 border p-1 rounded-md'>
            <Link href={"https://github.com/Rydhlnst"}>
                <Button className='dark:bg-background dark:hover:bg-primary-foreground' size={"icon"} variant={"outline"}>
                    <Github/>
                </Button>
            </Link>
            <DarkModeToggle/>
        </div>
        <Profile/>
      </div>
    </div>
  )
}

export default Navbar
