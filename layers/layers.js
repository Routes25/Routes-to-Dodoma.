ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([29.437399, -10.566914, 39.524582, -3.592197]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_countr_border_2 = new ol.format.GeoJSON();
var features_countr_border_2 = format_countr_border_2.readFeatures(json_countr_border_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_countr_border_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_countr_border_2.addFeatures(features_countr_border_2);
var lyr_countr_border_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_countr_border_2, 
                style: style_countr_border_2,
                popuplayertitle: "countr_border",
                interactive: false,
                title: '<img src="styles/legend/countr_border_2.png" /> countr_border'
            });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_3.png" /> Road'
            });
var format_District_Office_4 = new ol.format.GeoJSON();
var features_District_Office_4 = format_District_Office_4.readFeatures(json_District_Office_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_District_Office_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_Office_4.addFeatures(features_District_Office_4);
var lyr_District_Office_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_Office_4, 
                style: style_District_Office_4,
                popuplayertitle: "District_Office",
                interactive: true,
                title: '<img src="styles/legend/District_Office_4.png" /> District_Office'
            });
var format_HQ_5 = new ol.format.GeoJSON();
var features_HQ_5 = format_HQ_5.readFeatures(json_HQ_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HQ_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HQ_5.addFeatures(features_HQ_5);
var lyr_HQ_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HQ_5, 
                style: style_HQ_5,
                popuplayertitle: "H/Q",
                interactive: true,
                title: '<img src="styles/legend/HQ_5.png" /> H/Q'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_countr_border_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_District_Office_4.setVisible(true);lyr_HQ_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRISatellite_1,lyr_countr_border_2,lyr_Road_3,lyr_District_Office_4,lyr_HQ_5];
lyr_countr_border_2.set('fieldAliases', {'country_co': 'country_co', });
lyr_Road_3.set('fieldAliases', {'Name': 'Name', 'Distance': 'Distance', });
lyr_District_Office_4.set('fieldAliases', {'Name': 'Name', });
lyr_HQ_5.set('fieldAliases', {'Name': 'Name', 'x': 'x', 'y': 'y', });
lyr_countr_border_2.set('fieldImages', {'country_co': 'TextEdit', });
lyr_Road_3.set('fieldImages', {'Name': 'TextEdit', 'Distance': 'TextEdit', });
lyr_District_Office_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_HQ_5.set('fieldImages', {'Name': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_countr_border_2.set('fieldLabels', {'country_co': 'no label', });
lyr_Road_3.set('fieldLabels', {'Name': 'no label', 'Distance': 'no label', });
lyr_District_Office_4.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_HQ_5.set('fieldLabels', {'Name': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_HQ_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});