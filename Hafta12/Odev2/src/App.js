
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarshipList from './components/StarshipList';
import StarshipDetails from './components/StarshipDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StarshipList />} />
                <Route path="/starship/:id" element={<StarshipDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
