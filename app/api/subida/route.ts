import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import fs from 'fs';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const files: File[] = data.getAll('file') as File[];

    if (files.length === 0) {
      return NextResponse.json({ error: 'No se subieron archivos.' }, { status: 400 });
    }

    const uploadPromises = files.map(async (file) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Ensure the data-raw directory exists
      const dataRawDir = path.join(process.cwd(), 'data-raw');
      await ensureDir(dataRawDir);

      // Create a unique filename
      const uniqueFilename = `${Date.now()}-${file.name}`;
      const filePath = path.join(dataRawDir, uniqueFilename);

      // Write the file
      await writeFile(filePath, buffer);
      console.log(`File saved to ${filePath}`);

      return uniqueFilename;
    });

    const savedFiles = await Promise.all(uploadPromises);

    return NextResponse.json({ message: 'Archivos subidos con éxito', files: savedFiles });
  } catch (error) {
    console.error('Error detallado al subir archivos:', error);
    return NextResponse.json({
      error: 'Error al procesar la subida de archivos',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Helper function to ensure a directory exists
async function ensureDir(dirPath: string) {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw error;
    }
  }
}
