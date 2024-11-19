import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import AWSHealth from './pages/AwsHealth';

function App() {
    return (
        <Router>
            <div className="windowFrame">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Events />} />
                    <Route path="/event/:id" element={<EventDetail />} />
                    <Route path="/aws/health" element={<AWSHealth />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;