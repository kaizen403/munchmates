import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get("skip") || "0", 10);
  const take = parseInt(url.searchParams.get("take") || "10", 10);

  const interests = await prisma.interest.findMany({
    skip,
    take,
  });

  const totalInterests = await prisma.interest.count();

  return NextResponse.json({ interests, totalInterests });
}
