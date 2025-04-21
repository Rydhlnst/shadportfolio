import { projects } from "@/constant/projectData"


export const getProjectData = async (slug: string) => {
  return projects.find((project) => project.slug === slug) || null
}
