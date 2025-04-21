import ContactForm from '@/components/Form/ContactForm'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col space-y-6 justify-center h-full w-full'>
        <h1 className='text-4xl'>Contact Form</h1>
        <p className="text-muted-foreground max-w-3.5xl text-justify mt-4 text-sm">
            Got a question, project idea, or just want to say hello? Feel free to reach out through the form below — I’m always open to connect, collaborate, or explore new opportunities.
            </p>
        <ContactForm/>
    </div>
  )
}

export default Contact
