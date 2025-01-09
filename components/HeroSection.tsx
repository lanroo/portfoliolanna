"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, X } from 'lucide-react';
import Script from 'next/script';
import Image from 'next/image';
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

const allProjects = [
  {
    title: 'Site de Recrutamento - Madil Carreiras',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1735451806/Captura_de_tela_2024-12-29_025650_umy2ui.png',
    tags: ['React', 'Tailwind', 'Next.js'],
    liveUrl: 'https://madilcarreiras.vercel.app/',
  },
  {
    title: 'Hivex Bank',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1732898928/hivex_lwworg.jpg',
    tags: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://hivexbank.netlify.app/',
  },
  {
    title: 'Atest Engenharia',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1734531416/25_iwfkxr.png',
    tags: ['TypeScript', 'React', 'Tailwind'],
    liveUrl: 'https://atest-tawny.vercel.app/',
  },
  {
    title: 'Blog Devinger',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1734532523/devinger_okuzte.png',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://blogdevingerr.vercel.app/',
  },
  {
    title: 'Tela Login',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1734902628/Captura_de_tela_2024-12-22_181123_dkhvpy.png',
    tags: ['React', 'Typescript', 'Supabase'],
    liveUrl: 'https://creativelogin.vercel.app/',
  },
  {
    title: 'Astralis - Exploração Espacial',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1734921495/Captura_de_tela_2024-12-22_233311_cc5qeb.png',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    liveUrl: 'https://astrali-spacial.vercel.app/',
  },
  {
    title: 'FlashFood Cardápio',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1734541784/flash_lzcmzq.png',
    tags: ['React', 'Vite', 'Tailwind'],
    liveUrl: 'https://flashfoodcardapio.vercel.app/',
  },
  {
    title: 'Automação Whatsapp',
    description: 'Automação para o whatsapp utilizando Python, Flask, Selenium WebDriver e Docker.',
    image: 'https://blog.meugrupo.vip/wp-content/uploads/2022/11/WhatsApp-Automation-for-WordPress-1024x536.png',
    tags: ['Python', 'Flask', 'Docker', 'Selenium'],
  },
  {
    title: 'Downloader',
    description: 'Downloader Web e Extensão Google de vídeos YouTube criado com Python.',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1732902116/downloader_yenh1y.png',
    tags: ['Python', 'Flask', 'Socket.IO', 'Bootstrap 4'],
  },
  {
    title: 'Paint Web - Drawart',
    description: 'Espaço para desenho/pintura estilo Paint. Usando tecnologia canvas JS.',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1732903352/paint_doyjqh.png',
    tags: ['Javascript', 'HTML', 'CSS', 'Canvas API'],
    liveUrl: 'https://drawart.vercel.app/',
  },
  {
    title: 'Disaster Alerts',
    description: 'Sistema de alerta de desastres climáticos que monitora riscos em tempo real e envia notificações personalizadas por SMS e e-mail, utilizando dados do OpenWeatherMap, NOAA e NASA.',
    image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1732904702/alert_bjwygt.png',
    tags: ['React', 'Express', 'ESlint'],
  },
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
                    href="https://x.com/devingerr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
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
                  Sou Engenheira de Software e atualmente estou cursando pós-graduação em Desenvolvimento FullStack na PUC. Tenho paixão por criar interfaces modernas e intuitivas.
                </p>
                <p>
                  Meu foco é aplicar criatividade na construção de tecnologias responsivas que proporcionem experiências excepcionais aos usuários.
                </p>
              </div>
            </div>

            {/* Current and Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current */}
              <div className="bg-gray-800/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Atualmente</h2>
                <div className="space-y-4">
                  <motion.div
                    className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600/10 to-indigo-600/10 hover:from-blue-600/20 hover:to-indigo-600/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-6 z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                          Pós-graduação em Desenvolvimento Fullstack
                        </h3>
                        <div className="space-y-2">
                          <p className="text-gray-300 group-hover:text-white transition-colors">PUC</p>
                          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                            <p className="text-gray-400 text-sm mt-2">
                              Aprofundando conhecimentos em desenvolvimento web moderno, arquitetura de software e práticas ágeis.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600/10 to-indigo-600/10 hover:from-blue-600/20 hover:to-indigo-600/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-6 z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                          Hemocentro Ceará
                        </h3>
                        <div className="space-y-2">
                          <p className="text-gray-300 group-hover:text-white transition-colors">
                            Desenvolvimento de projeto solidário para otimização de processos.
                          </p>
                          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                            <p className="text-gray-400 text-sm mt-2">
                              Contribuindo para melhorar a eficiência dos processos de doação de sangue e gestão de doadores.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600/10 to-indigo-600/10 hover:from-blue-600/20 hover:to-indigo-600/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-6 z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                          Plataforma de Recrutamento
                        </h3>
                        <div className="space-y-2">
                          <p className="text-gray-300 group-hover:text-white transition-colors">
                            Construção de solução fullstack para processos de recrutamento.
                          </p>
                          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                            <p className="text-gray-400 text-sm mt-2">
                              Desenvolvendo uma plataforma moderna para otimizar processos de recrutamento e seleção.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Projects */}
              <div className="bg-gray-800/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Projetos em Destaque</h2>
                <div className="space-y-4 h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                  {allProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="relative group h-[120px] rounded-lg overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="absolute inset-0">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent group-hover:opacity-90 transition-opacity" />
                        </div>
                        <div className="relative h-full flex flex-col justify-center p-4 z-10">
                          <h3 className="text-lg font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-blue-500/20 backdrop-blur-sm text-blue-200 rounded-full text-xs border border-blue-400/20 shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                  <motion.a
                    href="https://github.com/lanroo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors mt-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Ver mais projetos no GitHub</span>
                  </motion.a>
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