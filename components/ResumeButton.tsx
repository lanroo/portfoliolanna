'use client';

import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function ResumeButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      setIsLoading(true);

      const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL; 

      if (!resumeUrl) {
        throw new Error('Resume URL is not defined');
      }

      window.location.href = resumeUrl;

      toast({
        title: 'Sucesso!',
        description: 'Redirecionando para download do currículo...',
      });
    } catch (error) {
      console.error('Error redirecting to resume URL:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao redirecionar para o download. Tente novamente.',
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
        onClick={handleDownload}
        disabled={isLoading}
      >
        <div className="absolute inset-0 bg-white/10 group-hover:translate-y-12 transition-transform duration-300" />
        <FileDown className={`mr-2 h-5 w-5 ${isLoading ? 'animate-spin' : 'animate-bounce'}`} />
        {isLoading ? 'Redirecionando...' : 'Download CV'}
      </Button>
    </motion.div>
  );
}
