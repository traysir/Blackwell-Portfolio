import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight, Terminal, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState('');
  const [iconSurprised, setIconSurprised] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const handleIconClick = () => {
    setIconSurprised(true);
    setTimeout(() => setIconSurprised(false), 600);
  };

  // Fixed projects array - removed duplicate, proper links
  const projects = [
    {
      title: "College Football Analytics",
      year: "2025",
      category: "Data Analysis",
      description: "EPA-based prediction system with real-time data pipeline and statistical modeling. Built interactive dashboard generating spreads, odds, and win probabilities with 85% accuracy.",
      tags: ["Python", "Machine Learning", "Data Viz"],
      link: "https://github.com/traysir",
      color: "violet"
    },
    {
      title: "Charity Website Management",
      year: "2024",
      category: "Web Development",
      description: "Maintained and optimized a nonprofit WordPress website, supporting fundraising and community outreach through reliable performance, improved usability, and structured content updates. Implemented SEO and analytics tracking to increase site traffic and engagement.",
      tags: ["HTML/CSS", "WordPress", "Analytics"],
      link: "https://pfcnyc.org/",
      color: "emerald"
    },
    {
      title: "AWS Data Pipeline",
      year: "2023",
      category: "Cloud Analytics",
      description: "Leveraged AWS analytics tools at Amazon to identify fulfillment trends. Optimized workflows resulting in 15% efficiency improvement through data-driven insights.",
      tags: ["AWS", "Data Analysis", "SQL"],
      link: "https://github.com/traysir",
      color: "amber"
    },
    {
      title: "Arrowfall",
      year: "2024",
      category: "Side Project",
      description: "Rhythm game with real-time audio analysis and beat detection. Features procedural note generation, multiple difficulty levels, and genre-themed visuals. Built with React and Web Audio API.",
      tags: ["JavaScript", "React", "Web Audio API"],
      link: "https://traysir.github.io/Arrowfall/",
      color: "rose"
    }
  ];

  const skills = ["Python", "SQL", "Power BI", "Tableau", "Excel", "AWS", "Linux", "Git", "Data Viz", "Statistics"];

  const experience = [
    { 
      company: "ADP", 
      role: "Technical Analyst", 
      period: "09/2024—Present", 
      stat: "Top Performer",
      logo: "/logos/adp.png",
      duties: [
        "Recognized with Top Performer Award for achieving the highest client success and satisfaction scores across the region",
        "Manage a client portfolio representing millions in payroll, delivering accurate and timely processing for organizations of varying size and complexity",
        "Utilize Linux-based tools and scripting to streamline payroll file processing and troubleshoot system issues, improving speed and accuracy for client deliverables",
        "Build and strengthen client relationships that drive long-term retention and account growth opportunities"
      ]
    },
    { 
      company: "UPS", 
      role: "Operations Manager", 
      period: "04/2023—05/2024", 
      stat: "+100% Data Efficiency",
      logo: "/logos/ups.png",
      duties: [
        "Built and deployed custom internal tools that increased employee productivity by 100%, eliminating manual tasks and doubling output efficiency",
        "Directed daily logistics operations, consistently meeting and exceeding KPIs while streamlining workflows across high-volume shipping and distribution processes"
      ]
    },
    { 
      company: "Amazon", 
      role: "Area Manager Intern", 
      period: "06/2023—08/2023", 
      stat: "AWS Analytics",
      logo: "/logos/amazon.png",
      duties: [
        "Implemented workflow optimizations that increased operational efficiency by 15%, reducing bottlenecks and improving team performance",
        "Leveraged AWS data analytics tools to identify trends and streamline fulfillment workflows, driving measurable gains in speed and accuracy"
      ]
    },
    { 
      company: "IATSE", 
      role: "Event Technician", 
      period: "01/2021—04/2024", 
      stat: "Production Technology",
      logo: "/logos/IATSE.png",
      duties: [
        "Set up, operated, and dismantled staging, lighting, video, and audio systems for concerts, corporate events, and large-scale productions",
        "Supported creative teams with lighting design, video playback, and editing, contributing to smooth and visually engaging live experiences",
        "Troubleshot and resolved live production issues in high-pressure environments, ensuring seamless shows"
      ]
    }
  ];

  const education = [
    {
      school: "Kennesaw State University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2024",
      location: "Atlanta, GA",
      stat: "Dean's List",
      logo: "/logos/ksu.png",
      highlights: [
        "Dean's List honors",
        "KSU Varsity Esports - Apex Legends"
      ]
    },
    {
      school: "Georgia Institute of Technology",
      degree: "Master of Science",
      field: "Analytics",
      period: "Pursuing",
      location: "Atlanta, GA",
      stat: "In Progress",
      logo: "/logos/gatech.png",
      highlights: [
        "Specialized focus on data analytics and machine learning",
        "Advanced coursework in statistical analysis and predictive modeling",
        "Building expertise in analytics applications for business impact"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-mono">
      {/* Cursor follower - original behavior */}
      <div 
        className="fixed w-6 h-6 border border-neutral-900 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease-out'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-neutral-50/80 backdrop-blur-2xl border-b border-neutral-200' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold tracking-tight">BB/{currentTime}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-sm hover:text-emerald-600 transition-colors relative group">
                /work
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#education" className="text-sm hover:text-emerald-600 transition-colors relative group">
                /education
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projects" className="text-sm hover:text-emerald-600 transition-colors relative group">
                /projects
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#skills" className="text-sm hover:text-emerald-600 transition-colors relative group">
                /skills
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="px-4 py-2 bg-neutral-900 text-neutral-50 text-sm hover:bg-emerald-600 transition-all duration-300">
                say_hello()
              </a>
            </div>

            <img 
              src={iconSurprised ? "/logos/icon-surprised.png" : "/logos/icon.png"} 
              alt="icon"
              onClick={handleIconClick}
              className="h-28 w-28 object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
            />

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 space-y-4 border-t border-neutral-200 pt-6">
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-emerald-600 transition-colors">/work</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-emerald-600 transition-colors">/education</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-emerald-600 transition-colors">/projects</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-emerald-600 transition-colors">/skills</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-emerald-600 transition-colors">/contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-neutral-200 opacity-30 rotate-45"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <Terminal size={16} />
                <span className="text-xs uppercase tracking-wider text-neutral-500">Available for work</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none tracking-tighter">
                Bayden<br/>
                <span className="italic font-light">Blackwell</span>
              </h1>
              
              <p className="text-xl mb-4 text-neutral-600 max-w-md">
                Data Analyst. Problem Solver. Turning data into decisions.
              </p>
              
              <p className="text-sm text-neutral-500 mb-8 max-w-md leading-relaxed">
                Kennesaw State '24 • Computer Science • Currently @ ADP Atlanta transforming 
                complex data into actionable insights with Python, SQL, and analytics tools.
              </p>

              <div className="flex gap-4">
                <a href="#projects" className="group px-6 py-3 bg-neutral-900 text-neutral-50 text-sm font-medium hover:bg-emerald-600 transition-all duration-300 flex items-center gap-2">
                  View work
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#contact" className="px-6 py-3 border border-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-neutral-50 transition-all duration-300">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-100 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-neutral-900 p-8 rounded-3xl text-neutral-50">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                  <pre className="text-xs leading-relaxed text-emerald-400">
{`const bayden = {
  role: "Data Analyst",
  location: "Atlanta, GA",
  education: [
    "BS CS @ KSU '24",
    "MS Analytics @ Georgia Tech (pursuing)"
  ],
  specialties: [
    "Data Analysis & Visualization",
    "SQL & Python Analytics", 
    "Business Intelligence",
    "Process Optimization"
  ],
  tools: ["Power BI", "Tableau", "AWS"],
  currentProject: "Payroll Analytics @ ADP",
  achievement: "Top Performer 2024"
};

console.log(bayden.specialties);
// Ready to analyze 📊`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="py-32 px-6 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-xs uppercase tracking-wider text-neutral-500 mb-4 block">Experience</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              Work History
            </h2>
            <p className="text-neutral-600">Analytics-driven roles with measurable impact.</p>
          </div>

          <div className="space-y-1">
            {experience.map((job, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                  className="w-full group border border-neutral-200 hover:border-neutral-900 transition-all duration-300 p-6 hover:bg-neutral-900 hover:text-neutral-50 text-left"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        {job.logo ? (
                          <img 
                            src={job.logo} 
                            alt={job.company}
                            className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 group-hover:invert transition-all duration-300"
                          />
                        ) : (
                          <h3 className="text-2xl font-bold">{job.company}</h3>
                        )}
                        <span className="px-3 py-1 bg-emerald-100 group-hover:bg-emerald-600 text-emerald-900 group-hover:text-neutral-50 text-xs font-medium transition-colors">
                          {job.stat}
                        </span>
                      </div>
                      <p className="text-neutral-600 group-hover:text-neutral-300">{job.role}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-neutral-500 group-hover:text-neutral-400 font-mono">
                        {job.period}
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-neutral-500 group-hover:text-neutral-400 transition-transform duration-300 flex-shrink-0 ${expandedJob === index ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </button>
                
                {expandedJob === index && (
                  <div className="border border-t-0 border-neutral-200 hover:border-neutral-900 transition-all duration-300 p-6 bg-neutral-50 relative">
                    <div className="ml-0 md:ml-12">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-4">Responsibilities & Achievements:</h4>
                      <ul className="space-y-3">
                        {job.duties.map((duty, dutyIndex) => (
                          <li key={dutyIndex} className="flex gap-3 text-sm text-neutral-700">
                            <span className="text-emerald-600 font-bold mt-0.5">•</span>
                            <span>{duty}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-neutral-500 mt-6 pt-4 border-t border-neutral-200">{job.company}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-32 px-6 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-xs uppercase tracking-wider text-neutral-500 mb-4 block">Background</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              Education
            </h2>
            <p className="text-neutral-600">Strong foundation in computer science and data analysis.</p>
          </div>

          <div className="space-y-1">
            {education.map((edu, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}
                  className="w-full group border border-neutral-200 hover:border-neutral-900 transition-all duration-300 p-6 hover:bg-neutral-900 hover:text-neutral-50 text-left"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        {edu.logo ? (
                          <img 
                            src={edu.logo} 
                            alt={edu.school}
                            className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 group-hover:invert transition-all duration-300"
                          />
                        ) : (
                          <h3 className="text-2xl font-bold">{edu.school}</h3>
                        )}
                        <span className="px-3 py-1 bg-emerald-100 group-hover:bg-emerald-600 text-emerald-900 group-hover:text-neutral-50 text-xs font-medium transition-colors">
                          {edu.stat}
                        </span>
                      </div>
                      <p className="text-neutral-600 group-hover:text-neutral-300">{edu.degree} in {edu.field}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-neutral-500 group-hover:text-neutral-400 font-mono text-right">
                        <div>{edu.period}</div>
                        <div>{edu.location}</div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-neutral-500 group-hover:text-neutral-400 transition-transform duration-300 flex-shrink-0 ${expandedEducation === index ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </button>
                
                {expandedEducation === index && (
                  <div className="border border-t-0 border-neutral-200 hover:border-neutral-900 transition-all duration-300 p-6 bg-white">
                    <div className="ml-0 md:ml-12">
                      <ul className="space-y-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex gap-3 text-sm text-neutral-700">
                            <span className="text-emerald-600 font-bold mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-neutral-500 mt-6 pt-4 border-t border-neutral-200">{edu.school}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 bg-neutral-900 text-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-xs uppercase tracking-wider text-neutral-500 mb-4 block">Selected Work</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              Projects
            </h2>
            <p className="text-neutral-400">Data analysis, dashboards, and insights.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-neutral-800 hover:bg-neutral-700 transition-all duration-500 p-12 border border-neutral-700 hover:border-emerald-500"
              >
                {index === 3 && (
                  <div className="absolute -right-12 top-6 w-40 bg-rose-500 text-neutral-50 text-center py-2 font-bold text-sm transform rotate-45 shadow-lg z-20">
                    ✨ Featured Pick
                  </div>
                )}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-xs font-mono text-neutral-500">/{project.category.toLowerCase().replace(' ', '-')}</span>
                    <span className="text-xs font-mono text-neutral-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-4xl font-bold mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono text-neutral-500 border border-neutral-700 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm font-mono group-hover:text-emerald-400 transition-colors">
                    Explore project
                    <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                <div className={`absolute inset-0 bg-${project.color}-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-500 mb-4 block">Expertise</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                Skills &<br/>Tools
              </h2>
              <p className="text-neutral-600 mb-8 leading-relaxed max-w-md">
                Specialized in Python, SQL, Power BI, and Tableau for transforming raw data 
                into clear, actionable business insights. Proven track record of driving decisions 
                through analytics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">AWS Cloud Practitioner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className="text-sm">Data Analysis with Python</span>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-300 group"
                  >
                    <span className="text-sm font-mono group-hover:text-emerald-600 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-emerald-500 text-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            Let's talk
          </h2>
          <p className="text-xl mb-12 opacity-80">
            Looking for results? Let's connect.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/traysir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-neutral-900 text-neutral-50 hover:bg-neutral-800 transition-all duration-300"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/btbwell/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-neutral-900 text-neutral-50 hover:bg-neutral-800 transition-all duration-300"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:bayden.blackwell@gmail.com"
              className="group p-6 bg-neutral-900 text-neutral-50 hover:bg-neutral-800 transition-all duration-300"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="space-y-2 text-neutral-900 font-mono text-sm">
            <p>bayden.blackwell@gmail.com</p>
            <p>(706)833-4143</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500 font-mono">
            © 2026 Bayden Blackwell — Atlanta, GA
          </p>
          <p className="text-xs text-neutral-500 font-mono">
            Hire Me!
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
