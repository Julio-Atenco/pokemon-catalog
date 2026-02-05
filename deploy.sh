#!/bin/bash

# 🎮 Script de despliegue - Pokémon Catalog
# Este script te ayuda a subir tu proyecto a GitHub

echo "🚀 Iniciando despliegue a GitHub..."
echo ""

# Paso 1: Inicializar Git
echo "📦 Paso 1: Inicializando repositorio Git..."
git init

# Paso 2: Agregar todos los archivos
echo "📝 Paso 2: Agregando archivos..."
git add .

# Paso 3: Crear el primer commit
echo "💾 Paso 3: Creando primer commit..."
git commit -m "🎮 Primer commit: Catálogo de Pokémon con Next.js y PokéAPI"

# Paso 4: Cambiar a rama main
echo "🌿 Paso 4: Configurando rama main..."
git branch -M main

# Paso 5: Pedir el usuario de GitHub
echo ""
echo "⚠️  IMPORTANTE: Antes de continuar, crea tu repositorio en GitHub:"
echo "   1. Ve a https://github.com/new"
echo "   2. Nombre del repositorio: pokemon-catalog"
echo "   3. Marca como Public"
echo "   4. NO agregues README (ya lo tienes)"
echo "   5. Haz clic en 'Create repository'"
echo ""
read -p "¿Ya creaste el repositorio en GitHub? Escribe tu usuario de GitHub: " GITHUB_USER

# Paso 6: Conectar con GitHub
echo "🔗 Paso 5: Conectando con GitHub..."
git remote add origin "https://github.com/$GITHUB_USER/pokemon-catalog.git"

# Paso 7: Subir el código
echo "📤 Paso 6: Subiendo código a GitHub..."
git push -u origin main

echo ""
echo "✅ ¡Listo! Tu código está en GitHub"
echo ""
echo "🌐 Ver tu repositorio: https://github.com/$GITHUB_USER/pokemon-catalog"
echo ""
echo "🚀 SIGUIENTE PASO: Despliega tu sitio web"
echo "   Opción 1 (Recomendada): Vercel"
echo "   1. Ve a https://vercel.com"
echo "   2. Inicia sesión con GitHub"
echo "   3. Importa tu repositorio 'pokemon-catalog'"
echo "   4. ¡Deploy! Tu sitio estará en línea en 2 minutos"
echo ""
echo "   Opción 2: Netlify"
echo "   1. Ve a https://netlify.com"
echo "   2. Inicia sesión con GitHub"
echo "   3. Importa tu repositorio 'pokemon-catalog'"
echo "   4. ¡Deploy!"
echo ""
echo "✨ ¡Tu Pokédex estará en línea y accesible desde cualquier lugar!"
