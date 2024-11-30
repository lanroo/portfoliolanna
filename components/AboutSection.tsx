'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ResumeButton from './ResumeButton';

// Animações predefinidas
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.6 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.3, duration: 0.5 },
};

export default function AboutMeSection() {
  return (
    <section className="relative min-h-screen bg-[#f0f4f8] py-24" id="about">
      <div className="absolute inset-0 h-24 bg-gradient-to-b from-background to-[#f0f4f8]" />

      <div className="container px-6 sm:px-8 lg:px-10 mx-auto">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              {...fadeInScale}
              className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-black/5 shadow-2xl hover:ring-blue-500 transition-all duration-300">
                <Image
                  src="/your-photo.jpg" 
                  alt="Minha Foto de Perfil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center lg:text-center">
                <h2 className="text-2xl font-bold text-zinc-900">Ylanna Almeida</h2>
                <p className="text-zinc-500 mt-1">Eng. Software</p>
              </div>
              <ResumeButton />
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="lg:col-span-8 space-y-6 text-zinc-600"
            >
              <div className="prose prose-zinc max-w-none space-y-6 text-justify leading-relaxed">
                <p>
                  Oi, eu sou <strong>Ylanna</strong>, mas pode me chamar de Lanna! Sou formada em Engenharia de Software e atualmente estou cursando Pós-graduação em Fullstack na PUC.
                </p>
                <p>
                  No momento, estou desenvolvendo um projeto solidário, criando a página do <span className="text-blue-600 font-medium">Hemocentro Ceará</span> como Frontend Developer. Também estou trabalhando em uma plataforma Fullstack para uma empresa de recrutamento e seleção. Tenho <strong>3 anos de experiência</strong> como FullStack Developer.
                </p>
                <p>
                  Desde pequena, sempre fui fascinada por tecnologia. Amo transformar ideias em soluções práticas e criativas, combinando raciocínio lógico e imaginação.
                </p>
                <div className="border-l-4 border-zinc-200 pl-6 my-8">
                  <p className="italic text-zinc-500">
                    "Quando não estou na frente do computador, adoro assistir filmes que me fazem pensar (como <strong>Interestelar</strong>, meu favorito), brincar com meus bichinhos (gatos e uma doguinha) e explorar novos jogos e séries."
                  </p>
                </div>
                <p>
                  Sou apaixonada por compartilhar ideias e aprender com perspectivas diferentes. Sempre acredito que todos têm algo interessante a ensinar.
                </p>
                <p>
                  Fico muito feliz que você esteja aqui! Sinta-se à vontade para explorar meu portfólio e entrar em contato comigo se quiser conversar sobre ideias ou projetos.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
