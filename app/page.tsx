'use client';

import { FaJava, FaCode, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaServer } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiLaravel, SiFirebase, SiMysql, SiMongodb, SiSpringboot, SiAngular, SiBootstrap } from 'react-icons/si';
import { Download, Github, Linkedin, Mail, Trophy, ExternalLink, Menu, Sun, Moon, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const openVideoModal = (videoSrc: any) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const openImageModal = (img: any) => {
    setCurrentImage(img)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setIsModalOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSeVhNEtjlUp2-co2nCmM1_7RazxCMJNAux1YX23OVQmrekjXA/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );

      setAlertMessage('Message received. I will get back to you soon.');
    } catch (error) {
      setAlertMessage('There was an error sending your message. Please try again later.');
    }

    setShowAlert(true);
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  // Split skills into Active and Past
  const activeSkills = [
    { name: 'Java', icon: <FaJava className="text-[#F89820] text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F] text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Microservices', icon: <FaServer className="text-gray-500 dark:text-gray-300 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Angular', icon: <SiAngular className="text-[#DD0031] text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3] text-4xl group-hover:scale-110 transition-transform" /> },
  ];

  const pastSkills = [
    { name: 'React', icon: <FaReact className="text-blue-400 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'React Native', icon: <FaReact className="text-teal-500 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-600 dark:text-gray-400 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Laravel', icon: <SiLaravel className="text-[#FF2D20] text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28] text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Git', icon: <FaGit className="text-orange-500 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'C', icon: <FaCode className="text-[#A8B9CC] text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776AB] text-4xl group-hover:scale-110 transition-transform" /> },
  ];

  const experience = [
    {
      role: 'System Engineer Trainee',
      company: 'Infosys',
      location: 'Mysore, India',
      duration: 'October 2025 - Present',
      description: 'Currently undergoing comprehensive training and actively developing solutions using Java Spring Boot, Microservice Architecture, Angular, and Bootstrap.',
      icon: Briefcase
    }
  ];

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'Responsive Personal Portfolio to showcase my technical background',
      img: "/images/portfolio.png",
      tech: ['Next.js'],
      githubLink: 'https://github.com/darshan-dinesh-mp/my-portfolio',
    },
    {
      title: 'Food Delivery App',
      description: 'Built a Full-Stack food ordering and delivery platform tailored specifically for small local restaurants that manage their own deliveries.',
      img: '/images/FoodDeliveryApp.png',
      tech: ['React Native CLI', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth'],
      githubLink: 'https://github.com/darshan-dinesh-mp/Food-Delivery-App',
    },
    {
      title: 'Vibe - Global Chat Platform',
      description: 'A real-time chat application that allows users to connect with people worldwide, without the need for authentication, with public and private chat rooms.',
      img: '/images/Vibe.png',
      tech: ['React', 'Node.js', 'Express', 'Socket.io'],
      githubLink: 'https://github.com/darshan-dinesh-mp/chat-with-vibe',
      website: 'https://vibe-global-chat.onrender.com/',
    },
    {
      title: 'Automated Feedback Collection and Academic Performance System',
      description: 'Platform where faculties can efficiently manage their students and track their progress, with features for assessment and communication.',
      videoSrc: '/projects/smap_SR.mp4',
      tech: ['Laravel', 'MySQL'],
      githubLink: 'https://github.com/darshan-dinesh-mp/Automated-Feedback-Collection-and-Academic-Performance-System',
    },
    {
      title: 'Money Flow',
      description: 'Full Stack Finance Tracking web application.',
      videoSrc: '/projects/MoneyFlow_SR.mp4',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/darshan-dinesh-mp/money-flow-web-app',
    },
    {
      title: 'Eatables - Food Discovery and Review Platform',
      description: ' A web app where users can discover local food options, leave reviews, and create personalized must-try lists.',
      videoSrc: '/projects/eatables_SR.mp4',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      githubLink: 'https://github.com/darshan-dinesh-mp/eatables.git',
    },
  ];

  const certificates = [
    {
      title: 'Developing Back-End Apps with Node.js and Express',
      issuer: 'IBM',
      date: 'April 2024',
      image: '/images/Developing_BackEnd_Apps_with_Nodejs_and_Express.png',
      link: "https://www.coursera.org/account/accomplishments/verify/U9VZA85CFY28",
    },
    {
      title: 'React Crash Course: From Zero to Hero',
      date: 'May 2025',
      image: '/images/react-crash-course.jpg',
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-8d867c43-51ea-41fa-80dc-aad3c0f92136.jpg?v=1746098151000",
    }
  ];

  const achievements = [
    {
      title: '1st place in Coding Event',
      event: 'National-level IT Fest “Epitome-2k24,”',
      date: 'November 2024',
      venue: 'AIMIT, St.Aloysius(Deemed to be University), Beeri, Mangaluru, Karnataka, India.',
      icon: Trophy
    },
    {
      title: '1st place in Coding Event',
      event: 'National-level IT Fest "Joshiana 11.0,"',
      venue: 'St. Joseph Engineering College, Mangalore, Karnataka, India.',
      date: 'September 2022',
      icon: Trophy
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Application',
      school: 'NMAM Institute of Technology, NITTE',
      year: '2023-2025',
      description: 'CGPA: 9.02 (SEMESTER 3)'
    },
    {
      degree: 'Bachelor of Computer Application',
      school: 'St.Aloysius College Mangalore',
      year: '2020-2023',
      description: 'CGPA: 8.47'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 via-gray-100 to-blue-200/50 dark:from-purple-900/20 dark:via-black dark:to-blue-900/20" />
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-black/50 z-50 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-md py-4 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="nav-link font-medium">About</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)} className="nav-link font-medium">Experience</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="nav-link font-medium">Projects</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="nav-link font-medium">Skills</a>
                <a href="#certificates" onClick={() => setIsMenuOpen(false)} className="nav-link font-medium">Certificates</a>
                <a href="#achievements" onClick={() => setIsMenuOpen(false)} className="nav-link font-medium">Achievements</a>
                <a href="#education" onClick={() => setIsMenuOpen(false)} className="nav-link font-medium">Education</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="nav-link font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-black/50 z-50 border-b border-gray-200 dark:border-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-6 lg:space-x-8 mx-auto text-sm lg:text-base">
              <a href="#about" className="nav-link font-medium">About</a>
              <a href="#experience" className="nav-link font-medium">Experience</a>
              <a href="#projects" className="nav-link font-medium">Projects</a>
              <a href="#skills" className="nav-link font-medium">Skills</a>
              <a href="#certificates" className="nav-link font-medium">Certificates</a>
              <a href="#achievements" className="nav-link font-medium">Achievements</a>
              <a href="#education" className="nav-link font-medium">Education</a>
              <a href="#contact" className="nav-link font-medium">Contact</a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors absolute right-8"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text lg:text-8xl">Hey,<br />I'm Darshan</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-white/50">
                <span className="text-2xl md:text-3xl font-bold gradient-text">Full Stack Developer</span><br />
                Crafting digital experiences with code. Full-Stack developer currently working with Angular, React and Spring Boot.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="rotating-border">
                  <a
                    target="_blank"
                    //href="https://drive.google.com/file/d/1bZa_LMzl3cjnNp11mqGErnK102UX4-wj/view?usp=sharing"
                    className="flex items-center gap-2 relative bg-white dark:bg-black px-6 py-3 rounded-lg group border border-gray-300 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
                  >
                    <Download size={20} className="transition-transform duration-200 group-hover:scale-125" />
                    <span>Resume</span>
                  </a>
                </button>

                <a href='mailto:darshandineshmp@gmail.com' className="px-6 py-3 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Mail size={20} />
                  <span>Contact Me</span>
                </a>
              </div>
              <div className="flex gap-6 pt-4 justify-center md:justify-start">
                <a target='_blank' href="https://github.com/darshan-dinesh-mp" className="text-gray-500 hover:text-gray-900 dark:text-white/50 dark:hover:text-white transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/darshan-dinesh-mp" className="text-gray-500 hover:text-blue-600 dark:text-white/50 dark:hover:text-blue-500 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <div className="floating-element aspect-square rounded-full overflow-hidden border-4 border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-br from-purple-300/50 to-blue-300/50 dark:from-purple-500/30 dark:to-blue-500/30" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="group relative bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg dark:shadow-none border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shrink-0">
                      <exp.icon size={32} />
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full w-fit">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-600 dark:text-gray-400 font-medium">
                        <p className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                          {exp.company}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                          {exp.location}
                        </p>
                      </div>
                      <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="project-card group relative cursor-pointer bg-white/50 dark:bg-transparent rounded-xl p-4 shadow-lg dark:shadow-none border border-gray-200 dark:border-white/10 transition-all hover:shadow-xl"
                  onClick={() => {
                    project.videoSrc ? openVideoModal(project.videoSrc) : null
                    project.img ? openImageModal(project.img) : null
                  }}
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden border border-gray-100 dark:border-transparent">
                    {
                      project.videoSrc ?
                        <video
                          src={project.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="transition-transform duration-500 group-hover:scale-110 object-cover w-full h-full"
                        />
                        :
                        <Image
                          src={project.img || ''}
                          alt="Oops Image could not be rendered. Dont worry I'll look into it"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    }
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 text-sm bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full text-gray-800 dark:text-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubLink &&
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors relative z-10"
                      >
                        View on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    }
                    {project.website &&
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors relative z-10"
                      >
                        Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (currentVideo || currentImage) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl p-4">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 md:-top-10 md:-right-10 text-white text-3xl z-10 hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
              {
                currentVideo ? (
                  <video
                    src={currentVideo}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                ) : (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={currentImage || ''}
                      alt="Project Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                )
              }
            </div>
          </div>
        )}

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Technical Skills
            </h2>
            
            {/* Active Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
                Currently Working With
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {activeSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item group flex flex-col items-center justify-center w-32 md:w-40 p-6 rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-md dark:shadow-none transition-transform hover:bg-blue-50 dark:hover:bg-white/10 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-500/30"
                  >
                    {skill.icon}
                    <span className="mt-4 font-bold text-center text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
                Familiar / Previously Used
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {pastSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item group flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-md dark:shadow-none transition-transform hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105"
                  >
                    {skill.icon}
                    <span className="mt-4 font-bold text-center text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id='certificates' className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Certificates
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-card group h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-transparent relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                  <div className="certificate-overlay absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6 w-full text-white">
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-white/80 mb-2">{cert?.issuer}</p>
                      <p className="text-white/60 text-sm mb-4">{cert.date}</p>
                      <a target='_blank' href={cert.link} className="inline-flex px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300 items-center gap-2 mx-auto backdrop-blur-sm">
                        <ExternalLink size={16} />
                        <span>View Certificate</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id='achievements' className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8 justify-center">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card group bg-white dark:bg-transparent p-6 rounded-xl shadow-lg dark:shadow-none border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/30 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-white/5 backdrop-blur-sm">
                      <achievement.icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                  </div>
                  <div className="space-y-2 text-gray-600 dark:text-white/70">
                    <p className="flex items-start gap-2"><span className="text-blue-500">•</span> {achievement.event}</p>
                    <p className="flex items-start gap-2"><span className="text-blue-500">•</span> {achievement.venue}</p>
                    <p className="flex items-start gap-2"><span className="text-blue-500">•</span> {achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Timeline Section */}
        <section id='education' className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Education
            </h2>
            <div className="space-y-8 pl-6 ml-4">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item border-l-2 border-gray-400 relative">
                  <div className="space-y-2 bg-white dark:bg-white/5 p-6 rounded-xl shadow-md dark:shadow-none border border-gray-100 dark:border-white/10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{edu.degree}</h3>
                      <span className="text-sm font-medium text-gray-500 dark:text-white/50 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full w-fit">{edu.year}</span>
                    </div>
                    <p className="text-lg font-medium text-gray-700 dark:text-white/80">{edu.school}</p>
                    <p className="text-gray-500 dark:text-white/50 font-mono text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-transparent p-8 rounded-2xl shadow-xl dark:shadow-none border border-gray-200 dark:border-transparent">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type='text'
                  placeholder="Your Name"
                  required
                  name="entry.1546317662"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  name="entry.874628732"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                required
                name="entry.1693678078"
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 transition-colors resize-none"
              />
              <button type="submit" className="rotating-border w-full p-[1px]" disabled={loading}>
                <span className="flex justify-center items-center relative bg-blue-600 dark:bg-black px-6 py-3 backdrop-blur-sm border border-transparent dark:border-white/20 rounded-lg text-white hover:bg-blue-700 dark:hover:bg-white/10 hover:border-white/40 transition-all duration-300 font-medium">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>
          </div>
        </section>
        
        {/* Alert Modal */}
        {showAlert && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl text-center w-96 transform transition-transform duration-300 scale-95 border border-gray-200 dark:border-gray-700"
            >
              <p className="mb-6 text-gray-800 dark:text-gray-200 font-medium">{alertMessage}</p>
              <button
                onClick={closeAlert}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full font-medium"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
