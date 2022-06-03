import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const Mapa = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .mapboxgl-control-container {
      display: none;
    }
`;

function Map() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibTNpZGEiLCJhIjoiY2t5YWUwcWJhMDRtYzJ3bzh4aXdzaXR5biJ9.fSgha4dxWzm65sez1AZ7HA';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-16.8930); //madeira -> -16.8930 32.7450
    const [lat, setLat] = useState(32.7450);
    const [zoom, setZoom] = useState(7);

    const bounds = [
        [-17.8500, 32.3807], // Southwest coordinates -> -17.5000 32.1807
        [-15.916, 33.1785], // Northeast coordinates -> -15.8167 33.3785
    ];

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom,
            maxBounds: bounds
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
        console.log(lng, lat);
    });

    return <Mapa ref={mapContainer}></Mapa>;
}

export default Map;
