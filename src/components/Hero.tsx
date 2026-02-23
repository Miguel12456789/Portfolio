import { motion } from "framer-motion";

const FloatingShape = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-x-clip px-6 pt-24">
      {/* Marquee name */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="text-[12vw] font-heading font-black tracking-tight text-foreground/[0.04] mx-4"
            >
              FULLSTACK DEVELOPER
            </span>
          ))}
        </div>
      </div>

      {/* Floating 3D shapes */}
      <FloatingShape className="absolute top-[18%] left-[8%] md:left-[15%]" delay={0}>
        <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-vibrant-orange to-vibrant-yellow rounded-lg rotate-12 shadow-xl" />
      </FloatingShape>

      <FloatingShape className="absolute top-[15%] right-[8%] md:right-[15%]" delay={0.3}>
        <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-vibrant-cyan to-vibrant-blue rounded-full shadow-xl" />
      </FloatingShape>

      <FloatingShape className="absolute bottom-[25%] left-[10%] md:left-[18%]" delay={0.5}>
        <div className="w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br from-vibrant-purple to-vibrant-blue rounded-2xl rotate-45 shadow-xl" />
      </FloatingShape>

      <FloatingShape className="absolute bottom-[20%] right-[10%] md:right-[18%]" delay={0.7}>
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-vibrant-lime to-vibrant-cyan rounded-xl shadow-xl" />
      </FloatingShape>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {["Frontend Dev", "Backend Dev", "Software Dev"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.95] mb-6"
        >
          Hello, I’m{" "}
          <span className="text-gradient-vibrant italic pr-4">Miguel!</span>
        </motion.h1>

        {/* Profile avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className="w-40 h-40 md:w-52 md:h-52 rounded-3xl bg-gradient-to-br from-vibrant-purple to-vibrant-blue flex items-center justify-center mb-8 shadow-2xl overflow-hidden"
        >
          <span className="text-6xl md:text-7xl">👨‍💻</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-sm mb-2"
        >
          ✦ GET TO KNOW ME BETTER
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 px-8 py-4 rounded-full bg-card border-2 border-border text-foreground font-heading font-semibold text-lg hover:border-primary hover:shadow-xl transition-all duration-300"
        >
          Let’s Work Together!
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
