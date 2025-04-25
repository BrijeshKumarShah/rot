const questions = [
        { num: 1, question: "1 What is the output of 'typeof null'?", options: ["object", "null", "undefined", "number"], answer: "object", attempted: false, selected: "" },
        { num: 2, question: "2 Which method converts a JSON string into a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: "JSON.parse()", attempted: false, selected: "" },
        { num: 3, question: "3 Which keyword declares a block-scoped variable?", options: ["let", "var", "const", "both let and const"], answer: "both let and const", attempted: false, selected: "" },
        { num: 4, question: "4 What will '2' + 2 evaluate to?", options: ["22", "4", "NaN", "undefined"], answer: "22", attempted: false, selected: "" },
        { num: 5, question: "5 Which method adds one or more elements to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", attempted: false, selected: "" },
        { num: 6, question: "6 What is the result of 0 == '0'?", options: ["true", "false", "NaN", "undefined"], answer: "true", attempted: false, selected: "" },
        { num: 7, question: "7 Which operator checks both value and type?", options: ["===", "==", "=", "!=="], answer: "===", attempted: false, selected: "" },
        { num: 8, question: "8 How do you define a function in JavaScript?", options: ["function myFunc() {}", "def myFunc() {}", "func myFunc()", "void myFunc()"], answer: "function myFunc() {}", attempted: false, selected: "" },
        { num: 9, question: "9 Which array method removes the first element?", options: ["shift()", "pop()", "splice()", "slice()"], answer: "shift()", attempted: false, selected: "" },
        { num: 10, question: "10 How do you write a comment in JavaScript?", options: ["// comment", "# comment", "<!-- comment -->", "' comment"], answer: "// comment", attempted: false, selected: "" },
        { num: 11, question: "11 What will 'typeof NaN' return?", options: ["number", "NaN", "undefined", "object"], answer: "number", attempted: false, selected: "" },
        { num: 12, question: "12 Which built-in method combines two arrays?", options: ["concat()", "merge()", "join()", "combine()"], answer: "concat()", attempted: false, selected: "" },
        { num: 13, question: "13 Which keyword is used to define a constant in JavaScript?", options: ["const", "let", "var", "static"], answer: "const", attempted: false, selected: "" },
        { num: 14, question: "14 What does 'this' refer to in a method?", options: ["The object that owns the method", "The global object", "The method itself", "The parent function"], answer: "The object that owns the method", attempted: false, selected: "" },
        { num: 15, question: "15 Which symbol is used for single-line comments?", options: ["//", "/*", "--", "##"], answer: "//", attempted: false, selected: "" },
        { num: 16, question: "16 How do you write an arrow function?", options: ["const fn = () => {}", "function => fn() {}", "fn = -> () {}", "arrow fn() => {}"], answer: "const fn = () => {}", attempted: false, selected: "" },
        { num: 17, question: "17 Which method returns the index of the first match in a string?", options: ["indexOf()", "search()", "match()", "includes()"], answer: "indexOf()", attempted: false, selected: "" },
        { num: 18, question: "18 Which keyword is used to handle exceptions?", options: ["try", "catch", "throw", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 19, question: "19 What is the output of 'Boolean(0)'?", options: ["false", "true", "0", "undefined"], answer: "false", attempted: false, selected: "" },
        { num: 20, question: "20 Which method returns the number of elements in an array?", options: ["length", "count", "size", "index"], answer: "length", attempted: false, selected: "" },
        { num: 21, question: "21 How do you create an object in JavaScript?", options: ["let obj = {}", "let obj = []", "let obj = ()", "let obj = <>"], answer: "let obj = {}", attempted: false, selected: "" },
        { num: 22, question: "22 Which loop ensures the code block runs at least once?", options: ["do...while", "while", "for", "forEach"], answer: "do...while", attempted: false, selected: "" },
        { num: 23, question: "23 How do you check if a value is an array?", options: ["Array.isArray()", "isArray()", "typeof array", "array.type()"], answer: "Array.isArray()", attempted: false, selected: "" },
        { num: 24, question: "24 What is 'undefined' in JavaScript?", options: ["A variable declared but not assigned", "An error", "A string", "A reserved word"], answer: "A variable declared but not assigned", attempted: false, selected: "" },
        { num: 25, question: "25 Which string method returns part of the string?", options: ["slice()", "splice()", "split()", "join()"], answer: "slice()", attempted: false, selected: "" },
        { num: 26, question: "26 Which keyword declares a variable globally (not recommended)?", options: ["var", "global", "let", "const"], answer: "var", attempted: false, selected: "" },
        { num: 27, question: "27 How can you convert a string to a number?", options: ["parseInt()", "parseFloat()", "Number()", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 28, question: "28 What does '===' mean in JavaScript?", options: ["Equal value and type", "Equal value", "Assignment", "Strict inequality"], answer: "Equal value and type", attempted: false, selected: "" },
        { num: 29, question: "29 Which method is used to filter array elements?", options: ["filter()", "map()", "reduce()", "forEach()"], answer: "filter()", attempted: false, selected: "" },
        { num: 30, question: "30 How do you declare a class in JavaScript?", options: ["class MyClass {}", "function MyClass()", "let MyClass = {}", "MyClass = class()"], answer: "class MyClass {}", attempted: false, selected: "" },
        { num: 31, question: "31 What will '1' + 2 + 3 evaluate to?", options: ["123", "33", "6", "undefined"], answer: "123", attempted: false, selected: "" },
        { num: 32, question: "32 Which method executes a function on each array element?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: "forEach()", attempted: false, selected: "" },
        { num: 33, question: "33 How do you stop a loop in JavaScript?", options: ["break", "return", "stop", "exit"], answer: "break", attempted: false, selected: "" },
        { num: 34, question: "34 What is a closure in JavaScript?", options: ["A function with access to its outer scope", "A function that returns another function", "A private function", "None of these"], answer: "A function with access to its outer scope", attempted: false, selected: "" },
        { num: 35, question: "35 What is the output of typeof function(){}?", options: ["function", "object", "undefined", "method"], answer: "function", attempted: false, selected: "" },
        { num: 36, question: "36 Which symbol is used for template literals?", options: ["`", "'", "\"", "~"], answer: "`", attempted: false, selected: "" },
        { num: 37, question: "37 What is the scope of a variable declared with let?", options: ["Block", "Function", "Global", "Module"], answer: "Block", attempted: false, selected: "" },
        { num: 38, question: "38 Which array method modifies the original array?", options: ["splice()", "slice()", "map()", "filter()"], answer: "splice()", attempted: false, selected: "" },
        { num: 39, question: "39 What does DOM stand for?", options: ["Document Object Model", "Data Object Model", "Document Order Model", "Document Oriented Model"], answer: "Document Object Model", attempted: false, selected: "" },
        { num: 40, question: "40 Which method adds a new element at the beginning of an array?", options: ["unshift()", "shift()", "push()", "pop()"], answer: "unshift()", attempted: false, selected: "" },
        { num: 41, question: "41 Which operator is used to spread an array?", options: ["...", "*", "&", "+"], answer: "...", attempted: false, selected: "" },
        { num: 42, question: "42 What is hoisting in JavaScript?", options: ["Variable/function declarations are moved to top", "Sorting arrays", "Floating elements", "Binding this"], answer: "Variable/function declarations are moved to top", attempted: false, selected: "" },
        { num: 43, question: "43 What does setTimeout() do?", options: ["Delays execution", "Repeats execution", "Pauses loop", "Freezes browser"], answer: "Delays execution", attempted: false, selected: "" },
        { num: 44, question: "44 What will '[] == false' return?", options: ["true", "false", "undefined", "error"], answer: "true", attempted: false, selected: "" },
        { num: 45, question: "45 Which keyword defines a class method?", options: ["constructor", "method", "this", "func"], answer: "constructor", attempted: false, selected: "" },
        { num: 46, question: "46 What is the use of bind() method?", options: ["Bind 'this' to a function", "Join two arrays", "Attach event", "Fix bugs"], answer: "Bind 'this' to a function", attempted: false, selected: "" },
        { num: 47, question: "47 What will Array(3).fill(0) return?", options: ["[0, 0, 0]", "[3, 3, 3]", "[undefined, undefined, undefined]", "[0,3]"], answer: "[0, 0, 0]", attempted: false, selected: "" },
        { num: 48, question: "48 Which method is used to combine array elements into a string?", options: ["join()", "concat()", "toString()", "merge()"], answer: "join()", attempted: false, selected: "" },
        { num: 49, question: "49 What will console.log('5' - 2) return?", options: ["3", "52", "NaN", "undefined"], answer: "3", attempted: false, selected: "" },
        { num: 50, question: "50 How do you declare an async function?", options: ["async function myFunc() {}", "function async myFunc() {}", "myFunc = async()", "function myFunc = async()"], answer: "async function myFunc() {}", attempted: false, selected: "" }    
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
