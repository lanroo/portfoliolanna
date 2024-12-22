import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import React from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={switcherRef} className="fixed top-4 right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-lg"
        aria-label="Language Switcher"
      >
        <Globe
          className={`w-5 h-5 text-[#605f5f] transition-all duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`
          absolute right-0 top-0
          transform transition-all duration-300 ease-out
          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-l-2xl shadow-lg h-10 pl-8 pr-12 -mr-2">
          {[
            { code: "en", label: "EN" },
            { code: "pt", label: "PT" },
          ].map((language, index) => (
            <React.Fragment key={language.code}>
              {index > 0 && <div className="w-px h-4 bg-gray-300 mx-3" />}
              <button
                onClick={() => changeLanguage(language.code)}
                className={`
                  px-2 text-sm font-medium rounded-md
                  ${
                    i18n.language === language.code
                      ? "text-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }
                  transition-colors duration-150
                `}
              >
                {language.label}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
