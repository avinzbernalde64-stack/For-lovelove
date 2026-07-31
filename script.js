/* =========================================
   Romantic Garden
   Part 1
========================================= */

// Music

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        bgMusic.play();

        musicBtn.textContent = "🔊";

    } else {

        bgMusic.pause();

        musicBtn.textContent = "🎵";

    }

    playing = !playing;

});

// Typing Effect

const typingText = document.getElementById("typingText");

const message =
`Every flower in this garden reminds me of you.

You make my world brighter,
my heart happier,
and every day more beautiful.

Happy Girlfriend's Day ❤️

I love you more than words can ever describe. 🌸`;

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

window.onload = typeWriter;

// Flower Bloom

const flowers = document.querySelectorAll(".flower");

flowers.forEach(flower => {

    flower.addEventListener("click", () => {

        flower.classList.remove("bloomed");

        void flower.offsetWidth;

        flower.classList.add("bloomed");

    });

});

// Floating Hearts

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize =
        (18+Math.random()*18)+"px";

    heart.style.animationDuration =
        (6+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,700);
/* =========================================
   Romantic Garden
   Part 2
========================================= */

// --------------------
// Sparkles
// --------------------

const sparkles = document.getElementById("sparkles");

function createSparkle(){

    const s = document.createElement("div");

    s.className = "sparkle";

    s.style.left = Math.random()*100 + "vw";

    s.style.top = Math.random()*100 + "vh";

    s.style.animationDuration =
        (1 + Math.random()*3) + "s";

    sparkles.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },4000);

}

setInterval(createSparkle,250);


// --------------------
// Fireflies
// --------------------

const fireflies = document.getElementById("fireflies");

function createFirefly(){

    const fly = document.createElement("div");

    fly.className = "firefly";

    fly.style.left = Math.random()*100 + "vw";

    fly.style.top = (60 + Math.random()*35) + "vh";

    fly.style.animationDuration =
        (8 + Math.random()*8) + "s";

    fireflies.appendChild(fly);

    setTimeout(()=>{
        fly.remove();
    },17000);

}

for(let i=0;i<18;i++){

    setTimeout(createFirefly,i*350);

}

setInterval(createFirefly,1500);


// --------------------
// Falling Petals
// --------------------

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
        (8 + Math.random()*6) + "s";

    petal.style.opacity =
        0.5 + Math.random()*0.5;

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },14000);

}

setInterval(createPetal,700);


// --------------------
// Surprise Button
// --------------------

const surpriseBtn =
document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click",()=>{

    launchConfetti();

    for(let i=0;i<30;i++){

        createHeart();

    }

    alert(
`❤️ Happy Girlfriend's Day ❤️

You are the most beautiful flower
in my garden.

Thank you for making every day
special.

I love you forever 🌸`
    );

});


// --------------------
// Simple Confetti
// --------------------

const canvas =
document.getElementById("confetti");

const ctx =
canvas.getContext("2d");

function resize(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}

window.addEventListener("resize",resize);

resize();

function launchConfetti(){

    const pieces=[];

    for(let i=0;i<220;i++){

        pieces.push({

            x:canvas.width/2,

            y:canvas.height/2,

            size:5+Math.random()*8,

            dx:(Math.random()-0.5)*14,

            dy:(Math.random()-0.5)*14,

            color:

            `hsl(${Math.random()*360},
            100%,
            70%)`

        });

    }

    let frame=0;

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        pieces.forEach(p=>{

            p.x+=p.dx;

            p.y+=p.dy;

            p.dy+=0.15;

            ctx.fillStyle=p.color;

            ctx.fillRect(

                p.x,

                p.y,

                p.size,

                p.size

            );

        });

        frame++;

        if(frame<180){

            requestAnimationFrame(
                animate
            );

        }else{

            ctx.clearRect(

                0,
                0,
                canvas.width,
                canvas.height

            );

        }

    }

    animate();

}


// --------------------
// Fade In
// --------------------

document.querySelector(".card")
.classList.add("fade-in");


// --------------------
// Cursor Glow
// --------------------

document.addEventListener("mousemove",e=>{

    const glow=document.createElement("div");

    glow.style.position="fixed";
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";
    glow.style.width="8px";
    glow.style.height="8px";
    glow.style.borderRadius="50%";
    glow.style.pointerEvents="none";
    glow.style.background="white";
    glow.style.boxShadow="0 0 18px white";
    glow.style.opacity=".8";
    glow.style.zIndex="999";

    document.body.appendChild(glow);

    setTimeout(()=>{

        glow.remove();

    },300);

});
