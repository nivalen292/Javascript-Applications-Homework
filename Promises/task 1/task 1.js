var mapDiv = document.getElementById("map");
var p = document.getElementById("msg");

var promise = new Promise((resolve, reject) => {
    resolve();
});

promise.then(value => {
    getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, mapError);
    } else {
        p.innerHTML = "Please update your browser to support location.";
    }
}

function showPosition(position) {
    var latLonString = position.coords.latitude + "," + position.coords.longitude;

    var imgHref = "https://maps.googleapis.com/maps/api/staticmap?center="
    + latLonString +"&zoom=14&size=400x300&sensor=false&key=AIzaSyDCIONKZUw8jsxtdS_ISoZe6tGZOtEwdWY"; //my key AIzaSyDCIONKZUw8jsxtdS_ISoZe6tGZOtEwdWY
    document.getElementById("map").innerHTML = "<img src='" + imgHref + "'>";
}

function mapError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            p.innerHTML = "Grant permission to get the location!";
            break;
        case error.POSITION_UNAVAILABLE:
            p.innerHTML = "Unavaillable!";
            break;
        case error.TIMEOUT:
            p.innerHTML = "The code took too much time to process!";
            break;
    }
}