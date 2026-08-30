import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function Detail() {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        async function loadPokemon() {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await res.json()
            setPokemon(data)
        }

        loadPokemon()
    }, [name])

    if (!pokemon) {
        return (
            <div className="page">
                <p className="notice">Loading...</p>
            </div>
        )
    }

    const artwork = pokemon.sprites.other["official-artwork"].front_default

    return (
        <div className="page">
            <Link className="back-link" to="/">
                ← Back to Pokedex
            </Link>
            <div className="detail">
                <span className="pokemon-number">#{pokemon.id}</span>
                <img crossOrigin="anonymous" src={artwork} alt={pokemon.name} />
                <h1>{pokemon.name}</h1>

                <div className="types">
                    {pokemon.types.map((t) => (
                        <span
                            className={`type type-${t.type.name}`}
                            key={t.type.name}
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>

                <div className="stats">
                    {pokemon.stats.map((s) => (
                        <div className="stat" key={s.stat.name}>
                            <span className="stat-label">{s.stat.name}</span>
                            <span className="stat-value">{s.base_stat}</span>

                            <div className="stat-bar">
                                <span
                                    style={{
                                        width: `${(s.base_stat / 255) * 100}%`
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detail