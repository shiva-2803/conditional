function getAnswer(question) {
    let answer = document.querySelector(`input[name="${question}"]:checked`);

    if (answer) {
        return answer.value;
    }

    return "";
}

function calculateScore(callback) {

    let answers = [
        getAnswer("q1"),
        getAnswer("q2"),
        getAnswer("q3")
    ];

    let correctAnswers = ["let", "console", "==="];

    let score = 0;

    for (let i = 0; i < correctAnswers.length; i++) {

        if (answers[i] === correctAnswers[i]) {
            score++;
        }

    }

    callback(score);
}

function submitQuiz() {

    calculateScore((score) => {

        document.getElementById("result").innerText =
            `Your Score: ${score}/3`;

    });
}