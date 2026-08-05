import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Admin credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'admin@popees.local' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || user.role !== 'ADMIN') return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name ?? 'Admin',
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = session.user ?? {};
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
