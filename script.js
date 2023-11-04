document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to collapsible headers
    var collapsibles = document.querySelectorAll(".collapsible-header");
    collapsibles.forEach(function (header) {
        header.addEventListener("click", function () {
            var sublist = this.parentNode.querySelector(".sublist");
            sublist.style.display = sublist.style.display === "none" ? "block" : "none";
        });
    });
});
