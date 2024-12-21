'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, X } from 'lucide-react';
import Script from 'next/script'; 

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resumePortuguese = process.env.NEXT_PUBLIC_RESUME_PT;
  const resumeEnglish = process.env.NEXT_PUBLIC_RESUME_EN;

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Section */}
          <motion.div
            className="lg:col-span-4 lg:order-2 order-1 flex flex-col items-center space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dgmhjjizh/image/upload/v1733874841/mfafmshl6kl3kp1rqilb.png"
                  alt="Ylanna Almeida"
                  className="w-48 h-48 object-cover rounded-full shadow-lg lg:order-1 order-2"
                />
              </div>
            </div>

            <button
              onClick={toggleModal}
              className="w-full px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 font-medium"
            >
              <FileText className="w-5 h-5" />
              Ver CV
            </button>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interesses</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Filmes Sci-fi', color: 'hover:bg-pink-200' },
                  { name: 'Tecnologia', color: 'hover:bg-blue-200' },
                  { name: 'Inteligência Artificial', color: 'hover:bg-green-200' },
                  { name: 'Games', color: 'hover:bg-yellow-200' },
                  { name: 'Inovação', color: 'hover:bg-purple-200' },
                  { name: 'Pets', color: 'hover:bg-orange-200' },
                  { name: 'Leitura', color: 'hover:bg-teal-200' },
                  { name: 'Música', color: 'hover:bg-red-200' },
                ].map((interest) => (
                  <div
                    key={interest.name}
                    className={`group px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 shadow-sm ${interest.color}`}
                    title={interest.name}
                  >
                    {interest.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:col-span-8 lg:order-1 order-2 space-y-8 text-center lg:text-left"
            {...fadeIn}
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Ylanna Almeida
                <span className="block text-xl font-normal text-gray-600 mt-2">
                  Engenheira de Software | Desenvolvedora Web
                </span>
              </h1>

              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 text-justify">
                <p className="lead text-lg">
                  Com 3 anos de experiência em desenvolvimento, utilizo minha criatividade e expertise técnica para criar soluções inovadoras que simplificam e resolvem desafios do dia a dia.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                    Atualmente
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-lg">🎓</span>
                      <span className="hover:text-blue-600 transition-colors">
                        Pós-graduação em Desenvolvimento Fullstack na PUC
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">💻</span>
                      <span className="hover:text-blue-600 transition-colors">
                        Desenvolvendo projeto solidário para o Hemocentro Ceará
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">🚀</span>
                      <span className="hover:text-blue-600 transition-colors">
                        Construindo plataforma Fullstack para recrutamento
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  Minha jornada na tecnologia começou através da inspiração dos meus irmãos, que
                  me apresentaram ao fascinante mundo da computação. Foi a partir dessas primeiras
                  experiências que descobri o encanto de transformar ideias em soluções criativas
                  e práticas. Adoro o desafio de combinar lógica e imaginação para construir algo
                  que realmente tenha impacto e faça a diferença.
                </p>
                <p>
                  Estou muito feliz que você tenha passado por aqui! Sinta-se à vontade para
                  explorar meu portfólio e, se quiser trocar ideias ou falar sobre projetos, será
                  um prazer conversar com você.
                </p>

                <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Selecione o formato:</h3>
            <div className="flex flex-col gap-4">
              <a
                href={resumePortuguese}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 text-center transition-all duration-200"
              >
                Baixar CV (Português)
              </a>
              <a
                href={resumeEnglish}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 text-center transition-all duration-200"
              >
                Download CV (English)
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
