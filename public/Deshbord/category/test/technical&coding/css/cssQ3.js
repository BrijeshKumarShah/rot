const questions = [
        { num: 1, question: "1 What does the z-index property in CSS control?", options: ["Stacking order of elements", "Font size", "Color saturation", "Line height"], answer: "Stacking order of elements", attempted: false, selected: "" },
        { num: 2, question: "2 Which CSS property is used to control the layout direction in Flexbox?", options: ["flex-direction", "align-items", "justify-content", "direction"], answer: "flex-direction", attempted: false, selected: "" },
        { num: 3, question: "3 How do you apply styles only when printing the page?", options: ["@media print", "@media screen", "@media all", "@media page"], answer: "@media print", attempted: false, selected: "" },
        { num: 4, question: "4 What value of position property removes an element from the document flow?", options: ["absolute", "relative", "static", "inherit"], answer: "absolute", attempted: false, selected: "" },
        { num: 5, question: "5 Which property is used to make text italic in CSS?", options: ["font-style", "font-variant", "font-weight", "text-transform"], answer: "font-style", attempted: false, selected: "" },
        { num: 6, question: "6 How do you make a responsive design in CSS?", options: ["Using media queries", "Using hover effects", "Using z-index", "Using transitions"], answer: "Using media queries", attempted: false, selected: "" },
        { num: 7, question: "7 What is the default value of the position property?", options: ["static", "relative", "absolute", "fixed"], answer: "static", attempted: false, selected: "" },
        { num: 8, question: "8 Which pseudo-class targets the first element of its type?", options: [":first-of-type", ":first-child", ":nth-child(1)", ":first"], answer: ":first-of-type", attempted: false, selected: "" },
        { num: 9, question: "9 How can you apply multiple classes to an HTML element?", options: ["Separate them by space", "Use commas", "Use a semicolon", "Use colons"], answer: "Separate them by space", attempted: false, selected: "" },
        { num: 10, question: "10 What is the function of the calc function in CSS?", options: ["Performs calculations for property values", "Adds colors", "Validates input", "Sets transitions"], answer: "Performs calculations for property values", attempted: false, selected: "" },
        { num: 11, question: "11 Which property allows an element to float to the left or right?", options: ["float", "position", "display", "align"], answer: "float", attempted: false, selected: "" },
        { num: 12, question: "12 What CSS unit is relative to the root element?", options: ["rem", "em", "%", "vw"], answer: "rem", attempted: false, selected: "" },
        { num: 13, question: "13 Which property is used to hide an element without deleting it from the layout?", options: ["visibility", "display", "opacity", "overflow"], answer: "visibility", attempted: false, selected: "" },
        { num: 14, question: "14 What does the inherit value do in CSS?", options: ["Takes the value from the parent element", "Resets the property", "Centers the element", "Adds a shadow"], answer: "Takes the value from the parent element", attempted: false, selected: "" },
        { num: 15, question: "15 Which property controls the speed of animation?", options: ["transition-duration", "animation-delay", "animation-play-state", "transition-property"], answer: "transition-duration", attempted: false, selected: "" },
        { num: 16, question: "16 What selector targets elements with a specific attribute?", options: ["[attribute]", ".attribute", "#attribute", ":attribute"], answer: "[attribute]", attempted: false, selected: "" },
        { num: 17, question: "17 What is the initial value of z-index?", options: ["auto", "0", "1", "-1"], answer: "auto", attempted: false, selected: "" },
        { num: 18, question: "18 Which property defines how overflowed content is handled?", options: ["overflow", "display", "position", "z-index"], answer: "overflow", attempted: false, selected: "" },
        { num: 19, question: "19 What does the :not selector do?", options: ["Excludes specific elements", "Includes specific elements", "Selects nested elements", "Targets all elements"], answer: "Excludes specific elements", attempted: false, selected: "" },
        { num: 20, question: "20 What does the content property require to display generated content?", options: ["::before or ::after", ":hover", ":active", ":focus"], answer: "::before or ::after", attempted: false, selected: "" },
        // 30 more coming in next message due to token limits...        
];

    let currentQuestion = 0;

        function loadQuestion(index) {
            document.getElementById("question").textContent = questions[index].question;
            document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;
            const optionsElement = document.getElementById("options");
            optionsElement.innerHTML = "";
            questions[index].options.forEach(option => {
                optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
            });
            updateCircles();
        }

        function markAttempted(index, selectedAnswer) {
            questions[index].attempted = true;
            questions[index].selected = selectedAnswer;
            updateCircles();
        }

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion(currentQuestion);
            }
        }

        function prevQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion(currentQuestion);
            }
        }

        function updateCircles() {
            const circleContainer = document.getElementById("circleContainer");
            circleContainer.innerHTML = "";
            questions.forEach((q, i) => {
                let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
                circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
            });
        }

        function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };
