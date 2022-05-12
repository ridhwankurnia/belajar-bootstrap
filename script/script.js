// Menampilkan Jam Secara Live

function showTime() {
    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();

    if (curr_hour >= 0) {
        salam = "Good Morning ⛅";
        document.getElementById("salam").style.color = "#5decff";
    }
    else if (curr_hour >= 12) {
        salam = "Good Afternoon 🌞";
        document.getElementById("salam").style.color = "#c8ff00";
    }
    else if (curr_hour >= 18) {
        salam = "Good Evening 🌗";
        document.getElementById("salam").style.color = "#00c24a";
    }
    else if (curr_hour >= 19) {
        salam = "Good Night 🌚";
        document.getElementById("salam").style.color = "#9e9e9e";
    }
    curr_hour = checkTime(curr_hour);
    curr_minute = checkTime(curr_minute);
    curr_second = checkTime(curr_second);
    document.getElementById('clock').innerHTML = curr_hour + ":" + curr_minute + ":" + curr_second;
    document.getElementById('salam').innerHTML = salam;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
setInterval(showTime, 500);



// Menampilkan Hari, Tanggal Bulan dan Tahun

var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var thisDay = date.getDay(),
    thisDay = myDays[thisDay];
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
document.getElementById('tanggal').innerHTML = thisDay + ', ' + day + ' ' + months[month] + ' ' + year;



// Dark & light mode switch

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var x = document.getElementById("darkMode");
    if (x.innerHTML === "🌑") {
        x.innerHTML = "☀️";
        document.getElementById("darkMode").style.background = "white";
        document.getElementById("darkMode").style.color = "black";
    } else {
        x.innerHTML = "🌑";
        document.getElementById("darkMode").style.background = "gray";
    }
}