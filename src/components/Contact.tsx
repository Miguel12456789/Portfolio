import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vibrant-cyan/10 text-vibrant-cyan text-xs font-semibold mb-4 border border-vibrant-cyan/20">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">
            Shall we create something{" "}
            <span className="text-gradient-vibrant">Extraordinary?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to transform your digital presence into a next-level experience?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Phone, label: "Phone", href: "tel:+35192254231", value: "+351 912 254 231" },
            { icon: Mail, label: "Email", href: "mailto:luizm0027@gmail.com", value: "luizm0027@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/miguel-martins-4171b02b6/", value: "LinkedIn Profile" },
            { icon: Github, label: "GitHub", href: "https://github.com/Miguel12456789", value: "GitHub Profile" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-card rounded-3xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-semibold text-foreground mb-1">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.value}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground/60 text-sm tracking-widest uppercase">
            Excellence isn’t optional. It’s the standard.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
