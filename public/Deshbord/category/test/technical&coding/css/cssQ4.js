const questions = [
        { num: 1, question: "1 What does the z-index property control in CSS?", options: ["Stacking order of elements", "Zoom level", "Text indentation", "Opacity level"], answer: "Stacking order of elements", attempted: false, selected: "" },
        { num: 2, question: "2 Which property is used to create a flexible layout using Flexbox?", options: ["display", "position", "float", "overflow"], answer: "display", attempted: false, selected: "" },
        { num: 3, question: "3 What value of the position property positions an element relative to the viewport?", options: ["fixed", "absolute", "relative", "static"], answer: "fixed", attempted: false, selected: "" },
        { num: 4, question: "4 What is the default value of the position property in CSS?", options: ["static", "relative", "absolute", "inherit"], answer: "static", attempted: false, selected: "" },
        { num: 5, question: "5 What CSS property is used to apply animations?", options: ["animation", "transition", "transform", "effect"], answer: "animation", attempted: false, selected: "" },
        { num: 6, question: "6 Which CSS property is used to make an element responsive?", options: ["max-width", "min-height", "position", "z-index"], answer: "max-width", attempted: false, selected: "" },
        { num: 7, question: "7 What property sets how a background image will scroll with the page?", options: ["background-attachment", "background-scroll", "scroll-behavior", "scroll-attachment"], answer: "background-attachment", attempted: false, selected: "" },
        { num: 8, question: "8 What unit is relative to the root element's font size?", options: ["rem", "em", "px", "vh"], answer: "rem", attempted: false, selected: "" },
        { num: 9, question: "9 What is the function of the ::before pseudo-element?", options: ["Insert content before an element", "Target parent element", "Target hover state", "Style first line of content"], answer: "Insert content before an element", attempted: false, selected: "" },
        { num: 10, question: "10 How do you apply a transition effect to multiple properties?", options: ["Separate them with commas", "Use multiple transition tags", "Only one can be applied", "Wrap in a group tag"], answer: "Separate them with commas", attempted: false, selected: "" },
        { num: 11, question: "11 What property makes text unselectable?", options: ["user-select", "pointer-events", "text-style", "visibility"], answer: "user-select", attempted: false, selected: "" },
        { num: 12, question: "12 Which CSS function is used to apply calculations?", options: ["calc()", "compute()", "eval()", "calculate()"], answer: "calc()", attempted: false, selected: "" },
        { num: 13, question: "13 What value of display creates a grid layout?", options: ["grid", "flex", "block", "inline-block"], answer: "grid", attempted: false, selected: "" },
        { num: 14, question: "14 What does the 'clamp()' function do in CSS?", options: ["Clamps a value between min and max", "Limits padding", "Fixes overflow", "Combines classes"], answer: "Clamps a value between min and max", attempted: false, selected: "" },
        { num: 15, question: "15 What property is used to change the stacking order of flex items?", options: ["order", "index", "z-index", "flex-order"], answer: "order", attempted: false, selected: "" },
        { num: 16, question: "16 Which pseudo-class selects the first child element?", options: [":first-child", ":first", ":nth-child(1)", ":first-of-type"], answer: ":first-child", attempted: false, selected: "" },
        { num: 17, question: "17 Which property controls how content overflows its container?", options: ["overflow", "visibility", "display", "z-index"], answer: "overflow", attempted: false, selected: "" },
        { num: 18, question: "18 How can you select an element with an attribute 'data-id' in CSS?", options: ["[data-id]", "#data-id", ".data-id", "data-id"], answer: "[data-id]", attempted: false, selected: "" },
        { num: 19, question: "19 What property is used to align items vertically in Flexbox?", options: ["align-items", "justify-content", "vertical-align", "position"], answer: "align-items", attempted: false, selected: "" },
        { num: 20, question: "20 Which property is used to apply shadows to elements?", options: ["box-shadow", "shadow", "filter", "text-shadow"], answer: "box-shadow", attempted: false, selected: "" },
        { num: 21, question: "21 What is the function of the isolation property in CSS?", options: ["Creates a new stacking context", "Hides an element", "Resets inherited styles", "Separates siblings"], answer: "Creates a new stacking context", attempted: false, selected: "" },
        { num: 22, question: "22 How do you apply styles only if a parent element is hovered?", options: ["Use :hover on parent and target child", "Use @hover", "Use child:hover", "Use parent-child:hover"], answer: "Use :hover on parent and target child", attempted: false, selected: "" },
        { num: 23, question: "23 Which function makes elements blur or change brightness?", options: ["filter", "opacity", "transform", "blend-mode"], answer: "filter", attempted: false, selected: "" },
        { num: 24, question: "24 Which property defines the size of the gap in a grid layout?", options: ["gap", "grid-gap", "spacing", "row-gap"], answer: "gap", attempted: false, selected: "" },
        { num: 25, question: "25 How do you create a CSS variable?", options: ["--name: value;", "$name: value;", "var-name: value;", "name: value;"], answer: "--name: value;", attempted: false, selected: "" },
        { num: 26, question: "26 What is the purpose of the :not() pseudo-class?", options: ["Excludes specific elements from styling", "Negates hover effect", "Selects the parent element", "Applies default style"], answer: "Excludes specific elements from styling", attempted: false, selected: "" },
        { num: 27, question: "27 What does minmax() do in CSS Grid?", options: ["Defines min and max size of columns or rows", "Limits element size", "Defines margin and padding", "Specifies range of grid areas"], answer: "Defines min and max size of columns or rows", attempted: false, selected: "" },
        { num: 28, question: "28 What does object-fit: cover do to an image?", options: ["Fills container while maintaining aspect ratio", "Stretches image", "Crops image to fit container", "Fits width only"], answer: "Fills container while maintaining aspect ratio", attempted: false, selected: "" },
        { num: 29, question: "29 Which property hides an element but keeps space?", options: ["visibility: hidden", "display: none", "opacity: 0", "z-index: -1"], answer: "visibility: hidden", attempted: false, selected: "" },
        { num: 30, question: "30 What CSS property helps with accessibility by hiding content visually?", options: ["clip", "position: absolute", "display: none", "visibility: hidden"], answer: "clip", attempted: false, selected: "" },
        { num: 31, question: "31 What does will-change property do?", options: ["Hints browser for future changes", "Changes element ID", "Triggers transition", "Preloads font"], answer: "Hints browser for future changes", attempted: false, selected: "" },
        { num: 32, question: "32 Which property defines how the background image is positioned?", options: ["background-position", "image-align", "position", "background-align"], answer: "background-position", attempted: false, selected: "" },
        { num: 33, question: "33 What does the display: contents property do?", options: ["Makes container disappear but keeps children visible", "Hides element", "Displays as content box", "Sets flex display"], answer: "Makes container disappear but keeps children visible", attempted: false, selected: "" },
        { num: 34, question: "34 How can you animate a transform property smoothly?", options: ["transition", "animation", "filter", "translate"], answer: "transition", attempted: false, selected: "" },
        { num: 35, question: "35 What property is used to wrap text within an element?", options: ["word-wrap", "text-overflow", "white-space", "wrap"], answer: "word-wrap", attempted: false, selected: "" },
        { num: 36, question: "36 What value of position allows absolutely positioned children?", options: ["relative", "static", "fixed", "none"], answer: "relative", attempted: false, selected: "" },
        { num: 37, question: "37 What is the purpose of mix-blend-mode in CSS?", options: ["Controls how content blends with background", "Mixes fonts", "Blurs image", "Combines transitions"], answer: "Controls how content blends with background", attempted: false, selected: "" },
        { num: 38, question: "38 How do you prevent white space from collapsing?", options: ["white-space: pre", "overflow: scroll", "display: block", "padding: 0"], answer: "white-space: pre", attempted: false, selected: "" },
        { num: 39, question: "39 Which selector targets all checked checkboxes?", options: ["input:checked", ".checkbox", "input[type=checkbox]", "checkbox:checked"], answer: "input:checked", attempted: false, selected: "" },
        { num: 40, question: "40 What is the default value of overflow property?", options: ["visible", "hidden", "auto", "scroll"], answer: "visible", attempted: false, selected: "" },
        { num: 41, question: "41 Which value for align-items places items at the start of the cross axis?", options: ["flex-start", "center", "baseline", "stretch"], answer: "flex-start", attempted: false, selected: "" },
        { num: 42, question: "42 What is the default flex-direction?", options: ["row", "column", "column-reverse", "row-reverse"], answer: "row", attempted: false, selected: "" },
        { num: 43, question: "43 What value of overflow hides scrollbars but still scrolls?", options: ["hidden", "scroll", "auto", "clip"], answer: "auto", attempted: false, selected: "" },
        { num: 44, question: "44 Which CSS rule prevents user text selection?", options: ["user-select: none", "select: false", "text-select: disable", "disable-select: true"], answer: "user-select: none", attempted: false, selected: "" },
        { num: 45, question: "45 What is the purpose of the unicode-bidi property?", options: ["Control text direction", "Change font", "Handle hover states", "Set character encoding"], answer: "Control text direction", attempted: false, selected: "" },
        { num: 46, question: "46 Which CSS property is used to define a custom cursor?", options: ["cursor", "mouse", "pointer", "icon"], answer: "cursor", attempted: false, selected: "" },
        { num: 47, question: "47 How do you inherit a CSS value from a parent?", options: ["inherit", "initial", "none", "default"], answer: "inherit", attempted: false, selected: "" },
        { num: 48, question: "48 Which pseudo-class targets the last element of a type?", options: [":last-of-type", ":last-child", ":end", ":final"], answer: ":last-of-type", attempted: false, selected: "" },
        { num: 49, question: "49 What value of display hides an element and removes it from layout?", options: ["none", "hidden", "block", "collapse"], answer: "none", attempted: false, selected: "" },
        { num: 50, question: "50 Which CSS feature allows different styles depending on screen size?", options: ["media queries", "flexbox", "grid", "animations"], answer: "media queries", attempted: false, selected: "" }   
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
