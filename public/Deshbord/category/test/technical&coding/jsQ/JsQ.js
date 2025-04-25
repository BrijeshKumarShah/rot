const questions = [   
        { num: 1, question: "1 What is the output of typeof null in JavaScript?", options: ["object", "null", "undefined", "function"], answer: "object", attempted: false, selected: "" },
        { num: 2, question: "2 Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", attempted: false, selected: "" },
        { num: 3, question: "3 Which keyword declares a constant in JavaScript?", options: ["const", "let", "var", "constant"], answer: "const", attempted: false, selected: "" },
        { num: 4, question: "4 How do you write a comment in JavaScript?", options: ["// comment", "# comment", "<!-- comment -->", "** comment"], answer: "// comment", attempted: false, selected: "" },
        { num: 5, question: "5 What is the correct syntax to create a function?", options: ["function myFunc()", "create function myFunc()", "function:myFunc()", "myFunc = function[]"], answer: "function myFunc()", attempted: false, selected: "" },
        { num: 6, question: "6 Which operator is used to compare both value and type?", options: ["===", "==", "!=", "="], answer: "===", attempted: false, selected: "" },
        { num: 7, question: "7 What does NaN stand for?", options: ["Not a Number", "No a Number", "Null and None", "New at Number"], answer: "Not a Number", attempted: false, selected: "" },
        { num: 8, question: "8 What is the output of 2 + '2'?", options: ["'22'", "4", "NaN", "undefined"], answer: "'22'", attempted: false, selected: "" },
        { num: 9, question: "9 Which keyword is used to declare a variable?", options: ["let", "var", "const", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 10, question: "10 What is the scope of a variable declared with var?", options: ["Function scope", "Block scope", "Global scope", "Module scope"], answer: "Function scope", attempted: false, selected: "" },
        { num: 11, question: "11 How do you check if an array includes an item?", options: ["includes()", "has()", "contains()", "exist()"], answer: "includes()", attempted: false, selected: "" },
        { num: 12, question: "12 What is the default value of an uninitialized variable?", options: ["undefined", "null", "0", "false"], answer: "undefined", attempted: false, selected: "" },
        { num: 13, question: "13 Which object represents the browser window?", options: ["window", "document", "screen", "navigator"], answer: "window", attempted: false, selected: "" },
        { num: 14, question: "14 What method is used to select an element by ID?", options: ["getElementById()", "querySelector()", "getElementsByName()", "getById()"], answer: "getElementById()", attempted: false, selected: "" },
        { num: 15, question: "15 Which method removes the last item from an array?", options: ["pop()", "shift()", "splice()", "removeLast()"], answer: "pop()", attempted: false, selected: "" },
        { num: 16, question: "16 How do you convert a string to a number?", options: ["parseInt()", "Number()", "parseFloat()", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 17, question: "17 What is a closure in JavaScript?", options: ["A function with access to outer scope", "A function inside an object", "An event handler", "A type of loop"], answer: "A function with access to outer scope", attempted: false, selected: "" },
        { num: 18, question: "18 What is the value of true + false?", options: ["1", "truefalse", "NaN", "0"], answer: "1", attempted: false, selected: "" },
        { num: 19, question: "19 How do you stop a loop in JavaScript?", options: ["break", "stop", "exit", "return"], answer: "break", attempted: false, selected: "" },
        { num: 20, question: "20 What does the '===' operator do?", options: ["Strict equality check", "Assign value", "Compare strings", "Check type only"], answer: "Strict equality check", attempted: false, selected: "" },
        { num: 21, question: "21 What will `typeof []` return?", options: ["object", "array", "list", "undefined"], answer: "object", attempted: false, selected: "" },
        { num: 22, question: "22 What is the result of '5' - 2?", options: ["3", "'3'", "52", "NaN"], answer: "3", attempted: false, selected: "" },
        { num: 23, question: "23 How can you detect if a variable is an array?", options: ["Array.isArray()", "isArray()", "typeof === 'array'", "instanceof ArrayList"], answer: "Array.isArray()", attempted: false, selected: "" },
        { num: 24, question: "24 What does the spread operator (...) do?", options: ["Expands iterable values", "Copies variables", "Performs division", "Joins strings"], answer: "Expands iterable values", attempted: false, selected: "" },
        { num: 25, question: "25 What is the correct way to write an arrow function?", options: ["const f = () => {}", "function => () {}", "() -> {}", "const => f() {}"], answer: "const f = () => {}", attempted: false, selected: "" },
        { num: 26, question: "26 What will `console.log('5' * 2)` output?", options: ["10", "'10'", "'52'", "NaN"], answer: "10", attempted: false, selected: "" },
        { num: 27, question: "27 Which loop is guaranteed to run at least once?", options: ["do...while", "for", "while", "foreach"], answer: "do...while", attempted: false, selected: "" },
        { num: 28, question: "28 How do you define a class in JavaScript?", options: ["class MyClass {}", "function class() {}", "define class MyClass {}", "object class {}"], answer: "class MyClass {}", attempted: false, selected: "" },
        { num: 29, question: "29 What does 'this' refer to in a method?", options: ["The object the method belongs to", "Global object", "Parent class", "Undefined"], answer: "The object the method belongs to", attempted: false, selected: "" },
        { num: 30, question: "30 How do you handle exceptions in JS?", options: ["try...catch", "if...else", "throw...catch", "onError"], answer: "try...catch", attempted: false, selected: "" },
        { num: 31, question: "31 What is the purpose of the 'return' statement?", options: ["To return a value from a function", "To loop again", "To exit program", "To define variable"], answer: "To return a value from a function", attempted: false, selected: "" },
        { num: 32, question: "32 What is an Immediately Invoked Function Expression (IIFE)?", options: ["Function that runs instantly", "Named function", "Arrow function", "Async function"], answer: "Function that runs instantly", attempted: false, selected: "" },
        { num: 33, question: "33 Which method converts JSON to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "convertJSON()"], answer: "JSON.parse()", attempted: false, selected: "" },
        { num: 34, question: "34 What is the output of typeof undefined?", options: ["undefined", "null", "object", "false"], answer: "undefined", attempted: false, selected: "" },
        { num: 35, question: "35 Which keyword is used for asynchronous code?", options: ["async", "await", "then", "callback"], answer: "async", attempted: false, selected: "" },
        { num: 36, question: "36 Which object handles dates in JavaScript?", options: ["Date", "Time", "Clock", "Calendar"], answer: "Date", attempted: false, selected: "" },
        { num: 37, question: "37 How do you write a ternary operator?", options: ["condition ? true : false", "if ? true : false", "true if condition else false", "true ? condition : false"], answer: "condition ? true : false", attempted: false, selected: "" },
        { num: 38, question: "38 What is the result of 0 == false?", options: ["true", "false", "error", "undefined"], answer: "true", attempted: false, selected: "" },
        { num: 39, question: "39 Which method joins all elements of an array into a string?", options: ["join()", "toString()", "concat()", "combine()"], answer: "join()", attempted: false, selected: "" },
        { num: 40, question: "40 How do you create an object?", options: ["let obj = {}", "let obj = []", "let obj = new Array()", "let obj = ()"], answer: "let obj = {}", attempted: false, selected: "" },
        { num: 41, question: "41 What is the result of typeof NaN?", options: ["number", "NaN", "undefined", "object"], answer: "number", attempted: false, selected: "" },
        { num: 42, question: "42 How do you prevent default form submission?", options: ["event.preventDefault()", "stop()", "return false", "cancelDefault()"], answer: "event.preventDefault()", attempted: false, selected: "" },
        { num: 43, question: "43 What method adds elements to the beginning of an array?", options: ["unshift()", "shift()", "push()", "prepend()"], answer: "unshift()", attempted: false, selected: "" },
        { num: 44, question: "44 What is a promise in JavaScript?", options: ["An object representing async completion", "A variable", "A loop", "A function"], answer: "An object representing async completion", attempted: false, selected: "" },
        { num: 45, question: "45 What is hoisting in JavaScript?", options: ["Variables/functions moved to top", "Sorting array", "Event bubbling", "None of the above"], answer: "Variables/functions moved to top", attempted: false, selected: "" },
        { num: 46, question: "46 What does setTimeout do?", options: ["Delays code execution", "Repeats code", "Stops execution", "Exits function"], answer: "Delays code execution", attempted: false, selected: "" },
        { num: 47, question: "47 What is the output of '5' == 5?", options: ["true", "false", "error", "undefined"], answer: "true", attempted: false, selected: "" },
        { num: 48, question: "48 What is the use of the 'new' keyword?", options: ["Creates instance of object", "Creates new variable", "Imports module", "Creates scope"], answer: "Creates instance of object", attempted: false, selected: "" },
        { num: 49, question: "49 What is event bubbling?", options: ["Events propagate up DOM tree", "Events go in circle", "Events don’t work", "Events fire once"], answer: "Events propagate up DOM tree", attempted: false, selected: "" },
        { num: 50, question: "50 What is the result of typeof function(){}?", options: ["function", "object", "undefined", "method"], answer: "function", attempted: false, selected: "" }  
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
