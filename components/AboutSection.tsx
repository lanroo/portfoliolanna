'use client';

import { motion } from 'framer-motion';
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
              <div
                className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-black/5 shadow-2xl hover:ring-blue-500 transition-all duration-300"
                onContextMenu={(e) => e.preventDefault()} 
              >
                <img
                  src="https://res.cloudinary.com/dgmhjjizh/image/upload/v1733874841/mfafmshl6kl3kp1rqilb.png"
                  alt="Minha Foto de Perfil"
                  className="object-cover w-full h-full"
                  draggable="false" 
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
              <h2 className="text-3xl font-bold mb-6 text-center relative -top-11">Sobre mim</h2>
                <p>
                Oi, eu sou Ylanna, mas pode me chamar de Lanna! Sou formada em Engenharia de Software e atualmente estou cursando Pós-graduação em Desenvolvimento Fullstack na PUC.
                </p>
                <p>
                No momento, estou desenvolvendo um projeto solidário, recriando a página do <span className="text-blue-600 font-medium">Hemocentro Ceará</span> como Frontend Developer. em um time colaborativo e diverso, e também trabalho no desenvolvimento de uma plataforma Fullstack para uma empresa de recrutamento e seleção. São <strong>3 anos de experiência</strong> como FullStack Developer, onde aprendi que cada linha de código é uma oportunidade de resolver problemas e criar um impacto positivo na sociedade.
                </p>
                <p>
                Minha paixão por tecnologia começou cedo, inspirada pelos meus irmãos mais velhos, que sempre tiveram contato com computadores e estavam mergulhados em conhecimentos que me fascinavam. Foi a partir dessas primeiras experiências que descobri o encanto de transformar ideias em soluções criativas e práticas. Adoro o desafio de combinar lógica e imaginação para construir algo que realmente tenha impacto e faça a diferença.

                </p>
                <div className="border-l-4 border-zinc-200 pl-6 my-8">
                  <p className="italic text-zinc-500">
                    "Quando não estou programando, você pode me encontrar assistindo filmes que desafiam a mente <strong>como Interestelar</strong>, meu favorito), brincando com meus bichinhos de estimação ou mergulhando em novos jogos ou séries sobre batalhas cósmicas.
                  </p>
                </div>
                <p>
                Sou apaixonada por troca de ideias e aprendizado contínuo. Acredito que cada pessoa carrega uma perspectiva única, e aprender com os outros é uma das coisas que mais valorizo.
                </p>
                <p>
                Estou muito feliz que você tenha passado por aqui! Sinta-se à vontade para explorar meu portfólio e, se quiser trocar ideias ou falar sobre projetos, será um prazer conversar com você.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
