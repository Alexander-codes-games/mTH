function generateProblem() {
    const mathType = document.getElementById('mathType').value;
    const difficulty = document.getElementById('difficulty').value;

    let num1, num2;
    
    if (difficulty === 'easy') {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
    } else if (difficulty === 'medium') {
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
    } else {
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
    }

    let problem = '';
    let answer = 0;

    switch (mathType) {
        case 'addition':
            problem = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case 'subtraction':
            problem = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case 'multiplication':
            problem = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        case 'division':
            problem = `${num1} ÷ ${num2}`;
            answer = num1 / num2;
            break;
    }

    document.getElementById('problem').textContent = problem;
    document.getElementById('userAnswer').value = '';
    document.getElementById('feedback').textContent = '';
    window.correctAnswer = answer; // Store the correct answer globally for comparison
}

function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value;
    
    if (userAnswer == window.correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct!';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').textContent = 'Try again!';
        document.getElementById('feedback').style.color = 'red';
    }
}
