function pembukaan() {
    $('#jagoKetik').append('<div id="framePembukaan">');
    let framePembukaan = $('#framePembukaan');
    framePembukaan.append('<h1 class="title">Jadi Jagoan Ngetik</h1>').append('<button id="play">PLAY</button>');
    let tinggiFrame = framePembukaan.height();
    let y = (tinggiBrowser - tinggiFrame) / 2;
    framePembukaan.css({'marginTop': y, 'text-align': 'center'});
}

function play() {
    $('#play').click(function () {
        $(this).fadeOut('fast', function () {
            $('#framePembukaan').append('<div id="textScore">Score <span id="score">0</span></div>');
            randomCharacter();
            ketik();
        });
    });
}

function randomCharacter() {
    let karakter = Math.random().toString(36).slice(-1);
    $('#jagoKetik').append('<span class="alfabet ' + hitungKarakter + '" id="' + karakter + '">' + karakter + '<span></span>');
    let batasHilangDibawah = tinggiBrowser + 100;
    let posisiX = Math.floor(Math.random() * (lebarBrowser - $('.alfabet').outerWidth())) + 1;
    $('.' + hitungKarakter).css({'left': posisiX});
    $('.alfabet').animate({top: '+=' + batasHilangDibawah}, kecepatan, function () {
        $(this).remove();
    });
    hitungKarakter++;
    setTimeout(function () {
        randomCharacter();
    }, 1500);
}

function ketik() {
    $('body').on('keyup', function (e) {
        let tombolDiklik = '#' + e.key;
        let scoreSaatIni = parseInt($('#score').text());
        if ($('.alfabet').is(tombolDiklik)) {
            $(tombolDiklik).addClass('benar').removeAttr('id');
            $('#score').text(scoreSaatIni + 1);
        }
    });
}

function init() {
    pembukaan();
    play();
}

let hitungKarakter = 1;
let kecepatan = 7000;
let lebarBrowser = $(window).width();
let tinggiBrowser = $(window).height();
$(document).ready(function () {
    init();
});