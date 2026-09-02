const map = L.map("map", {
    zoomControl: false
}).setView([41.3874, 2.1686], 13);


// =========================
// MAP TILES
// =========================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap"
    }
).addTo(map);


// =========================
// PRICE MARKER
// =========================

function addPriceMarker(latitude, longitude, price) {

    const priceIcon = L.divIcon({

        className: "custom-price-marker",

        html: `
            <div class="price-marker">
                ${price}
            </div>
        `,

        iconSize: [80, 35],

        iconAnchor: [40, 35]

    });

    L.marker(
        [latitude, longitude],
        {
            icon: priceIcon
        }
    ).addTo(map);
}


// =========================
// HOTELS / PRICES
// =========================

addPriceMarker(41.405, 2.135, "$980");

addPriceMarker(41.410, 2.155, "$850");

addPriceMarker(41.405, 2.185, "$1,230 ♥");

addPriceMarker(41.397, 2.170, "$1,140");

addPriceMarker(41.390, 2.205, "$1,460");

addPriceMarker(41.385, 2.145, "$1,010");

addPriceMarker(41.375, 2.180, "$1,080 ♥");

addPriceMarker(41.375, 2.205, "$1,395");

addPriceMarker(41.365, 2.220, "$1,500 ♥");

addPriceMarker(41.355, 2.120, "$700");

addPriceMarker(41.365, 2.155, "$1,325");

addPriceMarker(41.395, 2.150, "$1,740");

addPriceMarker(41.380, 2.165, "$1,640");

addPriceMarker(41.400, 2.200, "$1,035 ♥");


// =========================
// ZOOM IN
// =========================

document.getElementById("zoomIn").addEventListener(
    "click",
    function () {

        map.zoomIn();

    }
);


// =========================
// ZOOM OUT
// =========================

document.getElementById("zoomOut").addEventListener(
    "click",
    function () {

        map.zoomOut();

    }
);


// =========================
// FIX MAP SIZE
// =========================

setTimeout(function () {

    map.invalidateSize();
ٍ