import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

interface FileInfo {
  url: string;
  filename: string;
  originalName: string;
  size: number;
  type: string;
  uploadedAt: string;
}

export async function GET() {
  try {
    // Obtener lista de archivos desde Vercel KV
    const files = (await kv.get('uploaded_files')) as FileInfo[] || [];
    
    return NextResponse.json({
      files: files,
      count: files.length
    });
  } catch (error) {
    console.error('Error fetching files:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 