$(document).ready(function() {

    //Definition des independantes de quizz

    //Click sur le bouton demarrer le quizz
    $('#btn-start').click(function() {
        $('#quiz-box').slideDown(1000);
        $('#intro-quiz').slideUp(2000);
    });
    //Fin bouton demarrer 

    //Effet scroll
    $('#top-arrow').click(function() {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        }); 
    });
    $('#down-arrow').click(function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
    //Fin effet scroll

    // blablabla
    $.ajax({
        url: 'https://batman-api.sayna.space/questions',
        datatype: 'json',
        success: function(questions) {

            let totalPoint = 0;
            let currentQuiz = 0;
            let TotalQuiz = questions.length;

            $('#total-quiz').text(totalQuiz);
            setForm(questions[currentQuiz]).question, questions[currentQuiz].

            $('#formulaire').submit(function(e) {
            e.preventDefault();

                let chooseResponse = isChooseResponse(questions, currentQuiz);
                let isChoose = chooseResponse[0];
                let userResponse = chooseResponse[1];

                if (currentQuiz < (totalQuiz - 1)) {
                    if (isChoose) {
                        $('#quiz-box').slideUp(1000).slideDown(1000);
                        currentQuiz++; 

                        setTimeout(() => {
                            if (currentQuiz < totalQuiz) {
                                setForm(questions[currentQuiz].question, questions[currentQuiz]);
                            }
                        }, 1000);
                         if (currentQuiz === totalQuiz) {
                            $('#btn-next').val('Voir le resultat').attr("id", "btn-resume");
                        }
                        console.log(userResponse);
                        totalPoint = userResponse === true ? (totalPoint + 1) : totalPoint;
                        userResponse = "false"; 
                        console.log(totalPoint);
                    }
                 else {
                    if (isChoose) {
                        console.log(userResponse);
                        totalPoint = userResponse === true? (totalPoint +1) : totalPoint;
                        console.log(totalPoint);
                        if (totalPoint <= (totalQuiz/ 3)) {
                            $('#titre').text("0" + totalPoint + "/" + totalQuiz + "C'est pas");
                            $('#msg-result').text("Oula! Heuseusement que le Riddler est");
                        } else if (totalPoint <= (totalQuiz/2)) {
                            $('#titre').text("0" + totalPoint + "/" + totalQuiz + "Pas mal!");
                             $('#msg-result').text("Encore un peut d'entrainement avec le Chevalier");

                        } else {
                            $('#titre').text("0" + totalPoint + "/" + totalQuiz + "Bravo!");
                            $('#msg-result').text("Vous etes veritablement un super fan de l");
                        }
                        $('#popup-result').css("display", "flex");
                    }
                }
            });
        },
        error: function(questions) {
            console.log(questions);
        },
    });