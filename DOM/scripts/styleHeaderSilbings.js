function styleHeaderSiblings(tag, theclass) {
    if (!document.getElementsByTagName) return false;
    var header = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < header.length; i++) {
        elem = getNextElement(header[i].nextSibling);
        addClass(elem, theclass);
    }
}
function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

addLoadEvent(function () {
    styleHeaderSiblings("p", "intro");
});