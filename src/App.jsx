import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './components/Map.jsx';
import 'mapbox-gl/dist/mapbox-gl.css';
import Layout from './components/Layout.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={ <Layout> <Map /> </Layout> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
