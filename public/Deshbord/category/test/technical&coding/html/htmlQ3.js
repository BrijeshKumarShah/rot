const questions = [
        { num: 51, question: "51 Which attribute is used to specify a unique identifier for an HTML element?", options: ["id", "class", "name", "key"], answer: "id", attempted: false, selected: "" },
        { num: 52, question: "52 Which attribute helps improve SEO by specifying the relationship between the current document and the linked one?", options: ["rel", "type", "href", "alt"], answer: "rel", attempted: false, selected: "" },
        { num: 53, question: "53 Which attribute defines inline styles for an element?", options: ["style", "css", "class", "design"], answer: "style", attempted: false, selected: "" },
        { num: 54, question: "54 Which HTML element is used to define a scalar measurement within a known range?", options: ["meter", "progress", "range", "scale"], answer: "meter", attempted: false, selected: "" },
        { num: 55, question: "55 What is the purpose of the 'download' attribute in the anchor element?", options: ["Triggers file download", "Opens a file", "Downloads HTML page", "Syncs a file"], answer: "Triggers file download", attempted: false, selected: "" },
        { num: 56, question: "56 Which attribute is used to group form elements together under a label?", options: ["fieldset", "formgroup", "labelgroup", "group"], answer: "fieldset", attempted: false, selected: "" },
        { num: 57, question: "57 What does the 'async' attribute do in a script tag?", options: ["Loads script asynchronously", "Defers execution", "Runs script first", "Runs after page load"], answer: "Loads script asynchronously", attempted: false, selected: "" },
        { num: 58, question: "58 Which attribute is used in forms to disable autocomplete?", options: ["autocomplete='off'", "autofill='false'", "autocomplete='none'", "autofill='off'"], answer: "autocomplete='off'", attempted: false, selected: "" },
        { num: 59, question: "59 Which tag is used to specify a header for a section or article?", options: ["header", "head", "section", "title"], answer: "header", attempted: false, selected: "" },
        { num: 60, question: "60 What is the purpose of the 'novalidate' attribute in a form?", options: ["Disables validation", "Disables submission", "Hides fields", "Ignores required fields"], answer: "Disables validation", attempted: false, selected: "" },
        { num: 61, question: "61 What is the default value of the target attribute in an anchor tag?", options: ["_self", "_blank", "_parent", "_top"], answer: "_self", attempted: false, selected: "" },
        { num: 62, question: "62 Which HTML tag is used to define a footer for a document or section?", options: ["footer", "bottom", "end", "close"], answer: "footer", attempted: false, selected: "" },
        { num: 63, question: "63 Which tag is used to define marked/highlighted text?", options: ["mark", "highlight", "em", "strong"], answer: "mark", attempted: false, selected: "" },
        { num: 64, question: "64 Which tag is used to embed a plugin or third-party application?", options: ["object", "embed", "iframe", "script"], answer: "object", attempted: false, selected: "" },
        { num: 65, question: "65 What is the role of the 'tabindex' attribute?", options: ["Sets tab order", "Sets focus", "Adds tooltip", "Creates tab"], answer: "Sets tab order", attempted: false, selected: "" },
        { num: 66, question: "66 Which tag is used to specify a self-contained piece of content?", options: ["article", "section", "aside", "block"], answer: "article", attempted: false, selected: "" },
        { num: 67, question: "67 Which HTML5 element represents a piece of content that is only indirectly related to the main content?", options: ["aside", "section", "nav", "div"], answer: "aside", attempted: false, selected: "" },
        { num: 68, question: "68 What does the 'hidden' attribute do?", options: ["Hides the element", "Disables the element", "Removes the element", "Minimizes the element"], answer: "Hides the element", attempted: false, selected: "" },
        { num: 69, question: "69 What tag is used to represent user input?", options: ["kbd", "input", "code", "var"], answer: "kbd", attempted: false, selected: "" },
        { num: 70, question: "70 Which tag is used to define variables in programming context?", options: ["var", "code", "samp", "pre"], answer: "var", attempted: false, selected: "" },
        { num: 71, question: "71 What does the 'required' attribute in a form input do?", options: ["Makes the field mandatory", "Highlights field", "Marks optional", "Hides field"], answer: "Makes the field mandatory", attempted: false, selected: "" },
        { num: 72, question: "72 Which tag allows embedding SVG graphics?", options: ["svg", "img", "canvas", "vector"], answer: "svg", attempted: false, selected: "" },
        { num: 73, question: "73 What is the function of the 'srcset' attribute in an img tag?", options: ["Responsive image source", "Sets CSS source", "Defines image caption", "Changes size"], answer: "Responsive image source", attempted: false, selected: "" },
        { num: 74, question: "74 What does the 'sandbox' attribute do in an iframe?", options: ["Applies restrictions", "Blocks JS", "Adds CSS", "Disables iframe"], answer: "Applies restrictions", attempted: false, selected: "" },
        { num: 75, question: "75 What is the use of the 'multiple' attribute in a file input?", options: ["Allows multiple files", "Limits file type", "Adds duplicate field", "Combines files"], answer: "Allows multiple files", attempted: false, selected: "" },
        { num: 76, question: "76 What element should be used to display sample output from a program?", options: ["samp", "output", "code", "pre"], answer: "samp", attempted: false, selected: "" },
        { num: 77, question: "77 Which element represents the result of a calculation?", options: ["output", "result", "value", "calc"], answer: "output", attempted: false, selected: "" },
        { num: 78, question: "78 What tag defines navigation links in HTML5?", options: ["nav", "a", "menu", "ul"], answer: "nav", attempted: false, selected: "" },
        { num: 79, question: "79 Which HTML attribute specifies the character encoding?", options: ["charset", "encoding", "lang", "type"], answer: "charset", attempted: false, selected: "" },
        { num: 80, question: "80 Which tag is used to define an inline frame?", options: ["iframe", "frame", "inline", "embed"], answer: "iframe", attempted: false, selected: "" },
        { num: 81, question: "81 What is the use of the 'poster' attribute in video tag?", options: ["Specifies preview image", "Sets background", "Adds watermark", "Auto-plays"], answer: "Specifies preview image", attempted: false, selected: "" },
        { num: 82, question: "82 What does the 'spellcheck' attribute do?", options: ["Enables spelling check", "Checks grammar", "Highlights field", "Auto-corrects text"], answer: "Enables spelling check", attempted: false, selected: "" },
        { num: 83, question: "83 Which element is used to group heading, navigation and logo together?", options: ["header", "section", "head", "aside"], answer: "header", attempted: false, selected: "" },
        { num: 84, question: "84 What is the purpose of the 'srcdoc' attribute in iframe?", options: ["Embed HTML content", "Specify script", "Load CSS", "Enable inline JS"], answer: "Embed HTML content", attempted: false, selected: "" },
        { num: 85, question: "85 What does the 'readonly' attribute do to an input field?", options: ["Makes it non-editable", "Hides it", "Disables it", "Removes it"], answer: "Makes it non-editable", attempted: false, selected: "" },
        { num: 86, question: "86 What tag is used to define an image map?", options: ["map", "area", "imgmap", "usemap"], answer: "map", attempted: false, selected: "" },
        { num: 87, question: "87 Which attribute is used to reference an image map from an image?", options: ["usemap", "map", "srcmap", "hrefmap"], answer: "usemap", attempted: false, selected: "" },
        { num: 88, question: "88 Which tag defines an area inside an image map?", options: ["area", "region", "mapzone", "hotspot"], answer: "area", attempted: false, selected: "" },
        { num: 89, question: "89 Which input type lets users choose a number?", options: ["number", "text", "range", "numeric"], answer: "number", attempted: false, selected: "" },
        { num: 90, question: "90 Which input type is used for selecting a date?", options: ["date", "calendar", "datetime", "time"], answer: "date", attempted: false, selected: "" },
        { num: 91, question: "91 What does the 'defer' attribute do in script tags?", options: ["Delays execution until parsing ends", "Runs first", "Ignores errors", "Disables script"], answer: "Delays execution until parsing ends", attempted: false, selected: "" },
        { num: 92, question: "92 Which attribute indicates that an input field must be filled out before submitting?", options: ["required", "mandatory", "validate", "mustfill"], answer: "required", attempted: false, selected: "" },
        { num: 93, question: "93 Which tag defines a description/value of a term in a description list?", options: ["dd", "dt", "dl", "desc"], answer: "dd", attempted: false, selected: "" },
        { num: 94, question: "94 Which tag defines a term/name in a description list?", options: ["dt", "dd", "dl", "desc"], answer: "dt", attempted: false, selected: "" },
        { num: 95, question: "95 What is the use of the 'formnovalidate' attribute on a button?", options: ["Skips form validation", "Disables button", "Resets form", "Validates instantly"], answer: "Skips form validation", attempted: false, selected: "" },
        { num: 96, question: "96 What is the correct tag to use for progressive disclosure content?", options: ["details", "summary", "section", "reveal"], answer: "details", attempted: false, selected: "" },
        { num: 97, question: "97 Which tag is used to provide a visible heading for the 'details' element?", options: ["summary", "caption", "label", "title"], answer: "summary", attempted: false, selected: "" },
        { num: 98, question: "98 Which HTML5 element is used to handle different media resources?", options: ["source", "track", "media", "stream"], answer: "source", attempted: false, selected: "" },
        { num: 99, question: "99 What does the 'autofocus' attribute do in an input field?", options: ["Automatically focuses input", "Highlights input", "Saves data", "Clears field"], answer: "Automatically focuses input", attempted: false, selected: "" },
        { num: 100, question: "100 Which tag is used to include time-related data or machine-readable date/time?", options: ["time", "datetime", "clock", "schedule"], answer: "time", attempted: false, selected: "" }  
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
