var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_jyju_1 = new ol.format.GeoJSON();
var features_jyju_1 = format_jyju_1.readFeatures(json_jyju_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jyju_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jyju_1.addFeatures(features_jyju_1);
var lyr_jyju_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jyju_1, 
                style: style_jyju_1,
                popuplayertitle: 'jyju',
                interactive: true,
    title: 'jyju<br />\
    <img src="styles/legend/jyju_1_0.png" /> Perkebunan / Kebun<br />\
    <img src="styles/legend/jyju_1_1.png" /> Sawah<br />\
    <img src="styles/legend/jyju_1_2.png" /> Semak Belukar / Alang Alang<br />\
    <img src="styles/legend/jyju_1_3.png" /> Tegalan/Ladang<br />\
    <img src="styles/legend/jyju_1_4.png" /> Pemukiman<br />' });
var format_JNPerRuas_2 = new ol.format.GeoJSON();
var features_JNPerRuas_2 = format_JNPerRuas_2.readFeatures(json_JNPerRuas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JNPerRuas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JNPerRuas_2.addFeatures(features_JNPerRuas_2);
var lyr_JNPerRuas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JNPerRuas_2, 
                style: style_JNPerRuas_2,
                popuplayertitle: 'JNPerRuas',
                interactive: true,
                title: '<img src="styles/legend/JNPerRuas_2.png" /> JNPerRuas'
            });
var format_JNPerB_3 = new ol.format.GeoJSON();
var features_JNPerB_3 = format_JNPerB_3.readFeatures(json_JNPerB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JNPerB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JNPerB_3.addFeatures(features_JNPerB_3);
var lyr_JNPerB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JNPerB_3, 
                style: style_JNPerB_3,
                popuplayertitle: 'JNPerB',
                interactive: true,
                title: '<img src="styles/legend/JNPerB_3.png" /> JNPerB'
            });
var format_ABMJJNas_4 = new ol.format.GeoJSON();
var features_ABMJJNas_4 = format_ABMJJNas_4.readFeatures(json_ABMJJNas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABMJJNas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABMJJNas_4.addFeatures(features_ABMJJNas_4);
var lyr_ABMJJNas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABMJJNas_4, 
                style: style_ABMJJNas_4,
                popuplayertitle: 'ABMJJNas',
                interactive: true,
                title: '<img src="styles/legend/ABMJJNas_4.png" /> ABMJJNas'
            });
var format_ABMJJProv_5 = new ol.format.GeoJSON();
var features_ABMJJProv_5 = format_ABMJJProv_5.readFeatures(json_ABMJJProv_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABMJJProv_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABMJJProv_5.addFeatures(features_ABMJJProv_5);
var lyr_ABMJJProv_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABMJJProv_5, 
                style: style_ABMJJProv_5,
                popuplayertitle: 'ABMJJProv',
                interactive: true,
                title: '<img src="styles/legend/ABMJJProv_5.png" /> ABMJJProv'
            });
var format_fer_6 = new ol.format.GeoJSON();
var features_fer_6 = format_fer_6.readFeatures(json_fer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fer_6.addFeatures(features_fer_6);
var lyr_fer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fer_6, 
                style: style_fer_6,
                popuplayertitle: 'fer',
                interactive: true,
    title: 'fer<br />\
    <img src="styles/legend/fer_6_0.png" /> Bangunan<br />\
    <img src="styles/legend/fer_6_1.png" /> Situs<br />\
    <img src="styles/legend/fer_6_2.png" /> Struktur<br />\
    <img src="styles/legend/fer_6_3.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_jyju_1.setVisible(true);lyr_JNPerRuas_2.setVisible(true);lyr_JNPerB_3.setVisible(true);lyr_ABMJJNas_4.setVisible(true);lyr_ABMJJProv_5.setVisible(true);lyr_fer_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_jyju_1,lyr_JNPerRuas_2,lyr_JNPerB_3,lyr_ABMJJNas_4,lyr_ABMJJProv_5,lyr_fer_6];
lyr_jyju_1.set('fieldAliases', {'FID_tes': 'FID_tes', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'FID_tws': 'FID_tws', 'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ_1': 'NAMOBJ_1', 'FCODE_1': 'FCODE_1', 'REMARK_1': 'REMARK_1', 'METADATA_1': 'METADATA_1', 'SRS_ID_1': 'SRS_ID_1', 'KDBBPS_1': 'KDBBPS_1', 'KDCBPS_1': 'KDCBPS_1', 'KDCPUM_1': 'KDCPUM_1', 'KDEBPS_1': 'KDEBPS_1', 'KDEPUM_1': 'KDEPUM_1', 'KDPBPS_1': 'KDPBPS_1', 'KDPKAB_1': 'KDPKAB_1', 'KDPPUM_1': 'KDPPUM_1', 'LUASWH_1': 'LUASWH_1', 'TIPADM_1': 'TIPADM_1', 'WADMKC_1': 'WADMKC_1', 'WADMKD_1': 'WADMKD_1', 'WADMKK_1': 'WADMKK_1', 'WADMPR_1': 'WADMPR_1', 'WIADKC_1': 'WIADKC_1', 'WIADKK_1': 'WIADKK_1', 'WIADPR_1': 'WIADPR_1', 'WIADKD_1': 'WIADKD_1', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', 'KLSAGR': 'KLSAGR', 'SPESIS': 'SPESIS', 'KRAPAT': 'KRAPAT', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'GLOBALID': 'GLOBALID', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_JNPerRuas_2.set('fieldAliases', {'fid_1': 'fid_1', 'kd_ruas': 'kd_ruas', 'nm_ruas': 'nm_ruas', 'status': 'status', 'fungsi': 'fungsi', 'provinsi': 'provinsi', 'panjang': 'panjang', 'lebar_avg': 'lebar_avg', });
lyr_JNPerB_3.set('fieldAliases', {'fid_1': 'fid_1', 'nbalai2020': 'nbalai2020', 'sum_panjan': 'sum_panjan', });
lyr_ABMJJNas_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PANJANG': 'PANJANG', 'RUAS': 'RUAS', 'STATUS': 'STATUS', 'FUNCT': 'FUNCT', 'LENGTH': 'LENGTH', 'MST10': 'MST10', 'RCSYR': 'RCSYR', 'LINKNAME': 'LINKNAME', 'MST': 'MST', 'PROVINSI': 'PROVINSI', });
lyr_ABMJJProv_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'KEYIRMS': 'KEYIRMS', 'NOMOR': 'NOMOR', 'FUNGSI': 'FUNGSI', 'STATUS': 'STATUS', 'RUAS': 'RUAS', 'PANJANG': 'PANJANG', 'KODEPROV': 'KODEPROV', 'PROVINSI': 'PROVINSI', 'LIN_PU_SUM': 'LIN_PU_SUM', 'LINTAS_3': 'LINTAS_3', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'NAMA_SK': 'NAMA_SK', 'PJG_SK': 'PJG_SK', 'STAT09': 'STAT09', 'KONDISI': 'KONDISI', 'SHAPE_LENG': 'SHAPE_LENG', 'VIDEO': 'VIDEO', });
lyr_fer_6.set('fieldAliases', {'nm_objekcb': 'nm_objekcb', 'nm_kategor': 'nm_kategor', 'slug_kateg': 'slug_kateg', 'deskripsi': 'deskripsi', 'district': 'district', 'province': 'province', });
lyr_jyju_1.set('fieldImages', {'FID_tes': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'FID_tws': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'NAMOBJ_1': 'TextEdit', 'FCODE_1': 'TextEdit', 'REMARK_1': 'TextEdit', 'METADATA_1': 'TextEdit', 'SRS_ID_1': 'TextEdit', 'KDBBPS_1': 'TextEdit', 'KDCBPS_1': 'TextEdit', 'KDCPUM_1': 'TextEdit', 'KDEBPS_1': 'TextEdit', 'KDEPUM_1': 'TextEdit', 'KDPBPS_1': 'TextEdit', 'KDPKAB_1': 'TextEdit', 'KDPPUM_1': 'TextEdit', 'LUASWH_1': 'TextEdit', 'TIPADM_1': 'TextEdit', 'WADMKC_1': 'TextEdit', 'WADMKD_1': 'TextEdit', 'WADMKK_1': 'TextEdit', 'WADMPR_1': 'TextEdit', 'WIADKC_1': 'TextEdit', 'WIADKK_1': 'TextEdit', 'WIADPR_1': 'TextEdit', 'WIADKD_1': 'Range', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Ar_1': 'TextEdit', 'KLSAGR': 'TextEdit', 'SPESIS': 'TextEdit', 'KRAPAT': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'GLOBALID': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_JNPerRuas_2.set('fieldImages', {'fid_1': '', 'kd_ruas': '', 'nm_ruas': '', 'status': '', 'fungsi': '', 'provinsi': '', 'panjang': '', 'lebar_avg': '', });
lyr_JNPerB_3.set('fieldImages', {'fid_1': '', 'nbalai2020': '', 'sum_panjan': '', });
lyr_ABMJJNas_4.set('fieldImages', {'OBJECTID': '', 'PANJANG': '', 'RUAS': '', 'STATUS': '', 'FUNCT': '', 'LENGTH': '', 'MST10': '', 'RCSYR': '', 'LINKNAME': '', 'MST': '', 'PROVINSI': '', });
lyr_ABMJJProv_5.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID_2': '', 'OBJECTID': '', 'KEYIRMS': '', 'NOMOR': '', 'FUNGSI': '', 'STATUS': '', 'RUAS': '', 'PANJANG': '', 'KODEPROV': '', 'PROVINSI': '', 'LIN_PU_SUM': '', 'LINTAS_3': '', 'X_COORD': '', 'Y_COORD': '', 'NAMA_SK': '', 'PJG_SK': '', 'STAT09': '', 'KONDISI': '', 'SHAPE_LENG': '', 'VIDEO': '', });
lyr_fer_6.set('fieldImages', {'nm_objekcb': 'TextEdit', 'nm_kategor': 'TextEdit', 'slug_kateg': 'TextEdit', 'deskripsi': 'TextEdit', 'district': 'TextEdit', 'province': 'TextEdit', });
lyr_jyju_1.set('fieldLabels', {'FID_tes': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'FID_tws': 'no label', 'OBJECTID_1': 'no label', 'NAMOBJ_1': 'no label', 'FCODE_1': 'no label', 'REMARK_1': 'inline label - visible with data', 'METADATA_1': 'no label', 'SRS_ID_1': 'no label', 'KDBBPS_1': 'no label', 'KDCBPS_1': 'no label', 'KDCPUM_1': 'no label', 'KDEBPS_1': 'no label', 'KDEPUM_1': 'no label', 'KDPBPS_1': 'no label', 'KDPKAB_1': 'no label', 'KDPPUM_1': 'no label', 'LUASWH_1': 'no label', 'TIPADM_1': 'no label', 'WADMKC_1': 'no label', 'WADMKD_1': 'no label', 'WADMKK_1': 'no label', 'WADMPR_1': 'no label', 'WIADKC_1': 'no label', 'WIADKK_1': 'no label', 'WIADPR_1': 'no label', 'WIADKD_1': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Ar_1': 'no label', 'KLSAGR': 'no label', 'SPESIS': 'no label', 'KRAPAT': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'GLOBALID': 'no label', 'SHAPE_LEN': 'no label', });
lyr_JNPerRuas_2.set('fieldLabels', {'fid_1': 'no label', 'kd_ruas': 'no label', 'nm_ruas': 'no label', 'status': 'no label', 'fungsi': 'no label', 'provinsi': 'no label', 'panjang': 'no label', 'lebar_avg': 'no label', });
lyr_JNPerB_3.set('fieldLabels', {'fid_1': 'no label', 'nbalai2020': 'no label', 'sum_panjan': 'no label', });
lyr_ABMJJNas_4.set('fieldLabels', {'OBJECTID': 'no label', 'PANJANG': 'no label', 'RUAS': 'no label', 'STATUS': 'no label', 'FUNCT': 'no label', 'LENGTH': 'no label', 'MST10': 'no label', 'RCSYR': 'no label', 'LINKNAME': 'no label', 'MST': 'no label', 'PROVINSI': 'no label', });
lyr_ABMJJProv_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'KEYIRMS': 'no label', 'NOMOR': 'no label', 'FUNGSI': 'no label', 'STATUS': 'no label', 'RUAS': 'no label', 'PANJANG': 'no label', 'KODEPROV': 'no label', 'PROVINSI': 'no label', 'LIN_PU_SUM': 'no label', 'LINTAS_3': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'NAMA_SK': 'no label', 'PJG_SK': 'no label', 'STAT09': 'no label', 'KONDISI': 'no label', 'SHAPE_LENG': 'no label', 'VIDEO': 'no label', });
lyr_fer_6.set('fieldLabels', {'nm_objekcb': 'header label - visible with data', 'nm_kategor': 'no label', 'slug_kateg': 'no label', 'deskripsi': 'no label', 'district': 'no label', 'province': 'no label', });
lyr_fer_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});