"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "会社概要" },
    { href: "#services", label: "事業内容" },
    { href: "#works", label: "実績" },
    { href: "#recruit", label: "採用情報" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* ロゴ */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/logo.webp" 
                alt="PFP.INC ロゴ" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-primary"
            }`}>PFP.INC</span>
          </motion.div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled 
                    ? "text-white/90 hover:text-white" 
                    : "text-gray-700 hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* お問い合わせボタン */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              className={`px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${
                isScrolled 
                  ? "bg-white text-primary hover:bg-white/90" 
                  : "bg-primary hover:bg-primary/90 text-white"
              }`}
            >
              お問い合わせ
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-gray-900"
                }`} />
              ) : (
                <Menu className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-gray-900"
                }`} />
              )}
            </Button>
          </div>
        </div>

        {/* モバイルメニュー */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
