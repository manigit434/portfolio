import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Manikanta Katta
          </h1>
          <div className="space-x-6">
            <Link href="#home" className="hover:text-purple-400 transition">Home</Link>
            <Link href="#about" className="hover:text-purple-400 transition">About</Link>
            <Link href="#skills" className="hover:text-purple-400 transition">Skills</Link>
            <Link href="#projects" className="hover:text-purple-400 transition">Projects</Link>
            <Link href="#contact" className="hover:text-purple-400 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Manikanta Katta
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-slate-300">
            B.Tech CSE Student | <span className="text-purple-400 font-semibold">Software Engineer</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-slate-400 leading-relaxed">
            Building secure & scalable systems with Java, Blockchain, and Cryptography
          </p>
          <div className="space-x-4">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="border border-purple-600 hover:bg-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              B.Tech Computer Science student passionate about backend development, 
              blockchain, and cryptography. Currently building a Smart Vehicle Procurement 
              System using blockchain technology. Actively seeking Software Engineer internships. [attached_file:1]
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">B.Tech Computer Science</h3>
                  <p className="text-slate-400">Final Year Student</p>
                </div>
              </div>
              <a href="https://github.com/manigit434" className="block w-fit mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                View GitHub → manigit434
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-400">3+</div>
                <div className="text-slate-400">Projects</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-400">Java</div>
                <div className="text-slate-400">Expert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 bg-slate-800/30 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group">
            <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-white">Languages</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Java</li>
                <li>• HTML/CSS</li>
                <li>• SQL</li>
              </ul>
            </div>
          </div>
          <div className="group">
            <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-white">Core CS</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Data Structures & Algorithms</li>
                <li>• Computer Networks</li>
                <li>• Operating Systems</li>
              </ul>
            </div>
          </div>
          <div className="group">
            <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-white">Technologies</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Blockchain</li>
                <li>• Elliptic Curve Cryptography</li>
                <li>• REST APIs</li>
              </ul>
            </div>
          </div>
          <div className="group">
            <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-white">Tools</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Git/GitHub</li>
                <li>• Next.js</li>
                <li>• Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certify Me */}
          <div className="group bg-slate-800/50 rounded-2xl overflow-hidden hover:bg-purple-500/10 transition-all duration-300 group-hover:scale-105 hover:-translate-y-2">
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">LIVE DEMO</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white">Certify Me</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Web app for generating and verifying digital certificates with secure validation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">HTML/CSS</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">JavaScript</span>
              </div>
              <div className="flex space-x-3">
                <a href="https://certify-me-rtpy.onrender.com" target="_blank" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300">
                  Live Demo
                </a>
                <a href="https://github.com/manigit434" target="_blank" className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Smart Vehicle Procurement */}
          <div className="group bg-slate-800/50 rounded-2xl overflow-hidden hover:bg-purple-500/10 transition-all duration-300 group-hover:scale-105 hover:-translate-y-2">
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 p-2 rounded-lg inline-flex">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-orange-400 font-medium">IN PROGRESS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white">Smart Vehicle Procurement</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Blockchain-based system for transparent vehicle procurement with smart contracts.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Blockchain</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">SQL</span>
              </div>
              <div className="flex space-x-3">
                <a href="https://github.com/manigit434" target="_blank" className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300">
                  View on GitHub
                </a>
                <a href="https://github.com/manigit434" target="_blank" className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Elliptic Curve Encryption */}
          <div className="group bg-slate-800/50 rounded-2xl overflow-hidden hover:bg-purple-500/10 transition-all duration-300 group-hover:scale-105 hover:-translate-y-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white">Elliptic Curve Encryption</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Efficient asymmetric encryption scheme using Elliptic Curve Cryptography for secure communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Cryptography</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">ECC</span>
              </div>
              <div className="flex space-x-3">
                <a href="https://github.com/manigit434" target="_blank" className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300">
                  View Code
                </a>
                <a href="https://github.com/manigit434" target="_blank" className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:kattamanikanta434@gmail.com" className="hover:text-purple-400">kattamanikanta434@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338a2.5 2.5 0 002.5-2.5V6.162a2.5 2.5 0 00-2.5-2.5H3.662a2.5 2.5 0 00-2.5 2.5V13.84a2.5 2.5 0 002.5 2.5h4.416c.39.54 1.061.859 1.785.859.697 0 1.34-.323 1.77-.859h3.107z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a href="https://github.com/manigit434" target="_blank" className="hover:text-purple-400">manigit434</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors" />
              <input type="email" placeholder="your.email@example.com" className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors" />
              <textarea placeholder="Your message" rows={5} className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors resize-vertical" />
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6 text-center text-slate-500">
        <p>&copy; 2025 Manikanta Katta. Built with Next.js & Tailwind CSS. 🚀</p>
      </footer>
    </div>
  );
}
