import HomeIntro from "@/components/Editor/HomeIntro";

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


export default function Home() {
  return (
    <main className="flex flex-col pb-6">
      <div className="flex flex-col">
        <h1 className="text-4xl">Introduction</h1>
        <p className="text-muted-foreground max-w-3.5xl text-justify mt-4 text-sm">
          I’m a self-driven computer engineering student with a passion for building scalable and impactful web applications. 
          Currently exploring technologies like AI, Web3, and cloud development. Always curious. Always learning.
        </p>
        
        <HomeIntro title="My Code Introduction" defaultLanguage="typescript" codeSnippets={defaultCodes}/>
        <p className="text-sm text-muted-foreground mt-4 italic">
          “My goal is to empower people through technology by combining creativity, empathy, and engineering.”
        </p>
      </div>
      <div>
      </div>
    </main>
  );
}

{/* <div className="mt-6 flex flex-row space-x-6">
        <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card className="overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-xl">Project Name</h2>
              <h3 className="text-4xl">Devflow</h3>
            </div>
            <Button className="px-12 py-4" variant={"outline"}>
              See more projects
            </Button>
          </div>
        </div> */}