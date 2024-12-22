import { Shield, Lock, Eye, Mail, ExternalLink, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Privacy.module.css";

export default function Privacy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sections = [
    {
      id: "data-collection",
      icon: <Eye className="w-6 h-6" />,
      title: "Coleta e Uso de Dados",
      content: [
        {
          title: "Dados Coletados",
          items: [
            "Cookies essenciais para funcionamento",
            "Análise anônima de tráfego",
            "Dados de formulários de contato",
            "Logs de servidor para segurança",
          ],
        },
        {
          title: "Finalidade",
          items: [
            "Melhorar experiência do usuário",
            "Análise de performance do site",
            "Prevenção de fraudes",
            "Comunicação com usuários",
          ],
        },
      ],
    },
    {
      id: "security",
      icon: <Lock className="w-6 h-6" />,
      title: "Segurança e Proteção",
      content: [
        {
          title: "Medidas de Segurança",
          items: [
            "Criptografia SSL/TLS",
            "Firewall e monitoramento",
            "Backups regulares",
            "Atualizações de segurança",
          ],
        },
        {
          title: "Proteção de Dados",
          items: [
            "Acesso restrito a dados",
            "Política de senhas fortes",
            "Auditoria regular",
            "Treinamento da equipe",
          ],
        },
      ],
    },
    {
      id: "rights",
      icon: <Shield className="w-6 h-6" />,
      title: "Seus Direitos",
      content: [
        {
          title: "Direitos do Usuário",
          items: [
            "Acesso aos dados pessoais",
            "Correção de informações",
            "Exclusão de dados",
            "Portabilidade",
          ],
        },
        {
          title: "Como Exercer",
          items: [
            "Solicitação via email",
            "Prazo de 15 dias úteis",
            "Sem custos",
            "Verificação de identidade",
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back Button */}
        <div className="flex items-center mb-8">
        <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform transform hover:scale-105 cursor-pointer"
        >
            <ArrowLeft className="w-5 h-5" /> Voltar
        </button>
        </div>


        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            {...fadeIn}
          >
            Política de Privacidade
          </motion.h1>
          <motion.p
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Seu direito à privacidade é nossa prioridade. Saiba como protegemos
            seus dados.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              className={`${styles.section} w-full $ {
                activeSection === section.id ? "ring-2 ring-blue-500" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveSection(section.id)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  {section.icon}
                </div>
                <h2 className={styles.title}>{section.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.content.map((block, blockIndex) => (
                  <div key={blockIndex}>
                    <h3 className={styles.title}>{block.title}</h3>
                    <ul className={styles.list}>
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={styles.listItem}>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}

          <motion.section
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Entre em Contato</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-zinc-400 mb-4">
                  Tem dúvidas sobre nossa política de privacidade? Entre em
                  contato conosco:
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:yladacz@gmail.com"
                    className="flex items-center gap-2 text-blue-400 hover:text-red-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    yladacz@gmail.com
                  </a>
                </div>
              </div>
              <div className="text-sm text-zinc-500">
                <p>Última atualização: {new Date().toLocaleDateString()}</p>
                <p className="mt-2">
                  Comprometidos com a transparência e proteção dos seus dados.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
