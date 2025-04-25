const questions = [
        { num: 1, question: "1 What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"], answer: "Hyper Text Markup Language", attempted: false, selected: "" },
        { num: 2, question: "2 What is the correct HTML tag for inserting a line break?", options: ["br", "lb", "break", "newline"], answer: "br", attempted: false, selected: "" },
        { num: 3, question: "3 Which HTML tag is used to define an unordered list?", options: ["ul", "ol", "li", "list"], answer: "ul", attempted: false, selected: "" },
        { num: 4, question: "4 Which tag is used to create a hyperlink in HTML?", options: ["a", "link", "href", "url"], answer: "a", attempted: false, selected: "" },
        { num: 5, question: "5 Which HTML attribute specifies an alternate text for an image?", options: ["alt", "src", "title", "href"], answer: "alt", attempted: false, selected: "" },
        { num: 6, question: "6 What is the correct HTML tag to make text bold?", options: ["b", "strong", "bold", "em"], answer: "b", attempted: false, selected: "" },
        { num: 7, question: "7 What is the correct HTML element for the largest heading?", options: ["h1", "h6", "head", "heading"], answer: "h1", attempted: false, selected: "" },
        { num: 8, question: "8 How can you make a numbered list?", options: ["ol", "ul", "li", "list"], answer: "ol", attempted: false, selected: "" },
        { num: 9, question: "9 What is the correct HTML tag for inserting an image?", options: ["img", "image", "src", "pic"], answer: "img", attempted: false, selected: "" },
        { num: 10, question: "10 Which tag is used to define a table in HTML?", options: ["table", "tab", "tr", "td"], answer: "table", attempted: false, selected: "" },
        { num: 11, question: "11 Which tag defines a list item?", options: ["li", "ul", "ol", "item"], answer: "li", attempted: false, selected: "" },
        { num: 12, question: "12 What does the <a> tag stand for?", options: ["Anchor", "Attach", "Apply", "Append"], answer: "Anchor", attempted: false, selected: "" },
        { num: 13, question: "13 Which tag is used for creating forms in HTML?", options: ["form", "input", "fieldset", "label"], answer: "form", attempted: false, selected: "" },
        { num: 14, question: "14 What tag is used for inserting a checkbox?", options: ["input type='checkbox'", "checkbox", "input type='check'", "check"], answer: "input type='checkbox'", attempted: false, selected: "" },
        { num: 15, question: "15 Which HTML tag is used for JavaScript code?", options: ["script", "js", "javascript", "code"], answer: "script", attempted: false, selected: "" },
        { num: 16, question: "16 Which tag defines the HTML document's body?", options: ["body", "main", "content", "section"], answer: "body", attempted: false, selected: "" },
        { num: 17, question: "17 What is the correct tag for a line across the page?", options: ["hr", "line", "br", "border"], answer: "hr", attempted: false, selected: "" },
        { num: 18, question: "18 What is the purpose of the title tag?", options: ["Defines the document title in the browser tab", "Displays large heading", "Creates a hyperlink", "Adds a tooltip"], answer: "Defines the document title in the browser tab", attempted: false, selected: "" },
        { num: 19, question: "19 Which tag contains metadata about the document?", options: ["head", "meta", "header", "info"], answer: "head", attempted: false, selected: "" },
        { num: 20, question: "20 What tag is used to display preformatted text?", options: ["pre", "code", "text", "p"], answer: "pre", attempted: false, selected: "" },
        { num: 21, question: "21 How do you write a comment in HTML?", options: ["!-- comment --", "// comment", "/* comment */", "# comment"], answer: "!-- comment --", attempted: false, selected: "" },
        { num: 22, question: "22 What is the function of the <em> tag?", options: ["Italic text", "Bold text", "Underline text", "Strike text"], answer: "Italic text", attempted: false, selected: "" },
        { num: 23, question: "23 Which tag defines a caption for a table?", options: ["caption", "head", "label", "title"], answer: "caption", attempted: false, selected: "" },
        { num: 24, question: "24 Which tag is used for inline styling?", options: ["span", "style", "div", "css"], answer: "span", attempted: false, selected: "" },
        { num: 25, question: "25 What is the correct way to add a background color?", options: ["style='background-color:red'", "bg='red'", "background='red'", "color='red'"], answer: "style='background-color:red'", attempted: false, selected: "" },
        { num: 26, question: "26 What is the correct HTML element to play a video file?", options: ["video", "media", "movie", "mp4"], answer: "video", attempted: false, selected: "" },
        { num: 27, question: "27 What does the <link> tag do?", options: ["Links external CSS", "Creates hyperlink", "Adds script", "Inserts image"], answer: "Links external CSS", attempted: false, selected: "" },
        { num: 28, question: "28 Which input type is used for email in forms?", options: ["type='email'", "type='text'", "type='mail'", "type='e'"], answer: "type='email'", attempted: false, selected: "" },
        { num: 29, question: "29 What does the <fieldset> tag do?", options: ["Groups form elements", "Creates a box", "Creates dropdown", "Highlights text"], answer: "Groups form elements", attempted: false, selected: "" },
        { num: 30, question: "30 Which tag adds a label to form controls?", options: ["label", "caption", "tag", "span"], answer: "label", attempted: false, selected: "" },
        { num: 31, question: "31 Which HTML element is used to define navigation links?", options: ["nav", "menu", "link", "navigate"], answer: "nav", attempted: false, selected: "" },
        { num: 32, question: "32 What does the <meta> tag provide?", options: ["Metadata", "Script", "Style", "Content"], answer: "Metadata", attempted: false, selected: "" },
        { num: 33, question: "33 Which tag is used for audio content?", options: ["audio", "sound", "voice", "music"], answer: "audio", attempted: false, selected: "" },
        { num: 34, question: "34 What does the <abbr> tag represent?", options: ["Abbreviation", "Bold text", "Article", "Anchor"], answer: "Abbreviation", attempted: false, selected: "" },
        { num: 35, question: "35 What does the <code> tag do?", options: ["Displays code", "Makes text bold", "Makes text italic", "Adds a comment"], answer: "Displays code", attempted: false, selected: "" },
        { num: 36, question: "36 What tag creates a drop-down list?", options: ["select", "dropdown", "list", "option"], answer: "select", attempted: false, selected: "" },
        { num: 37, question: "37 Which HTML tag is used to define a term in a definition list?", options: ["dt", "dd", "dl", "li"], answer: "dt", attempted: false, selected: "" },
        { num: 38, question: "38 What does <dl> stand for?", options: ["Definition List", "Description Line", "Data Layout", "Display List"], answer: "Definition List", attempted: false, selected: "" },
        { num: 39, question: "39 Which tag is used for the main content?", options: ["main", "section", "body", "div"], answer: "main", attempted: false, selected: "" },
        { num: 40, question: "40 What is the correct way to link CSS to HTML?", options: ["link rel='stylesheet' href='style.css'", "css src='style.css'", "<style src='style.css'>", "stylesheet"], answer: "link rel='stylesheet' href='style.css'", attempted: false, selected: "" },
        { num: 41, question: "41 What tag defines a block of text quoted from another source?", options: ["blockquote", "q", "quote", "cite"], answer: "blockquote", attempted: false, selected: "" },
        { num: 42, question: "42 What does the <canvas> tag do?", options: ["Draw graphics", "Display images", "Add text", "Embed videos"], answer: "Draw graphics", attempted: false, selected: "" },
        { num: 43, question: "43 Which HTML element is used to embed an external webpage?", options: ["iframe", "embed", "object", "frame"], answer: "iframe", attempted: false, selected: "" },
        { num: 44, question: "44 Which tag is used to display short inline quotations?", options: ["q", "quote", "cite", "blockquote"], answer: "q", attempted: false, selected: "" },
        { num: 45, question: "45 Which tag represents contact information?", options: ["address", "contact", "info", "footer"], answer: "address", attempted: false, selected: "" },
        { num: 46, question: "46 Which input type is used for passwords?", options: ["type='password'", "type='text'", "type='hidden'", "type='secure'"], answer: "type='password'", attempted: false, selected: "" },
        { num: 47, question: "47 What does the <sup> tag define?", options: ["Superscript text", "Subscript text", "Bold text", "Header text"], answer: "Superscript text", attempted: false, selected: "" },
        { num: 48, question: "48 What does the <sub> tag define?", options: ["Subscript text", "Superscript text", "Paragraph text", "Heading text"], answer: "Subscript text", attempted: false, selected: "" },
        { num: 49, question: "49 Which HTML tag is used for adding tooltips?", options: ["title", "alt", "label", "tooltip"], answer: "title", attempted: false, selected: "" },
        { num: 50, question: "50 Which tag is used to define emphasized text?", options: ["em", "strong", "b", "i"], answer: "em", attempted: false, selected: "" }     
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
