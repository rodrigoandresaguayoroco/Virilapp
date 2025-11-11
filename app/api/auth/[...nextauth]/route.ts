import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'access-code',
      name: 'Código de Acceso',
      credentials: {
        code: { label: 'Código', type: 'password' }
      },
      async authorize(credentials) {
        // Códigos de acceso para clientes
        const validCodes = ['VIRIL2024', 'CLIENTE123', 'VIP2024']
        
        if (credentials?.code && validCodes.includes(credentials.code)) {
          return {
            id: '1',
            email: 'client@viril.com',
            name: 'Cliente VIRIL',
            role: 'client'
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (session.user) session.user.role = token.role
      return session
    }
  }
})

export { handler as GET, handler as POST }