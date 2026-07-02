alert("Script Loaded!");
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

function startAnniversaryPage() {

    if (bgMusic) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(() => {});
    }

    setTimeout(() => {

        if (bgMusic) {
            bgMusic.volume = 0.15;
        }

        if (voiceNote) {
            voiceNote.play().catch(() => {});
        }

    }, 12000);

    if (voiceNote) {
        voiceNote.onended = function () {
            nextBtn.style.display = "inline-block";
        };
    }
}

// ===============================
// CONTINUE BUTTON
// ===============================

if (nextBtn) {
    nextBtn.onclick = function () {
        showPage(4);
    };
    }

// ==========================
// LETTER
// ==========================

HAPPY 2 YEARS ANNIVERSARY TO MY HUBBY, ADEBOYE SAMUEL OLUWATOBILOBA🥹❤️

Wow, Omo, TWO whole YEARS already(imagine me smiling and dancing one weird dance in a happy mood🙈😂). Sometimes it feels like yesterday, and other times it feels like we've known each other forever(we have actually🤭❤️)
These past two years haven't been perfect tho'🤧we've had our happy moments, our misunderstandings, our stubborn moments (yes, I'm looking at you👀😂), our tears, our laughter, and even times when we didn't know what to do with each other🤧buh through it all, we're still here, and I think that's something beautiful and I'd never trade it for anything in this world🥹💫
Thank you for loving me 🥹, for choosing me🤭, for being patient with me🫠, and for growing with me🤗. Thank you for the memories we've shared, the calls that lasted for hours😫, the random jokes, the sweet moments🙈, and even the difficult conversations that helped us understand each other better🥲
You annoy me sometimes ngl🌚, you can be very stubborn at times, there are days that I'd be like "this boy, be serious nau😭😂", buh despite all that, you're still one of the best things that has ever happened to me😫❤️
I won't pretend we've always gotten everything right, buh I'm grateful that we've continued to learn, forgive, and keep showing up for each other🫠That's one of the things I admire most about us fr🥰
Thank you for being my baby, my safe place, my best friend, my partner in crime(not real crime oo😏), my personal Pastor(Pastor Samuel😁), my personal doctor, my personal person, and one of my biggest answered prayers 🙃😁
Here's to the memories we've made, the lessons we've learned, the growth we've experienced, and the beautiful moments still waiting for us🥹
Honestly, if someone had told me two years ago that a certain stubborn boy would become this important to me, I would have laughed and said "abeg shift"😂I love you sooo much tho'😌🤗❤️
Yet here we are🥹
Two years of memories💫
Two years of laughter🙃
Two years of random conversations🥹
Two years of learning each other🫠
Two years of loving each other🤗❤️
And even though these two years haven't been perfect, I wouldn't erase a single part of our story😌
We've had moments when we couldn't stop smiling because of each other🤭I love those moments😫❤️
We've had moments when we annoyed each other🥲(I kinda like annoying you tho'🤧😂)
We've had misunderstandings, disagreements, emotional conversations, and times when we didn't always know the right thing to say buh somehow, we always found our way back to each other🥹💫🙃and I think that's one of my favorite things about us🫠
Thank you for staying🌚
Thank you for choosing us even when things weren't easy🥲
Thank you for the prayers and always supporting me🫠💞
Thank you for the effort you've made, the love you've given me, the memories we've created, and the people we've grown into🤭I'm so proud of us😌❤️
You've made me laugh when I wanted to be upset and you've made me smile when I didn't want to🥺🤗❤️
You've given me so many moments I'll carry in my heart for a very long time♾️
And even though I tease you a lot🤭, I hope you know how much I genuinely appreciate you💋💋💋💋
You are so much more special to me than I sometimes know how to put into words🌚
I love how you love me🙈
I love your efforts in everything😁
I love the way you care🤗
And yes🤧I even love that stubborn side of you sometimes🌚😂❤️
Thank you for being part of my life❤️
Thank you for being one of the most beautiful chapters of my story🤭💫❤️
No matter how many months, years, memories, or adventures come after this, I will always be grateful for the day our story began and God will continue to bless and guide us🙏❤️
We've been through real things buh if I had to choose again, I'd still choose you😌❤️❤️❤️

Happy 2 years to us, my sweetheart💋❤️
I love you today, tomorrow, and every day after that🥹♾️❤️

function showLetter(){

const envelope=document.getElementById("envelope");

const letter=document.getElementById("letter");

envelope.classList.add("open");

setTimeout(()=>{

envelope.style.display="none";

letter.style.display="block";

typeWriter();

},900);

}

function typeWriter(){

const letter=document.getElementById("letter");

let i=0;

letter.innerHTML="";

const speed=28;

function typing(){

if(i<anniversaryLetter.length){

letter.innerHTML+=anniversaryLetter.charAt(i);

i++;

setTimeout(typing,speed);

}else{

setTimeout(()=>{

letter.innerHTML += "<br><br><button onclick='showPage(6)'>Continue ❤️</button>";

},1500);

}

}

typing();

            }

function finishStory(){

    alert("🥹❤️\n\nNow go and hug your girlfriend.\n\nShe's probably smiling while waiting for your reaction. ❤️");

    // Fade out the music nicely
    const music = document.getElementById("bgMusic");

    if(music){

        let volume = music.volume;

        const fade = setInterval(()=>{

            if(volume > 0.05){

                volume -= 0.05;

                music.volume = volume;

            }else{

                clearInterval(fade);

                music.pause();

            }

        },300);

    }

    }
