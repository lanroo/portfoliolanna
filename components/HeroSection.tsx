'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, MessageSquare, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollIndicator from './ScrollIndicator';
import ResumeButton from './ResumeButton';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 mx-auto text-center relative z-10"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Full Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Desenvolvedora Full Stack formada em Engenharia de Software, cursando pós-graduação em Desenvolvimento Full Stack na PUC-Campinas, com foco em soluções eficientes e inovadoras.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap items-center"
        >
          <ResumeButton />
          <div className="flex gap-4 flex-wrap justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:yladacz@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> E-mail
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://x.com/devingerr" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" /> Twitter/X
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/lanroo" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/+5591985464442" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}