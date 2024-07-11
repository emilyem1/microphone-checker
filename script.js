document.addEventListener("DOMContentLoaded", function() {

    const detected = document.getElementById('detected');
    const undetected = document.getElementById('undetected');

    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        if (stream) {
            detected.style.display = "block";
        } 
    })
    .catch(err => {
        if (err.name === "NotFoundError" || err.name === "NotAllowedError") {
            undetected.style.display = "block";
        } else {
            console.error("Error accessing microphone: " + err.message);
        }
    });

});