'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project 1"
              description="A full-stack application built with React and Express"
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
              tags={['React', 'Express', 'PostgreSQL']}
              githubUrl="https://github.com/yourusername/project1"
              liveUrl="https://project1.com"
              index={0}
            />
            <ProjectCard
              title="Project 2"
              description="Mobile app developed with React Native"
              image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800"
              tags={['React Native', 'TypeScript']}
              githubUrl="https://github.com/yourusername/project2"
              index={1}
            />
            <ProjectCard
              title="Project 3"
              description="Backend API built with Python Flask"
              image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
              tags={['Python', 'Flask', 'Docker']}
              githubUrl="https://github.com/yourusername/project3"
              liveUrl="https://project3.com"
              index={2}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}