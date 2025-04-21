import HomeIntro from '@/components/Editor/HomeIntro'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const defaultCodes: Record<string, string> = {
  typescript: `const { success, data, error } = await getQuestions({
  page: Number(page) || 1,
  pageSize: Number(pageSize) || 10,
  query: query || "",
  filter: filter || ""
})

const { questions, isNext } = data || {}

<DataRenderer
  success={success}
  error={error}
  data={questions}
  empty={EMPTY_QUESTIONS}
  render={(questions) => (
    <div className="mt-10 flex flex-col gap-6">
      {questions.map((question) => (
        <QuestionCards key={question._id} question={question} />
      ))}
    </div>
  )}
/>
`,

  jsx: `const { success, data, error } = await getQuestions({
  page: Number(page) || 1,
  pageSize: Number(pageSize) || 10,
  query: query || "",
  filter: filter || ""
});

const { questions, isNext } = data || {};

<DataRenderer
  success={success}
  error={error}
  data={questions}
  empty={EMPTY_QUESTIONS}
  render={(questions) => (
    <div className="mt-10 flex flex-col gap-6">
      {questions.map((question) => (
        <QuestionCards key={question._id} question={question} />
      ))}
    </div>
  )}
/>
`,

  python: `def get_questions(page=1, page_size=10, query="", filter=""):
    response = api.get("/questions", params={
        "page": page,
        "pageSize": page_size,
        "query": query,
        "filter": filter
    })
    return response.json()

questions = get_questions()

for q in questions:
    print(f"Title: {q['title']}")
`,

  json: `{
  "success": true,
  "data": {
    "questions": [
      {
        "_id": "q1",
        "title": "How to use getServerSideProps in Next.js?",
        "author": "riyan.dev"
      },
      {
        "_id": "q2",
        "title": "Difference between useEffect and useLayoutEffect",
        "author": "johndoe"
      }
    ],
    "isNext": true
  }
}
`,

  html: `<section>
  <h2>All Questions</h2>
  <div class="question-list">
    <div class="question-card">
      <h3>How to use getServerSideProps in Next.js?</h3>
      <p>Asked by riyan.dev</p>
    </div>
    <div class="question-card">
      <h3>Difference between useEffect and useLayoutEffect</h3>
      <p>Asked by johndoe</p>
    </div>
  </div>
</section>`
}


const Projects = () => {
  return (
    <main className="flex flex-col pb-6">
      <div className="flex flex-col">
        <h1 className="text-4xl">What I&apos;ve Built</h1>
        <p className="text-muted-foreground max-w-3.5xl text-justify mt-4 text-sm">
          Here are some of the projects I’ve worked on — blending creativity, code, and a drive to solve real-world problems through technology.
        </p>
        
        <HomeIntro title="Project Snippet" defaultLanguage="typescript" codeSnippets={defaultCodes}/>
        <p className="text-sm text-muted-foreground mt-4 italic">
          &quot;Every line of code is a step toward turning ideas into impact.&quot;
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          This snippet is from <span className="font-semibold">DevFlow</span>, a Q&A platform I built inspired by StackOverflow.
          It handles fetching and rendering a paginated list of questions from the database, complete with filtering and error handling.
        </p>
        <Card className="hover:shadow-lg transition p-4 mt-6">
        <CardHeader>
          <CardTitle>DevFlow</CardTitle>
          <CardDescription>Q&A platform for developers inspired by StackOverflow</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Tech Stack: Next.js, Tailwind, Mongo DB</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/projects/devflow">View Project</Link>
          </Button>
        </CardFooter>
      </Card>

      </div>
      <div>
      </div>
    </main>
  )
}

export default Projects
