'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, MessageSquare, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container max-w-5xl px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <h3 className="font-semibold text-base mb-3">About Me</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack developer passionate about creating innovative solutions. 
              Specialized in both frontend and backend technologies, I love turning 
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <h3 className="font-semibold text-base mb-3">Get in Touch</h3>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <Button variant="ghost" size="sm" className="justify-start h-8 px-2 w-full hover:bg-secondary" asChild>
                <a href="mailto:your@email.com" className="text-sm">
                  <Mail className="mr-2 h-3.5 w-3.5" /> Email Me
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start h-8 px-2 w-full hover:bg-secondary" asChild>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-sm">
                  <MessageSquare className="mr-2 h-3.5 w-3.5" /> WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-4 border-t border-border"
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500" /> © {currentYear}
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/lanroo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground hover:text-primary transition-colors p-1.5"
              >
                <Github className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://x.com/devingerr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground hover:text-primary transition-colors p-1.5"
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yladacs/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground hover:text-primary transition-colors p-1.5"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}