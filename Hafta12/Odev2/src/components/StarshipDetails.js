
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function StarshipDetails() {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`).then((response) => {
            setStarship(response.data);
        });
    }, [id]);

    if (!starship) return <p>Loading...</p>;

    return (
        <div>
            <button onClick={() => navigate('/')}>Go Back</button>
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
            <p>Passengers: {starship.passengers}</p>
            <p>Max Atmospheric Speed: {starship.max_atmosphering_speed}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Crew: {starship.crew}</p>
            <p>Cargo Capacity: {starship.cargo_capacity}</p>
        </div>
    );
}

export default StarshipDetails;
