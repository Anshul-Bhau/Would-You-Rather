// //For intro playing for 3s
// // After 3 seconds, hide the intro and show the main

// // window.onload = function () {
// //     setTimeout(() => {
// //         document.querySelector(".intro").style.display = "none";
// //         document.querySelector(".main").style.display = "block";
// //         loadQues();
// //     }, 3000);
// // };

// // sample questions-
// let questions = [];
// fetch("/questions/")
//     .then(res => res.json())
//     .then(data => {
//         questions = data;
//         loadQues();
//     });
// // const questions = [
// //     {
// //         red: "Live without internet for a year",
// //         blue: "Live without AC for a year",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Be able to fly",
// //         blue: "Be invisible",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Never use social media again",
// //         blue: "Never watch TV again",
// //         majority: "red"
// //     },
// //     {
// //         red: "Only eat pizza for a year",
// //         blue: "Never eat pizza again",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Have unlimited money but no friends",
// //         blue: "Have many friends but be broke",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Speak all languages fluently",
// //         blue: "Play all instruments perfectly",
// //         majority: "red"
// //     },
// //     {
// //         red: "Live on the beach",
// //         blue: "Live in the mountains",
// //         majority: "red"
// //     },
// //     {
// //         red: "Have free travel for life",
// //         blue: "Have free food for life",
// //         majority: "red"
// //     },
// //     {
// //         red: "Be 10 years younger",
// //         blue: "Be 10 years older but twice as rich",
// //         majority: "red"
// //     },
// //     {
// //         red: "Always have to sing instead of speaking",
// //         blue: "Always have to dance instead of walking",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Never sleep again but be healthy",
// //         blue: "Sleep 12 hours a day but be tired",
// //         majority: "red"
// //     },
// //     {
// //         red: "Control the weather",
// //         blue: "Control time",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Have super strength",
// //         blue: "Have super intelligence",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Live without music",
// //         blue: "Live without movies",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Only be able to whisper",
// //         blue: "Only be able to shout",
// //         majority: "red"
// //     },
// //     {
// //         red: "Be able to teleport anywhere",
// //         blue: "Be able to read minds",
// //         majority: "red"
// //     },
// //     {
// //         red: "Have a private chef",
// //         blue: "Have a personal driver",
// //         majority: "red"
// //     },
// //     {
// //         red: "Be famous but poor",
// //         blue: "Be unknown but rich",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Eat only sweet food forever",
// //         blue: "Eat only salty food forever",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Have a rewind button in life",
// //         blue: "Have a pause button in life",
// //         majority: "red"
// //     },
// //     {
// //         red: "Be able to breathe underwater",
// //         blue: "Be able to fly",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Live in a world with no crime",
// //         blue: "Live in a world with no pollution",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Always know when someone is lying",
// //         blue: "Always get away with lying",
// //         majority: "red"
// //     },
// //     {
// //         red: "Have no taste buds",
// //         blue: "Be colorblind",
// //         majority: "blue"
// //     },
// //     {
// //         red: "Spend a year at sea",
// //         blue: "Spend a year in space",
// //         majority: "blue"
// //     }
// // ];

// let currentIndex = 0;
// let streak = 0;

// function loadQues() {
//         const ques = questions[currentIndex];

//         redBtn.innerHTML = `
//             <div class="options">
//                 <div class="streak"><img src="${fireURL}" alt="">${streak}</div>
//                 <div class="skip" onclick="skipQuestion()">Skip</div>
//             </div>
//             ${ques.red}
//         `;

//         blueBtn.innerHTML = ques.blue;

//         redBtn.className = "red";
//         blueBtn.className = "blue";

//         redBtn.onclick = () => handleAnswer("red");
//         blueBtn.onclick = () => handleAnswer("blue");

//         const skipBtn = redBtn.querySelector(".skip");
//         if (skipBtn) {
//             skipBtn.onclick = function (e) {
//                 e.stopPropagation();
//                 skipQuestion();
//             };
//         }
//     }

// window.onload = function () {

//     const main = document.querySelector(".main");
//     const intro = document.querySelector(".intro");
//     const redBtn = document.querySelector(".red");
//     const blueBtn = document.querySelector(".blue");
//     const fireURL = document.getElementById('game').dataset.fireUrl;
//     const streakDisplay = document.querySelector(".streak");

//     setTimeout(() => {
//         intro.style.display = "none";
//         main.style.display = "block";
//         loadQues();
//     }, 1000);



//     function handleAnswer(choice) {
//         const q = questions[currentIndex];
//         fetch(`/vote/${q.id}/?choice=${choice}`)
//             .then(res => res.json())
//             .then(data => {
//                 const percentages = data.percentages;

//                 // Show percentage after answer
//                 redBtn.innerHTML += `<div>${percentages.red}% chose this</div>`;
//                 blueBtn.innerHTML += `<div>${percentages.blue}% chose this</div>`;

//                 if (choice === data.majority) {
//                     streak++;
//                 } else {
//                     streak = 0;
//                 }
//                 // const isCorrect = (choice == q.majority);

//                 redBtn.classList.remove("animate_expand", "animate_contract", "animate_gray");
//                 blueBtn.classList.remove("animate_expand", "animate_contract", "animate_gray");

//                 if (choice == "red") {
//                     redBtn.classList.add("animate_expand");
//                     blueBtn.classList.add("animate_contract", "animate_gray");

//                 }
//                 else {
//                     blueBtn.classList.add("animate_expand");
//                     redBtn.classList.add("animate_contract", "animate_gray");

//                 }

//                 if (choice == data.majority) {
//                     streak++;
//                 }
//                 else {
//                     streak = 0;
//                 }

//                 redBtn.onclick = null;
//                 blueBtn.onclick = null;

//                 setTimeout(() => {
//                     currentIndex = (currentIndex + 1) % questions.length;
//                     loadQues();
//                 }, 1500);

//             });
//     }

//     window.skipQuestion = function () {
//         currentIndex = (currentIndex + 1) % questions.length;
//         loadQues()
//     }


// };


let currentIndex = 0;
let streak = 0;
let questions = [];
const fireURL = document.getElementById('game')?.dataset.fireUrl || "/static/images/fire.png";


function loadQues() {
    const ques = questions[currentIndex];

    // Always re-query the DOM elements here
    const redBtn = document.querySelector(".red");
    const blueBtn = document.querySelector(".blue");
    // const fireURL = document.getElementById('game').dataset.fireUrl;

    redBtn.innerHTML = `
        <div class="options">
            <div class="streak"><img src="${fireURL}" alt="">${streak}</div>
            <div class="skip" onclick="skipQuestion()">Skip</div>
        </div>
        <div class="choice-text">${ques.red}</div>
        <div class="percentage red-percent"></div>
    `;

    blueBtn.innerHTML =`
    <div class="choice-text">${ques.blue}</div>
        <div class="percentage blue-percent"></div>`;

    redBtn.className = "red";
    blueBtn.className = "blue";

    redBtn.onclick = () => handleAnswer("red");
    blueBtn.onclick = () => handleAnswer("blue");

    const skipBtn = redBtn.querySelector(".skip");
    if (skipBtn) {
        skipBtn.onclick = function (e) {
            e.stopPropagation();
            skipQuestion();
        };
    }
}

function handleAnswer(choice) {
    const q = questions[currentIndex];
    const redBtn = document.querySelector(".red");
    const blueBtn = document.querySelector(".blue");

    fetch(`/vote/${q.id}/?choice=${choice}`)
        .then(res => res.json())
        .then(data => {
            const redPercentElem = document.querySelector(".red-percent");
            const bluePercentElem = document.querySelector(".blue-percent");

            redPercentElem.textContent = `${data.percentages.red}% chose this`;
            bluePercentElem.textContent = `${data.percentages.blue}% chose this`;


            if (choice === data.majority) {
                streak++;
            } else {
                streak = 0;
            }

            if (choice == "red") {
                redBtn.classList.add("animate_expand");
                blueBtn.classList.add("animate_contract", "animate_gray");
            } else {
                blueBtn.classList.add("animate_expand");
                redBtn.classList.add("animate_contract", "animate_gray");
            }

            redBtn.onclick = null;
            blueBtn.onclick = null;

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % questions.length;
                loadQues();
            }, 1500);
        });
}

function skipQuestion() {
    currentIndex = (currentIndex + 1) % questions.length;
    loadQues();
}

// Load data from backend first
fetch("/questions/")
    .then(res => res.json())
    .then(data => {
        questions = data;
        setTimeout(() => {
            document.querySelector(".intro").style.display = "none";
            document.querySelector(".main").style.display = "block";
            loadQues();
        }, 1000);
    });
