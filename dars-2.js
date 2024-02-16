var yosh = +prompt("yoshingizni kiriting")
if (yosh>0 && yosh<18) {
    alert("siz hali yoshsiz")
}
else if (yosh>18 && yosh<60) {
    alert("siz ishlasangiz boladi")
}
else if (yosh>60 && yosh<150) {
    alert("siz pensianersiz")
}
else{
    alert("EROR")
}