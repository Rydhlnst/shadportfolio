import React from 'react'
import { Github } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'


const Profile = () => {
  return (
    <Avatar>
        <AvatarImage src={"/"}/>
        <AvatarFallback>RJ</AvatarFallback>
    </Avatar>
  )
}

export default Profile
