'use client';

import { motion } from 'framer-motion';
import { AiFillGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
// import { RiMessageLine } from 'react-icons/ri';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-100">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Contato</h3>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start w-fit" asChild>
                <a 
                  href="mailto:yladacz@gmail.com"
                  className="text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <HiOutlineMail className="mr-2 h-4 w-4" />
                  yladacz@gmail.com
                </a>
              </Button>
              {/* <Button variant="ghost" size="sm" className="justify-start w-fit" asChild>
                <a 
                  href="https://wa.me/+5585999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <RiMessageLine className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button> */}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Social</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://github.com/lanroo" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <AiFillGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>
              <a 
                href="https://twitter.com/devingerr" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <AiOutlineTwitter className="mr-2 h-4 w-4" />
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/ylanna-almeida" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <AiOutlineLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Local</h3>
            <p className="text-zinc-600">
              Belém, PA<br />
              Brazil
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-zinc-200"
        >
          <p className="text-center text-sm text-zinc-500 flex items-center justify-center gap-1">
            Feito com <AiOutlineHeart className="h-3 w-3 text-red-500" /> © {currentYear} Ylanna Almeida
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
