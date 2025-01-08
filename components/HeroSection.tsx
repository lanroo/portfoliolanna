"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, X } from 'lucide-react';
import Script from 'next/script';
import { SiReact, SiVuedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap, SiPython, SiFlask, SiNextdotjs, SiDocker, SiSelenium, SiVite, SiThreedotjs } from 'react-icons/si';

const techStack = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Flask', icon: <SiFlask />, color: '#ffffff' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Selenium', icon: <SiSelenium />, color: '#43B02A' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
  { name: 'Three.js', icon: <SiThreedotjs />, color: '#FFFFFF' },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumePortuguese = process.env.NEXT_PUBLIC_RESUME_PT;
  const resumeEnglish = process.env.NEXT_PUBLIC_RESUME_EN;

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-gray-100">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Profile */}
          <motion.div 
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-[#0a0f1c] rounded-2xl p-6 space-y-4">
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/dgmhjjizh/image/upload/v1733874841/mfafmshl6kl3kp1rqilb.png"
                    alt="Ylanna Almeida"
                    className="w-28 h-28 rounded-full mx-auto mb-3 border-2 border-blue-500"
                  />
                  <h1 className="text-2xl font-bold">Ylanna Almeida</h1>
                  <p className="text-blue-400 mt-1">Engenheira de Software</p>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={toggleModal}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>CV</span>
                  </button>
                  <a 
                    href="mailto:yladacz@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contato</span>
                  </a>
                </div>

                <div className="flex justify-center gap-3 pt-1">
                  <a
                    href="https://github.com/lanroo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yladacs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:yladacz@gmail.com"
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <motion.div 
              className="relative max-w-full overflow-hidden bg-gray-800/30 rounded-2xl p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Tecnologias</h2>
              <div className="relative">
                <div className="absolute left-0 w-8 h-full bg-gradient-to-r from-gray-800/30 to-transparent z-10" />
                <div className="absolute right-0 w-8 h-full bg-gradient-to-l from-gray-800/30 to-transparent z-10" />
                
                <div className="flex gap-4 items-center py-2 overflow-hidden">
                  <motion.div
                    animate={{ 
                      x: [0, -100 * techStack.length], 
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex gap-4 items-center whitespace-nowrap"
                  >
                    {[...techStack, ...techStack].map((tech, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                      >
                        <div 
                          className="text-lg text-gray-400 group-hover:text-[var(--hover-color)] transition-colors duration-300"
                          style={{ '--hover-color': tech.color } as React.CSSProperties}
                        >
                          {tech.icon}
                        </div>
                        <span className="text-gray-400 text-sm">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div 
              className="bg-gray-800/30 rounded-2xl p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4">Interesses</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Filmes Sci-fi',
                  'Tecnologia',
                  'Inteligência Artificial',
                  'Games',
                  'Inovação',
                  'Pets',
                  'Leitura',
                  'Música',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-800/50 rounded-full text-sm hover:bg-blue-600/50 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="lg:col-span-8 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* About */}
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Sobre</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Com 3 anos de experiência em desenvolvimento, utilizo minha criatividade e expertise técnica 
                  para criar soluções inovadoras que simplificam e resolvem desafios do dia a dia.
                </p>
                <p>
                  Minha jornada na tecnologia começou através da inspiração dos meus irmãos, que
                  me apresentaram ao fascinante mundo da computação. Foi a partir dessas primeiras
                  experiências que descobri o encanto de transformar ideias em soluções criativas
                  e práticas.
                </p>
              </div>
            </div>

            {/* Current */}
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Atualmente</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-400">Pós-graduação em Desenvolvimento Fullstack</h3>
                    <p className="text-gray-300 mt-1">PUC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-400">Hemocentro Ceará</h3>
                    <p className="text-gray-300 mt-1">
                      Desenvolvimento de projeto solidário para otimização de processos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-400">Plataforma de Recrutamento</h3>
                    <p className="text-gray-300 mt-1">
                      Construção de solução fullstack para processos de recrutamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-medium text-gray-100 mb-4">Selecione o formato:</h3>
            <div className="flex flex-col gap-4">
              <a
                href={resumePortuguese}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-center transition-all duration-200"
              >
                Baixar CV (Português)
              </a>
              <a
                href={resumeEnglish}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-center transition-all duration-200"
              >
                Download CV (English)
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}