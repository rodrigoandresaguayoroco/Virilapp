const fs = require('fs');
const path = require('path');

// Crear directorio de datos si no existe
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Datos semilla para la aplicación
const seedData = {
  users: [
    {
      id: 'user-1',
      email: 'cliente@viril.com',
      role: 'client',
      createdAt: new Date().toISOString()
    }
  ],
  progress: {
    'user-1': {
      arsenal: 0,
      acondicionamiento: 0,
      dieta: 0,
      updatedAt: new Date().toISOString()
    }
  },
  modules: {
    arsenal: {
      title: 'Arsenal del Amante',
      description: '7 tácticas para aumentar resistencia y placer',
      totalSteps: 7,
      completedSteps: []
    },
    acondicionamiento: {
      title: 'Acondicionamiento Masculino',
      description: 'Técnicas manuales seguras para salud pélvica',
      totalSteps: 3,
      completedSteps: []
    },
    dieta: {
      title: 'Dieta del Vigor',
      description: '15 alimentos clave para potenciar virilidad',
      totalSteps: 15,
      completedSteps: []
    }
  }
};

// Guardar datos en archivos JSON
fs.writeFileSync(
  path.join(dataDir, 'users.json'),
  JSON.stringify(seedData.users, null, 2)
);

fs.writeFileSync(
  path.join(dataDir, 'progress.json'),
  JSON.stringify(seedData.progress, null, 2)
);

fs.writeFileSync(
  path.join(dataDir, 'modules.json'),
  JSON.stringify(seedData.modules, null, 2)
);

// Crear archivo de configuración para Auth.js
const authConfig = `
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

export const authOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Verificar si el usuario está en la lista de clientes autorizados
      const authorizedEmails = ['cliente@viril.com'];
      return authorizedEmails.includes(user.email);
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
`;

fs.writeFileSync(
  path.join(__dirname, '../app/api/auth/[...nextauth]/route.ts'),
  authConfig
);

console.log('✅ Datos semilla creados exitosamente');
console.log('📁 Archivos generados:');
console.log('  - data/users.json');
console.log('  - data/progress.json');
console.log('  - data/modules.json');
console.log('  - app/api/auth/[...nextauth]/route.ts');
console.log('\n🚀 La aplicación está lista para usar con datos de demo.');