'use client';

import { FaJava, FaCode, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiLaravel, SiFirebase, SiMysql, SiMongodb } from 'react-icons/si';
import { Download, Github, Linkedin, Mail, Trophy, ExternalLink, Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

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


  //Contact Form Logic
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


  const skillsWithIcons = [
    { name: 'React', icon: <FaReact className="text-blue-400 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'React Native', icon: <FaReact className="text-teal-500 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Node', icon: <FaNodeJs className="text-green-600 text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-600 text-4xl group-hover:scale-110 transition-transform" /> },
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
    { name: 'GitHub', icon: <FaGithub className="text-black text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Java', icon: <FaJava className="text-[#F89820] text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'C', icon: <FaCode className="text-[#A8B9CC] text-4xl group-hover:scale-110 transition-transform" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776AB] text-4xl group-hover:scale-110 transition-transform" /> },
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
      description: 'CGPA: 8.97 (SEMESTER 3)'
    },
    {
      degree: 'Bachelor of Computer Application',
      school: 'St.Aloysius College Mangalore',
      year: '2020-2023',
      description: 'CGPA: 8.47'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      </div>


      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 w-full backdrop-blur-md bg-black/50 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 border-b border-white/10">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="nav-link">About</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="nav-link">Projects</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="nav-link">Skills</a>
                <a href="#certificates" onClick={() => setIsMenuOpen(false)} className="nav-link">Certificates</a>
                <a href="#achievements" onClick={() => setIsMenuOpen(false)} className="nav-link">Achievements</a>
                <a href="#education" onClick={() => setIsMenuOpen(false)} className="nav-link">Education</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="nav-link">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>


      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 w-full backdrop-blur-md bg-black/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#certificates" className="nav-link">Certificates</a>
              <a href="#achievements" className="nav-link">Achievements</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
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
              <p className="text-lg md:text-xl text-white/50">
                <span className="text-2xl md:text-3xl font-bold gradient-text">Full Stack Developer</span><br />
                Crafting digital experiences with code. Proficient in MERN stack,
                React Native, and Laravel development.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="rotating-border">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1bZa_LMzl3cjnNp11mqGErnK102UX4-wj/view?usp=sharing"
                    className="flex items-center gap-2 relative bg-black px-6 py-3 rounded-lg group border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <Download size={20} className="transition-transform duration-200 group-hover:scale-125" />
                    <span>Resume</span>
                  </a>
                </button>

                <a href='mailto:darshandineshmp@gmail.com' className="px-6 py-3 backdrop-blur-sm border border-white/20 rounded-lg
                             hover:bg-white/10 hover:border-white/40 transition-all duration-300
                             flex items-center gap-2">
                  <Mail size={20} />
                  <span>Contact Me</span>
                </a>
              </div>
              <div className="flex gap-6 pt-4 justify-center md:justify-start">
                <a target='_blank' href="https://github.com/darshan-dinesh-mp" className="text-white/50 hover:text-white transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/darshan-dinesh-mp" className="text-white/50 hover:text-blue-500 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <div className="floating-element aspect-square rounded-full overflow-hidden
                            border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 blur-3xl bg-gradient-to-br from-purple-500/30 to-blue-500/30" />
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
                <div key={index} className="project-card group relative cursor-pointer"
                  onClick={() => {
                    project.videoSrc ? openVideoModal(project.videoSrc) : null
                    project.img ? openImageModal(project.img) : null
                  }
                  }
                >
                  <div
                    className="relative h-48 mb-4 rounded-lg overflow-hidden"
                  >
                    {
                      project.videoSrc ?
                        <video
                          src={project.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="transition-transform duration-500 group-hover:scale-110"
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
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 text-sm bg-white/5 backdrop-blur-sm
                                               border border-white/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.githubLink &&
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors relative z-10"
                    >
                      View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  }
                  {project.website &&
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors relative z-10 ml-4"
                    >
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  }
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (currentVideo || currentImage) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-xl z-10"
              >
                ✕
              </button>
              {
                currentVideo ? (
                  <video
                    src={currentVideo}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                ) : (
                  <Image
                    src={currentImage || ''}
                    alt="Project Image"
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                )
              }
            </div>
          </div>
        )}

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              My Tech Skills
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {skillsWithIcons.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item group flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-transform hover:bg-white/10 hover:border-white/30 hover:scale-105"
                >
                  {skill.icon}
                  <span className="mt-2 font-bold text-center">{skill.name}</span>
                </div>
              ))}
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
                <div key={index} className="certificate-card group h-64">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                  <div className="certificate-overlay">
                    <div className="text-center p-6">
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-white/70 mb-2">{cert?.issuer}</p>
                      <p className="text-white/50">{cert.date}</p>
                      <a target='_blank' href={cert.link} className="mt-4 px-4 py-2 bg-white/10 rounded-lg
                                     hover:bg-white/20 transition-colors duration-300
                                     flex items-center gap-2 mx-auto">
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
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/5 backdrop-blur-sm">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                  </div>
                  <p className="text-white/70"> - {achievement.event}</p>
                  <p className="text-white/70"> - {achievement.venue}</p>
                  <p className="text-white/70"> - {achievement.date}</p>
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
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold gradient-text">{edu.degree}</h3>
                      <span className="text-white/50">{edu.year}</span>
                    </div>
                    <p className="text-lg text-white/70">{edu.school}</p>
                    <p className="text-white/50">{edu.description}</p>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type='text'
                  placeholder="Your Name"
                  required
                  name="entry.1546317662"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  name="entry.874628732"
                  className="form-input"
                />
              </div>
              <textarea
                placeholder="Your Message"
                required
                name="entry.1693678078"
                rows={6}
                className="form-input"
              />
              <button type="submit" className="rotating-border w-full p-[1px]" disabled={loading}>
                <span className="flex justify-center items-center relative bg-black px-6 py-3 backdrop-blur-sm border border-white/20 rounded-lg
                             hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>
          </div>
        </section>
        {showAlert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center w-96 transform transition-transform duration-300 scale-95 animate-scaleUp"
            >
              <p className="mb-4 text-gray-800 dark:text-gray-200">{alertMessage}</p>
              <button
                onClick={closeAlert}
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
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