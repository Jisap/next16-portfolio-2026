import Link from "next/link"
import { notFound } from "next/navigation"
import { projectDetailStyles as s } from "../../data/dummyStyles"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data"
import { ArrowLeft } from "lucide-react";


interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}


const ProjectPageProps = async ({ params }: ProjectPageProps) => {

  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();


  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <div className="mb-8">
          <Link href="/projects" className={s.backButton}>
            <ArrowLeft className={s.backIcon} />
            Back To Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectPageProps