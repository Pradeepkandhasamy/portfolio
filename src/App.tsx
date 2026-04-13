/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  Globe, 
  MessageSquare,
  ChevronRight,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  ArrowUpRight,
  Phone,
  MapPin
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// --- Configuration ---
const PORTFOLIO_DATA = {
  name: "Pradeep K",
  role: "Web Developer & Designer",
  bio: "I am a passionate Web Developer and UI/UX Designer with 2+ years of experience in building responsive websites, user-friendly interfaces, and impactful digital solutions. I specialize in frontend development and design, delivering real-world projects for clients across different industries.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "pradeepjk262@gmail.com",
    phone: "6383556320",
    address: "Ulakkudi, Virudhunagar, Tamil Nadu"
  },
  skills: [
    { name: "HTML / CSS", icon: Code2, level: 98 },
    { name: "JavaScript", icon: Terminal, level: 92 },
    { name: "React.js", icon: Code2, level: 90 },
    { name: "WordPress", icon: Globe, level: 95 },
    { name: "Figma", icon: Palette, level: 88 },
    { name: "Meta Ads", icon: MessageSquare, level: 85 }
  ],
  projects: [
    {
      title: "Nexcrete",
      description: "Designed and developed a robust construction website platform showcasing services and portfolio.",
      tags: ["Web Development", "UI/UX"],
      image: "https://picsum.photos/seed/nexcrete/800/600",
      link: "#"
    },
    {
      title: "LeaderSpark Mussafah",
      description: "Created an engaging educational portal for students and parents with intuitive navigation.",
      tags: ["School Website", "CMS"],
      image: "https://picsum.photos/seed/leaderspark/800/600",
      link: "#"
    },
    {
      title: "SheBlitz",
      description: "Developed a community-focused platform dedicated to women empowerment initiatives.",
      tags: ["Platform", "Social Impact"],
      image: "https://picsum.photos/seed/sheblitz/800/600",
      link: "#"
    },
    {
      title: "Cogniteus",
      description: "Built a professional corporate presence with modern UI elements and seamless user experience.",
      tags: ["Corporate", "Design"],
      image: "https://picsum.photos/seed/cogniteus/800/600",
      link: "#"
    },
    {
      title: "SkillBlitz",
      description: "Developed a Section 8 company website focused on skill development and social impact.",
      tags: ["Non-Profit", "Web Dev"],
      image: "https://picsum.photos/seed/skillblitz/800/600",
      link: "#"
    },
    {
      title: "Sunstem",
      description: "Designed a clean and efficient corporate website for enhanced brand identity.",
      tags: ["Corporate", "Branding"],
      image: "https://picsum.photos/seed/sunstem/800/600",
      link: "#"
    },
    {
      title: "SevenerTech",
      description: "Implemented a tech-focused digital solution to drive business growth and visibility.",
      tags: ["Tech", "Business"],
      image: "https://picsum.photos/seed/sevenertech/800/600",
      link: "#"
    },
    {
      title: "Divine Vision",
      description: "Created an intuitive e-commerce style site for an optical shop with product focus.",
      tags: ["E-commerce", "Retail"],
      image: "https://picsum.photos/seed/divinevision/800/600",
      link: "#"
    },
    {
      title: "Aroganam Technologies",
      description: "Developed a high-performance company website for technology services.",
      tags: ["Tech", "Company"],
      image: "https://picsum.photos/seed/aroganam/800/600",
      link: "#"
    }
  ],
  experience: [
    {
      company: "Aroganam Technologies",
      role: "WordPress & Frontend Developer",
      period: "2 Years",
      description: "Worked as a WordPress and Frontend Developer for 2 years, building responsive and user-friendly websites. Focused on creating clean UI, improving user experience, and delivering client-based projects. Experienced in website deployment, performance optimization, and maintaining live websites.",
      points: [
        "Developed real-world client websites across multiple domains",
        "Ensured mobile responsiveness and cross-browser compatibility",
        "Worked on deployment and live project handling",
        "Focused on user-friendly and modern design implementation"
      ]
    }
  ]
};

// --- Components ---

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [role="button"]'));
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary/30 rounded-full pointer-events-none z-[9999] backdrop-blur-sm border border-primary/50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const Reveal = ({ children, width = "fit-content" }: { children: React.ReactNode, width?: "fit-content" | "100%" }) => {
  const ref = useRef(null);
  
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Initial theme check
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            <Sparkles className="w-5 h-5" />
          </div>
          {PORTFOLIO_DATA.name.split(' ')[0]}<span className="text-primary"></span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </motion.a>
          ))}
          
          <Separator orientation="vertical" className="h-6" />
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full hover:bg-primary/10"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>

          <Button size="sm" className="rounded-full px-6">Resume</Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {item}
                </a>
              ))}
              <Button className="w-full rounded-full">Resume</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      
      {/* Animated Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] -z-10" 
      />

      <motion.div 
        style={{ y: y1, opacity }}
        className="container mx-auto px-6 text-center z-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Reveal width="100%">
            <Badge variant="secondary" className="mb-8 px-6 py-2 rounded-full border-foreground/10 glass text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 inline text-primary" />
              Available for new opportunities
            </Badge>
          </Reveal>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight mb-8 text-gradient leading-[1.1]">
            {PORTFOLIO_DATA.role.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.4 + (i * 0.1),
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <Reveal width="100%">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              {PORTFOLIO_DATA.bio}
            </p>
          </Reveal>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="rounded-full px-10 h-16 text-lg group relative overflow-hidden shadow-2xl shadow-primary/20">
              <span className="relative z-10 flex items-center gap-2">
                Explore Work
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg glass hover:bg-foreground/5 border-foreground/10">
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">{subtitle}</span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </motion.div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-muted/10">
      <div className="container mx-auto px-6">
        <SectionHeader title="Technical Arsenal" subtitle="Capabilities" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass border-foreground/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <CardHeader className="flex flex-row items-center gap-6 space-y-0 p-8 relative z-10">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    <skill.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-end mb-3">
                      <CardTitle className="text-xl font-bold">{skill.name}</CardTitle>
                      <span className="text-sm font-mono text-primary/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-foreground/5 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.3)]"
                      />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number, [key: string]: any }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative"
    >
      <Card className="overflow-hidden glass border-foreground/5 group h-full flex flex-col relative z-10 hover:border-primary/50 transition-colors duration-500">
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, var(--color-primary), transparent 40%)`
            ),
            opacity: 0.1
          }}
        />
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-sm">
            <Button size="icon" variant="secondary" className="rounded-full w-12 h-12 hover:scale-110 transition-transform">
              <ExternalLink className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full w-12 h-12 hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <CardHeader className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-[10px] uppercase font-mono border-foreground/10 bg-foreground/5">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <SectionHeader title="Selected Works" subtitle="Portfolio" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader title="Professional Journey" subtitle="Experience" />
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-0 md:left-40 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-foreground/10 to-transparent hidden md:block" />
            
            <div className="space-y-24">
              {PORTFOLIO_DATA.experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-24"
                >
                  {/* Period Column */}
                  <div className="relative pt-2">
                    <div className="sticky top-32">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-start md:items-end"
                      >
                        <span className="text-4xl font-light tracking-tighter text-foreground/20 mb-1 font-mono">
                          {exp.period.split(' ')[0]}
                        </span>
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary">
                          {exp.period.split(' ').slice(1).join(' ') || 'Years'}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[161px] top-4 w-3 h-3 bg-primary rounded-full hidden md:block shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10" />
                    
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="group"
                    >
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-widest font-bold">
                            Full-Time Role
                          </Badge>
                          <div className="h-px flex-1 bg-foreground/5" />
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-500">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-4 text-xl text-muted-foreground font-light italic">
                          <span>{exp.company}</span>
                          <Separator orientation="vertical" className="h-4 bg-foreground/10" />
                          <span className="text-sm not-italic font-mono uppercase tracking-wider opacity-60">Remote / On-site</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12">
                        <div className="space-y-8">
                          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
                            {exp.description}
                          </p>
                          
                          {exp.points && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                              {exp.points.map((point, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.4 + (i * 0.1) }}
                                  className="flex items-start gap-4 group/item"
                                >
                                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-150 transition-all duration-300" />
                                  <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors leading-snug">
                                    {point}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="hidden lg:block">
                          <div className="glass p-6 rounded-2xl border-foreground/5 w-64 space-y-4">
                            <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Key Technologies</div>
                            <div className="flex flex-wrap gap-2">
                              {["React", "WordPress", "Tailwind", "Figma", "JavaScript"].map(tech => (
                                <Badge key={tech} variant="secondary" className="text-[10px] bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-3xl overflow-hidden border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-primary-foreground relative overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              />
              <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Let's build something amazing together.</h2>
              <p className="text-primary-foreground/80 mb-12 text-xl font-light relative z-10">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Email me at</div>
                    <div className="text-lg font-medium">{PORTFOLIO_DATA.socials.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Call me at</div>
                    <div className="text-lg font-medium">{PORTFOLIO_DATA.socials.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Location</div>
                    <div className="text-lg font-medium">{PORTFOLIO_DATA.socials.address}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 bg-background/40 backdrop-blur-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold">Name</label>
                    <Input placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold">Email</label>
                    <Input placeholder="john@example.com" type="email" className="bg-white/5 border-white/10 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold">Subject</label>
                  <Input placeholder="Project Inquiry" className="bg-white/5 border-white/10 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold">Message</label>
                  <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary" />
                </div>
                <Button className="w-full h-12 rounded-xl text-base group">
                  Send Message
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center gap-6">
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-500">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
