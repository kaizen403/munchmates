import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

// Define the form schema for validation
const formSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/@vitapstudent\.ac\.in$/, "Must be a VITAP student email"),
  password: z.string().min(6),
});

// Define the credentials type
type Credentials = {
  email: string;
  password: string;
};

export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        // Validate the email and password
        const validation = formSchema.safeParse({
          email: credentials.email,
          password: credentials.password,
        });

        if (!validation.success) {
          throw new Error("Invalid email or password");
        }

        // Check if the user exists and the password is correct
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && (await compare(credentials.password, user.password))) {
          return {
            id: user.id.toString(), // Ensure the id is returned as a string
            name: user.name,
            email: user.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
};
