import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } },
) {
  try {
    const filename = params.path.join('/')
    const filePath = join(
      process.cwd(),
      'src',
      'images',
      'certificate',
      filename,
    )

    const fileBuffer = readFileSync(filePath)

    return new NextResponse(fileBuffer as any, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
      },
    })
  } catch (error) {
    return new NextResponse('File not found', { status: 404 })
  }
}
