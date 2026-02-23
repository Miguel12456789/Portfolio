import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About Me", href: "#aboutme", sectionId: "aboutme" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Track scroll position for navbar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to detect which section is in view
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.sectionId);
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip observer updates while a click-scroll is in progress
        if (isClickScrolling.current) return;

        // Find the entry with the largest intersection ratio
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries[0];
          const matchedLink = navLinks.find(
            (link) => link.sectionId === topEntry.target.id
          );
          if (matchedLink) {
            setActive(matchedLink.label);
          }
        }
      },
      {
        // rootMargin offsets to better detect which section occupies center of viewport
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    // Temporarily disable the observer so it doesn't fight the click
    isClickScrolling.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 inset-x-0 flex justify-center z-50"
    >
      <div
        className={`flex items-center gap-1 px-2 py-2 rounded-full border border-border bg-card/80 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          scrolled ? "shadow-xl" : ""
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => handleClick(link.label, link.href)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              active === link.label
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {active === link.label && (
              <motion.span
                layoutId="navbar-active-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
