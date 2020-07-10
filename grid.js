function showmenu(){
   var b = document.getElementById("bar");
    var t = document.getElementById("times");
    var m = document.getElementById("nav-mob");
    b.style.display = "none";
    t.style.display = "block";
    m.style.display = "block";
}
function closemenu(){
    var b = document.getElementById("bar");
    var t = document.getElementById("times");
    b.style.display = "block";
    t.style.display = "none";
}