if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then((registration) => {
            console.log("Web App Registration!");
            console.log(registration);
        })
        .catch((error) => {
            console.log("Web App Registration Failed");
            console.log(error);
        });
}
