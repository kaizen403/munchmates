import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import prisma from "@/lib/prisma";

// This function handles the POST request to register a new user
export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password, age, gender, interests } = await req.json();

    // Check if all required fields are provided
    if (!name || !email || !password || !age || !gender || !interests) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create the new user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        age,
        gender,
        interests: {
          connect: interests.map((id: number) => ({ id })),
        },
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { error: "User already exists." },
      { status: 500 },
    );
  }
};
