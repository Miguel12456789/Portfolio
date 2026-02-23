import { motion } from "framer-motion";
import { Code2, Server, Palette, Gauge, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Interfaces modernas, responsivas e com animações suaves que criam uma experiência envolvente.",
    color: "from-vibrant-orange to-vibrant-yellow",
    bg: "bg-vibrant-orange/10",
    iconColor: "text-vibrant-orange",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Estruturas sólidas, seguras e escaláveis para garantir performance e estabilidade.",
    color: "from-vibrant-purple to-vibrant-blue",
    bg: "bg-vibrant-purple/10",
    iconColor: "text-vibrant-purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design minimalista, premium e orientado à conversão.",
    color: "from-vibrant-cyan to-vibrant-blue",
    bg: "bg-vibrant-cyan/10",
    iconColor: "text-vibrant-cyan",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description: "Websites rápidos, otimizados e preparados para competir nos motores de busca.",
    color: "from-vibrant-lime to-vibrant-cyan",
    bg: "bg-vibrant-lime/10",
    iconColor: "text-vibrant-lime",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Experiência perfeita em desktop, tablet e mobile.",
    color: "from-vibrant-yellow to-vibrant-orange",
    bg: "bg-vibrant-yellow/10",
    iconColor: "text-vibrant-yellow",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vibrant-blue/10 text-vibrant-blue text-xs font-semibold mb-4 border border-vibrant-blue/20">
            Skills & Especialidades
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
            Tecnologia com estratégia
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Tecnologia sem estratégia é apenas código. Eu uno os dois.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-3xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
            >
              <div className={`w-14 h-14 rounded-2xl ${skill.bg} flex items-center justify-center mb-6`}>
                <skill.icon className={`w-7 h-7 ${skill.iconColor}`} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
