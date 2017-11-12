var x = document.getElementsByClassName("uiMorePagerPrimary");
for (var i = 0; i < x.length; ++i) {
    var item = x[i];
    item = item.toString();
    item = item.replace(/limit=50/, 'limit=90000');
    document.getElementsByClassName("uiMorePagerPrimary")[i].setAttribute('href', item);
    var inputs = document.getElementsByClassName('uiMorePagerPrimary')[i].click();
}