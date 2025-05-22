// app/api/pokemon/[name]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Pokemon not found" }, { status: 404 });
    }

    const pokemonData = await response.json();

    return NextResponse.json(pokemonData);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return NextResponse.json(
      { error: "Failed to fetch Pokemon data" },
      { status: 500 }
    );
  }
}
