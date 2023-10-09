function acakTelur() {
    var acak = Math.round(Math.random() * 10);
    if (acak == 0) {
        acak = 1;
    }
    if (acak == 10) {
        acak = 9;
    }
    return acak;
}

// timer
function timer() {
    setInterval(function(){
        if (start) {
        if (menit <= 0 && detik <= 0) {
            detik = 0;
            menit = 0;
            alert('kamu kalah skor tertinggi mu : ' + point);
            window.location.reload(false);
            // alert('selesai');

        }
        if (detik >= 60 ) {
            menit += 1;
            detik -= 60;
        }
    
        if ( detik <= 0 ) {
            menit -= 1;
            detik += 60;
        }
        detik--;
        drawTimer();
    }
        },1000);
    
} 

//posisi keranjang pemain
function updatePlayer() {
    if (start){

        if (right == true && player.x + basketWidth < cW) {
            player.x += 3 ;
        }

        if (left == true && player.x > 0) {
            player.x -= 3 ;
        }
    }
}
//telur jatuh
function moveTelur() {
    eggs.forEach(e => {
        if (e[2]) {
            e[1] += 2;
        }
    });
}
//ketika telur menyentuh keranjang
function telurPlayerCollision() {
    
    eggs.forEach((e,i) => {
        if (e[0] >= player.x && e[0] <= player.x + basketWidth && e[1] + telurHeight - 10 >= player.y && e[1] <= player.y + basketHeight) {
            
            e[2] = false;
            eggs.splice(i,1);
            if (start) {
                point++
                detik += 5;
            }

        } 
    });
}

//ketika telur menyentuh tanah
function telurTembokCollision() {

    eggs.forEach((e,i) => {
            if (e[1] + telurHeight >= cH){
                e[2] = false;
                eggs.splice(i,1);
                detik -= 3;
            } 
    });
}

function tambahPoint() {
    point++;
    return 0;
}

function isLevelDone(){
    // console.log(eggs.length);
    if (eggs.length <= 1 ) {
        createTelur();
        telur.banyak++;
        // console.log(telur.banyak);
    }

    if (point >= 20) {
        checkStatus = true;
    }
}

function leveling() {
    if (checkStatus) {
        // alert(checkStatus);
        level = '2';
        }
}