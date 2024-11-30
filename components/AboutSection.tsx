'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';  
import { Button } from '@/components/ui/button';
import ResumeButton from './ResumeButton';

export default function AboutSection() {
  return (
    <section className="relative bg-[#fafafa] py-24" id="about">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-[#fafafa]" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-black/5 shadow-2xl">
                <Image
                  src="/your-photo.jpg"
                  alt="Ylanna Almeida"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-zinc-900">Ylanna Almeida</h2>
                <p className="text-zinc-500 mt-1">FullStack Developer</p>
              </div>
              <ResumeButton />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-6 text-zinc-600"
            >
              <div className="prose prose-zinc max-w-none space-y-6">
                <p className="text-lg leading-relaxed">
                  Oi, eu sou Ylanna, mas pode me chamar de Lanna! Sou formada em Engenharia de Software e atualmente estou cursando Pós-graduação em Fullstack na PUC.
                </p>

                <p className="leading-relaxed">
                  No momento estou em um projeto solidário, criando a página do Hemocentro Ceará como frontend Developer e outro projeto que estou é a criação fullstack de uma página e plataforma para uma empresa de recrutamento e seleção. Tenho experiencia como Fullstack de 3 anos.
                </p>

                <p className="leading-relaxed">
                  Desde que me lembro a tecnologia sempre esteve presente na minha vida, e gosto de aproveitar a criatividade e curiosidade para transformar ideias em soluções.
                </p>

                <div className="border-l-4 border-zinc-200 pl-6 my-8">
                  <p className="italic text-zinc-500">
                    Quando não estou na frente do computador, gosto de assistir filmes que me fazem pensar, como interestelar que é meu filme favorito, brincar com meus bichinhos (gatos e uma doguinha) ou até mesmo explorar novos jogos e séries.
                  </p>
                </div>

                <p className="leading-relaxed">
                  Também adoro compartilhar ideias e ouvir perspectivas diferentes sobre praticamente qualquer assunto – sempre acho que todo mundo tem algo interessante a dizer.
                </p>

                <p className="leading-relaxed">
                  Obrigada por visitar meu site! Espero que ele seja útil e que possamos trocar ideias. Se quiser bater um papo ou saber mais sobre meu trabalho, é só me escrever em{' '}
                  <a 
                    href="mailto:yladacz@gmail.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors underline decoration-dotted"
                  >
                    yladacz@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
