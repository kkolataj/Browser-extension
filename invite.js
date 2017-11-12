var parent_div = document.getElementsByClassName('_4t2a');
var inputs = document.getElementsByClassName('_42ft _4jy0 _4jy3 _517h _51sy');
for (var z = 0; z < parent_div.length; z++) {
    if (parent_div[z].innerHTML.indexOf("Zaproś") != -1) {
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].click();
         }
    }
}
function hide_box(){
var box = document.getElementsByClassName('_21wq _70b');
for (var i = 0; i < box.length; i++) {
    box[i].setAttribute('style', 'display:none;');
}
}
setTimeout(hide_box(), 1000);
setTimeout(alert("Invitations sent successfully!"), 1000);



