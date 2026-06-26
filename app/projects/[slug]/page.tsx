import Link from "next/link"
import { notFound } from "next/navigation"
import { projectDetailStyles as s } from "../../data/dummyStyles"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data"
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

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

        <div className={s.projectHeader}>
          <div className={s.headerFlex}>
            <div className={s.headerLeft}>
              <div className={s.titleContainer}>
                <h1 className={s.projectTitle}>
                  {project.title}
                </h1>

                <span className={`${s.statusBadge} ${project.status === "active" ? s.statusActive : s.statusInactive}`}>
                  {project.status}
                </span>
              </div>

              <p className={s.projectDescription}>
                {project.description}
              </p>

              <div className={s.tagsContainer}>
                {project.tags.map((tag) => (
                  <span className={s.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={s.actionButtonsContainer}>
              {project.links.visit && (
                <Link
                  href={project.links.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.visitButton}
                >
                  <ExternalLink className={s.buttonIcon} />
                  Visit Live
                </Link>
              )}

              {project.links.howIBuilt && (
                <Link
                  href={project.links.howIBuilt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.buttonIcon}
                >
                  <FaYoutube className={s.buttonIcon} />
                  How I Built It
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className={s.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={s.projectImage}
          />
        </div>

        <div className={s.gridContainer}>
          <div className={s.mainContent}>
            <section>
              <h2 className={s.sectionTitle}>
                Project Overview
              </h2>

              <div className={s.prose}>
                <p className={s.proseText}>
                  {project.detailedDescription}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPageProps