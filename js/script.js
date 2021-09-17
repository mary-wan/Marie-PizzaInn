let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat:  -1.232667,
            lng: 36.878592
        },
        zoom: 18,
    });
}
