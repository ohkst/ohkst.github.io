import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import AWSHealth from './pages/AwsHealth';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router basename="/mts-web-react">
            <div className="windowFrame">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Events />} />
                    <Route path="/event/:id" element={<EventDetail />} />
                    <Route path="/aws/health" element={<AWSHealth />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;