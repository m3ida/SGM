import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Map as MapBox } from 'react-map-gl';
import cameras from '../labels/cameraCoordinates';
import Loader from './Loader';
import mapboxgl from 'mapbox-gl';
import CamerasLayer from './CamerasLayer';
import cameraImg from "../img/camera-marker.png"

const style1 = 'mapbox://styles/m3ida/cl4cwx6zp003k14mibkgxxoxc'; //dark-mode
const style2 = 'mapbox://styles/m3ida/cl4cx294j002q14uccgclgekz'; //light-mode

const MapContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;

    .mapboxgl-control-container {
        display: none;
        color: red;
    }
`;

const ThemeSwitch = styled.img`
    position: absolute;
    right: 5px;
    top: 5px;
    width: 3em;
    height: 3em;
`;

//webcam camara de lobos: https://www.netmadeira.com/webcams-madeira/load/netmadeira/camara-de-lobos/1654299741/4a37790b163a5a34598dd88b68139d2e

function Map() {
    const mapRef = useRef(null);
    const [boundsSet, setBoundsSet] = useState(false);
    const [mapStyle, setMapStyle] = useState(style1);
    const [loading, setLoading] = useState(true);

    const interactions = ['scrollZoom', 'boxZoom', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate'];

    return (
        <MapContainer>
            <Loader loading={loading} />
            <MapBox
                ref={mapRef}
                initialViewState={{
                    longitude: -14.962,
                    latitude: 32.745,
                    zoom: 2,
                }}
                onLoad={(e) => {
                    const map = mapRef.current.getMap();

                    map.loadImage(cameraImg, (error, image) => {
                        if(error) console.log(error)
                        
                        map.addImage('camera-icon', image);
                    })

                    

                    interactions.forEach((interaction) => {
                        map[interaction].disable();
                    });

                    map.dragRotate.disable();
                    var p1 = { lng: -17.30463610839638, lat: 32.61438311514739 };
                    var p2 = { lng: -16.614557373046978, lat: 32.89964297003729 };

                    var madeiraBounds = new mapboxgl.LngLatBounds(p1, p2);
                    map.fitBounds(madeiraBounds);
                }}
                onZoomEnd={(e) => {
                    if (!boundsSet) {
                        const map = mapRef.current.getMap();
                        map.setMaxBounds(map.getBounds());
                        setBoundsSet(true);

                        interactions.forEach((interaction) => {
                            map[interaction].enable();
                        });
                        console.log(map)
                    }
                }}
                onStyleData={(e) => {
                    if (loading) {
                        setTimeout(() => {
                            setLoading(false);
                        }, 2000);
                    }
                }}
                mapStyle={mapStyle}
                mapboxAccessToken='pk.eyJ1IjoibTNpZGEiLCJhIjoiY2t5YWUwcWJhMDRtYzJ3bzh4aXdzaXR5biJ9.fSgha4dxWzm65sez1AZ7HA'
            >
                <CamerasLayer />
            </MapBox>
            <ThemeSwitch
                src={mapStyle == style1 ? './img/light.svg' : './img/dark.svg'}
                onClick={(e) => {
                    if (!loading) {
                        setMapStyle(mapStyle == style1 ? style2 : style1);
                        const map = mapRef.current.getMap();
                        // map.setStyle(mapStyle);
                        setLoading(true);
                    }
                }}
            />
        </MapContainer>
    );
}

export default Map;
