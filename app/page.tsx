import Link from 'next/link'
import Image from 'next/image'

interface Pokemon {
  name: string
  url: string
}

interface PokemonDetails {
  id: number
  name: string
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
}

async function getPokemonList() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12', {
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Failed to fetch pokemon')
  const data = await res.json()
  return data.results
}

async function getPokemonDetails(url: string) {
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) return null
  return res.json()
}

export default async function Home() {
  const pokemonList: Pokemon[] = await getPokemonList()
  
  const pokemonDetails: PokemonDetails[] = await Promise.all(
    pokemonList.map(async (pokemon) => {
      const details = await getPokemonDetails(pokemon.url)
      return details
    })
  )

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

  return (
    <main className="min-h-screen bg-red-600 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header estilo Pokémon */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6 border-4 border-yellow-400">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
            <h1 className="text-4xl sm:text-5xl font-bold text-red-600">
              Pokedex
            </h1>
          </div>
        </div>

        {/* Grid de Pokémon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {pokemonDetails.map((pokemon) => (
            <Link
              key={pokemon.id}
              href={`/pokemon/${pokemon.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 border-2 border-yellow-400">
                {/* Imagen del Pokémon */}
                <div className="bg-gray-100 p-4 rounded-t-lg">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image
                      src={pokemon.sprites.other['official-artwork'].front_default}
                      alt={pokemon.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-3">
                  <span className="text-xs font-bold text-gray-500">
                    #{pokemon.id.toString().padStart(3, '0')}
                  </span>

                  <h2 className="text-lg font-bold text-gray-800 capitalize mb-2">
                    {pokemon.name}
                  </h2>

                  {/* Tipos */}
                  <div className="flex gap-1 flex-wrap">
                    {pokemon.types.map((type, index) => (
                      <span
                        key={index}
                        className={`${getTypeColor(type.type.name)} text-white px-2 py-1 rounded text-xs font-bold capitalize`}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </main>
  )
}
