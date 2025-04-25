const questions = [
        { num: 51, question: "51 What is the purpose of the 'contenteditable' attribute in HTML?", options: ["Make an element editable", "Add metadata", "Embed content", "Make content readonly"], answer: "Make an element editable", attempted: false, selected: "" },
        { num: 52, question: "52 Which HTML attribute is used to specify inline CSS styles?", options: ["style", "css", "inline", "design"], answer: "style", attempted: false, selected: "" },
        { num: 53, question: "53 What is the use of the 'data-*' attribute in HTML?", options: ["To store custom data", "To apply inline CSS", "To validate forms", "To embed videos"], answer: "To store custom data", attempted: false, selected: "" },
        { num: 54, question: "54 Which tag is used to group inline-elements in a document?", options: ["span", "div", "section", "p"], answer: "span", attempted: false, selected: "" },
        { num: 55, question: "55 What does the 'download' attribute do in an <a> tag?", options: ["Downloads linked resource", "Creates dropdown", "Triggers print", "Inserts a file input"], answer: "Downloads linked resource", attempted: false, selected: "" },
        { num: 56, question: "56 Which tag is used to define the footer of a document or section?", options: ["footer", "bottom", "foot", "section-footer"], answer: "footer", attempted: false, selected: "" },
        { num: 57, question: "57 What is the use of the 'autofocus' attribute in a form element?", options: ["Focuses input on page load", "Auto-submits form", "Adds validation", "Hides the input"], answer: "Focuses input on page load", attempted: false, selected: "" },
        { num: 58, question: "58 What does the 'rel' attribute in a link tag define?", options: ["Relationship between current and linked document", "URL of linked file", "Resource path", "CSS syntax"], answer: "Relationship between current and linked document", attempted: false, selected: "" },
        { num: 59, question: "59 What does the 'target' attribute in the <a> tag specify?", options: ["Where to open linked doc", "Opens tooltip", "CSS target ID", "Input placeholder"], answer: "Where to open linked doc", attempted: false, selected: "" },
        { num: 60, question: "60 Which tag is used to declare the document type?", options: ["!DOCTYPE", "doctype", "!HTML", "type"], answer: "!DOCTYPE", attempted: false, selected: "" },
        { num: 61, question: "61 What is the function of the <template> tag in HTML?", options: ["Hold client-side content that is not rendered", "Embed JavaScript", "Create CSS", "Store cookies"], answer: "Hold client-side content that is not rendered", attempted: false, selected: "" },
        { num: 62, question: "62 What does the 'novalidate' attribute on a form do?", options: ["Disables form validation", "Submits automatically", "Resets input", "Validates all inputs"], answer: "Disables form validation", attempted: false, selected: "" },
        { num: 63, question: "63 Which attribute specifies the character encoding for the HTML document?", options: ["charset", "encoding", "lang", "type"], answer: "charset", attempted: false, selected: "" },
        { num: 64, question: "64 What does the 'hidden' attribute do to an HTML element?", options: ["Hides element from view", "Removes element", "Disables element", "Changes visibility"], answer: "Hides element from view", attempted: false, selected: "" },
        { num: 65, question: "65 What is the purpose of the <noscript> tag?", options: ["Displays fallback content if JS is disabled", "Runs script on click", "Hides JavaScript", "Adds a script block"], answer: "Displays fallback content if JS is disabled", attempted: false, selected: "" },
        { num: 66, question: "66 Which attribute helps specify multiple file selection in file input?", options: ["multiple", "multi", "many", "choose"], answer: "multiple", attempted: false, selected: "" },
        { num: 67, question: "67 What does the 'defer' attribute in the <script> tag do?", options: ["Delays script execution", "Deletes script", "Runs script instantly", "Repeats script"], answer: "Delays script execution", attempted: false, selected: "" },
        { num: 68, question: "68 What tag is used for creating progress indicators?", options: ["progress", "loadbar", "meter", "status"], answer: "progress", attempted: false, selected: "" },
        { num: 69, question: "69 What is the function of the <meter> tag?", options: ["Displays scalar value", "Shows time", "Plays audio", "Makes number input"], answer: "Displays scalar value", attempted: false, selected: "" },
        { num: 70, question: "70 Which tag is used for inserting time and date?", options: ["time", "datetime", "date", "calendar"], answer: "time", attempted: false, selected: "" },
        { num: 71, question: "71 What attribute of <input> disables editing?", options: ["readonly", "disabled", "frozen", "block"], answer: "readonly", attempted: false, selected: "" },
        { num: 72, question: "72 Which HTML tag supports drag-and-drop API?", options: ["Any element with draggable attribute", "drag", "dropzone", "draggable"], answer: "Any element with draggable attribute", attempted: false, selected: "" },
        { num: 73, question: "73 What is the purpose of the 'placeholder' attribute?", options: ["Hint inside input field", "Label above field", "Tooltip on focus", "Default value"], answer: "Hint inside input field", attempted: false, selected: "" },
        { num: 74, question: "74 Which attribute limits input characters?", options: ["maxlength", "length", "limit", "maxchars"], answer: "maxlength", attempted: false, selected: "" },
        { num: 75, question: "75 What is the function of the output tag?", options: ["Displays result of calculation", "Prints debug info", "Saves file", "Sends output to server"], answer: "Displays result of calculation", attempted: false, selected: "" },
        { num: 76, question: "76 Which tag groups headings, subheadings, and other info?", options: ["header", "head", "hgroup", "heading"], answer: "hgroup", attempted: false, selected: "" },
        { num: 77, question: "77 What does 'sandbox' attribute in iframe do?", options: ["Applies restrictions", "Loads external script", "Links CSS", "Prevents zoom"], answer: "Applies restrictions", attempted: false, selected: "" },
        { num: 78, question: "78 What tag is used to embed SVG directly into HTML?", options: ["svg", "vector", "graphic", "path"], answer: "svg", attempted: false, selected: "" },
        { num: 79, question: "79 Which HTML tag is used to define keyboard input?", options: ["kbd", "key", "input", "press"], answer: "kbd", attempted: false, selected: "" },
        { num: 80, question: "80 What is the purpose of mark tag?", options: ["Highlight text", "Bold text", "Underline text", "Italic text"], answer: "Highlight text", attempted: false, selected: "" },
        { num: 81, question: "81 What does the 'spellcheck' attribute do?", options: ["Enables/disables spell checking", "Checks password strength", "Validates email", "Limits characters"], answer: "Enables/disables spell checking", attempted: false, selected: "" },
        { num: 82, question: "82 What is the default method of form submission?", options: ["GET", "POST", "PUT", "SEND"], answer: "GET", attempted: false, selected: "" },
        { num: 83, question: "83 What is the 'accesskey' attribute used for?", options: ["Define shortcut key", "Add access roles", "Control zoom", "Disable clicks"], answer: "Define shortcut key", attempted: false, selected: "" },
        { num: 84, question: "84 Which tag is used to define sidebars or additional content?", options: ["aside", "side", "section", "extra"], answer: "aside", attempted: false, selected: "" },
        { num: 85, question: "85 What tag defines a document section?", options: ["section", "div", "group", "main"], answer: "section", attempted: false, selected: "" },
        { num: 86, question: "86 What does the 'autocomplete' attribute do?", options: ["Enables auto-filling input fields", "Auto-types text", "Autoplays form", "Creates tooltips"], answer: "Enables auto-filling input fields", attempted: false, selected: "" },
        { num: 87, question: "87 What is the <bdi> tag used for?", options: ["Isolate text for bidirectional support", "Bold italic text", "Display block inline", "Make text center"], answer: "Isolate text for bidirectional support", attempted: false, selected: "" },
        { num: 88, question: "88 Which tag defines the directionality of text?", options: ["bdo", "dir", "rtl", "direction"], answer: "bdo", attempted: false, selected: "" },
        { num: 89, question: "89 What is the correct HTML element for playing audio?", options: ["audio", "sound", "voice", "track"], answer: "audio", attempted: false, selected: "" },
        { num: 90, question: "90 What is the 'formaction' attribute used for?", options: ["Specifies form action URL", "Validates input", "Redirects after submit", "Disables form"], answer: "Specifies form action URL", attempted: false, selected: "" },
        { num: 91, question: "91 What does the 'enctype' attribute specify in forms?", options: ["Encoding type of form data", "Form language", "Form theme", "CSS styling"], answer: "Encoding type of form data", attempted: false, selected: "" },
        { num: 92, question: "92 What is the purpose of the track tag?", options: ["Adds text tracks to media", "Displays form progress", "Embeds YouTube", "Shows tooltips"], answer: "Adds text tracks to media", attempted: false, selected: "" },
        { num: 93, question: "93 What attribute makes a field required?", options: ["required", "must", "need", "necessary"], answer: "required", attempted: false, selected: "" },
        { num: 94, question: "94 What does the <wbr> tag do?", options: ["Suggests line break opportunity", "Bold text", "Breaks page", "Shows warning"], answer: "Suggests line break opportunity", attempted: false, selected: "" },
        { num: 95, question: "95 What is the use of the 'min' attribute in input type='number'?", options: ["Defines minimum value", "Minimum size", "Minimum length", "Minimum characters"], answer: "Defines minimum value", attempted: false, selected: "" },
        { num: 96, question: "96 What does <details> tag do?", options: ["Creates toggle-able content", "Adds summary", "Links details", "Formats table"], answer: "Creates toggle-able content", attempted: false, selected: "" },
        { num: 97, question: "97 What is the summary tag used for?", options: ["Provides summary for details", "Creates heading", "Summarizes text", "Displays title"], answer: "Provides summary for details", attempted: false, selected: "" },
        { num: 98, question: "98 What tag represents user input?", options: ["samp", "kbd", "input", "user"], answer: "samp", attempted: false, selected: "" },
        { num: 99, question: "99 What does the 'value' attribute in input represent?", options: ["Predefined input value", "Label", "CSS class", "Size"], answer: "Predefined input value", attempted: false, selected: "" },
        { num: 100, question: "100 Which attribute is used to disable form elements?", options: ["disabled", "readonly", "noinput", "hide"], answer: "disabled", attempted: false, selected: "" }    
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
