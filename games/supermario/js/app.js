const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const song = document.querySelector('.song');
const jumpSound = document.querySelector('.jumpSound')
let choose;
let random;
const jump = () => {
    mario.classList.add('jump');
    jumpSound.src = "song/mario_pulando_efeito_sonoro_toquesengracadosmp3.com.mp3"

    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)

} 

const pipeSize = setInterval(() => {
    random = Math.floor(Math.random() * 2);
    console.log(random) 
},800)

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const widthView = document.documentElement.clientWidth;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 

    if (random === 1 && (pipePosition < 0 )) {
        pipe.style.height = '80px';
        choose = 0;
    } else {
        pipe.style.height = '115px';
        choose = 115;
    }

    if (pipePosition <= 115 && pipePosition > 0 && marioPosition <= choose) {
        
        song.src = 'song/Nintendo_Player_Down_Ringtone_(by Fringster.com).mp3'
        song.loop = false;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '40px';

        clearInterval(loop);
        clearInterval(pipeSize);
    }  
 },10)

document.addEventListener("keydown", jump);