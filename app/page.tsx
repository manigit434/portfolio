'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (let section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      title: 'Certify Me',
      description:
        'Web app for generating and verifying digital certificates with secure validation.',
      tech: ['HTML/CSS', 'JavaScript', 'Web APIs'],
      live: 'https://certify-me-rtpy.onrender.com',
      github: 'https://github.com/manigit434',
      status: 'live',
    },
    {
      title: 'Smart Vehicle Procurement',
      description:
        'Blockchain-based system for transparent vehicle procurement with smart contracts.',
      tech: ['Blockchain', 'Java', 'SQL', 'Smart Contracts'],
      live: '#',
      github: 'https://github.com/manigit434',
      status: 'progress',
    },
    {
      title: 'Elliptic Curve Encryption',
      description:
        'Efficient asymmetric encryption scheme using Elliptic Curve Cryptography.',
      tech: ['Java', 'Cryptography', 'ECC', 'Math'],
      live: '#',
      github: 'https://github.com/manigit434',
      status: 'complete',
    },
  ];
const statGradient: Record<string, string> = {
  purple: 'from-purple-400 via-purple-500 to-purple-400',
  pink: 'from-pink-400 via-pink-500 to-pink-400',
  indigo: 'from-indigo-400 via-indigo-500 to-indigo-400',
  emerald: 'from-emerald-400 via-emerald-500 to-emerald-400',
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Animated Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-black/70 backdrop-blur-xl z-50 border-b border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`relative font-semibold transition-all duration-300 ${
                  activeSection === section
                    ? 'text-purple-400'
                    : 'text-slate-400 hover:text-purple-400'
                }`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section WITH PROFILE PHOTO */}
      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center pt-24 px-6"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    
    {/* LEFT: Profile Photo */}
    <motion.div
      variants={itemVariants}
      className="flex justify-center md:justify-start"
    >
      <motion.img
        src="/profile.jpg.jpeg" // change to your exact filename
        alt="Manikanta Katta"
        className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl shadow-purple-500/60 border-8 border-purple-500/70 hover:shadow-purple-600/80 mx-auto"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </motion.div>

  {/* RIGHT: Text Content */}
    <div className="text-center md:text-left md:-translate-x-8 lg:-translate-x-12">

      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent leading-tight"

      >
        Manikanta<br />Katta
      </motion.h1>
      
     <motion.h2
      variants={itemVariants}
      className="text-lg md:text-2xl mb-6 text-slate-300 font-light tracking-wide"
>
      B.Tech CSE Student |{' '}
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-black">
      Aspiring Software Engineer
      </span>
     </motion.h2>


      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl mb-10 max-w-2xl text-slate-400 leading-relaxed"
      >
        Building secure & scalable systems with{' '}
        <span className="text-purple-400 font-semibold">Java</span>,{' '}
        <span className="text-pink-400 font-semibold">Blockchain</span>, and{' '}
        <span className="text-purple-400 font-semibold">Cryptography</span>
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-3xl text-lg font-bold shadow-2xl shadow-purple-500/25 transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10">View Projects</span>
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-purple-600/50 hover:border-purple-400 hover:bg-purple-600/20 px-10 py-5 rounded-3xl text-lg font-bold transition-all duration-500 backdrop-blur-sm"
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </div>
  </div>
</div>

      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl md:text-7xl font-black text-center mb-24 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12"
            >
              B.Tech Computer Science student focused on backend development, blockchain, and cryptography. Currently building a{' '}
              <span className="text-purple-400 font-semibold">
                Smart Vehicle Procurement
              </span>{' '}
              Actively seeking Software Engineer Roles.
            </motion.p>
            <div className="flex flex-row flex-wrap gap-4">
            <motion.a
              href="https://github.com/manigit434"
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.4)' }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/25 transition-all duration-500 backdrop-blur-sm"
            >
              <span>View GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Manikanta_434/"
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.4)' }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/25 transition-all duration-500 backdrop-blur-sm"
            >
              <span>LeetCode</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {[
              { num: '3+', label: 'Projects', color: 'purple' },
              { num: 'Java', label: 'Expert', color: 'pink' },
              { num: 'DSA', label: 'Strong Foundation', color: 'indigo' },
              { num: '100+', label: 'LeetCode', color: 'emerald' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.3)',
                }}
                className="group aspect-square w-full bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 shadow-2xl flex flex-col justify-center"
              >
                <motion.div
                  className={`text-4xl font-black bg-gradient-to-r from-${stat.color}-400 via-${stat.color}-500 to-${stat.color}-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-all duration-300`}
                  animate={{ rotateY: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.num}
                </motion.div>
                <div className="text-slate-400 text-lg font-semibold group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="py-32 px-6 bg-slate-800/20 backdrop-blur-sm max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl md:text-7xl font-black text-center mb-24 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Languages',
              skills: ['Java', 'HTML/CSS', 'SQL'],
              icon: '💻',
              color: 'purple',
            },
            {
              title: 'Core CS',
              skills: ['Data Structures & Algorithms', 'Computer Networks', 'Operating Systems'],
              icon: '⚡',
              color: 'emerald',
            },
            {
              title: 'Technologies',
              skills: ['Blockchain', 'Elliptic Curve Cryptography', 'REST APIs'],
              icon: '🔒',
              color: 'pink',
            },
            {
              title: 'Tools',
              skills: ['Git/GitHub', 'Next.js', 'Vercel'],
              icon: '🔧',
              color: 'indigo',
            },
          ].map((skillGroup, index) => (
            <motion.div
              key={skillGroup.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.3)',
              }}
              className="group bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-10 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/30"
            >
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r from-${skillGroup.color}-500 to-${skillGroup.color}-600 rounded-2xl flex items-center justify-center text-2xl shadow-2xl shadow-${skillGroup.color}-500/25 group-hover:scale-110 transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skillGroup.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {skillGroup.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group-hover:text-white transition-colors text-slate-300 font-medium flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      whileHover={{ scale: 2 }}
                    />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl md:text-7xl font-black text-center mb-24 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -20,
                scale: 1.02,
                boxShadow: '0 35px 60px -15px rgba(168, 85, 247, 0.4)',
              }}
              className="group bg-gradient-to-b from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-700 shadow-2xl"
            >
              <div
                className={`p-2 px-4 mt-4 mx-6 rounded-full inline-flex items-center space-x-2 text-sm font-semibold ${
                  project.status === 'live'
                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                    : project.status === 'progress'
                    ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                    : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    project.status === 'live'
                      ? 'bg-green-400'
                      : project.status === 'progress'
                      ? 'bg-orange-400'
                      : 'bg-purple-400'
                  }`}
                ></div>
                <span>
                  {project.status === 'live'
                    ? 'LIVE DEMO'
                    : project.status === 'progress'
                    ? 'IN PROGRESS'
                    : 'COMPLETE'}
                </span>
              </div>

              <div className="p-8">
                <motion.h3
                  whileHover={{ color: 'rgb(255,255,255)' }}
                  className="text-2xl md:text-3xl font-bold mb-6 text-slate-200 group-hover:text-white transition-all duration-300"
                >
                  {project.title}
                </motion.h3>

                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      className="px-4 py-2 bg-slate-700/50 backdrop-blur-sm text-slate-300 rounded-xl text-sm font-medium hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 border border-slate-600/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-4 rounded-2xl text-center font-bold shadow-lg shadow-purple-500/25 transition-all duration-300"
                  >
                    {project.status === 'live' ? 'Live Demo' : 'Coming Soon'}
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-slate-700/80 hover:bg-slate-600 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="py-32 px-6 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl md:text-7xl font-black text-center mb-24 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-12 text-white">Get in touch</h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-6 bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg text-white">Email</p>
                  <a
                    href="mailto:kattamanikanta434@gmail.com"
                    className="text-purple-400 hover:text-purple-300 font-semibold text-lg block transition-colors"
                  >
                    kattamanikanta434@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-6 bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338a2.5 2.5 0 002.5-2.5V6.162a2.5 2.5 0 00-2.5-2.5H3.662a2.5 2.5 0 00-2.5 2.5V13.84a2.5 2.5 0 002.5 2.5h4.416c.39.54 1.061.859 1.785.859.697 0 1.34-.323 1.77-.859h3.107z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg text-white">GitHub</p>
                  <a
                    href="https://github.com/manigit434"
                    target="_blank"
                    className="text-purple-400 hover:text-purple-300 font-semibold text-lg block transition-colors"
                  >
                    manigit434
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/60 backdrop-blur-xl p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Send a message</h3>
            <form className="space-y-6">
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: 'rgb(168, 85, 247)' }}
                type="text"
                placeholder="Your Name"
                className="w-full p-5 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm shadow-lg"
              />
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: 'rgb(168, 85, 247)' }}
                type="email"
                placeholder="your.email@example.com"
                className="w-full p-5 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm shadow-lg"
              />
              <motion.textarea
                whileFocus={{ scale: 1.02, borderColor: 'rgb(168, 85, 247)' }}
                placeholder="Your message"
                rows={5}
                className="w-full p-5 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 resize-vertical backdrop-blur-sm shadow-lg"
              />
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-purple-500/25 transition-all duration-500 backdrop-blur-sm border-0"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="border-t border-slate-800/50 py-16 px-6 text-center text-slate-500 backdrop-blur-sm"
      >
        <p className="text-lg">
          © 2025 <span className="font-bold text-white">Manikanta Katta</span>. Built with{' '}
          <span className="text-purple-400 font-bold">Next.js</span> &{' '}
          <span className="text-pink-400 font-bold">Tailwind CSS</span>. 🚀
        </p>
      </motion.footer>
    </div>
  );
}
