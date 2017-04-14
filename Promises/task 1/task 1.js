var mapDiv = document.getElementById("map");
var p = document.getElementById("msg");
var coordsObj;

var promise = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(location => {
            coordsObj = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            };
            resolve(coordsObj);
        }, (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    reject("Grant permission to get the location!");
                    break;
                case error.POSITION_UNAVAILABLE:
                    reject("Unavaillable!");
                    break;
                case error.TIMEOUT:
                    reject("The code took too much time to process!");
                    break;
                case error.UNKNOWN_ERROR:
                    reject("An unknown error occurred.");
                    break;
            }
        });
    }
    else {
        reject("Please update your browser to support geolocation.");
    }
});

promise.then(value => {
    showPosition(value);
},
    value => {
        p.innerHTML = value;
    });

function showPosition(position) {
    var latLonString = position.latitude + "," + position.longitude;

    var imgHref = "https://maps.googleapis.com/maps/api/staticmap?center="
        + latLonString + "&zoom=14&size=400x300&sensor=false&key=AIzaSyDCIONKZUw8jsxtdS_ISoZe6tGZOtEwdWY"; //my key AIzaSyDCIONKZUw8jsxtdS_ISoZe6tGZOtEwdWY
    mapDiv.innerHTML = "<img src='" + imgHref + "'>";
}