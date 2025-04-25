const questions = [
        { num: 51, question: "51 What is the output of 'typeof null' in JavaScript?", options: ["object", "null", "undefined", "boolean"], answer: "object", attempted: false, selected: "" },
        { num: 52, question: "52 How do you declare a constant in JavaScript?", options: ["const", "let", "var", "constant"], answer: "const", attempted: false, selected: "" },
        { num: 53, question: "53 What is the purpose of 'use strict'?", options: ["Enforces strict mode", "Defines strict variables", "Declares constants", "Enables debugging"], answer: "Enforces strict mode", attempted: false, selected: "" },
        { num: 54, question: "54 Which method adds one or more elements to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", attempted: false, selected: "" },
        { num: 55, question: "55 What is the output of 0 == '0'?", options: ["true", "false", "undefined", "error"], answer: "true", attempted: false, selected: "" },
        { num: 56, question: "56 Which operator checks both value and type?", options: ["===", "==", "=", "!="], answer: "===", attempted: false, selected: "" },
        { num: 57, question: "57 What is a closure in JavaScript?", options: ["Function with preserved data", "Global function", "Callback", "Arrow function"], answer: "Function with preserved data", attempted: false, selected: "" },
        { num: 58, question: "58 What does NaN stand for?", options: ["Not a Number", "No any Number", "Null and None", "New async Name"], answer: "Not a Number", attempted: false, selected: "" },
        { num: 59, question: "59 Which function parses a string to an integer?", options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"], answer: "parseInt()", attempted: false, selected: "" },
        { num: 60, question: "60 How do you write a comment in JavaScript?", options: ["// comment", "<!-- comment -->", "# comment", "/* comment"], answer: "// comment", attempted: false, selected: "" },
        { num: 61, question: "61 What is the output of typeof undefined?", options: ["undefined", "null", "object", "string"], answer: "undefined", attempted: false, selected: "" },
        { num: 62, question: "62 Which array method removes the last item?", options: ["pop()", "shift()", "splice()", "slice()"], answer: "pop()", attempted: false, selected: "" },
        { num: 63, question: "63 What does the 'this' keyword refer to?", options: ["Current object context", "Global object", "Parent function", "Document object"], answer: "Current object context", attempted: false, selected: "" },
        { num: 64, question: "64 Which keyword is used to define a class?", options: ["class", "function", "object", "new"], answer: "class", attempted: false, selected: "" },
        { num: 65, question: "65 What is the correct syntax for an arrow function?", options: ["() => {}", "function() => {}", "() -> {}", "=> function()"], answer: "() => {}", attempted: false, selected: "" },
        { num: 66, question: "66 Which built-in method reverses the elements of an array?", options: ["reverse()", "flip()", "sort()", "invert()"], answer: "reverse()", attempted: false, selected: "" },
        { num: 67, question: "67 Which of the following is a falsy value?", options: ["0", "''", "null", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 68, question: "68 What is the output of 2 + '2'?", options: ["'22'", "4", "NaN", "undefined"], answer: "'22'", attempted: false, selected: "" },
        { num: 69, question: "69 What does setTimeout() do?", options: ["Delays execution", "Repeats code", "Blocks execution", "Clears memory"], answer: "Delays execution", attempted: false, selected: "" },
        { num: 70, question: "70 Which keyword is used to handle exceptions?", options: ["try", "catch", "throw", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 71, question: "71 Which object is the root of the DOM hierarchy?", options: ["document", "window", "html", "body"], answer: "document", attempted: false, selected: "" },
        { num: 72, question: "72 How do you check if a variable is an array?", options: ["Array.isArray()", "typeof", "isArray()", "instanceof ArrayList"], answer: "Array.isArray()", attempted: false, selected: "" },
        { num: 73, question: "73 What is the purpose of JSON.stringify?", options: ["Convert object to JSON", "Parse JSON", "Validate JSON", "Escape characters"], answer: "Convert object to JSON", attempted: false, selected: "" },
        { num: 74, question: "74 Which event occurs when the user clicks on an HTML element?", options: ["onclick", "onhover", "onmouseclick", "onpress"], answer: "onclick", attempted: false, selected: "" },
        { num: 75, question: "75 How can you create an object in JavaScript?", options: ["{}", "new Object()", "Object.create()", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 76, question: "76 What is the output of typeof []?", options: ["object", "array", "list", "undefined"], answer: "object", attempted: false, selected: "" },
        { num: 77, question: "77 Which method converts a JSON string to an object?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "eval()"], answer: "JSON.parse()", attempted: false, selected: "" },
        { num: 78, question: "78 What is an Immediately Invoked Function Expression (IIFE)?", options: ["Function that runs as soon as defined", "Function with no name", "Arrow function", "Callback"], answer: "Function that runs as soon as defined", attempted: false, selected: "" },
        { num: 79, question: "79 What is hoisting in JavaScript?", options: ["Variable/function declarations moved to top", "Raising an error", "Calling function early", "Delaying execution"], answer: "Variable/function declarations moved to top", attempted: false, selected: "" },
        { num: 80, question: "80 What does the map() method do?", options: ["Creates a new array", "Sorts an array", "Mutates original array", "Filters an array"], answer: "Creates a new array", attempted: false, selected: "" },
        { num: 81, question: "81 What is the output of '5' - 2?", options: ["3", "'3'", "NaN", "52"], answer: "3", attempted: false, selected: "" },
        { num: 82, question: "82 Which loop is best for iterating over an array?", options: ["for", "forEach", "while", "do...while"], answer: "forEach", attempted: false, selected: "" },
        { num: 83, question: "83 How do you stop an interval timer?", options: ["clearInterval()", "stopInterval()", "clearTimer()", "cancelInterval()"], answer: "clearInterval()", attempted: false, selected: "" },
        { num: 84, question: "84 What is the use of the 'new' keyword?", options: ["Create instances of objects", "Declare variables", "Return functions", "Call functions"], answer: "Create instances of objects", attempted: false, selected: "" },
        { num: 85, question: "85 Which symbol is used for template literals?", options: ["`", "'", "\"", "~"], answer: "`", attempted: false, selected: "" },
        { num: 86, question: "86 What does the spread operator (...) do?", options: ["Expands elements", "Sums numbers", "Joins arrays", "Multiplies arrays"], answer: "Expands elements", attempted: false, selected: "" },
        { num: 87, question: "87 What is the result of '2' + 2 + 2?", options: ["222", "6", "'6'", "'22'"], answer: "222", attempted: false, selected: "" },
        { num: 88, question: "88 What is the difference between let and var?", options: ["Scope and hoisting", "Type", "Memory", "Syntax"], answer: "Scope and hoisting", attempted: false, selected: "" },
        { num: 89, question: "89 Which method is used to join array elements into a string?", options: ["join()", "toString()", "concat()", "split()"], answer: "join()", attempted: false, selected: "" },
        { num: 90, question: "90 Which method removes the first element of an array?", options: ["shift()", "unshift()", "pop()", "splice()"], answer: "shift()", attempted: false, selected: "" },
        { num: 91, question: "91 What does the break statement do?", options: ["Exits loop", "Skips iteration", "Restarts loop", "Ends program"], answer: "Exits loop", attempted: false, selected: "" },
        { num: 92, question: "92 Which keyword is used to return a value from a function?", options: ["return", "break", "exit", "yield"], answer: "return", attempted: false, selected: "" },
        { num: 93, question: "93 How do you define a default parameter?", options: ["function(x = 1)", "function x=1()", "def x=1", "function(x:1)"], answer: "function(x = 1)", attempted: false, selected: "" },
        { num: 94, question: "94 What is the output of typeof NaN?", options: ["number", "NaN", "undefined", "object"], answer: "number", attempted: false, selected: "" },
        { num: 95, question: "95 What does the 'instanceof' operator do?", options: ["Checks object type", "Creates instance", "Imports module", "Declares class"], answer: "Checks object type", attempted: false, selected: "" },
        { num: 96, question: "96 What is the use of break in a switch statement?", options: ["Exits switch", "Skips case", "Continues loop", "Ends script"], answer: "Exits switch", attempted: false, selected: "" },
        { num: 97, question: "97 Which object is used for math operations?", options: ["Math", "Calc", "Number", "Integer"], answer: "Math", attempted: false, selected: "" },
        { num: 98, question: "98 Which method adds an element to the beginning of an array?", options: ["unshift()", "shift()", "push()", "prepend()"], answer: "unshift()", attempted: false, selected: "" },
        { num: 99, question: "99 What is the use of filter() method?", options: ["Returns array with elements that pass condition", "Sorts array", "Removes all falsy values", "Joins array"], answer: "Returns array with elements that pass condition", attempted: false, selected: "" },
        { num: 100, question: "100 What will Boolean('false') return?", options: ["true", "false", "undefined", "error"], answer: "true", attempted: false, selected: "" }
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
