// Add JavaScript for interactivity
document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".container");
    var colorButton = document.getElementById("colorButton");

    colorButton.addEventListener("click", function () {
        // Change the background color to a random color
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        container.style.backgroundColor = randomColor;
    });
});
