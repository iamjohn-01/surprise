// ===============================
// FLOATING HEARTS
// ===============================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
// ===============================
// SHOW PAGE
// ===============================

function showPage(pageNumber){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document
        .getElementById("page"+pageNumber)
        .classList.add("active");

}
// ===============================
// QUIZ
// ===============================

function checkQuiz(){

    const q1 = document.getElementById("q1").value.trim().toLowerCase();

    const q2 = document.getElementById("q2").value.trim().toLowerCase();

    const q3 = document.getElementById("q3").value.trim().toLowerCase();

    const q4 = document.getElementById("q4").value.trim().toLowerCase();

    if(

        q1==="yellow" &&

        q2==="school" &&

        q3==="babe" &&

        (
            q4==="19th of december" ||
            q4==="19 december" ||
            q4==="december 19" ||
            q4==="19/12" ||
            q4==="19-12"
        )

    ){

        alert("Access Granted ❤️");

        showPage(2);

    }

    else{

        alert("Oopsiee 🥺\n\nWrong answer.\nTry again babyyyy ❤️");

    }

}
// ===============================
// OPEN GIFT
// ===============================

function openGift() {

    const gift = document.querySelector(".gift");

    gift.innerHTML = "💖";

    gift.style.transform = "scale(1.4)";
    gift.style.animation = "none";

    setTimeout(() => {

        showPage(3);

        startAnniversaryPage();

    }, 1200);

}
// ===============================
// PAGE 3 AUDIO
// ===============================

const bgMusic = document.getElementById("bgMusic");
const voiceNote = document.getElementById("voiceNote");
const nextBtn = document.getElementById("nextBtn");

function startAnniversaryPage(){

    if(bgMusic){

        bgMusic.volume = 0.5;

        bgMusic.play().catch(()=>{});

    }

    // Wait 12 seconds before the voice note
    setTimeout(()=>{

        if(bgMusic){

            bgMusic.volume = 0.15;

        }

        if(voiceNote){

            voiceNote.play().catch(()=>{});

        }

    },12000);

    if(voiceNote){

        voiceNote.onended = function(){

            nextBtn.style.display = "inline-block";

        };

    }

}
// ===============================
// MUSIC & VOICE NOTE
// ===============================

const bgMusic = document.getElementById("bgMusic");
const voiceNote = document.getElementById("voiceNote");
const nextBtn = document.getElementById("nextBtn");

function startAnniversaryPage() {

    // Start the background music
    if (bgMusic) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(() => {});
    }

    // After 12 seconds, lower music and play voice note
    setTimeout(() => {

        if (bgMusic) {

            // Smoothly reduce volume
            let volume = bgMusic.volume;

            const fade = setInterval(() => {

                if (volume > 0.15) {
                    volume -= 0.05;
                    bgMusic.volume = volume;
                } else {
                    clearInterval(fade);
                }

            }, 250);

        }

        if (voiceNote) {
            voiceNote.play().catch(() => {});
        }

    }, 12000);

    // When the voice note finishes
    if (voiceNote) {

        voiceNote.onended = function () {

            nextBtn.style.display = "inline-block";

            nextBtn.classList.add("fadeIn");

        };

    }

}
// ===============================
// CONTINUE BUTTON
// ===============================

nextBtn.onclick = function () {

    showPage(4);

};
