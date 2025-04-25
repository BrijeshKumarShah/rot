const questions = [
        { num: 101, question: "101 Which tag is used to define the contact information for the author/owner of a document?", options: ["address", "footer", "author", "info"], answer: "address", attempted: false, selected: "" },
        { num: 102, question: "102 What attribute on the form tag specifies where to send form data after submission?", options: ["action", "method", "target", "destination"], answer: "action", attempted: false, selected: "" },
        { num: 103, question: "103 Which value of the 'method' attribute in forms submits data in the URL?", options: ["get", "post", "put", "patch"], answer: "get", attempted: false, selected: "" },
        { num: 104, question: "104 Which input type is used for selecting a color?", options: ["color", "picker", "palette", "paint"], answer: "color", attempted: false, selected: "" },
        { num: 105, question: "105 Which tag represents a container for external application or interactive content (like a browser plug-in)?", options: ["embed", "object", "iframe", "plugin"], answer: "embed", attempted: false, selected: "" },
        { num: 106, question: "106 What does the 'crossorigin' attribute do in HTML?", options: ["Handles CORS for media", "Blocks scripts", "Allows file download", "Sets iframe size"], answer: "Handles CORS for media", attempted: false, selected: "" },
        { num: 107, question: "107 What is the role of the noscript tag?", options: ["Fallback content if JS is disabled", "Disables CSS", "Highlights syntax", "Logs messages"], answer: "Fallback content if JS is disabled", attempted: false, selected: "" },
        { num: 108, question: "108 Which element is used to define a command button the user can invoke?", options: ["button", "input", "command", "action"], answer: "button", attempted: false, selected: "" },
        { num: 109, question: "109 What does the 'type' attribute in button define?", options: ["Behavior of button", "Text style", "Input method", "Submit target"], answer: "Behavior of button", attempted: false, selected: "" },
        { num: 110, question: "110 Which attribute makes input fields automatically complete previous values?", options: ["autocomplete", "autofill", "repeat", "history"], answer: "autocomplete", attempted: false, selected: "" },
        { num: 111, question: "111 What does the legend tag do inside a fieldset?", options: ["Provides caption", "Adds tooltip", "Displays hint", "Creates border"], answer: "Provides caption", attempted: false, selected: "" },
        { num: 112, question: "112 What is the default media type for script elements?", options: ["text/javascript", "application/ecmascript", "application/json", "text/ecmascript"], answer: "text/javascript", attempted: false, selected: "" },
        { num: 113, question: "113 Which tag is used to specify alternative text tracks for video and audio?", options: ["track", "source", "alt", "subtitle"], answer: "track", attempted: false, selected: "" },
        { num: 114, question: "114 What is the purpose of the 'preload' attribute in the video tag?", options: ["Specifies if/how media should load", "Adds buffering", "Starts playback", "Defines image"], answer: "Specifies if/how media should load", attempted: false, selected: "" },
        { num: 115, question: "115 Which tag is used to embed audio content?", options: ["audio", "sound", "media", "embed"], answer: "audio", attempted: false, selected: "" },
        { num: 116, question: "116 What does the 'muted' attribute do in media elements?", options: ["Starts playback with no sound", "Prevents audio tag", "Delays playback", "Disables speaker"], answer: "Starts playback with no sound", attempted: false, selected: "" },
        { num: 117, question: "117 Which HTML tag is used to represent machine-readable date/time?", options: ["time", "meta", "datetime", "timestamp"], answer: "time", attempted: false, selected: "" },
        { num: 118, question: "118 What tag is used to represent a line break?", options: ["br", "hr", "break", "nl"], answer: "br", attempted: false, selected: "" },
        { num: 119, question: "119 What is the semantic difference between strong and b?", options: ["strong implies importance", "b is deprecated", "b changes style only", "No difference"], answer: "strong implies importance", attempted: false, selected: "" },
        { num: 120, question: "120 What is the difference between em and i?", options: ["em adds emphasis", "i is bold", "i is semantic", "No difference"], answer: "em adds emphasis", attempted: false, selected: "" },
        { num: 121, question: "121 What is the purpose of template tag?", options: ["Holds content not rendered immediately", "Stores JavaScript", "Declares CSS", "Embeds SVG"], answer: "Holds content not rendered immediately", attempted: false, selected: "" },
        { num: 122, question: "122 Which tag is used to represent user keyboard input?", options: ["kbd", "samp", "var", "input"], answer: "kbd", attempted: false, selected: "" },
        { num: 123, question: "123 What does the datalist tag do?", options: ["Provides options for input", "Links data", "Stores JSON", "Defines chart"], answer: "Provides options for input", attempted: false, selected: "" },
        { num: 124, question: "124 Which attribute defines the maximum value for a range input?", options: ["max", "limit", "maximum", "top"], answer: "max", attempted: false, selected: "" },
        { num: 125, question: "125 What tag is used for inserting preformatted text?", options: ["pre", "code", "samp", "format"], answer: "pre", attempted: false, selected: "" },
        { num: 126, question: "126 What does the bdi element do?", options: ["Isolates direction of text", "Bolds inline", "Adds emphasis", "Displays in RTL"], answer: "Isolates direction of text", attempted: false, selected: "" },
        { num: 127, question: "127 What is the use of the wbr tag?", options: ["Specifies optional line break", "Wraps text", "Bold text", "Text replacement"], answer: "Specifies optional line break", attempted: false, selected: "" },
        { num: 128, question: "128 What is the function of the output tag?", options: ["Displays calculation result", "Creates output file", "Prints log", "Returns script"], answer: "Displays calculation result", attempted: false, selected: "" },
        { num: 129, question: "129 Which attribute allows specifying a custom icon for a web page in the browser tab?", options: ["rel='icon'", "href='logo.ico'", "type='image/x-icon'", "icon='favicon.ico'"], answer: "rel='icon'", attempted: false, selected: "" },
        { num: 130, question: "130 What attribute of img helps in lazy loading images?", options: ["loading='lazy'", "lazyload='true'", "defer='true'", "delay='image'"], answer: "loading='lazy'", attempted: false, selected: "" },
        { num: 131, question: "131 What element allows native validation messages?", options: ["input with 'pattern'", "fieldset", "message", "legend"], answer: "input with 'pattern'", attempted: false, selected: "" },
        { num: 132, question: "132 Which HTML attribute helps accessibility by providing extra context to screen readers?", options: ["aria-label", "label", "role", "tabindex"], answer: "aria-label", attempted: false, selected: "" },
        { num: 133, question: "133 Which HTML tag should you use to specify meta information such as description or keywords?", options: ["meta", "head", "script", "data"], answer: "meta", attempted: false, selected: "" },
        { num: 134, question: "134 What does the 'lang' attribute define in the HTML tag?", options: ["Language of document", "Text direction", "Encoding", "Locale time"], answer: "Language of document", attempted: false, selected: "" },
        { num: 135, question: "135 What does the abbr tag define?", options: ["Abbreviation", "Author", "Article", "Address"], answer: "Abbreviation", attempted: false, selected: "" },
        { num: 136, question: "136 What is the use of the cite tag?", options: ["Cites reference title", "Cites URL", "Displays author", "Links citation"], answer: "Cites reference title", attempted: false, selected: "" },
        { num: 137, question: "137 What does the 'contenteditable' attribute do?", options: ["Makes element editable", "Adds WYSIWYG", "Highlights content", "Saves text"], answer: "Makes element editable", attempted: false, selected: "" },
        { num: 138, question: "138 Which element is used to add a horizontal rule?", options: ["hr", "line", "border", "br"], answer: "hr", attempted: false, selected: "" },
        { num: 139, question: "139 What is the purpose of the caption tag?", options: ["Title for table", "Title for image", "Tooltip", "Paragraph caption"], answer: "Title for table", attempted: false, selected: "" },
        { num: 140, question: "140 What does the 'scope' attribute in th define?", options: ["Column or row relation", "Direction of header", "Visibility", "Access level"], answer: "Column or row relation", attempted: false, selected: "" },
        { num: 141, question: "141 What tag is used to define grouped options inside a select?", options: ["optgroup", "option", "datalist", "selectgroup"], answer: "optgroup", attempted: false, selected: "" },
        { num: 142, question: "142 What does the 'multiple' attribute in select enable?", options: ["Multiple option selection", "Duplicate field", "Add custom options", "Multiple submits"], answer: "Multiple option selection", attempted: false, selected: "" },
        { num: 143, question: "143 What does the bdo tag do?", options: ["Overrides text direction", "Bold text", "Breaks output", "Displays overlay"], answer: "Overrides text direction", attempted: false, selected: "" },
        { num: 144, question: "144 What is the default direction of text in HTML?", options: ["Left to right", "Right to left", "Top to bottom", "Depends on lang"], answer: "Left to right", attempted: false, selected: "" },
        { num: 145, question: "145 What does the 'rel' attribute in a define?", options: ["Relationship to current doc", "Redirect behavior", "Role of anchor", "Text direction"], answer: "Relationship to current doc", attempted: false, selected: "" },
        { num: 146, question: "146 What tag is used for defining keyboard shortcuts?", options: ["kbd", "key", "shortcut", "ctrl"], answer: "kbd", attempted: false, selected: "" },
        { num: 147, question: "147 What does the s tag represent?", options: ["Strikethrough text", "Small text", "Script block", "Static text"], answer: "Strikethrough text", attempted: false, selected: "" },
        { num: 148, question: "148 What is the function of the progress tag?", options: ["Represents progress bar", "Shows percentage", "Tracks user input", "Times animation"], answer: "Represents progress bar", attempted: false, selected: "" },
        { num: 149, question: "149 Which tag is used to define text direction and override it if necessary?", options: ["bdo", "dir", "bdi", "span"], answer: "bdo", attempted: false, selected: "" },
        { num: 150, question: "150 What is the purpose of the meta name='viewport' tag in responsive design?", options: ["Controls layout on mobile", "Adds zoom", "Sets screen size", "Defines browser size"], answer: "Controls layout on mobile", attempted: false, selected: "" }    
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
