const cameras = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                name: 'Barreirinha',
                cameraLink: '//www.netmadeira.com/webcams/show/netmadeira/funchal-barreirinha',
            },
            geometry: {
                coordinates: [-16.897525, 32.64681],
                type: 'Point',
            },
        },
        {
            type: 'Feature',
            properties: {
                name: 'Baía do Funchal',
                cameraLink: '//www.netmadeira.com/webcams/show/netmadeira/funchal-baia-do-funchal',
            },
            geometry: {
                coordinates: [-16.932338, 32.642129],
                type: 'Point',
            },
        },
        {
            type: 'Feature',
            properties: {
                name: 'Câmara de Lobos',
                cameraLink: '//www.netmadeira.com/webcams/show/netmadeira/camara-de-lobos',
            },
            geometry: {
                coordinates: [-16.992463, 32.652442],
                type: 'Point',
            },
        },
    ],
};

export default cameras;
