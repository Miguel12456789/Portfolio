import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FilmStream",
    description: "A web application for managing movies and TV series, allowing users to organize content and administrators to manage the entire catalog through a complete admin panel.",
    tags: ["JavaScript", "Node.js", "Express", "EJS", "MongoDB", "Cloudinary"],
    accent: "bg-vibrant-orange",
    github: "https://github.com/Miguel12456789/FilmStream",
  },
  {
    title: "Mercado Público",
    description: "A web application developed for the company Helpdesck Público to facilitate the consultation, analysis, and export of data related to public procurement in Portugal. The platform integrates information from the Base Gov portal and other databases, allowing users to access public contract data in a clear, organized, and transparent way, in accordance with the Public Contracts Code.",
    tags: ["JavaScript", "Node.js", "Express", "EJS", "MongoDB"],
    accent: "bg-vibrant-purple",
    github: "https://github.com/Miguel12456789/Mercado-Publico",

  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vibrant-orange/10 text-vibrant-orange text-xs font-semibold mb-4 border border-vibrant-orange/20">
            Selected Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
            Recent Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Each project is a blend of strategy, aesthetics, and performance.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-card rounded-3xl border border-border p-8 md:p-10 hover:shadow-lg transition-all duration-400"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Accent bar */}
                <div className={`w-16 h-16 md:w-20 md:h-20 ${project.accent} rounded-2xl shrink-0 flex items-center justify-center`}>
                  <span className="text-3xl text-white font-heading font-black">
                    {project.title.charAt(project.title.length - 1) === 'a' ? 'α' : project.title.charAt(project.title.length - 1) === 'a' ? 'N' : ''}
                    {project.title.includes("FilmStream") && "α"}
                    {project.title.includes("Mercado Público") && "✦"}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
