import React from 'react';
import { Layer, Marker, Source } from 'react-map-gl';
import cameras from '../../coords/cameraCoordinates';
import styled from 'styled-components';

function NatureLayer(props) {
    const layerStyle = {
        id: 'nature-layer',
        type: 'symbol',
        layout: {
            'icon-image': 'nature-icon',
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

export default NatureLayer;
