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
  const initialProjects = [
    {
      title: 'Madil Carreiras',
      description:
        'Uma plataforma de carreiras responsiva construída com React, Tailwind CSS e Vite.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1732898636/madil_mrmfai.png',
      tags: ['React', 'Tailwind', 'Vite'],
      githubUrl: 'https://github.com/lanroo/madilcarreiras',
      liveUrl: 'https://madilcarreiras.vercel.app/',
    },
    {
      title: 'Hivex Bank',
      description:
        'Landing page moderna para um banco digital usando React, Tailwind e Vite, integrando design responsivo.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1732898928/hivex_lwworg.jpg',
      tags: ['React Native', 'React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://hivexbank.netlify.app/',
    },
    {
      title: 'ArbiGenius',
      description:
        'Backend API - Plataforma de arbitragem de criptomoedas feita com Python Flask.',
      image:
        'https://fenixconsultoria.com.br/admin/cadastros/blog/fotos/1656102160.jpg',
      tags: ['Python', 'Flask', 'Vue', 'Vite', 'Tailwind'],
      githubUrl: 'https://github.com/lanroo/ArbiGenius',
      liveUrl: 'https://project3.com',
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
      title: 'API de Leitura de Medição',
      description:
        'API para leitura automatizada de medições de água e gás a partir de imagens enviadas em base64 e gemini.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1732901357/imagem_vtdzr2.png',
      tags: ['Node', 'Express', 'TypeScript', 'Docker', 'API Gemini'],
      githubUrl: 'https://github.com/lanroo/MeasurementReadAPI',
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
  ];

  const additionalProjects = [
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
    {
      title: 'AI Chat Assistant',
      description:
        'Assistente de chat inteligente baseado em inteligência artificial e Flask.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Python', 'Flask', 'AI', 'Chatbot'],
      githubUrl: 'https://github.com/yourusername/ai-chat-assistant',
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setProjects((prevProjects) => [...prevProjects, ...additionalProjects]);
    setShowMore(true);
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
            {projects.map((project, index) => (
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
          {!showMore && (
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShowMore}
                className="bg-black hover:bg-zinc-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Ver Mais Projetos
              </motion.button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
