import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './components/Map.jsx'
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Map />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
