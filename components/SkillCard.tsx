'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon, Layout, Server, Tool } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: string;
  index: number;
}

const icons: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  tool: Tool,
};

export default function SkillCard({ title, skills, icon, index }: SkillCardProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-full"
    >
      <Card className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <CardHeader className="flex-shrink-0">
          <CardTitle className="flex items-center gap-2">
            {Icon && (
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-5 w-5" />
              </motion.div>
            )}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {skills.map((skill, idx) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="w-2 h-2 bg-primary rounded-full" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}