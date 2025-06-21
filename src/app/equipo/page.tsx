import Link from 'next/link';

export default function EquipoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro equipo
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conozca a nuestros abogados especializados con amplia experiencia en derecho penal, disciplinario y fiscal.
          </p>
        </div>
      </section>

      {/* Equipo Principal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Abogados Principales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo de abogados cuenta con más de 15 años de experiencia en el ejercicio profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Abogado 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-6xl text-gray-400">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Heyder Escobar</h3>
                <p className="text-blue-600 font-medium mb-3">Socio Fundador</p>
                <p className="text-gray-600 mb-4">
                  Especialista en derecho penal con más de 20 años de experiencia. 
                  Experto en defensa penal y procesos disciplinarios.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>• Especialización en Derecho Penal</p>
                  <p>• 20+ años de experiencia</p>
                </div>
              </div>
            </div>

            {/* Abogado 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-6xl text-gray-400">👩‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dra. María León</h3>
                <p className="text-blue-600 font-medium mb-3">Socia Directora</p>
                <p className="text-gray-600 mb-4">
                  Especialista en derecho laboral y derecho disciplinario.  
                  Amplia experiencia en el sector público.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>• Maestría en Derecho Público</p>
                  <p>• 18+ años de experiencia</p>
                </div>
              </div>
            </div>

            {/* Abogado 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-6xl text-gray-400">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Andrés Rodríguez</h3>
                <p className="text-blue-600 font-medium mb-3">Socio Senior</p>
                <p className="text-gray-600 mb-4">
                  Especialista en Responsabilidad fiscal y derecho tributario. 
                  Experto en auditorías y controversias fiscales.
                </p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>• Universidad Javeriana</p>
                  <p>• Especialización en Derecho Tributario</p>
                  <p>• 15+ años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Asociado */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipo Asociado</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo de abogados asociados y asistentes legales que complementan nuestra experiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Asociado 1 */}
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">👨‍💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Dr. Juan Pérez</h3>
              <p className="text-blue-600 text-sm mb-2">Abogado Asociado</p>
              <p className="text-gray-600 text-sm">Derecho Penal</p>
            </div>

            {/* Asociado 2 */}
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">👩‍💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Dra. Ana García</h3>
              <p className="text-blue-600 text-sm mb-2">Abogada Asociada</p>
              <p className="text-gray-600 text-sm">Derecho Disciplinario</p>
            </div>

            {/* Asociado 3 */}
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">👨‍💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Dr. Luis Martínez</h3>
              <p className="text-blue-600 text-sm mb-2">Abogado Asociado</p>
              <p className="text-gray-600 text-sm">Derecho Fiscal</p>
            </div>

            {/* Asociado 4 */}
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">👩‍💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Dra. Carmen López</h3>
              <p className="text-blue-600 text-sm mb-2">Abogada Asociada</p>
              <p className="text-gray-600 text-sm">Derecho Administrativo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y relación con los clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ética Profesional</h3>
              <p className="text-blue-100">Actuamos con los más altos estándares de ética y profesionalismo.</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excelencia</h3>
              <p className="text-blue-100">Buscamos la excelencia en cada caso y servicio que prestamos.</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Compromiso</h3>
              <p className="text-blue-100">Nos comprometemos con los intereses de nuestros clientes.</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovación</h3>
              <p className="text-blue-100">Utilizamos enfoques innovadores para resolver casos complejos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Necesita Asesoría Legal?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de abogados especializados está listo para ayudarle. 
            Solicite una consulta gratuita y conozca cómo podemos asistirle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Solicitar consulta
            </Link>
            <Link
              href="/servicios"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Ver Servicios
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