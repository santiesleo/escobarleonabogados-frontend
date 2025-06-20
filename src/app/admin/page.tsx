'use client';

import { useState, useEffect } from 'react';

interface FileInfo {
  url: string;
  filename: string;
  originalName: string;
  size: number;
  type: string;
  uploadedAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  
  const [allFiles, setAllFiles] = useState<FileInfo[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(true);

  // Contraseña desde variable de entorno (más seguro)
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

  const fetchFiles = async () => {
    setLoadingFiles(true);
    try {
      const response = await fetch('/api/files');
      if (response.ok) {
        const data = await response.json();
        // Ordenar archivos por fecha, del más reciente al más antiguo
        const sortedFiles = data.files.sort((a: FileInfo, b: FileInfo) => 
          new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
        setAllFiles(sortedFiles);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      setLoadingFiles(false);
    }
  };
  
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchFiles();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      fetchFiles();
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);
    
    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          console.error('Error uploading file:', file.name);
        }
      }
      
      setFiles([]);
      alert('Archivos cargados exitosamente');
      // Recargar la lista de archivos después de subir
      fetchFiles();
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error al cargar archivos');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (url: string) => {
    if (!confirm('¿Está seguro de que desea eliminar este archivo? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      const response = await fetch('/api/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        alert('Archivo eliminado exitosamente.');
        // Actualizar la lista de archivos en el UI
        setAllFiles(prevFiles => prevFiles.filter(file => file.url !== url));
      } else {
        const data = await response.json();
        alert(`Error al eliminar el archivo: ${data.error}`);
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Ocurrió un error al conectar con el servidor para eliminar el archivo.');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold text-center mb-6">
            Panel de Administración
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese la contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Panel de Administración - Escobar León Abogados
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Columna de Carga de Archivos */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Cargar Nuevos Archivos</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seleccionar archivos
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                </div>

                {files.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Archivos seleccionados:
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {files.map((file, index) => (
                        <li key={index}>• {file.name} ({formatFileSize(file.size)})</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={handleUpload}
                  disabled={files.length === 0 || uploading}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Cargando...' : `Cargar ${files.length} Archivo(s)`}
                </button>
              </div>
            </div>

            {/* Columna de Archivos Existentes */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Gestionar Archivos Existentes</h2>
              
              {loadingFiles ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-gray-500">Cargando archivos...</p>
                </div>
              ) : allFiles.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No hay archivos cargados todavía.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {allFiles.map((file) => (
                    <div key={file.url} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {file.originalName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(file.size)} - {new Date(file.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          onClick={() => handleDelete(file.url)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 