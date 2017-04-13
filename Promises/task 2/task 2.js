var promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
});

promise.then(() => {
    window.location.replace("http://telerikacademy.com/");
});
