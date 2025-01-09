'use client';

import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section id="home">
      <Navbar />
        <HeroSection />
      </section>
      <Footer />
    </main>
  );
}
