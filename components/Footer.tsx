"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-center text-gray-400"
        >
          © {currentYear} Ylanna Almeida. Todos os direitos reservados.
        </motion.div>
      </div>
    </footer>
  );
}