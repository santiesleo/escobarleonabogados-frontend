import Link from 'next/link';

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <Link href="/servicios" className="text-blue-600 font-medium">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros servicios
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ofrecemos servicios legales especializados con los más altos estándares de calidad y ética profesional.
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicios Penales */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Servicios Penales</h3>
              <p className="text-gray-600 mb-6">
                Defensa penal especializada con enfoque preventivo y estratégico para proteger sus derechos fundamentales.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Defensa en procesos penales
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Asesoría preventiva
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Recursos y apelaciones
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Libertades condicionales
                </li>
              </ul>
              <Link
                href="/contacto"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Consultar
              </Link>
            </div>

            {/* Disciplinarios */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Disciplinarios</h3>
              <p className="text-gray-600 mb-6">
                Asesoría y representación en procesos disciplinarios con experiencia en el sector público y privado.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Procesos disciplinarios
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Defensa de funcionarios
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Asesoría preventiva
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Recursos administrativos
                </li>
              </ul>
              <Link
                href="/contacto"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Consultar
              </Link>
            </div>

            {/* Responsabilidad Fiscal */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Responsabilidad Fiscal</h3>
              <p className="text-gray-600 mb-6">
                Gestión integral en materia fiscal con enfoque en la prevención y solución de controversias.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Asesoría fiscal
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Defensa en auditorías
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Recursos tributarios
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Planificación fiscal
                </li>
              </ul>
              <Link
                href="/contacto"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Consultar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Metodología</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabajamos con un enfoque sistemático y profesional para garantizar los mejores resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Análisis</h3>
              <p className="text-gray-600">Evaluación exhaustiva del caso y sus implicaciones legales.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Estrategia</h3>
              <p className="text-gray-600">Desarrollo de una estrategia legal personalizada y efectiva.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ejecución</h3>
              <p className="text-gray-600">Implementación diligente y eficiente de la estrategia legal.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguimiento</h3>
              <p className="text-gray-600">Monitoreo continuo y comunicación constante sobre el progreso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesita Asesoría Legal?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de abogados especializados está listo para ayudarle. 
            Solicite una consulta gratuita y conozca cómo podemos asistirle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar Consulta
            </Link>
            <Link
              href="/archivos"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Ver Documentos
            </Link>
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
                Firma de abogados especializada en servicios penales, disciplinarios y responsabilidad fiscal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="/servicios" className="hover:text-white transition-colors">Nuestros Servicios</Link></li>
                <li><Link href="/equipo" className="hover:text-white transition-colors">Nuestro equipo</Link></li>
                <li><Link href="/archivos" className="hover:text-white transition-colors">Documentos</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Servicios Penales</li>
                <li>Disciplinarios</li>
                <li>Responsabilidad Fiscal</li>
                <li>Consultoría Legal</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contacto@escobarleonabogados.com</li>
                <li>+57 (1) 123-4567</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Escobar León Abogados. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 