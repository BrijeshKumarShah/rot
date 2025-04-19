const questions = [
        { num: 1, question: "1 What is the output of list('python')?", options: ["['p', 'y', 't', 'h', 'o', 'n']", "['python']", "['p y t h o n']", "['pyt', 'hon']"], answer: "['p', 'y', 't', 'h', 'o', 'n']", attempted: false, selected: "" },
        { num: 2, question: "2 What is the result of 3 <= 3 < 9?", options: ["True", "False", "SyntaxError", "None"], answer: "True", attempted: false, selected: "" },
        { num: 3, question: "3 Which module in Python can be used for serialization?", options: ["pickle", "marshal", "json", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 4, question: "4 What is a lambda function?", options: ["Anonymous function", "Recursive function", "Loop function", "None"], answer: "Anonymous function", attempted: false, selected: "" },
        { num: 5, question: "5 What is the purpose of the 'nonlocal' keyword?", options: ["Access variables in enclosing scope", "Make variable global", "Lock variable", "Remove variable"], answer: "Access variables in enclosing scope", attempted: false, selected: "" },
        { num: 6, question: "6 Which method is called when an object is created?", options: ["__init__", "__new__", "__create__", "__start__"], answer: "__init__", attempted: false, selected: "" },
        { num: 7, question: "7 Which keyword is used to handle exceptions?", options: ["try", "except", "finally", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 8, question: "8 What does the 'with' statement ensure?", options: ["Proper resource management", "Automatic imports", "Exception raising", "Variable assignment"], answer: "Proper resource management", attempted: false, selected: "" },
        { num: 9, question: "9 Which of the following is immutable?", options: ["tuple", "list", "dict", "set"], answer: "tuple", attempted: false, selected: "" },
        { num: 10, question: "10 What is the output of type([])?", options: ["<class 'list'>", "<class 'tuple'>", "<type 'list'>", "<type 'array'>"], answer: "<class 'list'>", attempted: false, selected: "" },
        { num: 11, question: "11 Which operator is used for exponentiation?", options: ["**", "^", "^^", "//"], answer: "**", attempted: false, selected: "" },
        { num: 12, question: "12 What will print(type(lambda x: x)) output?", options: ["<class 'function'>", "<function>", "<lambda>", "<class 'lambda'>"], answer: "<class 'function'>", attempted: false, selected: "" },
        { num: 13, question: "13 Which built-in function returns the length of an object?", options: ["len()", "length()", "size()", "count()"], answer: "len()", attempted: false, selected: "" },
        { num: 14, question: "14 What is a correct way to define a class in Python?", options: ["class MyClass:", "def MyClass:", "MyClass class:", "object MyClass:"], answer: "class MyClass:", attempted: false, selected: "" },
        { num: 15, question: "15 What will ' '.join(['A', 'B']) return?", options: ["'A B'", "'AB'", "['A', 'B']", "'A, B'"], answer: "AB", attempted: false, selected: "" },
        { num: 16, question: "16 What does isinstance(obj, cls) check?", options: ["If obj is instance of cls", "If cls inherits obj", "Syntax validity", "None"], answer: "If obj is instance of cls", attempted: false, selected: "" },
        { num: 17, question: "17 What is the output of bool(0)?", options: ["False", "True", "0", "None"], answer: "False", attempted: false, selected: "" },
        { num: 18, question: "18 What is the purpose of 'self' in methods?", options: ["Refers to instance", "Defines return type", "Used for recursion", "None"], answer: "Refers to instance", attempted: false, selected: "" },
        { num: 19, question: "19 Which statement correctly creates a dictionary?", options: ["{'a': 1}", "{1,2}", "[1,2]", "dict['a',1]"], answer: "{'a': 1}", attempted: false, selected: "" },
        { num: 20, question: "20 How do you insert comments in Python?", options: ["# comment", "// comment", "<!-- comment -->", "/* comment */"], answer: "# comment", attempted: false, selected: "" },
        { num: 21, question: "21 What will be the output of 3 * 'ab'?", options: ["'ababab'", "'ab3'", "'ab ab ab'", "Error"], answer: "'ababab'", attempted: false, selected: "" },
        { num: 22, question: "22 What type does range(3) return in Python 3?", options: ["range", "list", "tuple", "array"], answer: "range", attempted: false, selected: "" },
        { num: 23, question: "23 What is the difference between 'is' and '=='?", options: ["'is' checks identity, '==' checks value", "No difference", "'==' checks memory", "'is' compares values"], answer: "'is' checks identity, '==' checks value", attempted: false, selected: "" },
        { num: 24, question: "24 Which function returns all attributes of an object?", options: ["dir()", "list()", "vars()", "attr()"], answer: "dir()", attempted: false, selected: "" },
        { num: 25, question: "25 What does the map() function do?", options: ["Applies a function to iterable", "Sorts a list", "Removes duplicates", "Filters items"], answer: "Applies a function to iterable", attempted: false, selected: "" },
        { num: 26, question: "26 Which of these is a Python numeric type?", options: ["int", "float", "complex", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
        { num: 27, question: "27 What will be the output of 10 // 3?", options: ["3", "3.33", "3.0", "4"], answer: "3", attempted: false, selected: "" },
        { num: 28, question: "28 What is the default return value of a function that doesn't return anything?", options: ["None", "0", "False", "Undefined"], answer: "None", attempted: false, selected: "" },
        { num: 29, question: "29 What is the use of the pass statement?", options: ["Acts as placeholder", "Terminates loop", "Skips iteration", "Returns value"], answer: "Acts as placeholder", attempted: false, selected: "" },
        { num: 30, question: "30 How do you catch multiple exceptions in Python?", options: ["Using tuple in except", "Multiple try blocks", "try-many", "None"], answer: "Using tuple in except", attempted: false, selected: "" },
        { num: 31, question: "31 What does the zip() function do?", options: ["Combines iterables element-wise", "Compresses files", "Sorts lists", "Adds items"], answer: "Combines iterables element-wise", attempted: false, selected: "" },
        { num: 32, question: "32 What will be the output of set([1,2,2,3])?", options: ["{1,2,3}", "[1,2,3]", "{1,2,2,3}", "Error"], answer: "{1,2,3}", attempted: false, selected: "" },
        { num: 33, question: "33 How do you declare a function in Python?", options: ["def func():", "function func()", "create func():", "fun func()"], answer: "def func():", attempted: false, selected: "" },
        { num: 34, question: "34 What does the enumerate() function return?", options: ["Index and value", "Only index", "Only value", "None"], answer: "Index and value", attempted: false, selected: "" },
        { num: 35, question: "35 How do you create a set in Python?", options: ["set()", "{}", "[]", "()"], answer: "set()", attempted: false, selected: "" },
        { num: 36, question: "36 What is the result of '5' + '5'?", options: ["'55'", "10", "Error", "'10'"], answer: "'55'", attempted: false, selected: "" },
        { num: 37, question: "37 What is __name__ in Python?", options: ["Variable that holds module name", "Class name", "Function name", "Global variable"], answer: "Variable that holds module name", attempted: false, selected: "" },
        { num: 38, question: "38 What is list comprehension?", options: ["Concise way to create lists", "Sorting technique", "List joining", "None"], answer: "Concise way to create lists", attempted: false, selected: "" },
        { num: 39, question: "39 What is the result of bool([])?", options: ["False", "True", "Error", "None"], answer: "False", attempted: false, selected: "" },
        { num: 40, question: "40 Which keyword is used to define a generator?", options: ["yield", "return", "generate", "gen"], answer: "yield", attempted: false, selected: "" },
        { num: 41, question: "41 What will be the output of len({'a': 1, 'b': 2})?", options: ["2", "1", "3", "0"], answer: "2", attempted: false, selected: "" },
        { num: 42, question: "42 How do you define a constant in Python?", options: ["No built-in constant type", "const x = 5", "final x = 5", "constant x = 5"], answer: "No built-in constant type", attempted: false, selected: "" },
        { num: 43, question: "43 What is the output of 5 and 0?", options: ["0", "5", "True", "None"], answer: "0", attempted: false, selected: "" },
        { num: 44, question: "44 What will type({}) return?", options: ["<class 'dict'>", "<class 'set'>", "<class 'object'>", "<type 'dict'>"], answer: "<class 'dict'>", attempted: false, selected: "" },
        { num: 45, question: "45 What does 'del' keyword do?", options: ["Deletes object", "Deletes function", "Stops script", "Returns value"], answer: "Deletes object", attempted: false, selected: "" },
        { num: 46, question: "46 How to access keys in a dictionary?", options: ["dict.keys()", "dict.getkeys()", "dict.values()", "dict.allkeys()"], answer: "dict.keys()", attempted: false, selected: "" },
        { num: 47, question: "47 What is the output of not True?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
        { num: 48, question: "48 What is the type of None?", options: ["NoneType", "Null", "Empty", "None"], answer: "NoneType", attempted: false, selected: "" },
        { num: 49, question: "49 How do you create an empty dictionary?", options: ["{}", "[]", "()", "None"], answer: "{}", attempted: false, selected: "" },
        { num: 50, question: "50 What is the output of int('10')?", options: ["10", "'10'", "1", "Error"], answer: "10", attempted: false, selected: "" }   
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
