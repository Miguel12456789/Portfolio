import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="aboutme" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vibrant-purple/10 text-vibrant-purple text-xs font-semibold mb-4 border border-vibrant-purple/20">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black">
            Who’s Behind the Code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-sm"
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I am a <span className="text-foreground font-semibold">Fullstack and Software Developer</span>, currently pursuing a Bachelor's degree in Engineering, with experience in developing complete web applications, from designing and implementing relational databases to building responsive and functional user interfaces.
              </p>
              <p className="text-lg">
                I focus on writing clean, well-structured code, applying best practices. I strive to develop efficient and well-architected solutions, ensuring performance, scalability, and long-term maintainability.
              </p>
            </div>
            <a
              href="/Miguel_Martins_Curriculo.pdf"
              download="Miguel_Martins_Curriculo.pdf"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View My CV →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-sm"
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              Each project is developed with precision, a focus on performance, and absolute attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "10+", label: "Projects", color: "bg-vibrant-orange/10 text-vibrant-orange border-vibrant-orange/20" },
                { number: "5+", label: "Years of Experience", color: "bg-vibrant-purple/10 text-vibrant-purple border-vibrant-purple/20" },
                { number: "100%", label: "Dedication", color: "bg-vibrant-blue/10 text-vibrant-blue border-vibrant-blue/20" },
                { number: "∞", label: "Curiosity", color: "bg-vibrant-lime/10 text-vibrant-lime border-vibrant-lime/20" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl border p-5 text-center ${stat.color}`}
                >
                  <div className="text-3xl font-heading font-black">{stat.number}</div>
                  <div className="text-xs font-medium mt-1 opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
