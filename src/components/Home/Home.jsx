import { useState, useEffect } from "react"
import PokemonCard from "../PokemonCard/PokemonCard.jsx"
function Home() {
    const [pokemon, setPokemon] = useState([])
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function loadPokemon() {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")

                if (!res.ok) throw new Error("Request failed")

                const data = await res.json()
                setPokemon(data.results)
            } catch {
                setError("Could not load Pokemon. Please try again.")
            } finally {
                setLoading(false)
            }
        }
        loadPokemon()
    }, [])

    const filtered = pokemon.filter((p) =>
        p.name.includes(query.toLowerCase())
    )

    return (
        <div className="page">
            <div className="search">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Pokemon..."
                />
            </div>

            {loading && <p>Loading Pokemon...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && filtered.length === 0 && (
                <p>No Pokemon match your search.</p>
            )}

            <div className="pokedex-grid">
                {filtered.map((p) => (
                    <PokemonCard pokemon={p} key={p.name} />
                ))}
            </div>
        </div>
    )
}

export default Home