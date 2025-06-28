// app/api/events/route.ts

import { prisma } from "@/app/lib/prisma";
import { NextResponse } from 'next/server'

export async function GET() {
  const eventos = await prisma.event.findMany({
    orderBy: { date: 'desc' },
    take: 10
  })
  return NextResponse.json(eventos)
}
