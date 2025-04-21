'use client'

import { getProjectData } from "@/lib/action/getProject"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"

export default function ProjectDetailWrapper({ params }: {params: Promise<{slug: string}>}) {
    const [project, setProject] = useState<any>(null)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const {slug} = use(params);
    const router = useRouter()
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getProjectData(slug)
        if (!data) {
          router.push("/not-found") // ⛳️ redirect ke halaman 404 buatan sendiri
          return
        }
        setProject(data)
        setSelectedImage(data.images?.[0] || null)
      }
  
      fetchData()
    }, [slug, router])
  
    if (!project) {
      return (
        <div className="text-center py-10">
          <p className="text-sm text-muted-foreground">Loading project...</p>
        </div>
      )
    }

  return (
    <section className="space-y-6 pb-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-muted-foreground">{project.description}</p>

      {/* Selected Image */}
      {selectedImage && (
        <div className="aspect-[16/8] rounded-xl overflow-hidden relative w-full">
          <Image
            src={selectedImage}
            alt="Selected Screenshot"
            fill
            className="object-contain rounded-xl"
          />
        </div>
      )}

      {/* Gallery */}
      <div className="flex gap-4 overflow-x-auto mt-4 pb-2">
        {project.images?.map((img: string, i: number) => (
            <div key={i} className="flex-shrink-0">
            <Image
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="rounded-xl cursor-pointer hover:scale-105 transition"
                width={160}
                height={100}
                onClick={() => setSelectedImage(img)}
            />
            </div>
        ))}
        </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-lg font-semibold mt-6 mb-2">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {project.tech?.map((tech: string) => (
            <li key={tech} className="bg-muted px-3 py-1 rounded-full">{tech}</li>
          ))}
        </ul>
      </div>

      {/* Additional content */}
      <div className="prose dark:prose-invert max-w-none prose-li:marker:text-lime-500 prose-h2:text-emerald-600 prose-p:text-zinc-700 dark:prose-p:text-zinc-300" dangerouslySetInnerHTML={{ __html: project.content }} />

      {/* Link */}
      <a href={project.repo} target="_blank" className="text-blue-500 underline">
        View on GitHub
      </a>
    </section>
  )
}
