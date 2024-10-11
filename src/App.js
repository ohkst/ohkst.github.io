import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Events />} />
                    <Route path="/event/:id" element={<EventDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;