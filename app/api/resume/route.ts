import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Lê o arquivo PDF da pasta public
    const pdfPath = join(process.cwd(), 'public', 'resume.pdf');
    const pdfBuffer = readFileSync(pdfPath);
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error serving resume:', error);
    return new NextResponse('Error serving resume', { status: 500 });
  }
}