const questions = [
        { num: 51, question: "51 What is the type of NaN in JavaScript?", options: ["number", "NaN", "undefined", "object"], answer: "number", attempted: false, selected: "" },
        { num: 52, question: "52 What does the `typeof` operator return for `null`?", options: ["object", "null", "undefined", "NaN"], answer: "object", attempted: false, selected: "" },
        { num: 53, question: "53 Which keyword declares a block-scoped variable?", options: ["let", "var", "const", "both let and const"], answer: "both let and const", attempted: false, selected: "" },
        { num: 54, question: "54 How can you convert a string to an integer?", options: ["parseInt()", "Number()", "parseFloat()", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 55, question: "55 What will `Boolean('false')` return?", options: ["true", "false", "NaN", "undefined"], answer: "true", attempted: false, selected: "" },
        { num: 56, question: "56 What is the result of `2 + '2'`?", options: ["'22'", "4", "NaN", "undefined"], answer: "'22'", attempted: false, selected: "" },
        { num: 57, question: "57 Which method converts a JSON string to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "toObject()", "parseJSON()"], answer: "JSON.parse()", attempted: false, selected: "" },
        { num: 58, question: "58 Which array method adds one or more elements to the end?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", attempted: false, selected: "" },
        { num: 59, question: "59 What will `typeof undefined` return?", options: ["undefined", "null", "object", "NaN"], answer: "undefined", attempted: false, selected: "" },
        { num: 60, question: "60 What is an IIFE in JavaScript?", options: ["Immediately Invoked Function Expression", "Internal Interface for Events", "Inline Inheritance Function Execution", "None"], answer: "Immediately Invoked Function Expression", attempted: false, selected: "" },
        { num: 61, question: "61 What does `Array.isArray()` check?", options: ["If value is an array", "If value is object", "If value is iterable", "If value is number"], answer: "If value is an array", attempted: false, selected: "" },
        { num: 62, question: "62 Which symbol is used to define a template literal?", options: ["`", "'", "\"", "~"], answer: "`", attempted: false, selected: "" },
        { num: 63, question: "63 What does the `===` operator compare?", options: ["Value and type", "Only value", "Only type", "None"], answer: "Value and type", attempted: false, selected: "" },
        { num: 64, question: "64 Which statement is true about `const` variables?", options: ["They can't be reassigned", "They can be updated", "They are block-scoped", "Both 1 and 3"], answer: "Both 1 and 3", attempted: false, selected: "" },
        { num: 65, question: "65 What is the output of `[] == false`?", options: ["true", "false", "undefined", "NaN"], answer: "true", attempted: false, selected: "" },
        { num: 66, question: "66 What does the `setTimeout()` function do?", options: ["Executes code after delay", "Repeats execution", "Stops script", "Pauses script"], answer: "Executes code after delay", attempted: false, selected: "" },
        { num: 67, question: "67 Which method removes the first item from an array?", options: ["shift()", "pop()", "splice()", "unshift()"], answer: "shift()", attempted: false, selected: "" },
        { num: 68, question: "68 Which keyword is used to handle exceptions?", options: ["try", "catch", "finally", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 69, question: "69 What is the purpose of `use strict`?", options: ["Enforces stricter parsing and error handling", "Enables TypeScript", "Prevents closures", "None"], answer: "Enforces stricter parsing and error handling", attempted: false, selected: "" },
        { num: 70, question: "70 How can you convert a number to a string?", options: ["toString()", "String()", "Both", "None"], answer: "Both", attempted: false, selected: "" },
        { num: 71, question: "71 What is a closure?", options: ["Function with preserved scope", "Recursive loop", "Object wrapper", "String method"], answer: "Function with preserved scope", attempted: false, selected: "" },
        { num: 72, question: "72 Which method is used to merge arrays?", options: ["concat()", "merge()", "combine()", "join()"], answer: "concat()", attempted: false, selected: "" },
        { num: 73, question: "73 What does `isNaN('abc')` return?", options: ["true", "false", "NaN", "undefined"], answer: "true", attempted: false, selected: "" },
        { num: 74, question: "74 What is hoisting in JavaScript?", options: ["Variable/function declarations moved to top", "Memory leak", "Stack overflow", "None"], answer: "Variable/function declarations moved to top", attempted: false, selected: "" },
        { num: 75, question: "75 What is the default value of `this` in global scope?", options: ["Window object", "null", "undefined", "Object"], answer: "Window object", attempted: false, selected: "" },
        { num: 76, question: "76 What will `console.log(0.1 + 0.2 === 0.3)` output?", options: ["false", "true", "undefined", "NaN"], answer: "false", attempted: false, selected: "" },
        { num: 77, question: "77 What does `.bind()` do?", options: ["Binds `this` to a function", "Joins strings", "Fixes prototype", "None"], answer: "Binds `this` to a function", attempted: false, selected: "" },
        { num: 78, question: "78 Which method checks if every element in array meets condition?", options: ["every()", "some()", "filter()", "includes()"], answer: "every()", attempted: false, selected: "" },
        { num: 79, question: "79 What will `typeof []` return?", options: ["object", "array", "function", "null"], answer: "object", attempted: false, selected: "" },
        { num: 80, question: "80 Which symbol is used for rest/spread operator?", options: ["...", "..", "**", "%%"], answer: "...", attempted: false, selected: "" },
        { num: 81, question: "81 What is the correct syntax for an arrow function?", options: ["()=>{}", "function=>{}", "()=>", "arrow()=>{}"], answer: "()=>{}", attempted: false, selected: "" },
        { num: 82, question: "82 What is `Promise.resolve()` used for?", options: ["Create resolved promise", "Reject promise", "Handle rejection", "Pause execution"], answer: "Create resolved promise", attempted: false, selected: "" },
        { num: 83, question: "83 What does `map()` do in an array?", options: ["Transforms each element", "Filters elements", "Finds index", "Combines arrays"], answer: "Transforms each element", attempted: false, selected: "" },
        { num: 84, question: "84 How do you stop setInterval?", options: ["clearInterval()", "stopInterval()", "cancelInterval()", "pauseInterval()"], answer: "clearInterval()", attempted: false, selected: "" },
        { num: 85, question: "85 What is the output of `typeof null`?", options: ["object", "null", "undefined", "boolean"], answer: "object", attempted: false, selected: "" },
        { num: 86, question: "86 What will `[].length` return?", options: ["0", "undefined", "null", "NaN"], answer: "0", attempted: false, selected: "" },
        { num: 87, question: "87 Which method filters elements based on condition?", options: ["filter()", "map()", "reduce()", "slice()"], answer: "filter()", attempted: false, selected: "" },
        { num: 88, question: "88 What is the result of `'5' - 2`?", options: ["3", "'3'", "52", "NaN"], answer: "3", attempted: false, selected: "" },
        { num: 89, question: "89 Which loop guarantees at least one execution?", options: ["do...while", "for", "while", "forEach"], answer: "do...while", attempted: false, selected: "" },
        { num: 90, question: "90 What does `Object.keys()` return?", options: ["Array of keys", "Array of values", "Array of pairs", "JSON object"], answer: "Array of keys", attempted: false, selected: "" },
        { num: 91, question: "91 What is a callback function?", options: ["Function passed as argument", "Return value", "Variable", "Class"], answer: "Function passed as argument", attempted: false, selected: "" },
        { num: 92, question: "92 What is event bubbling?", options: ["Event propagates upward", "Stops event", "Pauses event", "None"], answer: "Event propagates upward", attempted: false, selected: "" },
        { num: 93, question: "93 What does `Math.floor(4.7)` return?", options: ["4", "5", "4.7", "undefined"], answer: "4", attempted: false, selected: "" },
        { num: 94, question: "94 Which method can convert a value to float?", options: ["parseFloat()", "parseInt()", "Number()", "float()"], answer: "parseFloat()", attempted: false, selected: "" },
        { num: 95, question: "95 What will `typeof Infinity` return?", options: ["number", "infinity", "NaN", "object"], answer: "number", attempted: false, selected: "" },
        { num: 96, question: "96 How can you clone an object?", options: ["Object.assign({}, obj)", "...spread", "JSON methods", "All of these"], answer: "All of these", attempted: false, selected: "" },
        { num: 97, question: "97 What is the output of `'2' * '3'`?", options: ["6", "'23'", "NaN", "undefined"], answer: "6", attempted: false, selected: "" },
        { num: 98, question: "98 Which statement defines a class in ES6?", options: ["class MyClass {}", "function class() {}", "let MyClass = {}", "defineClass()"], answer: "class MyClass {}", attempted: false, selected: "" },
        { num: 99, question: "99 What is `localStorage` used for?", options: ["Storing data in browser", "Server logs", "Session control", "Temporary data"], answer: "Storing data in browser", attempted: false, selected: "" },
        { num: 100, question: "100 What does `Promise.reject()` return?", options: ["A rejected promise", "An error", "Resolved promise", "Null"], answer: "A rejected promise", attempted: false, selected: "" }  
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
