var style_json = {
    "mapping": [
        {
            "layer": "water",
            "sort": {
                "water": true
            }
        },
        {
            "layer": "admin",
            "sort": {
                "borders": true
            }
        },
        {
            "layer": "waterway",
            "field": "class",
            "sort": {
                "waterway_major": ["river", "canal"],
                "waterway_minor": "stream"
            }
        },
        {
            "layer": "landuse",
            "field": "class",
            "sort": {
                "landuse_park": "park",
                "landuse_wood": "wood",
                "landuse_school": "school",
                "landuse_cemetery": "cemetery",
                "landuse_industrial": "industrial"
            }
        },
        {
            "layer": "building",
            "sort": {
                "building": true
            }
        },
        {
            "layer": "road",
            "field": "class",
            "sort": {
                "road_large": ["motorway", "main"],
                "road_regular": ["street", "street_limited"]
            }
        },
        {
            "layer": "country_label",
            "label": "name_en",
            "sort": {
                "country_label": true
            }
        }
    ],
    "constants": {
        "land": "#e8e0d8",
        "water": "#73b6e6",
        "park": "#cce5ab",
        "road": "#fefefe",
        "border": "#6d90ab",
        "wood": "#d9dccf"
    },
    "layers": [
        // {
        //     "data": "#background",
        //     "type": "fill",
        //     "color": "water"
        // },
        {
            "data": "water",
            "type": "fill",
            "color": "water",
            "antialias": true
        },
        // {
        //     "data": "water",
        //     "type": "line",
        //     "color": "water",
        //     "width": 0.5
        // },
        // {
        //     "data": "waterway_major",
        //     "type": "fill",
        //     "color": "water",
        //     "width": ["linear", 12, 1, 0.5, 0.5]
        // }, {
        //     "data": "waterway_minor",
        //     "type": "line",
        //     "color": "water",
        //     "width": ["linear", 14, 1, 0.5, 0.5]
        // },
        // {
        //     "data": "landuse_park",
        //     "type": "fill",
        //     "color": "park"
        // }, {
        //     "data": "landuse_wood",
        //     "type": "fill",
        //     "color": "wood"
        // },
        // {
        //     "data": "building",
        //     "type": "fill",
        //     "enabled": ["min", 14],
        //     "color": "#F7EEDA",
        //     "opacity": ["linear", 14, 0, 1, 0, 1]
        // },
        {
            "data": "road_large",
            "type": "line",
            "color": [0, 0, 0, 1],
            "width": ["exponential", 8, 0.5, 0.2, 1],
            "enabled": ["min", 13]
        }, {
            "data": "road_regular",
            "type": "line",
            "color": [0, 0, 0, 1],
            "width": ["exponential", 10, 0.5, 0.2, 1],
            "enabled": ["min", 14.5 ]
        }, {
            "data": "road_large",
            "type": "line",
            "color": "road",
            "width": ["exponential", 8, -1, 0.2, 1]
        }, {
            "data": "road_regular",
            "type": "line",
            "color": "road",
            "width": ["exponential", 10, -1, 0.2, 1]
        },
        // {
        //     "data": "borders",
        //     "type": "line",
        //     "color": [0,0,0,1],
        //     "width": 1
       {
           "data": "country_label",
           "type": "text",
           "color": "#000000",
           "width": 2
       }
    ]
};
