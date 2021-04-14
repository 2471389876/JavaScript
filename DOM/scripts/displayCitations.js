function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    //遍历文档中的所有blockquote元素
    var bquote = document.getElementsByTagName("blockquote");
    //使用for循环提取bloackquote元素中的cite属性
    for (var i = 0; i < bquote.length; i++) {
        if (!bquote[i].getAttribute("cite")) continue;
        var bcite = bquote[i].getAttribute("cite");
        var quoteChildren = bquote[i].getElementsByTagName('*');
        if (quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length - 1];
        var source = document.createElement("a");
        var s_text = document.createTextNode("source");
        source.appendChild(s_text);
        source.setAttribute("href", bcite);
        var superscript = document.createElement('sup');
        superscript.appendChild(source);
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);