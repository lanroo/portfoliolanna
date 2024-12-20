'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useCallback } from 'react';
import ScrollIndicator from './ScrollIndicator';

function Pyramid() {
  return (
    <mesh rotation={[0, 0.6, 0]}>
      <coneGeometry args={[2, 2, 4]} />
      <meshStandardMaterial color="black" />
      <Edges>
        <lineBasicMaterial color="white" />
      </Edges>
    </mesh>
  );
}

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Web Developer';

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
    <section className="relative h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background overflow-hidden mb-12">
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-[#fafafa]" />

      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      </div>

      <div className="container px-4 mx-auto flex flex-col items-center justify-center relative z-10">
        <div className="w-[200px] h-[200px] mb-8">
          <Canvas>
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
          className="text-center"
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
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
          >
            Formada em Engenharia de Software e cursando pós-graduação na PUC, acredito no poder da tecnologia para transformar ideias simples em ferramentas incríveis
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full px-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-black text-white border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300"
                asChild
              >
                <a href="mailto:yladacz@gmail.com">
                  <FaEnvelope className="mr-2 h-4 w-4" />
                  <span className="whitespace-nowrap">E-mail</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-black text-white border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/yladacs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2 h-4 w-4" />
                  <span className="whitespace-nowrap">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-black text-white border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300"
                asChild
              >
                <a
                  href="https://x.com/devingerr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="mr-2 h-4 w-4" />
                  <span className="whitespace-nowrap">Twitter/X</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-black text-white border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300"
                asChild
              >
                <a
                  href="https://github.com/lanroo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  <span className="whitespace-nowrap">GitHub</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <ScrollIndicator />
      </div>
    </section>
  );
}
