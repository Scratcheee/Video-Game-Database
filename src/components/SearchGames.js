import React, { useState } from 'react'
import GameCard from './GameCard'

const SearchGames = () => {

    const [query, setQuery] = useState('');
    const [games, setGames] = useState([]);

    const searchGames = async (e) => {
        e.preventDefault();
        const key = "7dffe120d4f446aeb8adff6cc3f1082b"
        const url = `https://api.rawg.io/api/games?key=${key}&search=${query}`

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results)
            console.log(data.results[1].platforms[0].platform.name)

        
            setGames(data.results)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form className="form" onSubmit={searchGames}>
                <label className="label" htmlFor="query" >Game Name</label>
                <input className="input" type="text" name="query" placeholder="i.e. Final Fantasy" value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {games.filter(game => game.background_image).map(game => (
                    <GameCard game={game} key={game.id}/>
                ))}
            </div>
        </div>
    )
}

export default SearchGames


