var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Landuse_2 = new ol.format.GeoJSON();
var features_Landuse_2 = format_Landuse_2.readFeatures(json_Landuse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_2.addFeatures(features_Landuse_2);
var lyr_Landuse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landuse_2, 
                style: style_Landuse_2,
                popuplayertitle: 'Landuse',
                interactive: true,
    title: 'Landuse<br />\
    <img src="styles/legend/Landuse_2_0.png" /> Administrative<br />\
    <img src="styles/legend/Landuse_2_1.png" /> Agriculture<br />\
    <img src="styles/legend/Landuse_2_2.png" /> Commercial<br />\
    <img src="styles/legend/Landuse_2_3.png" /> Forest<br />\
    <img src="styles/legend/Landuse_2_4.png" /> Manufucturing & Storagel<br />\
    <img src="styles/legend/Landuse_2_5.png" /> Mixed Residential<br />\
    <img src="styles/legend/Landuse_2_6.png" /> Pure Residential<br />\
    <img src="styles/legend/Landuse_2_7.png" /> Recreational<br />\
    <img src="styles/legend/Landuse_2_8.png" /> Services<br />\
    <img src="styles/legend/Landuse_2_9.png" /> Special Function<br />\
    <img src="styles/legend/Landuse_2_10.png" /> Transport<br />' });
var format_The_Most_Suitable_2_3 = new ol.format.GeoJSON();
var features_The_Most_Suitable_2_3 = format_The_Most_Suitable_2_3.readFeatures(json_The_Most_Suitable_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_The_Most_Suitable_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_The_Most_Suitable_2_3.addFeatures(features_The_Most_Suitable_2_3);
var lyr_The_Most_Suitable_2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_The_Most_Suitable_2_3, 
                style: style_The_Most_Suitable_2_3,
                popuplayertitle: 'The_Most_Suitable_2',
                interactive: true,
                title: '<img src="styles/legend/The_Most_Suitable_2_3.png" /> The_Most_Suitable_2'
            });
var format_Buildings_4 = new ol.format.GeoJSON();
var features_Buildings_4 = format_Buildings_4.readFeatures(json_Buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_4.addFeatures(features_Buildings_4);
var lyr_Buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_4, 
                style: style_Buildings_4,
                popuplayertitle: 'Buildings',
                interactive: true,
    title: 'Buildings<br />\
    <img src="styles/legend/Buildings_4_0.png" /> <br />\
    <img src="styles/legend/Buildings_4_1.png" /> <br />\
    <img src="styles/legend/Buildings_4_2.png" /> <br />' });
var format_Road_5 = new ol.format.GeoJSON();
var features_Road_5 = format_Road_5.readFeatures(json_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_5.addFeatures(features_Road_5);
var lyr_Road_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_5, 
                style: style_Road_5,
                popuplayertitle: 'Road',
                interactive: true,
    title: 'Road<br />\
    <img src="styles/legend/Road_5_0.png" /> Asphalt<br />\
    <img src="styles/legend/Road_5_1.png" /> Gravel<br />' });
var format_Streams_6 = new ol.format.GeoJSON();
var features_Streams_6 = format_Streams_6.readFeatures(json_Streams_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_6.addFeatures(features_Streams_6);
var lyr_Streams_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_6, 
                style: style_Streams_6,
                popuplayertitle: 'Streams',
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_6_0.png" /> B_RIVER<br />\
    <img src="styles/legend/Streams_6_1.png" /> L_STREAM<br />' });
var format_Existing_HealthFacility_7 = new ol.format.GeoJSON();
var features_Existing_HealthFacility_7 = format_Existing_HealthFacility_7.readFeatures(json_Existing_HealthFacility_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Existing_HealthFacility_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Existing_HealthFacility_7.addFeatures(features_Existing_HealthFacility_7);
cluster_Existing_HealthFacility_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Existing_HealthFacility_7
});
var lyr_Existing_HealthFacility_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Existing_HealthFacility_7,
maxResolution:70.0111653806549,
 
                style: style_Existing_HealthFacility_7,
                popuplayertitle: 'Existing_Health Facility',
                interactive: true,
    title: 'Existing_Health Facility<br />\
    <img src="styles/legend/Existing_HealthFacility_7_0.png" /> Hospital<br />\
    <img src="styles/legend/Existing_HealthFacility_7_1.png" /> Specialty Center<br />\
    <img src="styles/legend/Existing_HealthFacility_7_2.png" /> Specialty Clinic<br />\
    <img src="styles/legend/Existing_HealthFacility_7_3.png" /> Health Center<br />\
    <img src="styles/legend/Existing_HealthFacility_7_4.png" /> Clinic<br />\
    <img src="styles/legend/Existing_HealthFacility_7_5.png" /> Pharmacy<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Landuse_2.setVisible(true);lyr_The_Most_Suitable_2_3.setVisible(true);lyr_Buildings_4.setVisible(true);lyr_Road_5.setVisible(true);lyr_Streams_6.setVisible(true);lyr_Existing_HealthFacility_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Landuse_2,lyr_The_Most_Suitable_2_3,lyr_Buildings_4,lyr_Road_5,lyr_Streams_6,lyr_Existing_HealthFacility_7];
lyr_Landuse_2.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_The_Most_Suitable_2_3.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID': 'OBJECTID', 'Suitablit': 'Suitablit', });
lyr_Buildings_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ZONE_': 'ZONE_', 'WOREDA': 'WOREDA', 'KEBELE': 'KEBELE', 'CODE_BID': 'CODE_BID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Road_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Meters': 'Meters', 'Oneway': 'Oneway', 'TF_Minutes': 'TF_Minutes', 'FT_Minutes': 'FT_Minutes', 'Road_Name': 'Road_Name', 'Road_Type': 'Road_Type', });
lyr_Streams_6.set('fieldAliases', {});
lyr_Existing_HealthFacility_7.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude': 'Altitude', 'Ownership': 'Ownership', 'Type': 'Type', 'admin3Name': 'admin3Name', 'admin2Name': 'admin2Name', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'City': 'City', 'Kebele': 'Kebele', 'Status': 'Status', });
lyr_Landuse_2.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_The_Most_Suitable_2_3.set('fieldImages', {'ZONE_': '', 'LUSE_CODE': '', 'Use_Type': '', 'AREA': '', 'WOREDA': '', 'Shape_Leng': '', 'Shape_Area': '', 'OBJECTID': '', 'Suitablit': '', });
lyr_Buildings_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ZONE_': 'Range', 'WOREDA': 'Range', 'KEBELE': 'Range', 'CODE_BID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Road_5.set('fieldImages', {'OBJECTID': 'Range', 'Id': 'Range', 'Shape_Leng': 'TextEdit', 'Meters': 'TextEdit', 'Oneway': 'TextEdit', 'TF_Minutes': 'TextEdit', 'FT_Minutes': 'TextEdit', 'Road_Name': 'TextEdit', 'Road_Type': 'TextEdit', });
lyr_Streams_6.set('fieldImages', {});
lyr_Existing_HealthFacility_7.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Altitude': 'TextEdit', 'Ownership': 'TextEdit', 'Type': 'TextEdit', 'admin3Name': 'TextEdit', 'admin2Name': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'City': 'TextEdit', 'Kebele': 'TextEdit', 'Status': 'TextEdit', });
lyr_Landuse_2.set('fieldLabels', {'ZONE_': 'hidden field', 'LUSE_CODE': 'hidden field', 'Use_Type': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'hidden field', 'WOREDA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_The_Most_Suitable_2_3.set('fieldLabels', {'ZONE_': 'hidden field', 'LUSE_CODE': 'hidden field', 'Use_Type': 'hidden field', 'AREA': 'inline label - always visible', 'WOREDA': 'header label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBJECTID': 'hidden field', 'Suitablit': 'inline label - always visible', });
lyr_Buildings_4.set('fieldLabels', {'AREA': 'inline label - always visible', 'PERIMETER': 'hidden field', 'ZONE_': 'inline label - always visible', 'WOREDA': 'inline label - always visible', 'KEBELE': 'hidden field', 'CODE_BID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Road_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'Shape_Leng': 'hidden field', 'Meters': 'hidden field', 'Oneway': 'hidden field', 'TF_Minutes': 'hidden field', 'FT_Minutes': 'hidden field', 'Road_Name': 'inline label - always visible', 'Road_Type': 'inline label - always visible', });
lyr_Streams_6.set('fieldLabels', {});
lyr_Existing_HealthFacility_7.set('fieldLabels', {'Id': 'hidden field', 'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Altitude': 'hidden field', 'Ownership': 'inline label - always visible', 'Type': 'inline label - always visible', 'admin3Name': 'hidden field', 'admin2Name': 'hidden field', 'admin1Name': 'hidden field', 'admin1Pcod': 'hidden field', 'City': 'hidden field', 'Kebele': 'hidden field', 'Status': 'hidden field', });
lyr_Existing_HealthFacility_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});