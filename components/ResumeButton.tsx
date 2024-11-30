'use client';

import { motion } from 'framer-motion';
import { AiOutlineDownload } from 'react-icons/ai';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function ResumeButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleOpen = async () => {
    try {
      setIsLoading(true);

      const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

      if (!resumeUrl) {
        throw new Error('Resume URL is not defined');
      }
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');

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
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button
        size="lg"
        className="bg-black hover:bg-zinc-800 text-white shadow-lg group relative overflow-hidden border border-zinc-800"
        onClick={handleOpen}
        disabled={isLoading}
      >
        <div className="absolute inset-0 bg-white/10 group-hover:translate-y-12 transition-transform duration-300" />
        <AiOutlineDownload
          className={`mr-2 h-5 w-5 ${isLoading ? 'animate-spin' : 'animate-bounce'}`}
        />
        {isLoading ? 'Abrindo...' : 'Abrir CV'}
      </Button>
    </motion.div>
  );
}
