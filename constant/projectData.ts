export const projects = [
    {
      slug: "devflow",
      title: "DevFlow",
      description: "A Q&A platform for developers inspired by StackOverflow.",
      videoUrl: "https://www.youtube.com/embed/your-devflow-video-id",
      images: [
        "/images/projects/HomeDevflow.png",
        "/images/projects/AskAQuestionDevflow.png",
        "/images/projects/QuestionShowDevflow.png",
        "/images/projects/AIAnswerDevflow.png",
        "/images/projects/NoAnswer.png",
        "/images/projects/LoginDevflow.png",
      ],
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Mongo DB"],
      content: `
        <h2>Overview</h2>
        <p>DevFlow is a full-stack web application that allows developers to ask, answer, and search for technical questions. It features authentication, search filtering, pagination, and markdown-supported content creation.</p>
        <h2>Key Features</h2>
        <ul>
          <li>Ask and answer technical questions</li>
          <li>Filter questions by tag and popularity</li>
          <li>Live search with debounce</li>
          <li>Integrated with Sanity CMS for content management</li>
        </ul>
        <h2>Challenges</h2>
        <p>Building real-time filtering with pagination and maintaining clean state management was a fun challenge.</p>
      `,
      repo: "https://github.com/Rydhlnst/v2devflow"
    },
    // Tambahkan project lain di sini jika diperlukan
  ];