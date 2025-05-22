// app/pokemon/dynamic/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  other: {
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatStatName(statName: string): string {
  return statName
    .split("-")
    .map((word) => capitalizeFirst(word))
    .join(" ");
}

function getTypeColor(type: string): string {
  const typeColors: Record<string, string> = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-blue-200",
    fighting: "bg-red-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-green-400",
    rock: "bg-yellow-800",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
  };
  return typeColors[type] || "bg-gray-400";
}

export default function DynamicPokemonPage() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("ditto");

  const fetchPokemon = async (name: string) => {
    if (!name.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/pokemon/${name.toLowerCase()}`);

      if (!response.ok) {
        throw new Error("Pokemon not found");
      }

      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch Pokemon");
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon("ditto"); // Load Ditto by default
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPokemon(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Pokémon Search
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter Pokemon name or ID..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading Pokemon...</p>
          </div>
        )}

        {/* Pokemon Data */}
        {pokemon && !loading && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {capitalizeFirst(pokemon.name)}
                  </h2>
                  <p className="text-blue-100">
                    #{pokemon.id.toString().padStart(3, "0")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-100">Base Experience</p>
                  <p className="text-2xl font-bold">
                    {pokemon.base_experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Images and Basic Info */}
                <div className="space-y-6">
                  {/* Pokemon Images */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Sprites
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Normal</p>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <Image
                            src={
                              pokemon.sprites.other["official-artwork"]
                                .front_default || pokemon.sprites.front_default
                            }
                            alt={`${pokemon.name} normal`}
                            width={120}
                            height={120}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Shiny</p>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <Image
                            src={
                              pokemon.sprites.other["official-artwork"]
                                .front_shiny || pokemon.sprites.front_shiny
                            }
                            alt={`${pokemon.name} shiny`}
                            width={120}
                            height={120}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Physical Stats */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Physical Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <p className="text-2xl font-bold text-blue-600">
                          {pokemon.height / 10}m
                        </p>
                        <p className="text-sm text-gray-600">Height</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <p className="text-2xl font-bold text-green-600">
                          {pokemon.weight / 10}kg
                        </p>
                        <p className="text-sm text-gray-600">Weight</p>
                      </div>
                    </div>
                  </div>

                  {/* Types */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Type
                    </h3>
                    <div className="flex gap-2">
                      {pokemon.types.map((type) => (
                        <span
                          key={type.slot}
                          className={`px-4 py-2 rounded-full text-white font-medium ${getTypeColor(
                            type.type.name
                          )}`}
                        >
                          {capitalizeFirst(type.type.name)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Stats and Abilities */}
                <div className="space-y-6">
                  {/* Base Stats */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Base Stats
                    </h3>
                    <div className="space-y-3">
                      {pokemon.stats.map((stat) => (
                        <div key={stat.stat.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-700">
                              {formatStatName(stat.stat.name)}
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              {stat.base_stat}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                              style={{
                                width: `${Math.min(
                                  (stat.base_stat / 255) * 100,
                                  100
                                )}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Abilities */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Abilities
                    </h3>
                    <div className="space-y-2">
                      {pokemon.abilities.map((ability) => (
                        <div
                          key={ability.slot}
                          className={`p-3 rounded-lg ${
                            ability.is_hidden
                              ? "bg-purple-100 border-l-4 border-purple-500"
                              : "bg-blue-100 border-l-4 border-blue-500"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800">
                              {capitalizeFirst(
                                ability.ability.name.replace("-", " ")
                              )}
                            </span>
                            {ability.is_hidden && (
                              <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">
                                Hidden
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
