# VIRIL - Web App Privada

Aplicación web exclusiva para clientes de VIRIL (potenciador de testosterona) con acceso a módulos interactivos basados en PDFs educativos.

## 🚀 Características

- **Landing Page** con diseño minimalista y CTA para acceso
- **Sistema de Autenticación** con email mágico (Auth.js)
- **Dashboard Privado** con progreso de módulos
- **3 Módulos Interactivos**:
  - Arsenal del Amante (7 tácticas)
  - Acondicionamiento Masculino (técnicas seguras)
  - Dieta del Vigor (15 alimentos + receta)
- **Temporizador de Respiración** 4-2-6 reusable
- **Sistema de Progreso** persistente por usuario
- **Descarga de PDFs** originales
- **Diseño Responsive** y accesible (WCAG AA)

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router + TypeScript)
- **Estilos**: Tailwind CSS + CSS personalizado
- **Componentes**: shadcn/ui (Radix UI)
- **Autenticación**: Auth.js (email magic link)
- **Base de Datos**: LocalStorage (para demo) / Postgres (producción)
- **Despliegue**: Vercel

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/viril-webapp.git
   cd viril-webapp
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   Editar `.env.local` con tus configuraciones.

4. **Ejecutar datos semilla**
   ```bash
   npm run seed
   ```

5. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

## 📁 Estructura del Proyecto

```
viril-webapp/
├── app/
│   ├── api/auth/[...nextauth]/     # Configuración Auth.js
│   ├── modulos/
│   │   ├── arsenal/                # Módulo Arsenal del Amante
│   │   ├── acondicionamiento/      # Módulo Acondicionamiento
│   │   └── dieta/                  # Módulo Dieta del Vigor
│   ├── dashboard/                  # Dashboard principal
│   ├── login/                      # Página de login
│   ├── globals.css                 # Estilos globales
│   └── layout.tsx                  # Layout principal
├── components/
│   ├── ui/                         # Componentes shadcn/ui
│   ├── auth-provider.tsx           # Contexto de autenticación
│   └── breathing-timer.tsx         # Temporizador de respiración
├── scripts/
│   └── seed.js                     # Script de datos semilla
├── data/                           # Datos de la aplicación
├── public/                         # Archivos estáticos
└── upload/                         # PDFs originales
```

## 🎨 Branding

Colores oficiales de VIRIL:
- **Primarios**: `#101040`, `#202050`, `#303060`
- **Acento**: `#70E0E0`
- **Texto**: `#FFFFFF`, `#101010`

## 🔐 Autenticación

El sistema usa Auth.js con email mágico. Para demo, se puede acceder con cualquier email y el sistema simulará el envío del enlace.

## 📊 Progreso

El progreso se guarda en localStorage y se sincroniza entre módulos:
- Cada módulo tiene su propio sistema de completado
- El dashboard muestra el progreso general
- Los datos persisten entre sesiones

## 🎯 Módulos

### 1. Arsenal del Amante
- 7 tácticas interactivas con acordeones
- Temporizador de respiración 4-2-6
- Progreso por táctica
- Descarga de PDF original

### 2. Acondicionamiento Masculino
- Reglas de seguridad fijas en header
- Técnicas paso a paso
- Calendario de progresión
- Preguntas frecuentes

### 3. Dieta del Vigor
- 15 alimentos organizados por pilares
- Filtros interactivos
- Receta del Batido del Vigor
- Sistema de completado por alimento

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio** en [vercel.com](https://vercel.com)
2. **Configurar variables de entorno** en el dashboard de Vercel
3. **Desplegar** automáticamente

### Variables de Entorno para Producción

```env
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://your-domain.com
DATABASE_URL=your-postgres-connection-string
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=VIRIL <your-email@gmail.com>
```

## 📱 Responsive Design

La aplicación es completamente responsive y accesible:
- Diseño mobile-first
- Cumplimiento WCAG AA
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos en imágenes

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Iniciar servidor de producción
npm run lint         # Linting
npm run seed         # Ejecutar datos semilla
```

## 📄 Licencia

Material educativo exclusivo para clientes VIRIL. Todos los derechos reservados.

## 🆘 Soporte

Para soporte técnico o preguntas sobre la implementación:
- Email: soporte@viril.com
- Documentación: [docs.viril.com](https://docs.viril.com)

---

**© 2024 VIRIL - Potenciador de Testosterona**