'use client';

import { motion } from 'framer-motion';
import { AiOutlineDownload } from 'react-icons/ai';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { IoClose } from 'react-icons/io5';

export default function ResumeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleOpen = async (url: string) => {
    try {
      setIsLoading(true);

      if (!url) {
        throw new Error('Resume URL is not defined');
      }

      window.open(url, '_blank', 'noopener,noreferrer');

      toast({
        title: 'Sucesso!',
        description: 'Abrindo o currículo no navegador...',
      });
    } catch (error) {
      console.error('Error opening resume URL:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao abrir o currículo. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        <Button
          size="lg"
          className="bg-black text-white hover:bg-gray-900 shadow-md relative border border-gray-800 overflow-hidden"
          onClick={() => setIsModalOpen(true)}
          disabled={isLoading}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
          <AiOutlineDownload
            className={`mr-2 h-5 w-5 transition-transform duration-500 ${
              isLoading ? 'animate-spin' : 'group-hover:translate-y-1'
            }`}
          />
          {isLoading ? 'Carregando...' : 'Abrir CV'}
        </Button>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative">
            {/* Ícone de Fechar */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setIsModalOpen(false)}
              aria-label="Fechar"
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-lg font-bold mb-4 text-center">
              Versão do Currículo
            </h2>
            <div className="flex flex-col space-y-4">
              <Button
                className="bg-black text-white border border-gray-800 hover:bg-gray-900 hover:text-gray-300 transition-all duration-300"
                onClick={() =>
                  handleOpen(process.env.NEXT_PUBLIC_RESUME_EN || '')
                }
              >
                English Version
              </Button>
              <Button
                className="bg-black text-white border border-gray-800 hover:bg-gray-900 hover:text-gray-300 transition-all duration-300"
                onClick={() =>
                  handleOpen(process.env.NEXT_PUBLIC_RESUME_PT || '')
                }
              >
                Versão Português
              </Button>
            </div>
            <Button
              className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300 transition-all duration-300 w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
