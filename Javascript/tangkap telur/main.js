//mendefinisikan canvas dan tools untuk menggambar
var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

//variabel yang digunakan
var cW  = cvs.width;  //area bermain
var cH  = cvs.height; //area bermain
//ukuran keranjang
var basketWidth = 100;
var basketHeight = 40;
//ukuran telur
var telurWidth = 40;
var telurHeight = 40;
//posisi untuk interaksi keyboard
var left = false;
var right = false;
//score dan level
var point = 0;
var levelCre = 0;
var level = '1';
//status dimulai/tidak
var start = false;
var checkStatus = false;
//waktu
var menit = 01;
var detik = 60;
//akses elemen HTML berdasarkan ID untuk mengubah data atau event handler
var barStart = document.getElementById('barStart');
var startBtn = document.getElementById('startBtn');
var levelComp = document.getElementById('level');
var pointImg = document.getElementById('point');
var detikImg =document.getElementById('detik');
var menitImg = document.getElementById('menit');


//Gambar telur
var telurImg = new Image();
const telur = {
    x : Math.round((Math.random() * 600)),
    y : Math.round((Math.random() * 600)) -300,
    speed : Math.round(Math.random() * 10),
    banyak : 2,
    warna : telurImg.src = 'img/' + acakTelur() + '.png', 
}

const player = {
    x : cW/2-(basketWidth / 2),
    y : cH / 2 + basketHeight + 200, 
}


var eggs = []; 
function createTelur() {
    
    for ( let a = 1 ; a <= telur.banyak ; a++) {
        eggs [a] = [
        Math.round((Math.random() * 600)),
        Math.round((Math.random() * 600) - 700),
        true
        ];
    }
}
createTelur();

timer();

function update() {
    moveTelur();
    updatePlayer(); 
    telurPlayerCollision();
    telurTembokCollision();
    isLevelDone();
    leveling();
}

function loop() {
    ctx.clearRect(0,0,cvs.width,cvs.height);
    draw();
    update();

        requestAnimationFrame(loop);
}
loop();
