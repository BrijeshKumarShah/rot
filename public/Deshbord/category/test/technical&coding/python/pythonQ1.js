const questions = [
        { num: 1, question: "1 What is the output of print(2 ** 3)?", options: ["6", "8", "9", "5"], answer: "8", attempted: false, selected: "" },
        { num: 2, question: "2 Which keyword is used to create a function in Python?", options: ["function", "def", "define", "func"], answer: "def", attempted: false, selected: "" },
        { num: 3, question: "3 What data type is the result of: type(3.5)?", options: ["int", "float", "str", "complex"], answer: "float", attempted: false, selected: "" },
        { num: 4, question: "4 What is the correct file extension for Python files?", options: [".py", ".pt", ".pyt", ".python"], answer: ".py", attempted: false, selected: "" },
        { num: 5, question: "5 What does the 'len()' function do?", options: ["Returns length", "Returns type", "Counts digits", "Checks truth value"], answer: "Returns length", attempted: false, selected: "" },
        { num: 6, question: "6 How do you start a comment in Python?", options: ["//", "/*", "#", "--"], answer: "#", attempted: false, selected: "" },
        { num: 7, question: "7 What is the output of: print('5' + '5')?", options: ["10", "55", "TypeError", "5"], answer: "55", attempted: false, selected: "" },
        { num: 8, question: "8 What is the correct way to create a dictionary?", options: ["{}", "[]", "()", "<>"], answer: "{}", attempted: false, selected: "" },
        { num: 9, question: "9 Which method can add an item to a list?", options: ["add()", "append()", "insert()", "extend()"], answer: "append()", attempted: false, selected: "" },
        { num: 10, question: "10 What is the output of type(True)?", options: ["bool", "int", "str", "float"], answer: "bool", attempted: false, selected: "" },
      
        { num: 11, question: "11 How do you create a variable with the numeric value 5?", options: ["num = 5", "int num = 5", "num := 5", "num == 5"], answer: "num = 5", attempted: false, selected: "" },
        { num: 12, question: "12 What will print(type([])) return?", options: ["list", "<class 'list'>", "[]", "object"], answer: "<class 'list'>", attempted: false, selected: "" },
        { num: 13, question: "13 What is used to handle exceptions in Python?", options: ["catch", "handle", "try/except", "trap"], answer: "try/except", attempted: false, selected: "" },
        { num: 14, question: "14 Which operator is used for floor division?", options: ["/", "%", "//", "**"], answer: "//", attempted: false, selected: "" },
        { num: 15, question: "15 How do you insert comments in Python?", options: ["# comment", "// comment", "/* comment */", "-- comment"], answer: "# comment", attempted: false, selected: "" },
        { num: 16, question: "16 What is the output of bool(0)?", options: ["True", "False", "0", "None"], answer: "False", attempted: false, selected: "" },
        { num: 17, question: "17 Which data structure is immutable?", options: ["list", "set", "dict", "tuple"], answer: "tuple", attempted: false, selected: "" },
        { num: 18, question: "18 What is the purpose of the pass statement?", options: ["Skip iteration", "End loop", "Do nothing", "Break loop"], answer: "Do nothing", attempted: false, selected: "" },
        { num: 19, question: "19 Which module is used to generate random numbers?", options: ["math", "random", "os", "sys"], answer: "random", attempted: false, selected: "" },
        { num: 20, question: "20 What does the 'in' keyword check?", options: ["Existence in sequence", "Assignment", "Type", "Conversion"], answer: "Existence in sequence", attempted: false, selected: "" },
      
        { num: 21, question: "21 What is the correct way to define a class?", options: ["def MyClass:", "class MyClass:", "MyClass:", "define MyClass:"], answer: "class MyClass:", attempted: false, selected: "" },
        { num: 22, question: "22 Which method is called when an object is created?", options: ["__start__", "__create__", "__init__", "__make__"], answer: "__init__", attempted: false, selected: "" },
        { num: 23, question: "23 How do you access values in a list?", options: ["list{0}", "list[0]", "list(0)", "list<0>"], answer: "list[0]", attempted: false, selected: "" },
        { num: 24, question: "24 What is the correct syntax to define a lambda function?", options: ["lambda x: x+1", "def x(): x+1", "func x: x+1", "lambda = x+1"], answer: "lambda x: x+1", attempted: false, selected: "" },
        { num: 25, question: "25 What is the purpose of 'self' in Python classes?", options: ["Refers to class", "Refers to instance", "Refers to method", "Refers to file"], answer: "Refers to instance", attempted: false, selected: "" },
        { num: 26, question: "26 Which keyword is used to inherit a class?", options: ["inherit", "extends", "super", "class"], answer: "class", attempted: false, selected: "" },
        { num: 27, question: "27 Which method returns the number of items in a list?", options: ["size()", "length()", "len()", "count()"], answer: "len()", attempted: false, selected: "" },
        { num: 28, question: "28 What is slicing used for in Python?", options: ["Copy elements", "Access parts of sequence", "Sort items", "Update values"], answer: "Access parts of sequence", attempted: false, selected: "" },
        { num: 29, question: "29 Which statement is used to exit a loop?", options: ["exit", "stop", "end", "break"], answer: "break", attempted: false, selected: "" },
        { num: 30, question: "30 How do you convert a string to an integer?", options: ["int('5')", "str(5)", "float('5')", "toInt('5')"], answer: "int('5')", attempted: false, selected: "" },
      
        { num: 31, question: "31 What does the open() function return?", options: ["File object", "String", "List", "Boolean"], answer: "File object", attempted: false, selected: "" },
        { num: 32, question: "32 Which keyword is used to define an anonymous function?", options: ["anon", "lambda", "func", "def"], answer: "lambda", attempted: false, selected: "" },
        { num: 33, question: "33 What is the output of: 'abc'.upper()?", options: ["abc", "ABC", "Abc", "Syntax Error"], answer: "ABC", attempted: false, selected: "" },
        { num: 34, question: "34 How do you handle an exception?", options: ["try/except", "if/else", "catch/finally", "try/catch"], answer: "try/except", attempted: false, selected: "" },
        { num: 35, question: "35 What is a correct way to define a list?", options: ["(1,2,3)", "{1,2,3}", "[1,2,3]", "<1,2,3>"], answer: "[1,2,3]", attempted: false, selected: "" },
        { num: 36, question: "36 Which function is used to get user input?", options: ["scanf()", "input()", "get()", "read()"], answer: "input()", attempted: false, selected: "" },
        { num: 37, question: "37 How to remove whitespace from a string?", options: ["strip()", "trim()", "remove()", "erase()"], answer: "strip()", attempted: false, selected: "" },
        { num: 38, question: "38 What does the 'is' operator compare?", options: ["Values", "Memory locations", "Types", "Keys"], answer: "Memory locations", attempted: false, selected: "" },
        { num: 39, question: "39 Which statement is used to skip iteration in a loop?", options: ["break", "pass", "continue", "exit"], answer: "continue", attempted: false, selected: "" },
        { num: 40, question: "40 What is the result of: 10 % 3?", options: ["1", "3", "0", "10"], answer: "1", attempted: false, selected: "" },
      
        { num: 41, question: "41 How do you check if a value exists in a dictionary?", options: ["in", "has", "exists", "check"], answer: "in", attempted: false, selected: "" },
        { num: 42, question: "42 Which keyword is used to create a generator?", options: ["generate", "yield", "return", "yield return"], answer: "yield", attempted: false, selected: "" },
        { num: 43, question: "43 Which function is used to sort a list in Python?", options: ["sorted()", "order()", "arrange()", "sortlist()"], answer: "sorted()", attempted: false, selected: "" },
        { num: 44, question: "44 What will type(None) return?", options: ["NoneType", "null", "None", "undefined"], answer: "NoneType", attempted: false, selected: "" },
        { num: 45, question: "45 What is the default return value of a function if not specified?", options: ["None", "0", "False", "Empty string"], answer: "None", attempted: false, selected: "" },
        { num: 46, question: "46 What is the output of: bool('False')?", options: ["False", "True", "Error", "None"], answer: "True", attempted: false, selected: "" },
        { num: 47, question: "47 What is the use of 'with' statement in file handling?", options: ["Manages file context", "Closes file manually", "Opens in GUI", "Locks file"], answer: "Manages file context", attempted: false, selected: "" },
        { num: 48, question: "48 How do you install external packages in Python?", options: ["pip install package", "install package", "python install", "pkg add package"], answer: "pip install package", attempted: false, selected: "" },
        { num: 49, question: "49 What is the use of 'enumerate()'?", options: ["Index and value", "Count items", "Loop once", "Map items"], answer: "Index and value", attempted: false, selected: "" },
        { num: 50, question: "50 How do you create a set in Python?", options: ["set()", "{}", "[]", "set[]"], answer: "set()", attempted: false, selected: "" }
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
