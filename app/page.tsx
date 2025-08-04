"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code,
  Database,
  Globe,
  PenToolIcon as Tools,
  Trophy,
  CodeIcon,
  GraduationCap,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Typing animation for subtitle
    const subtitle = document.querySelector(".subtitle")
    if (subtitle) {
      const originalText = subtitle.textContent || ""
      subtitle.textContent = ""

      let i = 0
      const typeWriter = () => {
        if (i < originalText.length) {
          subtitle.textContent += originalText.charAt(i)
          i++
          setTimeout(typeWriter, 50)
        }
      }

      setTimeout(typeWriter, 1000)
    }

    // Particle effect
    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.cssText = `
        position: fixed;
        width: 3px;
        height: 3px;
        background: rgba(96, 165, 250, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight}px;
      `

      document.body.appendChild(particle)

      const animation = particle.animate(
        [
          { transform: "translateY(0) translateX(0)", opacity: 0.6 },
          {
            transform: `translateY(-${window.innerHeight + 100}px) translateX(${Math.random() * 200 - 100}px)`,
            opacity: 0,
          },
        ],
        {
          duration: Math.random() * 4000 + 3000,
          easing: "linear",
        },
      )

      animation.onfinish = () => particle.remove()
    }

    const particleInterval = setInterval(createParticle, 3000)
    return () => clearInterval(particleInterval)
  }, [])

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "assessments", label: "Assessments" },
    { id: "portfolio", label: "Work Samples" },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="bg-slate-800/50 backdrop-blur-lg p-12 rounded-2xl mb-8 text-center shadow-2xl border border-slate-700/50">
          <div className="w-36 h-36 rounded-full mx-auto mb-8 overflow-hidden shadow-xl border-2 border-blue-400/30">
            <Image
              src="/images/joseph-profile.png"
              alt="Joseph Te Enriquez"
              width={144}
              height={144}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl font-bold mb-4 text-white">Joseph Te Enriquez</h1>

          <p className="subtitle text-xl text-blue-300 mb-6">Data Engineer & Software Developer | AI Enthusiast</p>

          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <a
              href="mailto:joseph_dean_enriquez@dlsu.edu.ph"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
              joseph_dean_enriquez@dlsu.edu.ph
            </a>
            <a
              href="tel:09171852804"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone size={20} />
              09171852804
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-dean-te-enriquez/details/experience/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/AhStayinAlive"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl mb-8 shadow-xl border border-slate-700/50">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-full p-3 text-slate-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <span className="ml-2">Menu</span>
            </button>
          </div>

          <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <div className="flex flex-col md:flex-row md:justify-center gap-4 mt-4 md:mt-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white shadow-lg transform -translate-y-1"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-700/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* About Me Section */}
        {activeSection === "about" && (
          <div className="bg-slate-800/50 backdrop-blur-lg p-12 rounded-2xl shadow-2xl border border-slate-700/50 animate-in slide-in-from-bottom-4 duration-600">
            <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
              About Me
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full mt-4"></div>
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-slate-300 max-w-4xl mx-auto">
              <p className="text-center">
                I am a passionate Computer Science student at De La Salle University - Manila, specializing in Software
                Technology with a strong focus on data engineering and AI-powered solutions. Currently pursuing my
                Bachelor's degree with a GPA of 3.3, I have gained valuable industry experience through internships at
                leading tech companies like ING Hubs Philippines and Shopee.
              </p>

              <p className="text-center">
                My expertise spans across backend development, data pipeline creation, and full-stack web applications.
                I'm particularly passionate about leveraging AI and machine learning to solve real-world problems, as
                demonstrated in my current project DiagnoAssist - an AI-powered clinical assistant that streamlines
                patient documentation and diagnostic processes.
              </p>

              <p className="text-center">
                Beyond technical skills, I have demonstrated leadership through roles such as Project Management
                Director for Computer Studies Government and Programs Lead for InsightLoops, organizing events with 100+
                participants and managing cross-functional teams. I am driven by a desire to create innovative solutions
                that make a meaningful impact in the technology landscape.
              </p>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <div className="bg-slate-800/50 backdrop-blur-lg p-12 rounded-2xl shadow-2xl border border-slate-700/50 animate-in slide-in-from-bottom-4 duration-600">
            <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
              Professional Experience
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full mt-4"></div>
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-700/30 p-8 rounded-2xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Data & Backend Intern - Client Services</h3>
                    <p className="text-xl text-blue-400 font-semibold">ING Hubs Philippines</p>
                  </div>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                    March 2025 - Current
                  </span>
                </div>

                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implemented singleton logic for static table management using Python and Apache Airflow,
                    centralizing maintenance of reference data across files to support MVP launch
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Designed and implemented client hierarchy API for legal and economic client relationships with
                    business logic separation, data layer abstraction, and routing architecture while supporting
                    end-to-end testing maintaining &gt;95% code coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Documented data schema of Source-of-Record systems, mapping client relationships to streamline data
                    integration with Dutch counterparts
                  </li>
                </ul>
              </div>

              <div className="bg-slate-700/30 p-8 rounded-2xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Category Management Planner Intern - Electronics Cluster
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold">Shopee</p>
                  </div>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                    Sept 2024 - February 2025
                  </span>
                </div>

                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Designed an Excel pipeline for 600K+ data points for Shopee Mall, contributing to a significantly
                    higher growth rate than all business units through performance visualization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Developed an Add-to-Cart tracking system that optimized 25+ marketing campaigns, significantly
                    improving SKU management, rebate processes, and campaign efficiency
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Automated a weekly rebate tracker, helping account managers visualize 550+ mall shops and maintain
                    the electronics cluster's top e-commerce market share
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="bg-slate-800/50 backdrop-blur-lg p-12 rounded-2xl shadow-2xl border border-slate-700/50 animate-in slide-in-from-bottom-4 duration-600">
            <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
              Key Projects
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full mt-4"></div>
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-700/30 p-8 rounded-2xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">DiagnoAssist</h3>
                    <p className="text-xl text-blue-400 font-semibold">Intelligent Systems Developer</p>
                  </div>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                    May 2025 - Current
                  </span>
                </div>

                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Co-developing a full-stack AI-powered clinical assistant built with FastAPI/Python and React that
                    streamlines patient documentation through speech-to-text transcription and on-demand diagnostic
                    insights
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Engineered HL7 FHIR R4-compliant data architecture, validated through iterative design with 8+
                    healthcare professionals to create structured workflows supporting SOAP formatting
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Focusing on revolutionizing medical practice with cutting-edge AI technology for healthcare
                    professionals
                  </li>
                </ul>
              </div>

              <div className="bg-slate-700/30 p-8 rounded-2xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Abstrak Motif</h3>
                    <p className="text-xl text-blue-400 font-semibold">Lead Software Engineer</p>
                  </div>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                    May 2024 - Oct 2024
                  </span>
                </div>

                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Spearheaded the development of an e-commerce web app with a team of 5 over 8 sprints, leveraging JS,
                    Handlebars, MongoDB, AJAX, and RESTful APIs to enhance user experience and functionality
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Led the Continuous Integration pipeline using Automated Playwright Testing, GitHub Actions, and
                    Node.js, ensuring seamless deployment and code reliability
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Boosted operational efficiency 30% through backend automation, reducing inventory holding and
                    invoice processing times
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="bg-slate-800/50 backdrop-blur-lg p-12 rounded-2xl shadow-2xl border border-slate-700/50 animate-in slide-in-from-bottom-4 duration-600">
            <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
              Technical Skills
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full mt-4"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-700/30 p-8 rounded-2xl border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Code className="mr-3 text-blue-400" size={24} />
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Java", "Python", "JavaScript", "Go"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 p-8 rounded-2xl border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Database className="mr-3 text-blue-400" size={24} />
                  Data & Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Apache Airflow", "PySpark", "Spring Boot", "RESTful APIs"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 p-8 rounded-2xl border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Globe className="mr-3 text-blue-400" size={24} />
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["React JS", "Full Stack Development", "Modern Software Architecture"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 p-8 rounded-2xl border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Tools className="mr-3 text-blue-400" size={24} />
                  DevOps & Testing
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Docker", "Kubernetes", "GitHub Actions", "Selenium", "Playwright"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Assessments Section */}
        {activeSection === "assessments" && (
          <div className="bg-slate-800/50 backdrop-blur-lg p-12 rounded-2xl shadow-2xl border border-slate-700/50 animate-in slide-in-from-bottom-4 duration-600">
            <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
              Assessment Results & Reflection
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full mt-4"></div>
            </h2>

            {/* Comprehensive Reflection */}
            <div className="bg-slate-700/30 p-8 rounded-2xl border-l-4 border-blue-500 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Comprehensive Assessment Reflection</h3>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  The combined PCK and APQ assessment results provide a remarkably accurate portrait of my career
                  trajectory and personal development. My primary{" "}
                  <strong className="text-blue-400">Enterprising</strong> interest (33/40) perfectly aligns with my
                  leadership roles as Project Management Director for Computer Studies Government and my entrepreneurial
                  approach to developing DiagnoAssist. This drive to start projects, make decisions, and take calculated
                  risks is evident in every major initiative I've undertaken.
                </p>

                <p>
                  The secondary <strong className="text-blue-400">Conventional</strong> interest (30/40) explains my
                  success in structured environments like ING Hubs Philippines and Shopee, where I excelled at working
                  with data pipelines, maintaining precise standards, and following established procedures while still
                  innovating within those frameworks. This combination of Enterprising and Conventional traits allows me
                  to balance innovation with systematic execution—a critical skill in data engineering and AI
                  development.
                </p>

                <p>
                  My exceptional <strong className="text-yellow-400">Verbal Ability (99th percentile)</strong> and
                  strong <strong className="text-yellow-400">Arithmetic Reasoning (93rd percentile)</strong> scores
                  directly correlate with my ability to communicate complex technical concepts to healthcare
                  professionals during DiagnoAssist development and my success in mathematical problem-solving across
                  various projects. These cognitive strengths have been instrumental in my technical documentation work
                  and stakeholder management.
                </p>

                <p>
                  The <strong className="text-green-400">Achievement</strong> work value as my primary motivator
                  perfectly explains my drive to create tangible impact through projects like the 600K+ data point
                  pipeline at Shopee and the AI-powered clinical assistant. My need for{" "}
                  <strong className="text-green-400">Recognition</strong> has motivated me to take on leadership roles
                  and seek positions where I can give directions and receive acknowledgment for my contributions.
                </p>

                <p>
                  From the APQ results, my{" "}
                  <strong className="text-purple-400">sensitivity and conscientiousness</strong> have been crucial in
                  collaborative work with healthcare professionals and in managing diverse teams across different
                  organizational contexts. My ability to understand others' feelings and needs, combined with my respect
                  for doing things right, has enabled successful cross-functional project management and stakeholder
                  engagement.
                </p>

                <p>
                  The career matches showing 93% compatibility with Investment Fund Managers and 89% with IT Project
                  Managers validate my current path in data engineering and AI development. These roles require the
                  exact combination of technical expertise, leadership capability, and systematic thinking that my
                  assessment profile indicates. My balanced approach between conservative and progressive thinking helps
                  me implement innovative solutions while maintaining organizational stability.
                </p>

                <p>
                  Looking forward, these assessment results position me well for roles requiring both technical
                  expertise and stakeholder management in data engineering, AI development, and project management
                  fields. The combination of high verbal ability, strong mathematical reasoning, achievement
                  orientation, and leadership inclination creates an ideal profile for senior technical roles with
                  management responsibilities.
                </p>
              </div>
            </div>

            {/* PCK Personal Interest Profile */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Personal Interest Profile (PCK)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-blue-500">
                  <div className="text-sm font-medium text-slate-400 mb-2">Primary Interest</div>
                  <div className="text-2xl font-bold text-blue-400 mb-3">Enterprising (33/40)</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Strong inclination towards starting projects, business ventures, persuading and leading people,
                    making decisions, and taking calculated risks for profit. Prefers action over contemplation.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-blue-400">
                  <div className="text-sm font-medium text-slate-400 mb-2">Secondary Interest</div>
                  <div className="text-2xl font-bold text-blue-400 mb-3">Conventional (30/40)</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Preference for work activities with set procedures and routines, working with data and detail,
                    precise standards, and clear lines of authority.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-blue-300">
                  <div className="text-sm font-medium text-slate-400 mb-2">Tertiary Interest</div>
                  <div className="text-2xl font-bold text-blue-400 mb-3">Investigative (26/40)</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Interest in ideas and thinking, searching for facts, and figuring out problems mentally rather than
                    through persuasion or leadership.
                  </div>
                </div>
              </div>
            </div>

            {/* Work Importance Profiler */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Work Importance Profiler (PCK)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-green-500">
                  <div className="text-sm font-medium text-slate-400 mb-2">Primary Value</div>
                  <div className="text-2xl font-bold text-green-400 mb-3">Achievement</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Strong need to use individual abilities and strengths, obtain feelings of accomplishment, and see
                    tangible results from efforts.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-green-400">
                  <div className="text-sm font-medium text-slate-400 mb-2">Secondary Value</div>
                  <div className="text-2xl font-bold text-green-400 mb-3">Recognition</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Need for advancement opportunities, giving directions, receiving recognition, prestige, and
                    leadership potential in the company and community.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-green-300">
                  <div className="text-sm font-medium text-slate-400 mb-2">Tertiary Value</div>
                  <div className="text-2xl font-bold text-green-400 mb-3">Support</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Need for fair treatment by company and supervisors, management backing, good training, and company
                    standing behind workers.
                  </div>
                </div>
              </div>
            </div>

            {/* Career Ability Profiler */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Career Ability Profiler (PCK)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-700/30 p-6 rounded-2xl text-center border-t-4 border-yellow-500">
                  <div className="text-sm font-medium text-slate-400 mb-2">Verbal Ability</div>
                  <div className="text-3xl font-bold text-yellow-400 mb-4">99th Percentile</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Exceptional ability to understand meaning of words and use them effectively in communication. Adept
                    at interpreting and analyzing written information.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl text-center border-t-4 border-yellow-400">
                  <div className="text-sm font-medium text-slate-400 mb-2">Arithmetic Reasoning</div>
                  <div className="text-3xl font-bold text-yellow-400 mb-4">93rd Percentile</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Strong ability to use math skills and logical thinking to solve problems. Can readily understand
                    mathematical concepts and solve numerical problems.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl text-center border-t-4 border-yellow-300">
                  <div className="text-sm font-medium text-slate-400 mb-2">Computation</div>
                  <div className="text-3xl font-bold text-yellow-400 mb-4">71st Percentile</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Well-suited to jobs requiring accurate use of mathematical methods and procedures to solve problems
                    and make decisions.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl text-center border-t-4 border-yellow-300">
                  <div className="text-sm font-medium text-slate-400 mb-2">Clerical Perception</div>
                  <div className="text-3xl font-bold text-yellow-400 mb-4">67th Percentile</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Can spot errors in written texts and careless errors in basic math calculations with above-average
                    accuracy.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl text-center border-t-4 border-yellow-300">
                  <div className="text-sm font-medium text-slate-400 mb-2">Form Perception</div>
                  <div className="text-3xl font-bold text-yellow-400 mb-4">65th Percentile</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Average ability to distinguish different shapes and objects. Can make comparisons and
                    discriminations in different sets of figures.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl text-center border-t-4 border-slate-500">
                  <div className="text-sm font-medium text-slate-400 mb-2">Spatial Ability</div>
                  <div className="text-3xl font-bold text-slate-400 mb-4">21st Percentile</div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Likely to learn best in one-on-one training environments. Area for potential development through
                    focused practice.
                  </div>
                </div>
              </div>
            </div>

            {/* APQ Personality Insights */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Personality Profile (APQ)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-purple-500">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">Sensitivity & Awareness</h4>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    High sensitivity enables understanding of others' feelings and needs, artistic creativity, and
                    appreciation for music, art, and nature. Uses imagination and takes different approaches to
                    problem-solving.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-purple-400">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">Conscientiousness</h4>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Strong respect for doing things right and following rules. Trustworthy, reliable, gets work done on
                    time, and is well-regarded by teachers and supervisors.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-purple-400">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">Motivation & Drive</h4>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Tendency toward tension and worry can be channeled positively into strong motivation to accomplish
                    goals and alertness to real challenges and opportunities.
                  </div>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-2xl border-l-4 border-purple-300">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">Balanced Perspective</h4>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    Shows balanced approach between conservative and progressive thinking. Comfortable with necessary
                    change while maintaining stability and not being disruptive.
                  </div>
                </div>
              </div>
            </div>

            {/* Top Career Matches */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Top Career Matches (PCK)</h3>
              <div className="bg-slate-700/30 p-6 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Investment Fund Managers</span>
                      <span className="text-green-400 font-bold">93%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Regulatory Affairs Managers</span>
                      <span className="text-green-400 font-bold">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Wind Energy Project Managers</span>
                      <span className="text-green-400 font-bold">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Labor Relations Specialists</span>
                      <span className="text-green-400 font-bold">89%</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Securities & Commodities Traders</span>
                      <span className="text-green-400 font-bold">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">IT Project Managers</span>
                      <span className="text-blue-400 font-bold">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Security Managers</span>
                      <span className="text-blue-400 font-bold">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Mathematicians</span>
                      <span className="text-blue-400 font-bold">84%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Work Samples Section */}
        {activeSection === "portfolio" && (
          <div className="bg-slate-800/50 backdrop-blur-lg p-12 rounded-2xl shadow-2xl border border-slate-700/50 animate-in slide-in-from-bottom-4 duration-600">
            <h2 className="text-4xl font-bold text-center mb-12 text-white relative">
              Academic Work Samples & Achievements
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full mt-4"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700/30 rounded-2xl overflow-hidden border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-600 flex items-center justify-center">
                  <Image
                    src="/images/ing-team-photo.png"
                    alt="ING Hubs Philippines Team"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">ING Hubs Philippines Experience</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Professional internship experience working on enterprise-level data pipelines and client
                    relationship APIs with advanced testing methodologies achieving &gt;95% code coverage.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-2xl overflow-hidden border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-600 flex items-center justify-center">
                  <Image
                    src="/images/shopee-team-photo.png"
                    alt="Shopee Team Experience"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Shopee E-commerce Analytics</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Developed comprehensive data visualization systems handling 600K+ data points, creating automated
                    tracking systems that optimized marketing campaigns and maintained market leadership.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-2xl overflow-hidden border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-600 flex items-center justify-center">
                  <Image
                    src="/images/diagnoassist-screenshot.png"
                    alt="DiagnoAssist AI Clinical Assistant"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">DiagnoAssist - AI Clinical Assistant</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Revolutionary healthcare technology project featuring AI-powered diagnostics, speech-to-text
                    transcription, and HL7 FHIR R4-compliant architecture validated with healthcare professionals.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-2xl overflow-hidden border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-600 flex items-center justify-center text-blue-400 text-6xl">
                  <Trophy />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Leadership & Event Management</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Successfully organized Web3 and fintech events with 100+ participants, directed 15+ cross-functional
                    projects, and managed technical teams across multiple organizational initiatives.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-2xl overflow-hidden border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-600 flex items-center justify-center text-blue-400 text-6xl">
                  <CodeIcon />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Abstrak Motif E-commerce Platform</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Full-stack e-commerce application with comprehensive CI/CD pipeline, automated testing, and 30%
                    operational efficiency improvement through backend automation.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-2xl overflow-hidden border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-600 flex items-center justify-center text-blue-400 text-6xl">
                  <GraduationCap />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Academic Excellence</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Maintained strong academic performance with 3.3 GPA while actively contributing to Computer Studies
                    Government and organizing technical seminars that increased engagement by 20% YoY.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
