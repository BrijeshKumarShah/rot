const questions = [
        { num: 101, question: "101 What does the 'aria-hidden' attribute do?", options: ["Hides element from assistive tech", "Removes from DOM", "Hides with CSS", "Disables element"], answer: "Hides element from assistive tech", attempted: false, selected: "" },
        { num: 102, question: "102 Which HTML element is most appropriate for navigation links?", options: ["nav", "menu", "ul", "aside"], answer: "nav", attempted: false, selected: "" },
        { num: 103, question: "103 What does 'role=\"button\"' do in HTML?", options: ["Defines an element as a button for screen readers", "Adds default button styles", "Submits form", "Makes div clickable"], answer: "Defines an element as a button for screen readers", attempted: false, selected: "" },
        { num: 104, question: "104 Which tag is best used for embedding machine-readable data?", options: ["script type='application/ld+json'", "meta", "object", "iframe"], answer: "script type='application/ld+json'", attempted: false, selected: "" },
        { num: 105, question: "105 What is the use of the 'aria-label' attribute?", options: ["Provides an accessible name", "Adds a tooltip", "Displays validation", "Sets focus"], answer: "Provides an accessible name", attempted: false, selected: "" },
        { num: 106, question: "106 What does the picture element do?", options: ["Provides multiple image sources", "Defines a thumbnail", "Shows zoomed image", "Creates a gallery"], answer: "Provides multiple image sources", attempted: false, selected: "" },
        { num: 107, question: "107 What is the 'srcset' attribute used for in img?", options: ["Responsive images", "Lazy loading", "Video source", "Audio source"], answer: "Responsive images", attempted: false, selected: "" },
        { num: 108, question: "108 What does 'lazy' value for the 'loading' attribute do?", options: ["Defers loading of offscreen images", "Loads images first", "Preloads fonts", "Prioritizes CSS"], answer: "Defers loading of offscreen images", attempted: false, selected: "" },
        { num: 109, question: "109 What does 'type=module' do in script tag?", options: ["Enables JavaScript modules", "Minifies JS", "Runs code in sandbox", "Enables debugging"], answer: "Enables JavaScript modules", attempted: false, selected: "" },
        { num: 110, question: "110 What does the dialog element provide?", options: ["Native modal dialog", "Alert box", "Form container", "CSS panel"], answer: "Native modal dialog", attempted: false, selected: "" },
        { num: 111, question: "111 Which attribute specifies whether a form field should be auto-completed?", options: ["autocomplete", "autofill", "autotype", "autoinput"], answer: "autocomplete", attempted: false, selected: "" },
        { num: 112, question: "112 Which attribute links a label to a form control?", options: ["for", "id", "name", "target"], answer: "for", attempted: false, selected: "" },
        { num: 113, question: "113 What is the difference between b and strong?", options: ["strong indicates importance", "b is for semantic emphasis", "No difference", "strong only works with CSS"], answer: "strong indicates importance", attempted: false, selected: "" },
        { num: 114, question: "114 What does the main tag represent?", options: ["Central content of document", "Header section", "Form layout", "Footer section"], answer: "Central content of document", attempted: false, selected: "" },
        { num: 115, question: "115 What attribute defines the relationship between form controls and form when not nested?", options: ["form", "target", "linked", "id"], answer: "form", attempted: false, selected: "" },
        { num: 116, question: "116 What does 'spellcheck=\"true\"' do?", options: ["Enables spell checking", "Fixes grammar", "Auto-corrects", "Highlights incorrect tags"], answer: "Enables spell checking", attempted: false, selected: "" },
        { num: 117, question: "117 What does 'aria-expanded' indicate?", options: ["State of collapsible element", "Defines hidden input", "Shows image is enlarged", "Detects mouse clicks"], answer: "State of collapsible element", attempted: false, selected: "" },
        { num: 118, question: "118 Which tag is used for breadcrumb navigation?", options: ["nav with aria-label", "track", "navpath", "dir"], answer: "nav with aria-label", attempted: false, selected: "" },
        { num: 119, question: "119 What is the purpose of the abbr tag?", options: ["Defines abbreviations with tooltip", "Shortens text", "Converts to uppercase", "Displays short label"], answer: "Defines abbreviations with tooltip", attempted: false, selected: "" },
        { num: 120, question: "120 What does the 'formnovalidate' attribute do?", options: ["Skips validation on submit", "Clears form fields", "Disables form", "Validates only text inputs"], answer: "Skips validation on submit", attempted: false, selected: "" },
        { num: 121, question: "121 What does the fieldset element do?", options: ["Groups related form fields", "Defines checkboxes", "Disables radio buttons", "Enables layout grid"], answer: "Groups related form fields", attempted: false, selected: "" },
        { num: 122, question: "122 What is the use of the legend tag?", options: ["Title for fieldset", "Creates tooltip", "Table legend", "Image caption"], answer: "Title for fieldset", attempted: false, selected: "" },
        { num: 123, question: "123 Which tag is used to define preformatted text?", options: ["pre", "code", "text", "format"], answer: "pre", attempted: false, selected: "" },
        { num: 124, question: "124 What does output typically work with?", options: ["input, select, and datalist", "meter", "span", "label"], answer: "input, select, and datalist", attempted: false, selected: "" },
        { num: 125, question: "125 Which tag defines sample output from a program?", options: ["samp", "kbd", "output", "code"], answer: "samp", attempted: false, selected: "" },
        { num: 126, question: "126 What does 'accept' attribute in file input do?", options: ["Limits file types", "Sets file size", "Defines file name", "Limits input length"], answer: "Limits file types", attempted: false, selected: "" },
        { num: 127, question: "127 What is a void element in HTML?", options: ["An element with no closing tag", "An invalid tag", "A broken element", "A hidden element"], answer: "An element with no closing tag", attempted: false, selected: "" },
        { num: 128, question: "128 What is the use of base tag in HTML?", options: ["Sets base URL for relative links", "Applies base CSS", "Links parent", "Defines base script"], answer: "Sets base URL for relative links", attempted: false, selected: "" },
        { num: 129, question: "129 Which tag defines vector graphics?", options: ["svg", "graphics", "vml", "canvas"], answer: "svg", attempted: false, selected: "" },
        { num: 130, question: "130 What is the purpose of the 'integrity' attribute in script or link?", options: ["Ensures file hasn’t been tampered", "Adds SSL", "Caches script", "Encrypts file"], answer: "Ensures file hasn’t been tampered", attempted: false, selected: "" },
        { num: 131, question: "131 Which tag provides fallback content for unsupported browsers?", options: ["noscript", "fallback", "alt", "hidden"], answer: "noscript", attempted: false, selected: "" },
        { num: 132, question: "132 What is the correct tag for defining a figure caption?", options: ["figcaption", "caption", "legend", "title"], answer: "figcaption", attempted: false, selected: "" },
        { num: 133, question: "133 What does the embed tag do?", options: ["Embeds external content", "Plays audio", "Inserts video", "Adds links"], answer: "Embeds external content", attempted: false, selected: "" },
        { num: 134, question: "134 What is the purpose of the 'sandbox' attribute in iframe?", options: ["Restricts iframe behavior", "Improves SEO", "Adds comments", "Enables popups"], answer: "Restricts iframe behavior", attempted: false, selected: "" },
        { num: 135, question: "135 Which element is used to define a citation?", options: ["cite", "ref", "quote", "source"], answer: "cite", attempted: false, selected: "" },
        { num: 136, question: "136 What does the 'draggable' attribute do?", options: ["Makes element draggable", "Enables input", "Allows sorting", "Activates hover"], answer: "Makes element draggable", attempted: false, selected: "" },
        { num: 137, question: "137 Which element is used for interactive disclosure widgets?", options: ["details", "summary", "widget", "reveal"], answer: "details", attempted: false, selected: "" },
        { num: 138, question: "138 What is the use of time element?", options: ["Machine-readable date/time", "Timer function", "Countdown", "Display local time"], answer: "Machine-readable date/time", attempted: false, selected: "" },
        { num: 139, question: "139 What is the role of code element?", options: ["Displays code snippet", "Runs JavaScript", "Adds formatting", "Syntax checks"], answer: "Displays code snippet", attempted: false, selected: "" },
        { num: 140, question: "140 Which tag is used to define a section that contains contact information?", options: ["address", "footer", "info", "contact"], answer: "address", attempted: false, selected: "" },
        { num: 141, question: "141 What does the 'pattern' attribute in input validate?", options: ["Input against regex", "CSS class", "Input format only", "Image upload"], answer: "Input against regex", attempted: false, selected: "" },
        { num: 142, question: "142 What does the canvas element do?", options: ["Draws graphics with scripting", "Shows image", "Plays video", "Stores cache"], answer: "Draws graphics with scripting", attempted: false, selected: "" },
        { num: 143, question: "143 What is the track element used for?", options: ["Captions/subtitles for media", "Audio control", "Scrollbar", "Mouse tracking"], answer: "Captions/subtitles for media", attempted: false, selected: "" },
        { num: 144, question: "144 What is the default character encoding of HTML5?", options: ["UTF-8", "ASCII", "ISO-8859-1", "Unicode"], answer: "UTF-8", attempted: false, selected: "" },
        { num: 145, question: "145 What attribute is used to auto-focus an input when page loads?", options: ["autofocus", "focus", "active", "default"], answer: "autofocus", attempted: false, selected: "" },
        { num: 146, question: "146 What tag is semantically used for defining emphasized text?", options: ["em", "i", "strong", "mark"], answer: "em", attempted: false, selected: "" },
        { num: 147, question: "147 Which tag defines a variable in a mathematical expression or programming context?", options: ["var", "code", "kbd", "samp"], answer: "var", attempted: false, selected: "" },
        { num: 148, question: "148 What does the del tag represent?", options: ["Deleted text", "Unordered list", "Link text", "Disabled button"], answer: "Deleted text", attempted: false, selected: "" },
        { num: 149, question: "149 What tag defines content inserted into a document?", options: ["ins", "add", "update", "extra"], answer: "ins", attempted: false, selected: "" },
        { num: 150, question: "150 What does object tag do?", options: ["Embeds external objects like PDFs or media", "Displays images", "Renders HTML", "Creates interactive quizzes"], answer: "Embeds external objects like PDFs or media", attempted: false, selected: "" }     
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
