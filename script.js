$(document).ready(function () {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            answer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: "Pacific"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function showQuestion(index) {
        const q = questions[index];
        $('#question').text(q.question);
        $('#options').empty();
        q.options.forEach(option => {
            $('#options').append(`<button class="option">${option}</button>`);
        });
    }

    showQuestion(currentQuestion);

    $('#options').on('click', '.option', function () {
        const selected = $(this).text();
        if (selected === questions[currentQuestion].answer) {
            score++;
        }
        $('#next').prop('disabled', false);
        $('.option').prop('disabled', true);
        $(this).css('background-color', selected === questions[currentQuestion].answer ? 'lightgreen' : 'salmon');
    });

    $('#next').click(function () {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);
            $('#next').prop('disabled', true);
        } else {
            $('#quiz').hide();
            $('#score').text(`${score} / ${questions.length}`);
            $('#result').removeClass('hidden');
        }
    });
});
