"use client";

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
    <div ref={switcherRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 shadow-lg group"
        aria-label="Language Switcher"
      >
        <Globe
          className={`w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-500 group-hover:rotate-180 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2">
          <div className="flex items-center bg-[#020617]/80 backdrop-blur-sm rounded-lg shadow-lg h-8 sm:h-10 px-4 sm:px-6">
            {[
              { code: "en", label: "EN" },
              { code: "pt", label: "PT" },
            ].map((language, index) => (
              <React.Fragment key={language.code}>
                {index > 0 && (
                  <div className="w-px h-4 bg-white/20 mx-3" />
                )}
                <button
                  onClick={() => changeLanguage(language.code)}
                  className={`px-2 text-sm font-medium rounded-md ${
                    i18n.language === language.code
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  } transition-colors duration-150`}
                >
                  {language.label}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}