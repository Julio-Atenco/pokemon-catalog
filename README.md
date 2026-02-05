# 🎮 Catálogo de Pokémon - Next.js

Proyecto de catálogo de Pokémon desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**, consumiendo datos de la **PokéAPI**.

## ✨ Características

- ✅ **Rutas dinámicas** para mostrar detalles de cada Pokémon
- ✅ **12+ elementos dinámicos** renderizados desde la API
- ✅ **Consumo de PokéAPI** para obtener datos en tiempo real
- ✅ **Diseño responsivo** optimizado para móviles (sm) y escritorio (lg)
- ✅ **Tailwind CSS** para estilos modernos y adaptables
- ✅ **TypeScript** para type safety
- ✅ **Next.js 14 App Router** con Server Components

## 🚀 Estructura del Proyecto

```
pokemon-catalog/
├── app/
│   ├── pokemon/
│   │   └── [id]/
│   │       └── page.tsx      # Página dinámica de detalles
│   ├── globals.css            # Estilos globales con Tailwind
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página principal (catálogo)
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 📋 Funcionalidades Implementadas

### 1. Rutas Dinámicas
- `/` - Página principal con el catálogo de Pokémon
- `/pokemon/[id]` - Página de detalles de cada Pokémon (ej: `/pokemon/1`, `/pokemon/25`)

### 2. Consumo de API
- Obtención de lista de Pokémon desde `https://pokeapi.co/api/v2/pokemon`
- Detalles completos de cada Pokémon
- Imágenes oficiales de alta calidad
- Información de tipos, estadísticas, habilidades, altura y peso

### 3. Responsividad con Tailwind
- **sm (640px+)**: Grid de 2 columnas
- **lg (1024px+)**: Grid de 3 columnas
- **xl (1280px+)**: Grid de 4 columnas
- Diseño adaptativo en todas las secciones

### 4. Elementos Dinámicos
Se muestran más de 12 Pokémon con:
- Imagen oficial
- Número de Pokédex
- Nombre
- Tipos (con colores distintivos)
- Estadísticas base
- Habilidades
- Altura y peso

## 🛠️ Instalación y Uso

### Requisitos Previos
- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

### Ver la aplicación
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Características de Diseño

- **Gradientes modernos** en fondos y tarjetas
- **Efectos hover** con transformaciones y sombras
- **Colores por tipo** de Pokémon
- **Barras de progreso animadas** para estadísticas
- **Navegación fluida** entre Pokémon
- **Imágenes optimizadas** con Next.js Image

## 📱 Capturas

### Vista Principal (Catálogo)
- Grid responsivo de Pokémon
- Tarjetas con hover effects
- Badges de tipos con colores

### Vista de Detalles
- Hero section con imagen grande
- Estadísticas visuales con barras de progreso
- Información completa del Pokémon
- Navegación entre Pokémon anterior/siguiente

## 🔧 Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **PokéAPI** - API de datos de Pokémon
- **Next/Image** - Optimización de imágenes

## 📝 Notas

- Los datos se obtienen en tiempo real de la PokéAPI
- Las imágenes se cargan de forma optimizada
- El diseño es completamente responsive
- Se utilizan Server Components de Next.js 14

## 🌟 Mejoras Futuras

- [ ] Búsqueda de Pokémon
- [ ] Filtros por tipo
- [ ] Paginación
- [ ] Favoritos
- [ ] Comparador de Pokémon
- [ ] Modo oscuro

---

Desarrollado con ❤️ usando Next.js y PokéAPI
