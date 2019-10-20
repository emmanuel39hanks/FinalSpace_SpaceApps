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

// Radiation

let btnRadiation = document.getElementById("btnRadiation");

btnRadiation.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "CERES_LWFLUX_M";

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
    
    show.innerHTML = `Light energy travels in waves, but not all the waves are the same. The kind of light our eyes can see is only a tiny part of the energy that exists in the universe. Other kinds of energy are invisible, like the energy that makes our hands feel warm when we hold them over a fire, or the energy that cooks our food in the microwave. When Earth absorbs sunlight, it heats up. The heat, or "outgoing longwave radiation," radiates back into space. Satellites measure this radiation as it leaves the top of Earth's atmosphere. The hotter a place is, the more energy it radiates.`;
    header1.innerHTML = `What do the colors mean?`;
    colors.innerHTML = `The colors in these maps show the amount of outgoing longwave radiation leaving Earth's atmosphere (in Watts per square meter) for the given time period(s). Bright yellow and orange indicate greater heat emission, purple and blue indicate intermediate emissions, and white shows little or no heat emission.`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})

// Active Fires

let btnActiveFires = document.getElementById("btnActiveFires");

btnActiveFires.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MOD14A1_M_FIRE";

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
    
    show.innerHTML = `Fire is a recurring part of nature. Wildfires can be caused by lightning striking a forest canopy or, in a few isolated cases, by lava or hot rocks ejected from erupting volcanoes. Most fires worldwide are started by humans, sometimes accidentally and sometimes on purpose. Not all fires are bad. Fire clears away dead and dying underbrush, which can help restore forest ecosystems to good health. Humans use fire as a tool in slash-and-burn agriculture to speed up the process of breaking down unwanted vegetation into the soil. Humans also use fire to clear away old-growth forests to make room for living spaces, roads, and fields for raising crops and cattle. But not all fires are good. Wildfires can destroy natural resources and human structures. Globally, fire plays a major role in Earth's carbon cycle by releasing carbon into the air, and by consuming trees that would otherwise absorb carbon from the air during photosynthesis. These maps show the locations of actively burning fires around the world, detected by instruments aboard NASA satellites.`;
    header1.innerHTML = "What do the colors mean?";
    colors.innerHTML = "The red, orange, and yellow pixels on these maps show the locations where the MODIS instrument detects actively burning fires. Don't be fooled by sizes of some of the bright splotches on these maps. The colors represent a count of the number of fires observed within a 1,000-square-kilometer area. White pixels show the high end of the count — as many as 30 fires in a 1,000-square-kilometer area per day. Orange pixels show as many as 10 fires while red areas show as few as 1 fire in a 1,000-square-kilometer area per day.";
    $.get(serviceAddress).done(createLayer).fail(logError);

})


// Greenland

let btnGreen = document.getElementById("btnGreen");

btnGreen.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "ICESAT_ELEV_G";

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
    
    show.innerHTML = `The shades on this map show how high above sea level are the land surfaces and ice sheets on Greenland and Antarctica. White shows the highest land and ice surfaces--up to 4,000 meters above sea level. Light blue and dark blue show progressively lower land and ice surfaces. Light blue areas are about 2,000 meters above sea level. Dark blue shows sea level.`;
    header1.innerHTML = "";
    colors.innerHTML = "";
    $.get(serviceAddress).done(createLayer).fail(logError);

})

// Leaf

let btnLeaf = document.getElementById("btnLeaf");

btnLeaf.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MOD15A2_M_LAI";

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
    
    show.innerHTML = `Have you ever flown in a plane over a forest, or seen a picture of a forest canopy taken from above? If so, you probably noticed the forest canopy was colored shades of dark green. The trees' and plants' leaves give the forest its lush green appearance. The more leaves there are in a forested area, the greener the tree canopy. Have you ever wondered how many leaves there are in a forest? Today, scientists use NASA satellites to map leaf area index — images processed to show how much of an area is covered by leaves. For example, a leaf area index of one means the area is entirely covered by one layer of leaves. Knowing the total area covered by leaves helps scientists monitor how much water, carbon, and energy the trees and plants are exchanging with the air above and the ground below.`;
    header1.innerHTML = "What do the colors mean?";
    colors.innerHTML = `The colors in this palette range from tan, showing little or no leaf cover, to light green, indicating the area is entirely covered by one layer of leaves, to dark green showing thick forest canopies, where seven or more layers of leaves cover an area. Black means no data.`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})

// Land Cover

let btnLandCover = document.getElementById("btnLandCover");

btnLandCover.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MCD12C1_T1";

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
    
    show.innerHTML = `Maps help us understand where things are. Scientists use satellites to make maps of many different things on Earth to help them understand our world and how our world is changing. Judging by what the land surface looks like, scientists organized Earth into 17 different categories. Some examples of different types of land surface are cities, farm lands, forests, deserts, and so forth. Using satellite observations, scientists mapped where on Earth each of these 17 land surface categories can be found. The different colors on this map show the locations of each type of land surface. Scientists are monitoring how these land cover types change over time.`;
    header1.innerHTML = "";
    colors.innerHTML = ``;
    $.get(serviceAddress).done(createLayer).fail(logError);

})


// Sea Ice

let btnSeaIce = document.getElementById("btnSeaIce");

btnSeaIce.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MCD12C1_T1";

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
    
    show.innerHTML = `The colors on this collection of maps show where the land and ocean was covered by snow and ice during the period shown. If you browse through these maps you will notice that sea ice (light blue) and snow cover (white) extents change as the seasons change. Two exceptions to this rule are the large island of Greenland, in the North Atlantic Ocean, and the continent of Antarctica. Most of Greenland and Antarctica are covered by a thick, permanent layer of snow and ice. Scientists measure how much of our world is covered by snow and ice to help them better understand and predict changes in Earth's weather and climate.`;
    header1.innerHTML = "What do the colors mean?";
    colors.innerHTML = `The white areas on these maps show where Earth's lands were covered by snow for the time period indicated. The light blue areas show where Earth's oceans were covered by ice. Green areas show lands with no snow cover and black areas show oceans with no ice cover.`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})


// Snow Cover

let btnSnow = document.getElementById("btnSnow");

btnSnow.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "MOD10C1_M_SNOW";

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
    
    show.innerHTML = `When air temperature falls below freezing (0°Celsius), the water droplets in clouds harden into ice crystals. Such crystals may grow into large, lacey snowflakes; or they may stick together to form odd-shaped clusters of ice crystals. When they grow heavy enough, the ice crystals fall to the ground as snow. If the ground temperature is also below freezing, the snow can build up into a bright white blanket covering the surface. Snow cover is an important part of Earth's environment. Because it reflects most of the sunlight that hits it, snow helps to cool Earth's surface. Many areas of the world rely on snowmelt for drinking water and water for their crops. So scientists monitor where and how much of Earth's landscape is covered by snow.`;
    header1.innerHTML = "What do the colors mean?";
    colors.innerHTML = `In these maps, the white areas show lands that were completely snow-covered on the dates shown. The light blue shades show regions in which there was only partial snow cover.`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})

// Net Radiation
let btnNetRadiation = document.getElementById("btnNetRadiation");

btnNetRadiation.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "CERES_NETFLUX_M";

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
    
    show.innerHTML = `Every day, the Sun shines on Earth. Ice and snow and bright white clouds reflect some light back into space. The rest of the light is absorbed by the atmosphere, land surfaces and oceans, and this absorption keeps Earth warm. Like other warm objects, Earth emits heat into space. The difference between how much solar energy enters the Earth system and how much heat energy escapes into space is called "net radiation." Some places absorb more energy than they give off back to space, so they have an energy surplus. Other places lose more energy to space than they absorb, so they have an energy deficit.`;
    header1.innerHTML = "What do the colors mean?";
    colors.innerHTML = `The colors in these maps show the net radiation (in Watts per square meter) that was contained in the Earth system for the given time period. The maps illustrate the fundamental imbalance between net radiation surpluses at the equator (green areas), where sunlight is direct year-round, and net radiation deficits at high latitudes (blue areas), where direct sunlight is seasonal.`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})


// Reflected Shortwave Radiation
let btnShortwave = document.getElementById("btnShortwave");

btnShortwave.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "CERES_SWFLUX_M";

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
    
    show.innerHTML = `If you look at Mars in the night sky, the planet is little more than a glowing dot. From Mars, Earth would have the same star-like appearance. What gives the planets this light? Do they shine like a star? No. The light is mostly reflected sunlight. These images show how much sunlight Earth reflects. Bright parts of Earth like snow, ice, and clouds, reflect the most light; dark surfaces, like the oceans, reflect less light. Earth's average temperature is determined by the balance between how much sunlight Earth reflects, how much it absorbs, and how much heat it gives off.`;
    header1.innerHTML = "What do the colors mean?";
    colors.innerHTML = `The colors in the map show the amount of shortwave energy (in Watts per square meter) that was reflected by the Earth system for the given time period(s). The brighter, whiter regions show where more sunlight is reflected, while green regions show intermediate values, and blue regions are lower values.`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})



// Solar
let btnSolar = document.getElementById("btnSolar");

btnSolar.addEventListener('click', event => {
        
    let modelLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(modelLayer);

    let serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    let layerName = "CERES_INSOL_M";

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
    
    show.innerHTML = `These maps show where and how much sunlight fell on Earth's surface during the time period indicated. Scientists call this measure solar insolation. Knowing how much of the Sun's energy reaches the surface helps scientists understand weather and climate patterns as well as patterns of plant growth around our world. Solar insolation maps are also useful to engineers who design solar panels and batteries designed to convert energy from the Sun into electricity to power appliances in our homes and work places.`;
    header1.innerHTML = "What do the colors mean?";
    colors.innerHTML = `The colors in these maps show how much sunlight (in Watts per square meter) fell on the Earth's surface during the given time period.`;
    $.get(serviceAddress).done(createLayer).fail(logError);

})