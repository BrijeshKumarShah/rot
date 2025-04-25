const questions = [
        { num: 1, question: "1 Which CSS property controls the stacking order of elements?", options: ["z-index", "position", "stack", "order"], answer: "z-index", attempted: false, selected: "" },
        { num: 2, question: "2 What is the default position value in CSS?", options: ["static", "relative", "absolute", "fixed"], answer: "static", attempted: false, selected: "" },
        { num: 3, question: "3 Which property is used for creating grid layouts?", options: ["display: grid", "layout: grid", "grid-layout", "grid"], answer: "display: grid", attempted: false, selected: "" },
        { num: 4, question: "4 What does the 'rem' unit stand for?", options: ["Root em", "Relative em", "Root element", "Rendered em"], answer: "Root em", attempted: false, selected: "" },
        { num: 5, question: "5 Which CSS pseudo-class selects the first child element?", options: [":first-child", ":first", ":child(1)", ":nth-child(1)"], answer: ":first-child", attempted: false, selected: "" },
        { num: 6, question: "6 How do you apply a style only when hovering over an element?", options: ["selector:hover", "selector:focus", "selector:active", "selector:visited"], answer: "selector:hover", attempted: false, selected: "" },
        { num: 7, question: "7 Which CSS property makes text italic?", options: ["font-style", "font-weight", "text-decoration", "font-variant"], answer: "font-style", attempted: false, selected: "" },
        { num: 8, question: "8 What does 'inherit' do in CSS?", options: ["Inherits value from parent", "Resets value", "Inherits font", "None of the above"], answer: "Inherits value from parent", attempted: false, selected: "" },
        { num: 9, question: "9 What is the difference between em and rem units?", options: ["em is relative to parent, rem to root", "rem is relative to parent, em to root", "both are equal", "they are deprecated"], answer: "em is relative to parent, rem to root", attempted: false, selected: "" },
        { num: 10, question: "10 What does the 'calc()' function do in CSS?", options: ["Calculates a value dynamically", "Renders text", "Applies a color", "Applies animation"], answer: "Calculates a value dynamically", attempted: false, selected: "" },
        { num: 11, question: "11 Which property defines transition duration?", options: ["transition-duration", "animation-time", "duration", "transition-speed"], answer: "transition-duration", attempted: false, selected: "" },
        { num: 12, question: "12 Which media feature targets screen width?", options: ["max-width", "min-device-width", "screen-width", "orientation"], answer: "max-width", attempted: false, selected: "" },
        { num: 13, question: "13 What does the 'object-fit' property do?", options: ["Defines how media fits its box", "Aligns content", "Sets image quality", "Resizes object"], answer: "Defines how media fits its box", attempted: false, selected: "" },
        { num: 14, question: "14 What value of position allows fixed placement relative to viewport?", options: ["fixed", "absolute", "relative", "static"], answer: "fixed", attempted: false, selected: "" },
        { num: 15, question: "15 Which CSS function is used for transformations?", options: ["transform()", "scale()", "rotate()", "translate()"], answer: "transform()", attempted: false, selected: "" },
        { num: 16, question: "16 What CSS property sets the stacking context?", options: ["z-index", "position", "overflow", "opacity"], answer: "z-index", attempted: false, selected: "" },
        { num: 17, question: "17 Which property sets the spacing between lines?", options: ["line-height", "letter-spacing", "text-spacing", "text-height"], answer: "line-height", attempted: false, selected: "" },
        { num: 18, question: "18 What does the 'visibility' property do?", options: ["Controls visibility without affecting layout", "Hides element and removes from flow", "Changes opacity", "Creates animations"], answer: "Controls visibility without affecting layout", attempted: false, selected: "" },
        { num: 19, question: "19 Which selector matches an element with a specific class?", options: [".classname", "#classname", "classname", "*classname"], answer: ".classname", attempted: false, selected: "" },
        { num: 20, question: "20 What is the default display value of a div element?", options: ["block", "inline", "inline-block", "flex"], answer: "block", attempted: false, selected: "" },
        { num: 21, question: "21 Which pseudo-class selects every other element?", options: [":nth-child(even)", ":nth-child(odd)", ":even", ":alt-child"], answer: ":nth-child(even)", attempted: false, selected: "" },
        { num: 22, question: "22 What is a pseudo-element?", options: ["A keyword to style specific parts", "A JavaScript object", "An HTML element", "None of these"], answer: "A keyword to style specific parts", attempted: false, selected: "" },
        { num: 23, question: "23 Which property sets the width of a border?", options: ["border-width", "border-size", "border-thickness", "width"], answer: "border-width", attempted: false, selected: "" },
        { num: 24, question: "24 How do you create a responsive layout?", options: ["Using media queries", "Using position absolute", "Using fixed units", "Using tables"], answer: "Using media queries", attempted: false, selected: "" },
        { num: 25, question: "25 What value of display removes the element from layout?", options: ["none", "hidden", "invisible", "zero"], answer: "none", attempted: false, selected: "" },
        { num: 26, question: "26 Which CSS property is used for transitions?", options: ["transition", "transform", "animate", "duration"], answer: "transition", attempted: false, selected: "" },
        { num: 27, question: "27 What does the '!important' declaration do?", options: ["Overrides other rules", "Sets a comment", "Breaks layout", "Adds animation"], answer: "Overrides other rules", attempted: false, selected: "" },
        { num: 28, question: "28 How do you make a circle using CSS?", options: ["border-radius: 50%", "shape: circle", "border-shape: round", "circle: true"], answer: "border-radius: 50%", attempted: false, selected: "" },
        { num: 29, question: "29 What does flex-wrap: wrap do?", options: ["Wraps items to new lines", "Aligns items to start", "Disables flex", "Fixes container"], answer: "Wraps items to new lines", attempted: false, selected: "" },
        { num: 30, question: "30 What unit is relative to the width of the viewport?", options: ["vw", "vh", "%", "em"], answer: "vw", attempted: false, selected: "" },
        { num: 31, question: "31 Which property aligns items on the cross axis in flexbox?", options: ["align-items", "justify-content", "flex-direction", "text-align"], answer: "align-items", attempted: false, selected: "" },
        { num: 32, question: "32 Which value of overflow adds scrollbars?", options: ["scroll", "auto", "hidden", "visible"], answer: "scroll", attempted: false, selected: "" },
        { num: 33, question: "33 What does opacity: 0 do?", options: ["Hides the element visually", "Removes from DOM", "Reduces size", "Adds animation"], answer: "Hides the element visually", attempted: false, selected: "" },
        { num: 34, question: "34 What is the initial value of the box-sizing property?", options: ["content-box", "border-box", "padding-box", "initial"], answer: "content-box", attempted: false, selected: "" },
        { num: 35, question: "35 How do you center a flex item horizontally?", options: ["justify-content: center", "align-items: center", "margin: auto", "text-align: center"], answer: "justify-content: center", attempted: false, selected: "" },
        { num: 36, question: "36 What property sets background image position?", options: ["background-position", "background-align", "position", "image-align"], answer: "background-position", attempted: false, selected: "" },
        { num: 37, question: "37 What selector matches all elements?", options: ["*", "#", ".", "all"], answer: "*", attempted: false, selected: "" },
        { num: 38, question: "38 Which property clips overflow content?", options: ["overflow", "clip", "hidden", "scroll"], answer: "overflow", attempted: false, selected: "" },
        { num: 39, question: "39 What value of white-space prevents text wrapping?", options: ["nowrap", "no-wrap", "fixed", "inline"], answer: "nowrap", attempted: false, selected: "" },
        { num: 40, question: "40 What does the :not() pseudo-class do?", options: ["Selects elements not matching", "Selects all children", "Disables selection", "Negates visibility"], answer: "Selects elements not matching", attempted: false, selected: "" },
        { num: 41, question: "41 What property defines spacing inside the border?", options: ["padding", "margin", "spacing", "indent"], answer: "padding", attempted: false, selected: "" },
        { num: 42, question: "42 Which property changes the mouse cursor?", options: ["cursor", "pointer", "mouse", "hover"], answer: "cursor", attempted: false, selected: "" },
        { num: 43, question: "43 Which CSS rule creates a delay before transition starts?", options: ["transition-delay", "transition-start", "animation-delay", "delay"], answer: "transition-delay", attempted: false, selected: "" },
        { num: 44, question: "44 What is the use of the content property?", options: ["Inserts generated content", "Adds CSS variables", "Adds padding", "Extends layout"], answer: "Inserts generated content", attempted: false, selected: "" },
        { num: 45, question: "45 What is the highest specificity selector?", options: ["Inline style", "ID selector", "Class selector", "Universal selector"], answer: "Inline style", attempted: false, selected: "" },
        { num: 46, question: "46 Which CSS function creates gradients?", options: ["linear-gradient()", "gradient()", "color-gradient()", "shade()"], answer: "linear-gradient()", attempted: false, selected: "" },
        { num: 47, question: "47 Which property is used for shadows?", options: ["box-shadow", "shadow", "text-shadow", "outer-shadow"], answer: "box-shadow", attempted: false, selected: "" },
        { num: 48, question: "48 Which value of display creates an inline block?", options: ["inline-block", "block-inline", "inline", "flex"], answer: "inline-block", attempted: false, selected: "" },
        { num: 49, question: "49 What is the value of auto in margin used for?", options: ["Centering", "Clearing floats", "Resetting styles", "Aligning right"], answer: "Centering", attempted: false, selected: "" },
        { num: 50, question: "50 Which CSS property controls text overflow?", options: ["text-overflow", "text-wrap", "overflow-text", "overflow"], answer: "text-overflow", attempted: false, selected: "" }    
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
