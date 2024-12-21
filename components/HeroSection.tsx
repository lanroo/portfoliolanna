'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { useEffect, useState, useCallback } from 'react';
import ScrollIndicator from './ScrollIndicator';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation(); 
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const fullText = t('hero.role'); 

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

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false); 
  };

  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background overflow-hidden mb-12">
      <div
        className="absolute top-4 right-4 z-50"
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <button className="text-gray-700 hover:text-black transition-all duration-300">
          <FaGlobe className="text-2xl" />
        </button>

        {/* Menu de Idiomas */}
        {menuOpen && (
          <div className="absolute top-8 right-0 bg-white shadow-md rounded-lg flex flex-col overflow-hidden">
            <button
              className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
              onClick={() => changeLanguage('pt')}
            >
              PT
            </button>
          </div>
        )}
      </div>

      {/* Conteúdo Principal */}
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
            {t('hero.description')}
          </motion.p>
        </motion.div>
        <ScrollIndicator />
      </div>
    </section>
  );
}
