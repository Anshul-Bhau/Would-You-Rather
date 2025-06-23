//For intro playing for 3s
// After 3 seconds, hide the intro and show the main

// window.onload = function () {
//     setTimeout(() => {
//         document.querySelector(".intro").style.display = "none";
//         document.querySelector(".main").style.display = "block";
//         loadQues();
//     }, 3000);
// };

// sample questions-
const questions = [
    {
        red: "Live without internet for a year",
        blue: "Live without AC for a year",
        majority: "blue"
    },
    {
        red: "Be able to fly",
        blue: "Be invisible",
        majority: "blue"
    },
];

let currentIndex = 0;
let streak = 0;

window.onload = function () {

    const main = document.querySelector(".main");
    const intro = document.querySelector(".intro");
    const redBtn = document.querySelector(".red");
    const blueBtn = document.querySelector(".blue");
    const streakDisplay = document.querySelector(".streak");

    setTimeout(() => {
        intro.style.display = "none";
        main.style.display = "block";
        loadQues();
    }, 1000);

    function loadQues() {
        const ques = questions[currentIndex];

        redBtn.innerHTML = `
            <div class="options">
                <div class="streak"><img src="fire.png" alt="">${streak}</div>
                <div class="skip" onclick="skipQuestion()">Skip</div>
            </div>
            ${ques.red}
        `;

        blueBtn.innerHTML = ques.blue;

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
        const isCorrect = (choice == q.majority);

        redBtn.classList.remove("animate_expand", "animate_contract", "animate_gray");
        blueBtn.classList.remove("animate_expand", "animate_contract", "animate_gray");

        if (choice == "red") {
            redBtn.classList.add("animate_expand");
            blueBtn.classList.add("animate_contract", "animate_gray");

        }
        else {
            blueBtn.classList.add("animate_expand");
            redBtn.classList.add("animate_contract", "animate_gray");

        }

        if (isCorrect) {
            streak++;
        }
        else {
            streak = 0;
        }

        redBtn.onclick = null;
        blueBtn.onclick = null;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % questions.length;
            loadQues();
        }, 1500);

    }

    window.skipQuestion = function () {
        currentIndex = (currentIndex + 1) % questions.length;
        loadQues()
    }


};