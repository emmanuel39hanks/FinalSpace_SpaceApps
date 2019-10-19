let wwd = new WorldWind.WorldWindow("canvasOne");

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

// Create and add a compass and view controls.
wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

// Update the display.
wwd.redraw();

let btnHeatDay = document.getElementById("btnHeatDay");
let show = document.getElementById("show");
let header1 = document.getElementById("header1");
let colors = document.getElementById("colors");
btnHeatDay.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MOD_LSTD_CLIM_M";

    let createLayer = function (xmlDom) {
        let wms = new WorldWind.WmsCapabilities(xmlDom);
        let wmsLayerCapabilities = wms.getNamedLayer(layerName);
        let wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        let wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    let logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
        " exception: " + exception);
    };
    show.innerHTML = `Land surface temperature is how hot the ground feels to the touch. If you want to know whether temperatures at some place at a specific time of year are unusually warm or cold, you need to compare them to the average temperatures for that place over many years. These maps show the average weekly or monthly daytime land surface temperatures for 2001-2010.`;
    header1.innerHTML = `What do the colors mean?`;
    colors.innerHTML = `The colors on these maps represent temperature patterns of the top millimeter (or “skin”) of the land surface — including bare land, snow or ice cover, urban areas, and cropland or forest canopy — as observed by MODIS in clear-sky conditions for the time period indicated. Yellow shows the warmest temperatures (up to 45°C) and light blue shows the coldest temperatures (down to -25°C). Black means “no data.”`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})

let btnHeatNight = document.getElementById("btnHeatNight");

btnHeatNight.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MOD_LSTN_CLIM_M";

    let createLayer = function (xmlDom) {
        let wms = new WorldWind.WmsCapabilities(xmlDom);
        let wmsLayerCapabilities = wms.getNamedLayer(layerName);
        let wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        let wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    let logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
        " exception: " + exception);
    };
    show.innerHTML = `Land surface temperature is how hot the ground feels to the touch. If you want to know whether temperatures at some place at a specific time of year are unusually warm or cold, you need to compare them to the average temperatures for that place over many years. These maps show the average weekly or monthly daytime land surface temperatures for 2001-2010.`;
    header1.innerHTML = `What do the colors mean?`;
    colors.innerHTML = `The colors on these maps represent temperature patterns of the top millimeter (or “skin”) of the land surface — including bare land, snow or ice cover, urban areas, and cropland or forest canopy — as observed by MODIS in clear-sky conditions for the time period indicated. Yellow shows the warmest temperatures (up to 45°C) and light blue shows the coldest temperatures (down to -25°C). Black means “no data.”`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})


// Vegetation

let btnVegetationIndex = document.getElementById("btnVegetationIndex");

btnVegetationIndex.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MOD_NDVI_M";

    let createLayer = function (xmlDom) {
        let wms = new WorldWind.WmsCapabilities(xmlDom);
        let wmsLayerCapabilities = wms.getNamedLayer(layerName);
        let wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        let wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    let logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
        " exception: " + exception);
    };
    show.innerHTML = `Our lives depend upon plants and trees. They feed us and give us clothes. They absorb carbon dioxide and give off oxygen we need to breathe. Plants even provide many of our medicines and building materials. So when the plants and trees around us change, these changes can affect our health, our environment, and our economy. For these reasons, and more, scientists monitor plant life around the world. Today, scientists use NASA satellites to map the "greenness" of all Earth's lands. These vegetation index maps show where and how much green leaf vegetation was growing for the time period shown.`;
    header1.innerHTML = `What do the colors mean?`;
    colors.innerHTML = `Dark green areas show where there was a lot of green leaf growth; light greens show where there was some green leaf growth; and tan areas show little or no growth. Black means "no data."`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})

// Population

let btnPopulation = document.getElementById("btnPopulation");

btnPopulation.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "SEDAC_POP";

    let createLayer = function (xmlDom) {
        let wms = new WorldWind.WmsCapabilities(xmlDom);
        let wmsLayerCapabilities = wms.getNamedLayer(layerName);
        let wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        let wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    let logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
        " exception: " + exception);
    };
    show.innerHTML = `This map shows how many people live in different areas on Earth. The map is divided into numerous small boxes, called "grids." Each grid box is about 1 kilometer long by one kilometer wide, and it is color coded to show how many people live there. Lighter areas have fewer people. The red dots scattered across most countries show cities, where many people live in a small area.`
    header1.innerHTML = "";
    colors.innerHTML = "";
    $.get(serviceAddress).done(createLayer).fail(logError);

})

// Sea Surface

let btnSeaSurface = document.getElementById("btnSeaSurface");

btnSeaSurface.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MYD28M";

    let createLayer = function (xmlDom) {
        let wms = new WorldWind.WmsCapabilities(xmlDom);
        let wmsLayerCapabilities = wms.getNamedLayer(layerName);
        let wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        let wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    let logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
        " exception: " + exception);
    };
    
    show.innerHTML = `Sea surface temperature is the temperature of the top millimeter of the ocean's surface. Sea surface temperatures influence weather, including hurricanes, as well as plant and animal life in the ocean. Like Earth's land surface, sea surface temperatures are warmer near the equator and colder near the poles. Currents like giant rivers move warm and cold water around the world's oceans. Some of these currents flow on the surface, and they are obvious in sea surface temperature images.
    Warm ocean waters help form clouds and affect weather patterns. The sea's surface temperature is also correlated to the availability of tiny ocean plants, called phytoplankton. For all of these reasons scientists monitor the sea's surface temperature. These maps show satellite measurements of the sea's surface temperature for a given day, or for a span of days.`;
    header1.innerHTML = "";
    colors.innerHTML = "";
    $.get(serviceAddress).done(createLayer).fail(logError);

})