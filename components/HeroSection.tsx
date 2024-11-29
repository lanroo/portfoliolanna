'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';
import { Github, Twitter, MessageSquare, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollIndicator from './ScrollIndicator';
import ResumeButton from './ResumeButton';
import { useEffect, useState, useCallback } from 'react';

function Pyramid() {
  return (
    <mesh rotation={[0, 0.6, 0]}>
      {/* Geometria da pirâmide */}
      <coneGeometry args={[2, 2, 4]} />
      {/* Material preto */}
      <meshStandardMaterial color="black" />
      {/* Adicionando arestas brancas */}
      <Edges>
        <lineBasicMaterial color="white" />
      </Edges>
    </mesh>
  );
}

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'FullStack Developer';

  const animateText = useCallback(() => {
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setTimeout(() => setIsDeleting(false), 1000);
      return;
    }

    const nextText = isDeleting
      ? displayText.slice(0, -1)
      : fullText.slice(0, displayText.length + 1);

    const timeout = setTimeout(() => {
      setDisplayText(nextText);
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  useEffect(() => {
    const timeout = animateText();
    return () => {
      if (timeout) timeout();
    };
  }, [animateText]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      </div>

      {/* Pirâmide 3D */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <Canvas style={{ width: 200, height: 200 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Pyramid />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
        </Canvas>
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
          Ylanna Almeida
          <br />
          <span className="text-primary inline-flex items-center justify-center gap-2">
            {displayText}
            <span className="w-[3px] h-[1.2em] bg-primary inline-block animate-[blink_1s_steps(1)_infinite]" />
          </span>
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
