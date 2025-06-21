'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

interface FileInfo {
  url: string;
  filename: string;
  originalName: string;
  size: number;
  type: string;
  uploadedAt: string;
}

export default function HomePage() {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch('/api/files');
      if (response.ok) {
        const data = await response.json();
        setFiles(data.files);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar archivos por tipo
  const pdfFiles = files.filter(file => file.type.includes('pdf'));
  const imageFiles = files.filter(file => file.type.includes('image'));
  const documentFiles = files.filter(file => 
    file.type.includes('word') || file.type.includes('document')
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Escobar León Abogados
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Firma de abogados especializada en servicios penales, disciplinarios y Responsabilidad fiscal. 
              Caracterizada por ser preventiva, personalizada, eficiente y reactiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/servicios"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Nuestros servicios
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Consulta Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos servicios legales especializados con los más altos estándares de calidad y ética profesional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Servicios penales</h3>
              <p className="text-gray-600">
                Defensa penal especializada con enfoque preventivo y estratégico para proteger sus derechos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Disciplinarios</h3>
              <p className="text-gray-600">
                Asesoría y representación en procesos disciplinarios con experiencia en el sector público y privado.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsabilidad fiscal</h3>
              <p className="text-gray-600">
                Gestión integral en materia fiscal con enfoque en la prevención y solución de controversias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentos y recursos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acceda a documentos legales, formularios y recursos importantes para su caso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Documentos Legales */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">📄</span>
                Documentos Legales
              </h3>
              {loading ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                </div>
              ) : pdfFiles.length > 0 ? (
                <div className="space-y-3">
                  {pdfFiles.slice(0, 3).map((file, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-sm font-medium text-gray-900 truncate mb-1">
                        {file.originalName}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {new Date(file.uploadedAt).toLocaleDateString('es-ES')}
                        </span>
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Ver
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No hay documentos disponibles</p>
              )}
            </div>

            {/* Formularios */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">📝</span>
                Formularios
              </h3>
              {loading ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                </div>
              ) : documentFiles.length > 0 ? (
                <div className="space-y-3">
                  {documentFiles.slice(0, 3).map((file, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-sm font-medium text-gray-900 truncate mb-1">
                        {file.originalName}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {new Date(file.uploadedAt).toLocaleDateString('es-ES')}
                        </span>
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Descargar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No hay formularios disponibles</p>
              )}
            </div>

            {/* Galería */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🖼️</span>
                Galería
              </h3>
              {loading ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                </div>
              ) : imageFiles.length > 0 ? (
                <>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Galería en mantenimiento.</p>
                  </div>
                  {/*
                  <div className="grid grid-cols-2 gap-2">
                    {imageFiles.slice(0, 4).map((file, index) => (
                      <div key={index} className="aspect-square bg-white rounded border border-gray-200 overflow-hidden">
                        <Image
                          src={file.url}
                          alt={file.originalName}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  */}
                </>
              ) : (
                <p className="text-gray-500 text-sm">No hay imágenes disponibles</p>
              )}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/archivos"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver todos los documentos
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contáctenos</h2>
              <p className="text-blue-100 mb-6 text-lg">
                Estamos aquí para ayudarle. Solicite una consulta gratuita y conozca cómo podemos asistirle en su caso legal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  <span>contacto@escobarleonabogados.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <span>+57 3166575620</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  <span>Cali, Colombia</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg text-gray-900">
              <h3 className="text-xl font-semibold mb-4">Solicitar consulta</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Su nombre"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Su correo electrónico"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Asunto"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Su mensaje (opcional)"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Escobar León Abogados</h3>
              <p className="text-gray-400">
                Firma de abogados especializada en servicios penales, disciplinarios y Responsabilidad fiscal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="/servicios" className="hover:text-white transition-colors">Nuestros servicios</Link></li>
                <li><Link href="/equipo" className="hover:text-white transition-colors">Nuestro equipo</Link></li>
                <li><Link href="/archivos" className="hover:text-white transition-colors">Documentos</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Servicios penales</li>
                <li>Disciplinarios</li>
                <li>Responsabilidad fiscal</li>
                <li>Consultoría Legal</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contacto@escobarleonabogados.com</li>
                <li>+57 3166575620</li>
                <li>Cali, Colombia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Escobar León Abogados. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
