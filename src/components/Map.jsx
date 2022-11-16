import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Map as MapBox, Marker } from 'react-map-gl';
import { Pannellum, PannellumVideo } from 'pannellum-react';

import cameras from '../coords/cameraCoordinates';
import mapboxgl from 'mapbox-gl';
import CamerasLayer from './Layers/CamerasLayer';
import cities from '../coords/cities';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';

const iconsFolder = require.context('../img/icons', false, /\.(png)$/);
const iconsNames = iconsFolder.keys();
const icons = iconsNames.map(iconsFolder);

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

    const interactions = ['scrollZoom', 'boxZoom', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate'];

    const setMapControls = (enable) => {
        const map = mapRef.current.getMap();

        interactions.forEach((interaction) => {
            if (enable) {
                map[interaction].enable();
            } else {
                map[interaction].disable();
            }
        });
    };

    const loadImages = (map) => {
        console.log(map);
        icons.forEach((icon, index) => {
            map.loadImage(icon, (error, image) => {
                if (error) console.log(error);

                let fileName = iconsNames[index];
                let mapIconName = fileName.substring(2, fileName.length - 4);

                map.addImage(mapIconName, image);
            });
        });
    };

    const [showMap, setShowMap] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowMap(true);
        }, 4500);
    }, [])


    return (
        // <Pannellum 
        //     width='100%'
        //     height='1080px'
        //     image={require('../img/gl-cam.jpg')}
        //     pitch={10}
        //     yaw={180}
        //     hfov={110}
        //     autoLoad
        //     showControls={false}
        // />
        <MapContainer>
            {showMap &&
                <MapBox
                    ref={mapRef}
                    initialViewState={{
                        longitude: -14.962,
                        latitude: 32.745,
                        zoom: 2,
                    }}
                    // interactiveLayerIds={['cameras-layer']}
                    onClick={(e) => {
                        console.log(e);
                    }}
                    onLoad={(e) => {
                        const map = mapRef.current.getMap();

                        loadImages(map);

                        setMapControls(false);

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

                            setMapControls(true);
                        }
                    }}
                    mapStyle={mapStyle}
                    mapboxAccessToken='pk.eyJ1IjoibTNpZGEiLCJhIjoiY2t5YWUwcWJhMDRtYzJ3bzh4aXdzaXR5biJ9.fSgha4dxWzm65sez1AZ7HA'
                >
                    {/* <CamerasLayer mapRef={mapRef} /> */}
                    {cities.map((elem, index) => {
                        return <Marker key={index} latitude={elem.coordinates[1]} longitude={elem.coordinates[0]}><RoomRoundedIcon color='secondary' fontSize='60' /></Marker>
                    })}
                </MapBox>}
            <ThemeSwitch
                src={mapStyle === style1 ? './img/light.svg' : './img/dark.svg'}
                onClick={(e) => {
                    setMapStyle(mapStyle === style1 ? style2 : style1);
                }}
            />
        </MapContainer>
    );
}

export default Map;
