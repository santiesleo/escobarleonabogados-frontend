import { NextRequest, NextResponse } from 'next/server';
import { del } from '@vercel/blob';
import { kv } from '@vercel/kv';

interface FileInfo {
  url: string;
  filename: string;
  originalName: string;
  size: number;
  type: string;
  uploadedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'No se proporcionó la URL del archivo a eliminar.' },
        { status: 400 }
      );
    }

    // 1. Eliminar el archivo de Vercel Blob
    await del(url);

    // 2. Eliminar la referencia del archivo en Vercel KV
    const existingFiles = (await kv.get('uploaded_files')) as FileInfo[] || [];
    const updatedFiles = existingFiles.filter(file => file.url !== url);
    await kv.set('uploaded_files', updatedFiles);

    return NextResponse.json({
      message: 'Archivo eliminado exitosamente.'
    });

  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor al eliminar el archivo.' },
      { status: 500 }
    );
  }
} 