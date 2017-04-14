var promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("http://telerikacademy.com/");
    }, 2000);
});

promise.then((value) => {
    window.location.replace(value);
});
