import React from 'react';
import { Layer, Marker, Source } from 'react-map-gl';
import cameras from '../../coords/cameraCoordinates';
import styled from 'styled-components';

function CamerasLayer(props) {
    const layerStyle = {
        id: 'cameras-layer',
        type: 'symbol',
        layout: {
            'icon-image': 'camera-icon',
            'icon-size': 0.6,
            'icon-allow-overlap': true,
            'icon-anchor': 'bottom'
        },
        minzoom: 13,
    };

    return (
        <Source id='my-data' type='geojson' data={cameras}>
            <Layer {...layerStyle} />
        </Source>
    );
}

export default CamerasLayer;
