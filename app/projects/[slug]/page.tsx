import Link from "next/link"
import { notFound } from "next/navigation"
import { projectDetailStyles as s } from "../../data/dummyStyles"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data"
import { ArrowLeft, ExternalLink, Package } from "lucide-react";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

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
                  className={s.secondaryButton}
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

            <section>
              <h2 className={s.sectionTitle}>
                Learning Outcomes
              </h2>

              <div className={s.learningOutcomesGrid}>
                {project.learningOutcomes.map((learningOutcome, index) => (
                  <div className={s.learningOutcomeCard} key={index}>
                    <div className={s.learningOutcomeNumber}>
                      <span className={s.learningOutcomeNumberText}>
                        {index + 1}
                      </span>
                    </div>

                    <span className={s.learningOutcomeText}>
                      {learningOutcome}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className={s.sidebar}>
            <section>
              <h3 className={s.sidebarSectionTitle}>
                Tech Stack
              </h3>

              <div className={s.techStackContainer}>
                {project.techStack.map((tech) => (
                  <span className={s.techStackItem} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className={s.sidebarSectionTitle}>
                Projects Links
              </h3>

              <div className={s.linksContainer}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <FaGithub className={s.buttonIcon} />
                    <span className={s.linkText}>View Source Code</span>
                  </a>
                )}

                {project.links.visit && (
                  <a
                    href={project.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <ExternalLink className={s.buttonIcon} />
                    <span className={s.linkText}>Live Demo</span>
                  </a>
                )}

                {project.links.pypi && (
                  <a
                    href={project.links.howIBuilt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Package className={s.buttonIcon} />
                    <span className={s.linkText}>Pypi Package</span>
                  </a>
                )}

                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <FaYoutube className={s.buttonIcon} />
                    <span className={s.linkText}>Video tutorial</span>
                  </a>
                )}
              </div>
            </section>

            <section className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>
                Project Info
              </h3>

              <div className={s.projectInfoContainer}>
                <div>
                  <p className={s.projectInfoLabel}>
                    Author
                  </p>

                  <div className={s.authorContainer}>
                    <img
                      src={project.authorAvatar}
                      alt={project.author}
                      className={s.authorAvatar}
                    />

                    <p className={s.authorName}>
                      {project.author}
                    </p>
                  </div>
                </div>

                <div>
                  <p className={s.projectInfoLabel}>
                    Status
                  </p>

                  <p className={s.projectInfoText}>
                    {project.status}
                  </p>
                </div>

                <div>
                  <p className={s.projectInfoLabel}>
                    Category
                  </p>

                  <p className={s.projectInfoText}>
                    {project.tags[0]}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  )
}

export default ProjectPageProps