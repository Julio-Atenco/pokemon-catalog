import Link from 'next/link'
import Image from 'next/image'

interface PokemonDetails {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  stats: Array<{
    base_stat: number
    stat: {
      name: string
    }
  }>
  abilities: Array<{
    ability: {
      name: string
    }
  }>
}

async function getPokemonDetails(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  if (!res.ok) {
    throw new Error('Pokemon no encontrado')
  }

  return res.json()
}


const getTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    fire: 'bg-orange-500',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-400',
    psychic: 'bg-pink-500',
    ice: 'bg-cyan-400',
    dragon: 'bg-purple-600',
    dark: 'bg-gray-700',
    fairy: 'bg-pink-400',
    normal: 'bg-gray-400',
    fighting: 'bg-red-600',
    flying: 'bg-indigo-400',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    rock: 'bg-yellow-700',
    bug: 'bg-green-500',
    ghost: 'bg-purple-600',
    steel: 'bg-gray-500',
  }
  return colors[type] || 'bg-gray-400'
}

const translateStat = (statName: string) => {
  const translations: { [key: string]: string } = {
    hp: 'PS',
    attack: 'Ataque',
    defense: 'Defensa',
    'special-attack': 'At. Esp',
    'special-defense': 'Def. Esp',
    speed: 'Velocidad',
  }
  return translations[statName] || statName
}

export default async function PokemonPage({
  params,
}: {
  params: { id: string }
}) {
  const pokemon: PokemonDetails = await getPokemonDetails(params.id)

  return (
    <main className="min-h-screen bg-red-600 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Botón de regreso */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-red-600 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors mb-6 border-2 border-yellow-400"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver
        </Link>

        {/* Tarjeta principal */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-yellow-400">
          {/* Header con imagen */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8">
            <div className="flex flex-col items-center">
              {/* Imagen del Pokémon */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-4">
                <Image
                  src={pokemon.sprites.other['official-artwork'].front_default}
                  alt={pokemon.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>

              {/* Nombre y número */}
              <span className="text-xl font-bold text-white/80 mb-2">
                #{pokemon.id.toString().padStart(3, '0')}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold capitalize text-white mb-4">
                {pokemon.name}
              </h1>

              {/* Tipos */}
              <div className="flex gap-2 flex-wrap justify-center mb-4">
                {pokemon.types.map((type, index) => (
                  <span
                    key={index}
                    className={`${getTypeColor(type.type.name)} text-white px-4 py-2 rounded-lg text-lg font-bold capitalize shadow-lg`}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>

              {/* Medidas */}
              <div className="flex gap-8 text-white">
                <div className="text-center">
                  <p className="text-sm opacity-80">Altura</p>
                  <p className="text-2xl font-bold">{pokemon.height / 10} m</p>
                </div>
                <div className="text-center">
                  <p className="text-sm opacity-80">Peso</p>
                  <p className="text-2xl font-bold">{pokemon.weight / 10} kg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-red-600">⚡</span> Estadísticas
            </h2>
            <div className="space-y-3">
              {pokemon.stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-700 text-sm">
                      {translateStat(stat.stat.name)}
                    </span>
                    <span className="font-bold text-gray-800">
                      {stat.base_stat}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-red-500 h-full rounded-full transition-all"
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Habilidades */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-red-600">🎯</span> Habilidades
              </h2>
              <div className="flex gap-2 flex-wrap">
                {pokemon.abilities.map((ability, index) => (
                  <span
                    key={index}
                    className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-bold capitalize border-2 border-red-600"
                  >
                    {ability.ability.name.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="flex gap-4 mt-6">
          {pokemon.id > 1 && (
            <Link
              href={`/pokemon/${pokemon.id - 1}`}
              className="flex-1 bg-white hover:bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 border-2 border-yellow-400"
            >
              ← Anterior
            </Link>
          )}
          <Link
            href={`/pokemon/${pokemon.id + 1}`}
            className="flex-1 bg-white hover:bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 border-2 border-yellow-400"
          >
            Siguiente →
          </Link>
        </div>
      </div>
    </main>
  )
}
