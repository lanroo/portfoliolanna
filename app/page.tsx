'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import PageIndicator from '@/components/PageIndicator';

export default function Home() {
  const allProjects = [
    {
      title: 'Site de Recrutamento e Seleção - Madil Carreiras',
      description:
        'Uma plataforma de carreiras responsiva construída com React, Tailwind CSS e Vite.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1734522046/8_083740_brij6d.png',
      tags: ['React', 'Tailwind', 'Vite'],
      githubUrl: 'https://github.com/lanroo/madilcarreiras',
      liveUrl: 'https://madilcarreiras.vercel.app/',
    },
    {
      title: 'Hivex Bank',
      description:
        'Landing page moderna para um banco digital com design responsivo.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1732898928/hivex_lwworg.jpg',
      tags: ['React Native', 'React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://hivexbank.netlify.app/',
    },
    {
      title: 'Site de Engenharia e Segurança do Trabalho',
      description:
        'Website institucional da Atest com design moderno e integração ao WhatsApp.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1734531416/25_iwfkxr.png',
      tags: ['TypeScript', 'React', 'Tailwind'],
      githubUrl: 'https://github.com/lanroo/atest',
      liveUrl: 'https://atest-tawny.vercel.app/',
    },
    {
      title: 'Blog Devinger',
      description:
        'Blog de programação moderno e interativo, compartilhando dicas, códigos e projetos.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1734532523/devinger_okuzte.png',
      tags: ['React', 'Tailwind ', 'Framer Motion', 'ESLint', 'Vite'],
      githubUrl: 'https://github.com/lanroo/blogdevinger',
      liveUrl: 'https://blogdevingerr.vercel.app/',
    },
    {
      title: 'Página de Login e Cadastro Moderna',
      description:
        'Um sistema de autenticação moderno, responsivo, com animações suaves.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1734902628/Captura_de_tela_2024-12-22_181123_dkhvpy.png',
      tags: ['React', 'Vite', 'Tailwind', 'Typescript', 'Supabase'],
      githubUrl: 'https://github.com/lanroo/creativelogin',
      liveUrl: 'https://creativelogin.vercel.app/',
    },
    {
      title: 'Astralis - Exploração Espacial',
      description:
        'Este é um site Interativo e envolvente para amantes de Astronomia.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1734921495/Captura_de_tela_2024-12-22_233311_cc5qeb.png',
      tags: ['React', 'Vite', 'Tailwind', 'Frame Motion'],
      githubUrl: 'https://github.com/lanroo/AstraliSpacial',
      liveUrl: 'https://astrali-spacial.vercel.app/',
    },
    {
      title: 'FlashFood Cardápio',
      description:
        'Este é um site de cardápios digitais interativos em desenvolvimento.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1734541784/flash_lzcmzq.png',
      tags: ['React', 'Vite', 'Tailwind', 'Axios'],
      githubUrl: 'https://github.com/lanroo/cardapioR',
      liveUrl: 'https://flashfoodcardapio.vercel.app/',
    },
    {
      title: 'Automação Whatsapp',
      description:
        'Automação para o whatsapp utilizando Python, Flask, Selenium WebDriver e Docker.',
      image:
        'https://blog.meugrupo.vip/wp-content/uploads/2022/11/WhatsApp-Automation-for-WordPress-1024x536.png',
      tags: ['Python', 'Flask', 'Docker', 'Selenium'],
      githubUrl: 'https://github.com/lanroo/wppautomation',
    },
    {
      title: 'Downloader',
      description:
        'Downloader Web e Extensão Google de vídeos YouTube criado com Python.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1732902116/downloader_yenh1y.png',
      tags: ['Python', 'Flask', 'Socket.IO', 'Bootstrap 4'],
      githubUrl: 'https://github.com/lanroo/downloadering',
    },
    {
      title: 'Paint Web - Drawart',
      description:
        'Espaço para desenho/pintura estilo Paint. Usando tecnologia canvas JS.',
      image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1732903352/paint_doyjqh.png',
      tags: ['Javascript', 'HTML', 'CSS', 'Canvas API'],
      githubUrl: 'https://github.com/lanroo/DRAWART_',
      liveUrl: 'https://drawart.vercel.app/',
    },
    {
      title: 'Disaster Alerts',
      description:
        'Sistema de alerta de desastres climáticos que monitora riscos em tempo real e envia notificações personalizadas por SMS e e-mail, utilizando dados do OpenWeatherMap, NOAA e NASA.',
      image: 'https://res.cloudinary.com/dggewyuon/image/upload/v1732904702/alert_bjwygt.png',
      tags: ['React', 'Express', 'ESlint'],
      githubUrl: 'https://github.com/yourusername/portfolio-builder',
    },
  ];

  const [displayedProjects, setDisplayedProjects] = useState(allProjects.slice(0, 6));
  const [showingMore, setShowingMore] = useState(false);

  const handleShowMore = () => {
    setDisplayedProjects(allProjects);
    setShowingMore(true);
  };

  const handleShowLess = () => {
    setDisplayedProjects(allProjects.slice(0, 6));
    setShowingMore(false);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      <PageIndicator />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="tech-stack">
        <TechStack />
      </section>
      <section id="projects" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Projetos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showingMore ? handleShowLess : handleShowMore}
              className="bg-black hover:bg-zinc-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
            >
              {showingMore ? 'Ver Menos' : 'Ver Mais Projetos'}
            </motion.button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}