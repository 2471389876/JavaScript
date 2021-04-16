function moveMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    // document.write(xpos);
    if (xpos == 500 && ypos == 500) {
        return true;
    }
    if (xpos < 500) {
        xpos++;
    }
    if (xpos > 500) {
        xpos--;
    }
    if (ypos < 500) {
        ypos++;
    }
    if (ypos > 500) {

        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout("moveMessage()", 10);
}

addLoadEvent(moveMessage);