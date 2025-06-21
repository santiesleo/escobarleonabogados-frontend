"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Escobar León Abogados
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Nuestros servicios
              </Link>
              <Link href="/equipo" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Nuestro equipo
              </Link>
              <Link href="/archivos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Documentos
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contáctenos
              </Link>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700" onClick={() => setMobileMenuOpen(true)} aria-label="Abrir menú">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:hidden">
          <div ref={mobileMenuRef} className="w-64 bg-white h-full shadow-lg p-6 flex flex-col space-y-6 animate-slide-in">
            <button className="self-end mb-4 text-gray-700" onClick={() => setMobileMenuOpen(false)} aria-label="Cerrar menú">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Nuestros servicios
            </Link>
            <Link href="/equipo" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Nuestro equipo
            </Link>
            <Link href="/archivos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Documentos
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contáctenos
            </Link>
          </div>
        </div>
      )}
    </>
  );
} 