import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About me", href: "#aboutme" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 inset-x-0 flex justify-center z-50"
    >
      <div
        className={`flex items-center gap-1 px-2 py-2 rounded-full border border-border bg-card/80 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          scrolled ? "shadow-xl": ""
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setActive(link.label)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              active === link.label
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
