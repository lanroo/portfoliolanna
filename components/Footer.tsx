"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  if (!mounted) return null;

  return (
    <footer className="relative bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 text-center sm:text-left"
        >
          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contato
            </h3>
            <div className="flex flex-col items-center sm:items-start space-y-3">
              <a
                href="mailto:yladacz@gmail.com"
                className="flex items-center text-zinc-400 hover:text-white transition-all duration-300"
              >
                <HiOutlineMail className="mr-2 h-4 w-4" />
                yladacz@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Social
            </h3>
            <div className="flex flex-col items-center sm:items-start space-y-3">
              {[
                { icon: AiFillGithub, label: 'GitHub', href: 'https://github.com/lanroo' },
                { icon: AiOutlineTwitter, label: 'Twitter', href: 'https://twitter.com/devingerr' },
                { icon: AiOutlineLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/yladacs/' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-white transition-all duration-300"
                >
                  <social.icon className="mr-2 h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Blog Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Blog
            </h3>
            <div className="space-y-3">
              <p className="text-zinc-400 text-sm text-center sm:text-left">
                Confira meu blog com artigos sobre desenvolvimento, tecnologia e dicas de carreira.
              </p>
              <a
                href="https://blogdevingerr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-all duration-300"
              >
                Visitar Blog
              </a>
              <p className="text-zinc-400 text-sm mt-4">
                <span className="font-semibold text-white">Localização:</span> Brazil
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-zinc-800"
        >
          <div className="flex items-center justify-center py-4">
            <p className="text-center text-sm text-zinc-400">
              © {currentYear} Ylanna Almeida. Todos os direitos reservados.
            </p>
            {/* <div className="flex items-center space-x-4 text-sm text-zinc-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacidade
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
