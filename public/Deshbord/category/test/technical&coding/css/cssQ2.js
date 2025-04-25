const questions = [
        { num: 1, question: "1 What is the default value of the position property?", options: ["static", "relative", "absolute", "fixed"], answer: "static", attempted: false, selected: "" },
        { num: 2, question: "2 What does the z-index property control?", options: ["Stacking order", "Padding", "Border", "Font size"], answer: "Stacking order", attempted: false, selected: "" },
        { num: 3, question: "3 What does the visibility property control?", options: ["Element visibility", "Opacity", "Display mode", "Z-index"], answer: "Element visibility", attempted: false, selected: "" },
        { num: 4, question: "4 What does display none do to an element?", options: ["Removes it from layout", "Hides it with opacity", "Freezes it", "Makes it scrollable"], answer: "Removes it from layout", attempted: false, selected: "" },
        { num: 5, question: "5 Which property is used to animate transitions?", options: ["transition", "animation", "motion", "transform"], answer: "transition", attempted: false, selected: "" },
        { num: 6, question: "6 What does the flex-wrap property do?", options: ["Allows flex items to wrap", "Reverses flex order", "Aligns content", "Adds spacing"], answer: "Allows flex items to wrap", attempted: false, selected: "" },
        { num: 7, question: "7 What is the default value of the flex-direction property?", options: ["row", "column", "row-reverse", "column-reverse"], answer: "row", attempted: false, selected: "" },
        { num: 8, question: "8 What does the content property affect?", options: ["Pseudo-elements", "Real content", "Image width", "Box model"], answer: "Pseudo-elements", attempted: false, selected: "" },
        { num: 9, question: "9 Which property defines the gap between grid items?", options: ["gap", "spacing", "margin", "padding"], answer: "gap", attempted: false, selected: "" },
        { num: 10, question: "10 What does the auto value do in margin?", options: ["Centers elements", "Removes margin", "Expands box", "Creates padding"], answer: "Centers elements", attempted: false, selected: "" },
        { num: 11, question: "11 Which property is used to make text italic?", options: ["font-style", "font-weight", "text-align", "text-transform"], answer: "font-style", attempted: false, selected: "" },
        { num: 12, question: "12 What is the function of media queries?", options: ["Apply styles based on screen size", "Add animations", "Change layout", "Enable JavaScript"], answer: "Apply styles based on screen size", attempted: false, selected: "" },
        { num: 13, question: "13 What unit is used for root-based font sizing?", options: ["rem", "em", "px", "%"], answer: "rem", attempted: false, selected: "" },
        { num: 14, question: "14 What does the hover pseudo-class apply to?", options: ["When mouse hovers", "When clicked", "When focused", "When touched"], answer: "When mouse hovers", attempted: false, selected: "" },
        { num: 15, question: "15 Which CSS rule overrides others due to high specificity?", options: ["inline style", "class selector", "element selector", "id selector"], answer: "inline style", attempted: false, selected: "" },
        { num: 16, question: "16 What is a pseudo-element?", options: ["Used to style part of element", "JavaScript-based feature", "Attribute", "Browser function"], answer: "Used to style part of element", attempted: false, selected: "" },
        { num: 17, question: "17 What does object-fit cover do?", options: ["Scales to fill and crop", "Fits within bounds", "Stretches", "Fixes width"], answer: "Scales to fill and crop", attempted: false, selected: "" },
        { num: 18, question: "18 What is the default value of box-sizing?", options: ["content-box", "border-box", "auto", "padding-box"], answer: "content-box", attempted: false, selected: "" },
        { num: 19, question: "19 What CSS unit represents 1% of viewport height?", options: ["vh", "vw", "em", "rem"], answer: "vh", attempted: false, selected: "" },
        { num: 20, question: "20 What property is used to apply transparency?", options: ["opacity", "visibility", "display", "alpha"], answer: "opacity", attempted: false, selected: "" },
        { num: 21, question: "21 Which function defines a linear gradient?", options: ["linear-gradient()", "gradient-linear()", "fill-gradient()", "shade()"], answer: "linear-gradient()", attempted: false, selected: "" },
        { num: 22, question: "22 What CSS function clamps values between a min and max?", options: ["clamp()", "minmax()", "between()", "limit()"], answer: "clamp()", attempted: false, selected: "" },
        { num: 23, question: "23 Which property enables element dragging?", options: ["user-select", "draggable", "drag-mode", "pointer"], answer: "user-select", attempted: false, selected: "" },
        { num: 24, question: "24 What does filter blur do?", options: ["Applies blur effect", "Removes shadows", "Increases contrast", "Hides background"], answer: "Applies blur effect", attempted: false, selected: "" },
        { num: 25, question: "25 What property disables user selection?", options: ["user-select: none", "visibility: hidden", "select: disable", "pointer: block"], answer: "user-select: none", attempted: false, selected: "" },
        { num: 26, question: "26 Which shorthand sets animation duration and name?", options: ["animation", "transition", "motion", "effect"], answer: "animation", attempted: false, selected: "" },
        { num: 27, question: "27 What does justify-content space-between do?", options: ["Spreads items with space between", "Centers items", "Right aligns", "Stacks vertically"], answer: "Spreads items with space between", attempted: false, selected: "" },
        { num: 28, question: "28 What does the :checked pseudo-class select?", options: ["Checked inputs", "Focused fields", "Enabled buttons", "All checkboxes"], answer: "Checked inputs", attempted: false, selected: "" },
        { num: 29, question: "29 What property allows transformation effects?", options: ["transform", "scale", "motion", "shift"], answer: "transform", attempted: false, selected: "" },
        { num: 30, question: "30 What does the :not selector do?", options: ["Negates the condition", "Selects all", "Applies all styles", "Only selects inputs"], answer: "Negates the condition", attempted: false, selected: "" },
        { num: 31, question: "31 What is the use of will-change property?", options: ["Hints optimization", "Triggers resize", "Locks position", "Aligns items"], answer: "Hints optimization", attempted: false, selected: "" },
        { num: 32, question: "32 What does text-overflow ellipsis do?", options: ["Shows ... when text overflows", "Hides text", "Wraps text", "Animates text"], answer: "Shows ... when text overflows", attempted: false, selected: "" },
        { num: 33, question: "33 What does overflow hidden do?", options: ["Clips overflowing content", "Hides scrollbars", "Expands box", "Removes padding"], answer: "Clips overflowing content", attempted: false, selected: "" },
        { num: 34, question: "34 What does align-items center do?", options: ["Vertically centers flex items", "Horizontally centers block", "Applies float", "Justifies content"], answer: "Vertically centers flex items", attempted: false, selected: "" },
        { num: 35, question: "35 What CSS rule overrides inline styles?", options: ["!important", "id selector", "class selector", "pseudo-class"], answer: "!important", attempted: false, selected: "" },
        { num: 36, question: "36 What is the use of the calc() function?", options: ["Performs calculations in CSS", "Applies math plugin", "Links JavaScript", "Replaces media queries"], answer: "Performs calculations in CSS", attempted: false, selected: "" },
        { num: 37, question: "37 What does the inherit value do in CSS?", options: ["Inherits property from parent", "Applies to children", "Disables style", "Overrides cascade"], answer: "Inherits property from parent", attempted: false, selected: "" },
        { num: 38, question: "38 What does pointer-events none do?", options: ["Disables click events", "Hides cursor", "Changes color", "Prevents scroll"], answer: "Disables click events", attempted: false, selected: "" },
        { num: 39, question: "39 What is the purpose of :root selector?", options: ["Selects the top-level element", "Targets body", "Applies global styles", "Selects container"], answer: "Selects the top-level element", attempted: false, selected: "" },
        { num: 40, question: "40 What does display contents do?", options: ["Flattens child elements", "Shows debug", "Resets layout", "Adds border"], answer: "Flattens child elements", attempted: false, selected: "" },
        { num: 41, question: "41 What does mix-blend-mode do?", options: ["Changes how content blends", "Sets background image", "Adds transition", "Defines gradient"], answer: "Changes how content blends", attempted: false, selected: "" },
        { num: 42, question: "42 What does scroll-margin control?", options: ["Space when scrolling to element", "Scrollbar width", "Scrolling animation", "Margin while hidden"], answer: "Space when scrolling to element", attempted: false, selected: "" },
        { num: 43, question: "43 What does the attr() function do?", options: ["Accesses HTML attribute values", "Defines style rules", "Sets variables", "Applies fallback"], answer: "Accesses HTML attribute values", attempted: false, selected: "" },
        { num: 44, question: "44 What does isolation isolate do?", options: ["Creates new stacking context", "Blocks pointer events", "Locks animation", "Applies blur"], answer: "Creates new stacking context", attempted: false, selected: "" },
        { num: 45, question: "45 Which property controls white space handling?", options: ["white-space", "space-wrap", "text-spacing", "line-break"], answer: "white-space", attempted: false, selected: "" },
        { num: 46, question: "46 What does the currentColor keyword refer to?", options: ["Current text color", "Border color", "Theme color", "Random color"], answer: "Current text color", attempted: false, selected: "" },
        { num: 47, question: "47 What does min-content represent in layout?", options: ["Minimum size to fit content", "Minimum padding", "Auto resize", "Full width"], answer: "Minimum size to fit content", attempted: false, selected: "" },
        { num: 48, question: "48 Which CSS property controls order in Flexbox?", options: ["order", "flex-order", "position", "z-index"], answer: "order", attempted: false, selected: "" },
        { num: 49, question: "49 What is the function of line-height?", options: ["Spacing between lines", "Text alignment", "Font size", "Element height"], answer: "Spacing between lines", attempted: false, selected: "" },
        { num: 50, question: "50 What CSS property sets spacing between letters?", options: ["letter-spacing", "text-spacing", "line-spacing", "font-spacing"], answer: "letter-spacing", attempted: false, selected: "" }
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
