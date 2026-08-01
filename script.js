/* =========================================
   Romantic Garden
   Part 1
========================================= */

// ===============================
// Music Player
// ===============================

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


// ===============================
// Typing Effect
// ===============================

const typingText = document.getElementById("typingText");

const message = `Hi miii HAHAHAHAH sorry wala jud koy kwarta maong kani nalang ha, bawi lang ko pag naa HAHAHAHA 😭❤️

Everyday is GF day bitaw saaton HAHAHAHAHA.

Every flower reminds me how lucky I am to have you.

Thank you for making my world brighter.

I love you forever mi 💋❤️`;

let index = 0;

typingText.innerHTML = "";

function typeWriter() {

    if (index < message.length) {

        const char = message.charAt(index);

        if (char === "\n") {

            typingText.innerHTML += "<br>";

        } else {

            typingText.innerHTML += char;

        }

        index++;

        setTimeout(typeWriter, 40);

    }

}

window.addEventListener("load", typeWriter);


// ===============================
// Flowers
// ===============================

const flowers = document.querySelectorAll(".flower");

flowers.forEach((flower) => {

    flower.addEventListener("click", () => {

        flower.classList.remove("bloomed");

        void flower.offsetWidth;

        flower.classList.add("bloomed");

        createHeartBurst(flower);

    });

    flower.addEventListener("mouseenter", () => {

        flower.style.filter =
            "drop-shadow(0 0 20px rgba(255,255,255,.8))";

    });

    flower.addEventListener("mouseleave", () => {

        flower.style.filter = "none";

    });

});
/* =========================================
   Part 2
   Hearts • Heart Burst • Sparkles
========================================= */

// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 800);


// ===============================
// Heart Burst
// ===============================

function createHeartBurst(flower) {

    const rect = flower.getBoundingClientRect();

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left =
            rect.left + rect.width / 2 + "px";

        heart.style.top =
            rect.top + "px";

        heart.style.fontSize = "22px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.transition =
            "all 1s ease";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {

            const x =
                (Math.random() - 0.5) * 200;

            const y =
                -120 - Math.random() * 120;

            heart.style.transform =
                `translate(${x}px, ${y}px) scale(.5)`;

            heart.style.opacity = "0";

        });

        setTimeout(() => {

            heart.remove();

        }, 1000);

    }

}


// ===============================
// Sparkles
// ===============================

const sparkles = document.getElementById("sparkles");

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.animationDuration =
        (1 + Math.random() * 2) + "s";

    sparkles.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}

setInterval(createSparkle, 250);
/* =========================================
   Part 3
   Fireflies • Petals • Wind • Glow
========================================= */

// ===============================
// Fireflies
// ===============================

const fireflies = document.getElementById("fireflies");

function createFirefly() {

    const fly = document.createElement("div");

    fly.className = "firefly";

    fly.style.left = Math.random() * 100 + "vw";

    fly.style.top = (50 + Math.random() * 40) + "vh";

    fly.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    fireflies.appendChild(fly);

    setTimeout(() => {

        fly.remove();

    }, 15000);

}

for (let i = 0; i < 20; i++) {

    setTimeout(createFirefly, i * 300);

}

setInterval(createFirefly, 1200);


// ===============================
// Falling Petals
// ===============================

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.top = "-40px";

    petal.style.fontSize =
        (18 + Math.random() * 12) + "px";

    petal.style.pointerEvents = "none";

    petal.style.zIndex = "2";

    petal.style.animationDuration =
        (8 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    requestAnimationFrame(() => {

        petal.style.transition =
            "transform 12s linear, opacity 12s linear";

        petal.style.transform =
            `translate(${(Math.random()-0.5)*300}px,120vh) rotate(${Math.random()*720}deg)`;

        petal.style.opacity = "0";

    });

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 600);


// ===============================
// Wind Effect
// ===============================

let windDirection = 1;

setInterval(() => {

    windDirection *= -1;

    flowers.forEach(flower => {

        flower.style.transform =
            `rotate(${windDirection * 4}deg)`;

    });

}, 4000);


// ===============================
// Floating Glow Particles
// ===============================

function createGlowParticle() {

    const glow = document.createElement("div");

    glow.style.position = "fixed";

    glow.style.left = Math.random() * 100 + "vw";

    glow.style.top = "100vh";

    glow.style.width = "6px";

    glow.style.height = "6px";

    glow.style.borderRadius = "50%";

    glow.style.background = "rgba(255,255,255,.8)";

    glow.style.boxShadow = "0 0 12px white";

    glow.style.pointerEvents = "none";

    glow.style.zIndex = "5";

    document.body.appendChild(glow);

    requestAnimationFrame(() => {

        glow.style.transition =
            "transform 10s linear, opacity 10s linear";

        glow.style.transform =
            `translateY(-120vh) translateX(${(Math.random()-0.5)*200}px)`;

        glow.style.opacity = "0";

    });

    setTimeout(() => {

        glow.remove();

    }, 10000);

}

setInterval(createGlowParticle, 700);
/* =========================================
   Part 4
   Surprise • Confetti • Photo Viewer
========================================= */

// ===============================
// Surprise Button
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {

    launchConfetti();

    for (let i = 0; i < 40; i++) {
        createHeart();
    }

    showLoveLetter();

});


// ===============================
// Love Letter
// ===============================

function showLoveLetter() {

    const old = document.getElementById("loveLetter");

    if (old) old.remove();

    const popup = document.createElement("div");

    popup.id = "loveLetter";

    popup.innerHTML = `
        <div class="letter-card">
            <h2>💌 For My Love 💌</h2>

            <p>
                Hi miii HAHAHAHAH sorry wala jud koy kwarta maong kani nalang ha,
                bawi lang ko pag naa HAHAHAHA 😭❤️
                <br><br>
                Everyday is GF day bitaw saaton HAHAHAHAHA.
                <br><br>
                Every flower reminds me how lucky I am to have you.
                <br><br>
                Thank you for making my world brighter.
                <br><br>
                I love you forever mi 💋❤️
            </p>

            <button id="closeLetter">
                Close ❤️
            </button>
        </div>
    `;

    document.body.appendChild(popup);

    Object.assign(popup.style, {
        position: "fixed",
        inset: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,.5)",
        backdropFilter: "blur(6px)",
        zIndex: "99999"
    });

    const card = popup.querySelector(".letter-card");

    Object.assign(card.style, {
        background: "#fff",
        width: "90%",
        maxWidth: "450px",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
        color: "#5a3552",
        boxShadow: "0 20px 60px rgba(0,0,0,.25)"
    });

    popup.querySelector("#closeLetter").onclick = () => popup.remove();

}


// ===============================
// Confetti
// ===============================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function launchConfetti() {

    const pieces = [];

    for (let i = 0; i < 250; i++) {

        pieces.push({

            x: canvas.width / 2,
            y: canvas.height / 2,

            dx: (Math.random() - .5) * 14,
            dy: (Math.random() - .5) * 14,

            size: 4 + Math.random() * 8,

            color: `hsl(${Math.random() * 360},100%,70%)`

        });

    }

    let frame = 0;

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(p => {

            p.x += p.dx;
            p.y += p.dy;
            p.dy += 0.18;

            ctx.fillStyle = p.color;

            ctx.fillRect(p.x, p.y, p.size, p.size);

        });

        frame++;

        if (frame < 180) {

            requestAnimationFrame(animate);

        } else {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

        }

    }

    animate();

}


// ===============================
// Scrapbook Photo Viewer
// ===============================

document.querySelectorAll(".polaroid img").forEach(photo => {

    photo.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "999999";

        const img = document.createElement("img");

        img.src = photo.src;
        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.borderRadius = "20px";

        overlay.appendChild(img);

        overlay.onclick = () => overlay.remove();

        document.body.appendChild(overlay);

    });

});


// ===============================
// Cursor Sparkle
// ===============================

document.addEventListener("mousemove", e => {

    const dot = document.createElement("div");

    dot.style.position = "fixed";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.style.width = "8px";
    dot.style.height = "8px";
    dot.style.borderRadius = "50%";
    dot.style.background = "white";
    dot.style.boxShadow = "0 0 15px white";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "9999";

    document.body.appendChild(dot);

    requestAnimationFrame(() => {

        dot.style.transition = "all .6s ease";
        dot.style.transform = "scale(0)";
        dot.style.opacity = "0";

    });

    setTimeout(() => {

        dot.remove();

    }, 600);

});


// ===============================
// Welcome Animation
// ===============================

document.querySelector(".card").classList.add("fade-in");

console.log("🌸 Romantic Garden Loaded Successfully ❤️");

