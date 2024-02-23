// accessing the images
const bt1 = document.getElementById("k1");
const bt2 = document.getElementById("k2");
const bt3 = document.getElementById("k3");
const bt4 = document.getElementById("k4");
const bt5 = document.getElementById("k5");
const bt6 = document.getElementById("k6");
const bt7 = document.getElementById("k7");
const bt8 = document.getElementById("k8");
const bt9 = document.getElementById("k9");
const bt10 = document.getElementById("k10");
const bt11 = document.getElementById("k11");
const bt12 = document.getElementById("k12");
const bt13 = document.getElementById("k13");
const bt14 = document.getElementById("k14");
const bt15 = document.getElementById("k15");



// sounds
const tune1 = new Audio('tunes/a.wav');
const tune2 = new Audio('tunes/s.wav');
const tune3 = new Audio('tunes/d.wav');
const tune4 = new Audio('tunes/f.wav');
const tune5 = new Audio('tunes/g.wav');
const tune6 = new Audio('tunes/h.wav');
const tune7 = new Audio('tunes/j.wav');
const tune8 = new Audio('tunes/k.wav');
const tune9 = new Audio('tunes/l.wav');
const tune10 = new Audio('tunes/;.wav');
const tune11 = new Audio('tunes/w.wav');
const tune12 = new Audio('tunes/e.wav');
const tune13 = new Audio('tunes/t.wav');
const tune14 = new Audio('tunes/y.wav');
const tune15 = new Audio('tunes/p.wav');
const tune16 = new Audio('tunes/o.wav');
const tune17 = new Audio('tunes/u.wav');

// there are functions 
function play1() {
    tune1.play();
    bt1.src = "keys/k1.1.png";
}
function play2() {
    tune2.play();
    bt2.src = "keys/k2.1.png";
}
function play3() {
    tune3.play();
    bt3.src = "keys/k3.1.png";
}
function play4() {
    tune4.play();
    bt4.src = "keys/k1.1.png";
}
function play5() {
    tune5.play();
    bt5.src = "keys/k2.1.png";
}
function play6() {
    tune6.play();
    bt6.src = "keys/k3.1.png";
}
function play7() {
    tune7.play();
    bt7.src = "keys/k1.1.png";
}
function play8() {
    tune8.play();
    bt8.src = "keys/k2.1.png";
}
function play9() {
    tune9.play();
    bt9.src = "keys/k3.1.png";
}
function play10() {
    tune10.play();
    bt10.src = "keys/k1.1.png";
}
function play11() {
    tune11.play();
    bt11.src = "keys/k2.1.png";
}
function play12() {
    tune12.play();
    bt12.src = "keys/k3.1.png";
}
function play13() {
    tune13.play();
    bt13.src = "keys/k1.1.png";
}
function play14() {
    tune14.play();
    bt14.src = "keys/k2.1.png";
}
function play15() {
    tune15.play();
    bt15.src = "keys/k3.1.png"
}

document.addEventListener('keydown', function (event) {
    // Check if the pressed key is 'a' or 'A'
    if (event.key === 'a' || event.key === 'A') {
        // Your code to be executed when the 'a' key is pressed
        play1();

    }
    if (event.key === 's' || event.key === 'S') {
        // Your code to be executed when the 'a' key is pressed
        play2();
    }
    if (event.key === 'd' || event.key === 'D') {
        // Your code to be executed when the 'a' key is pressed
        play3();
    }
    if (event.key === 'f' || event.key === 'F') {
        // Your code to be executed when the 'a' key is pressed
        play4();
    }
    if (event.key === 'g' || event.key === 'G') {
        // Your code to be executed when the 'a' key is pressed
        play5();
    }
    if (event.key === 'h' || event.key === 'H') {
        // Your code to be executed when the 'a' key is pressed
        play6();
    }
    if (event.key === 'j' || event.key === 'J') {
        // Your code to be executed when the 'a' key is pressed
        play7();
    }
    if (event.key === 'k' || event.key === 'K') {
        // Your code to be executed when the 'a' key is pressed
        play8();
    }
    if (event.key === 'l' || event.key === 'L') {
        // Your code to be executed when the 'a' key is pressed
        play9();
    }
    if (event.key === ';' || event.key === ':') {
        // Your code to be executed when the 'a' key is pressed
        play10();
    }
    if (event.key === 'w' || event.key === 'W') {
        // Your code to be executed when the 'a' key is pressed
        play11();
    }
    if (event.key === 'e' || event.key === 'E') {
        // Your code to be executed when the 'a' key is pressed
        play12();
    }
    if (event.key === 't' || event.key === 'T') {
        // Your code to be executed when the 'a' key is pressed
        play13();
    }
    if (event.key === 'y' || event.key === 'Y') {
        // Your code to be executed when the 'a' key is pressed
        play14();
    }
    if (event.key === 'p' || event.key === 'P') {
        // Your code to be executed when the 'a' key is pressed
        play15();
    }

});

document.addEventListener("keyup", function (e) {
    // Check if the pressed key is 'a' or 'A'
    if (e.key === 'a' || e.key === 'A') {
        // Your code to be executed when the 'a' key is pressed
        bt1.src = "keys/k1.png"

    }
    if (e.key === 's' || e.key === 'S') {
        // Your code to be executed when the 'a' key is pressed
        play2();
        bt2.src = "keys/k2.png"
    }
    if (e.key === 'd' || e.key === 'D') {
        // Your code to be executed when the 'a' key is pressed
        play3();
        bt3.src = "keys/k3.png"
    }
    if (e.key === 'f' || e.key === 'F') {
        // Your code to be executed when the 'a' key is pressed
        play4();
        bt4.src = "keys/k1.png"
    }
    if (e.key === 'g' || e.key === 'G') {
        // Your code to be executed when the 'a' key is pressed
        play5();
        bt5.src = "keys/k2.png"
    }
    if (e.key === 'h' || e.key === 'H') {
        // Your code to be executed when the 'a' key is pressed
        play6();
        bt6.src = "keys/k3.png"
    }
    if (e.key === 'j' || e.key === 'J') {
        // Your code to be executed when the 'a' key is pressed
        play7();
        bt7.src = "keys/k1.png"
    }
    if (e.key === 'k' || e.key === 'K') {
        // Your code to be executed when the 'a' key is pressed
        play8();
        bt8.src = "keys/k2.png"
    }
    if (e.key === 'l' || e.key === 'L') {
        // Your code to be executed when the 'a' key is pressed
        play9();
        bt9.src = "keys/k3.png"
    }
    if (e.key === ';' || e.key === ':') {
        // Your code to be executed when the 'a' key is pressed
        play10();
        bt10.src = "keys/k1.png"
    }
    if (e.key === 'w' || e.key === 'W') {
        // Your code to be executed when the 'a' key is pressed
        play11();
        bt11.src = "keys/k2.png"
    }
    if (e.key === 'e' || e.key === 'E') {
        // Your code to be executed when the 'a' key is pressed
        play12();
        bt12.src = "keys/k3.png"
    }
    if (e.key === 't' || e.key === 'T') {
        // Your code to be executed when the 'a' key is pressed
        play13();
        bt13.src = "keys/k1.png"
    }
    if (e.key === 'y' || e.key === 'Y') {
        // Your code to be executed when the 'a' key is pressed
        play14();
        bt14.src = "keys/k2.png"
    }
    if (e.key === 'p' || e.key === 'P') {
        // Your code to be executed when the 'a' key is pressed
        play15();
        bt15.src = "keys/k3.png"
    }
});

document.addEventListener("mouseup", function () {
    bt1.src = "keys/k1.png";
    bt2.src = "keys/k2.png";
    bt3.src = "keys/k3.png";
    bt4.src = "keys/k1.png";
    bt5.src = "keys/k2.png"
    bt6.src = "keys/k3.png";
    bt7.src = "keys/k1.png";
    bt8.src = "keys/k2.png";
    bt9.src = "keys/k3.png";
    bt10.src = "keys/k1.png";
    bt11.src = "keys/k2.png";
    bt12.src = "keys/k3.png";
    bt13.src = "keys/k1.png";
    bt14.src = "keys/k2.png";
    bt15.src = "keys/k3.png"

});


// for mobile users
// document.addEventListener("touchstart", (event) => {
//     play1()
//     play2()
//     play3()
//     play4()
//     play5()
//     play6()
//     play7()
//     play8()
//     play9()
//     play10()
//     play11()
//     play12()
//     play13()
//     play14()
//     play15()

// });

// ontouchstart = (event) => {};

bt1.addEventListener("touchstart", play1);
bt2.addEventListener("touchstart", play2);
bt3.addEventListener("touchstart", play3);
bt4.addEventListener("touchstart", play4);
bt5.addEventListener("touchstart", play5);
bt6.addEventListener("touchstart", play6);
bt7.addEventListener("touchstart", play7);
bt8.addEventListener("touchstart", play8);
bt9.addEventListener("touchstart", play9);
bt10.addEventListener("touchstart", play10);
bt11.addEventListener("touchstart", play11);
bt12.addEventListener("touchstart", play12);
bt13.addEventListener("touchstart", play13);
bt14.addEventListener("touchstart", play14);
bt15.addEventListener("touchstart", play15);

