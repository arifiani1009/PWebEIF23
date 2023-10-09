//Gambar Background
var bgImg = new Image();
bgImg.src = 'img/bg.png';
//Gambar keranjang
var basketImg = new  Image();
basketImg.src = 'img/basket.png';

function drawBg(){
    ctx.drawImage(bgImg,0,0);
}

function drawLevel() {
    levelComp.innerHTML= level;
}

function drawTimer(){
    menitImg.innerHTML = menit;
    detikImg.innerHTML = detik;
}

function drawTelur() {
    eggs.forEach((e,i) => {
        if (e[2])  {
            ctx.drawImage(telurImg,e[0],e[1],telurWidth,telurHeight);
        }
    });
}

function drawPoint() {
    pointImg.innerHTML = point;
}

function drawPlayer() {
    ctx.drawImage(basketImg,player.x,player.y,basketWidth,basketHeight);
}

function draw() {
    drawBg();
    drawTelur();
    drawPlayer();
    drawPoint();
    drawLevel();
    
}