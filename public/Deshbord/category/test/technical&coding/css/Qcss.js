const questions = [
        { num: 1, question: "1 What does the 'contain' property in CSS do?", options: ["Restricts element rendering", "Makes content responsive", "Aligns children", "Creates scrollable container"], answer: "Restricts element rendering", attempted: false, selected: "" },
        { num: 2, question: "2 Which value of 'object-fit' preserves the aspect ratio and fills the box?", options: ["cover", "contain", "fill", "scale-down"], answer: "cover", attempted: false, selected: "" },
        { num: 3, question: "3 What is the default stacking context level of an element?", options: ["0", "1", "-1", "auto"], answer: "0", attempted: false, selected: "" },
        { num: 4, question: "4 How do you create a triangle shape in CSS?", options: ["Using borders", "Using clip-path", "Using transform", "Using box-shadow"], answer: "Using borders", attempted: false, selected: "" },
        { num: 5, question: "5 Which property allows creating multiple background images?", options: ["background-image", "background-layer", "multi-bg", "background-stack"], answer: "background-image", attempted: false, selected: "" },
        { num: 6, question: "6 Which function repeats a CSS Grid track pattern?", options: ["repeat()", "grid-repeat()", "track()", "loop()"], answer: "repeat()", attempted: false, selected: "" },
        { num: 7, question: "7 What does the 'initial' keyword do in CSS?", options: ["Resets to default browser style", "Inherits from parent", "Removes inline styles", "Applies global theme"], answer: "Resets to default browser style", attempted: false, selected: "" },
        { num: 8, question: "8 Which CSS selector targets every even child?", options: ["nth-child(even)", "nth-child(2n)", "nth-child-odd", "even-child"], answer: "nth-child(2n)", attempted: false, selected: "" },
        { num: 9, question: "9 Which property specifies whether an element is focusable?", options: ["tabindex", "focus", "outline", "z-index"], answer: "tabindex", attempted: false, selected: "" },
        { num: 10, question: "10 What is the purpose of the 'touch-action' property?", options: ["Controls how touch gestures behave", "Disables touch events", "Enables zooming", "Triggers haptic feedback"], answer: "Controls how touch gestures behave", attempted: false, selected: "" },
        { num: 11, question: "11 Which property defines spacing between inline elements?", options: ["letter-spacing", "margin", "word-spacing", "padding-inline"], answer: "word-spacing", attempted: false, selected: "" },
        { num: 12, question: "12 What CSS function is used for responsive typography?", options: ["clamp()", "scale()", "flex()", "font-adjust()"], answer: "clamp()", attempted: false, selected: "" },
        { num: 13, question: "13 Which property lets you scroll smoothly when linking to anchors?", options: ["scroll-behavior", "anchor-scroll", "smooth-anchor", "scroll-mode"], answer: "scroll-behavior", attempted: false, selected: "" },
        { num: 14, question: "14 Which CSS unit is relative to the height of the viewport?", options: ["vh", "em", "rem", "px"], answer: "vh", attempted: false, selected: "" },
        { num: 15, question: "15 Which CSS pseudo-class applies only on keyboard navigation focus?", options: [":focus-visible", ":focus-only", ":key-focus", ":hover"], answer: ":focus-visible", attempted: false, selected: "" },
        { num: 16, question: "16 How do you make an element scroll horizontally with overflow?", options: ["overflow-x: scroll", "scroll: x", "horizontal: auto", "scroll-direction: horizontal"], answer: "overflow-x: scroll", attempted: false, selected: "" },
        { num: 17, question: "17 What is the effect of 'display: flow-root'?", options: ["Creates a new block formatting context", "Hides overflow", "Applies float", "Resets float"], answer: "Creates a new block formatting context", attempted: false, selected: "" },
        { num: 18, question: "18 Which property changes text direction?", options: ["direction", "writing-mode", "text-align", "flow"], answer: "direction", attempted: false, selected: "" },
        { num: 19, question: "19 What does the 'place-items' shorthand set?", options: ["align-items and justify-items", "margin and padding", "grid-template and gap", "text-align and float"], answer: "align-items and justify-items", attempted: false, selected: "" },
        { num: 20, question: "20 What does the ':is()' pseudo-class do?", options: ["Simplifies writing compound selectors", "Applies transitions", "Targets invalid forms", "Negates selectors"], answer: "Simplifies writing compound selectors", attempted: false, selected: "" },
        { num: 21, question: "21 What property helps with alignment in a CSS Grid?", options: ["justify-items", "align-self", "float", "position"], answer: "justify-items", attempted: false, selected: "" },
        { num: 22, question: "22 What does 'scroll-snap-type' do?", options: ["Snaps scrolling to defined positions", "Prevents scroll", "Changes scroll axis", "Applies scroll animation"], answer: "Snaps scrolling to defined positions", attempted: false, selected: "" },
        { num: 23, question: "23 Which property adds animation timing functions?", options: ["animation-timing-function", "animation-speed", "transition-style", "timing-function"], answer: "animation-timing-function", attempted: false, selected: "" },
        { num: 24, question: "24 What does 'overscroll-behavior' control?", options: ["Scroll chaining", "Scroll speed", "Bounce effect", "Scrollbar visibility"], answer: "Scroll chaining", attempted: false, selected: "" },
        { num: 25, question: "25 What is the use of ':where()' pseudo-class?", options: ["Adds no specificity", "Targets invalid elements", "Applies global styles", "Overrides hover"], answer: "Adds no specificity", attempted: false, selected: "" },
        { num: 26, question: "26 What does 'all: unset' do in CSS?", options: ["Removes all inherited and default styles", "Unsets visibility", "Resets fonts", "Removes flex properties"], answer: "Removes all inherited and default styles", attempted: false, selected: "" },
        { num: 27, question: "27 Which property changes the alignment of text inside a block?", options: ["text-align", "justify-content", "align-text", "content-align"], answer: "text-align", attempted: false, selected: "" },
        { num: 28, question: "28 What property allows multiline truncation with ellipsis?", options: ["-webkit-line-clamp", "text-overflow", "line-wrap", "text-collapse"], answer: "-webkit-line-clamp", attempted: false, selected: "" },
        { num: 29, question: "29 Which property applies anti-aliasing to fonts?", options: ["font-smoothing", "-webkit-font-smoothing", "text-rendering", "font-clarity"], answer: "-webkit-font-smoothing", attempted: false, selected: "" },
        { num: 30, question: "30 What CSS function defines a shape for clipping content?", options: ["clip-path()", "crop()", "shape()", "box-clip()"], answer: "clip-path()", attempted: false, selected: "" },
        { num: 31, question: "31 Which property creates a reflection effect?", options: ["-webkit-box-reflect", "box-shadow", "filter", "image-reflect"], answer: "-webkit-box-reflect", attempted: false, selected: "" },
        { num: 32, question: "32 What is the maximum z-index value in modern browsers?", options: ["2147483647", "99999", "1000000", "Infinity"], answer: "2147483647", attempted: false, selected: "" },
        { num: 33, question: "33 How do you create sticky behavior for an element?", options: ["position: sticky", "position: float", "float: sticky", "sticky-mode: on"], answer: "position: sticky", attempted: false, selected: "" },
        { num: 34, question: "34 What is the default writing-mode in English text?", options: ["horizontal-tb", "vertical-rl", "ltr", "auto"], answer: "horizontal-tb", attempted: false, selected: "" },
        { num: 35, question: "35 What does 'column-count' control in multi-column layout?", options: ["Number of columns", "Spacing", "Line-height", "Break behavior"], answer: "Number of columns", attempted: false, selected: "" },
        { num: 36, question: "36 What does 'unicode-bidi: bidi-override' do?", options: ["Reverses text direction", "Changes text language", "Applies italics", "Disables ligatures"], answer: "Reverses text direction", attempted: false, selected: "" },
        { num: 37, question: "37 What pseudo-element selects the first line of a block?", options: ["::first-line", ":line-first", "::top-line", ":first-of-type"], answer: "::first-line", attempted: false, selected: "" },
        { num: 38, question: "38 Which property defines custom markers in list items?", options: ["list-style", "list-marker", "list-symbol", "list-bullet"], answer: "list-style", attempted: false, selected: "" },
        { num: 39, question: "39 What value of 'display' collapses table borders?", options: ["table", "table-collapse", "table-border-collapse", "collapse"], answer: "table", attempted: false, selected: "" },
        { num: 40, question: "40 What does 'pointer-events: none' do?", options: ["Disables mouse interaction", "Disables transitions", "Removes focus", "Hides pointer cursor"], answer: "Disables mouse interaction", attempted: false, selected: "" },
        { num: 41, question: "41 Which property adds 3D transformations?", options: ["transform", "perspective", "translateZ", "rotate3D"], answer: "transform", attempted: false, selected: "" },
        { num: 42, question: "42 What property prevents content from being resized?", options: ["resize: none", "overflow: hidden", "position: fixed", "scale: 0"], answer: "resize: none", attempted: false, selected: "" },
        { num: 43, question: "43 What does 'appearance: none' do?", options: ["Removes browser default styles", "Disables color scheme", "Applies transitions", "Enables animations"], answer: "Removes browser default styles", attempted: false, selected: "" },
        { num: 44, question: "44 Which property adds decorations to text?", options: ["text-decoration", "font-style", "text-effect", "underline"], answer: "text-decoration", attempted: false, selected: "" },
        { num: 45, question: "45 What is the use of 'backdrop-filter'?", options: ["Applies effects behind an element", "Blurs foreground", "Applies shadow", "Darkens images"], answer: "Applies effects behind an element", attempted: false, selected: "" },
        { num: 46, question: "46 How do you select the parent of an element in CSS?", options: [":has()", ":parent", "::parent", ":not()"], answer: ":has()", attempted: false, selected: "" },
        { num: 47, question: "47 Which property adjusts the layout direction of flex items?", options: ["flex-direction", "flow-direction", "align-items", "flex-wrap"], answer: "flex-direction", attempted: false, selected: "" },
        { num: 48, question: "48 What is the purpose of the ':empty' pseudo-class?", options: ["Selects elements with no content", "Applies when input is cleared", "Used in forms", "Indicates error"], answer: "Selects elements with no content", attempted: false, selected: "" },
        { num: 49, question: "49 What does the 'quotes' property define in CSS?", options: ["Defines quotation marks", "Adds blockquotes", "Applies italics", "Styles citations"], answer: "Defines quotation marks", attempted: false, selected: "" },
        { num: 50, question: "50 What does the 'visibility: collapse' property do in tables?", options: ["Hides table rows without affecting layout", "Removes table borders", "Hides table content", "Freezes header"], answer: "Hides table rows without affecting layout", attempted: false, selected: "" }
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
