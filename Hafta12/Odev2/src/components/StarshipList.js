
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StarshipList() {
    const [starships, setStarships] = useState([]);
    const [search, setSearch] = useState('');
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        fetchStarships('https://swapi.dev/api/starships/');
    }, []);

    const fetchStarships = (url) => {
        axios.get(url).then((response) => {
            setStarships((prev) => [...prev, ...response.data.results]);
            setNextPage(response.data.next);
        });
    };

    const handleSearch = () => {
        const filteredStarships = starships.filter((ship) =>
            ship.name.toLowerCase().includes(search.toLowerCase()) ||
            ship.model.toLowerCase().includes(search.toLowerCase())
        );
        setStarships(filteredStarships);
    };

    return (
        <div>
            <h1>Star Wars Starships</h1>
            <input
                type="text"
                placeholder="Search by name or model"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Filter</button>
            <div className="starship-grid">
                {starships.map((starship, index) => (
                    <div key={index} className="starship-card">
                        <h3>{starship.name}</h3>
                        <p>Model: {starship.model}</p>
                        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
                        <Link to={`/starship/${starship.url.split('/')[5]}`}>View Details</Link>
                    </div>
                ))}
            </div>
            {nextPage && <button onClick={() => fetchStarships(nextPage)}>Load More</button>}
        </div>
    );
}

export default StarshipList;
