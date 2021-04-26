//////////////////////
// AVATAR FUNCTIONS //
//////////////////////

function speakNow() {
    let changeMouth = document.getElementById('action');
    changeMouth.classList.replace('smile', 'speak');
    // console.log('talking');
}

function justSmile() {
    var changeMouth = document.getElementById('action');
    changeMouth.classList.replace('speak', 'smile');
}

////////////////////////
// INFO BOX FUNCTIONS //
////////////////////////

let pacmanInfoBox = document.getElementsByClassName('pacman-info')
let eyesInfoBox = document.getElementsByClassName('eyes-info')
let busInfoBox = document.getElementsByClassName('bus-info')


// PACMAN INFO
function givePacmanInfo() {
    pacmanInfoBox[0].style.display = 'block';
}

function hidePacmanInfo() {
    pacmanInfoBox[0].style.displa = 'none';
}

// EYES INFO
function giveEyesInfo() {
    eyesInfoBox[0].style.display = 'block';
}

function hideEyesInfo() {
    eyesInfoBox[0].style.display = 'none';
}

// BUS INFO
function giveBusInfo() {
    busInfoBox[0].style.display = 'block';
}

function hideBusInfo() {
    busInfoBox[0].style.display = 'none';
}

// Scroll

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
