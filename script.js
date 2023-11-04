document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to expand/collapse list items
    var expandLinks = document.querySelectorAll(".expand");
    expandLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            var sublist = this.nextElementSibling;
            sublist.style.display = sublist.style.display === "none" ? "block" : "none";
        });
    });
});
