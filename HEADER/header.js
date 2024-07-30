function responsiveTopNav() {
    var x = document.getElementById("navlist");
    if (x.className === "navlist") {
        x.className += " responsive";
    } else {
        x.className = "navlist";
    }
}