//JAVASCRIPT: UX INTERACTIONS
function doKey(x) {
    if (x.value == "ENTER EVENT NAME") {
        x.style.opacity = ".35";
        x.value = x.value.toUpperCase();
        document.getElementById("footerContainer").className = "footerContainer0";
    }
    else if (x.value == "CITY") {
        x.style.opacity = ".35";
        x.value = x.value.toUpperCase();
        document.getElementById("footerContainer").className = "footerContainer0";
    }
    else if (x.value == "") {
        x.style.opacity = ".35";
        x.value = x.value.toUpperCase();
        document.getElementById("footerContainer").className = "footerContainer0";
    }
    else {
        x.style.opacity = "1";
        x.value = x.value.toUpperCase();
        document.getElementById("footerContainer").className = "footerContainer";
    }
}
function doKey2(x, event) {
    if (x.value == "ENTER EVENT NAME") {
        x.style.opacity = ".35";
        x.value = x.value.toUpperCase();
        document.getElementById("footerContainer").className = "footerContainer0";
    }
    else if (x.value == "CITY") {
        x.style.opacity = ".35";
        x.value = x.value.toUpperCase();
        document.getElementById("footerContainer").className = "footerContainer0";
    }
    else if (x.value == "") {
        x.style.opacity = ".35";
        x.value = x.value.toUpperCase();
        document.getElementById("footerContainer").className = "footerContainer0";
    }
    else {
        x.style.opacity = "1";
        x.value = x.value.toUpperCase();
        if (window.event.keyCode == 13) {
            setTimeout(function () {
                document.getElementById("footerContainer").className = "footerContainer";
            }, 500);
        }
    }
}

function doformtext(x) {
    //x.value = "";
}

function doSetEvent(x) {
    if (x.value == "") {
        x.style.opacity = ".35";
    }
}

function doSetCity(x) {
    if (x.value == "") {
        x.style.opacity = ".35";
    }
}

function doMouseOver(x) {
    x.style.textDecoration = "underline";
}

function doMouseOut(x) {
    x.style.textDecoration = "none";
}

function doMouseOver2(x) {
    x.style.opacity = ".5";
}

function doMouseOut2(x) {
    x.style.opacity = "1";
}

function doOnClick(x) {
    alert(x.toHTML());
}

function doUpper(x) {
    x.value = x.value.toUpperCase();
}