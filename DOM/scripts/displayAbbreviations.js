function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    //遍历文档找出所有abbr元素
    var abbrArr = document.getElementsByTagName("abbr");
    console.log(abbrArr.length);
    if (abbrArr.length < 1) {
        return false;
    }
    //使用for循环保存abbr元素中的title属性和包含的文本
    var arr = new Array();
    for (var i = 0; i < abbrArr.length; i++) {
        if (abbrArr[i].childNodes.length < 1) continue;
        var title = abbrArr[i].getAttribute("title");
        var text = abbrArr[i].lastChild.nodeValue;
        arr[text] = title;
    }
    //创建dl列表
    var dlist = document.createElement("dl");
    for (txt in arr) {
        var define = arr[txt];
        //创建dt
        var ddt = document.createElement("dt");
        var dt_text = document.createTextNode(txt);
        ddt.appendChild(dt_text);
        var ddd = document.createElement("dd");
        var dd_text = document.createTextNode(define);
        ddd.append(dd_text);
        dlist.appendChild(ddt);
        dlist.appendChild(ddd);
    }
    if (dlist.childNodes.length < 1) return false;
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createElement("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
    //DocumentTimeline.getElementsByTagName("body")[0].appendChild(header);
}
addLoadEvent(displayAbbreviations);

