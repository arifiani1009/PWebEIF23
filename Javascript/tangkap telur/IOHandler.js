//interaksi ketika tombol start ditekan
startBtn.addEventListener('click',function(){
    barStart.style.display = 'none';
    start = true;
    telur.banyak = 2;
    // window.location.refresh = true;
});
//interaksi keyboard arah kanan kiri
document.addEventListener('keydown',function (e) {
    if ( e.which == 37 ) {
        left = true;
    }

    if ( e.which == 39 ) {
        right = true;
    }
});
document.addEventListener('keyup',function (e) {
    if ( e.which == 37 ) {
        left = false;
    }

    if ( e.which == 39 ) {
        right = false;
    }   
});