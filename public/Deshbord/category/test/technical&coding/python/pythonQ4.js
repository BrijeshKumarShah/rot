const questions = [
        { num: 1, question: "1 What is the output of `''.join(sorted('cba'))`?", options: ["'abc'", "'cba'", "'acb'", "'bca'"], answer: "'abc'", attempted: false, selected: "" },
        { num: 2, question: "2 Which method converts a Python object to a JSON string?", options: ["json.dumps()", "json.loads()", "json.encode()", "json.parse()"], answer: "json.dumps()", attempted: false, selected: "" },
        { num: 3, question: "3 What does the 'with' statement ensure when handling files?", options: ["Automatic resource management", "File encryption", "Background threading", "File replication"], answer: "Automatic resource management", attempted: false, selected: "" },
        { num: 4, question: "4 What is a lambda function?", options: ["Anonymous inline function", "String function", "Loop function", "Module"], answer: "Anonymous inline function", attempted: false, selected: "" },
        { num: 5, question: "5 What does `enumerate()` return?", options: ["Index-value pairs", "Only values", "Only indexes", "List of strings"], answer: "Index-value pairs", attempted: false, selected: "" },
        { num: 6, question: "6 What is the purpose of `zip()`?", options: ["Pair elements from iterables", "Compress files", "Reverse lists", "Filter lists"], answer: "Pair elements from iterables", attempted: false, selected: "" },
        { num: 7, question: "7 What will `set([1,2,2,3])` return?", options: ["{1, 2, 3}", "[1, 2, 2, 3]", "(1, 2, 2, 3)", "Error"], answer: "{1, 2, 3}", attempted: false, selected: "" },
        { num: 8, question: "8 Which keyword creates a generator?", options: ["yield", "return", "generate", "lambda"], answer: "yield", attempted: false, selected: "" },
        { num: 9, question: "9 What will `type(lambda x: x)` return?", options: ["<class 'function'>", "<class 'lambda'>", "<class 'object'>", "<class 'method'>"], answer: "<class 'function'>", attempted: false, selected: "" },
        { num: 10, question: "10 What is the output of `2 ** 3 ** 2`?", options: ["512", "64", "36", "256"], answer: "512", attempted: false, selected: "" },
        { num: 11, question: "11 What is a Python decorator?", options: ["Function that modifies another function", "Loop modifier", "Error handler", "Type converter"], answer: "Function that modifies another function", attempted: false, selected: "" },
        { num: 12, question: "12 What does `globals()` return?", options: ["Current global symbol table", "All imported modules", "Global functions only", "None"], answer: "Current global symbol table", attempted: false, selected: "" },
        { num: 13, question: "13 What will be the type of `range(5)`?", options: ["range", "list", "tuple", "set"], answer: "range", attempted: false, selected: "" },
        { num: 14, question: "14 How to handle exceptions in Python?", options: ["try-except", "do-catch", "catch-try", "exception-catch"], answer: "try-except", attempted: false, selected: "" },
        { num: 15, question: "15 What will be output: `isinstance([], list)`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
        { num: 16, question: "16 What is the result of `'5' + '5'` in Python?", options: ["'55'", "10", "Error", "5"], answer: "'55'", attempted: false, selected: "" },
        { num: 17, question: "17 What does the `pass` statement do?", options: ["Does nothing", "Terminates loop", "Skips next line", "Returns a value"], answer: "Does nothing", attempted: false, selected: "" },
        { num: 18, question: "18 How do you start a virtual environment?", options: ["python -m venv env", "pip init", "venv create", "virtualenv install"], answer: "python -m venv env", attempted: false, selected: "" },
        { num: 19, question: "19 What’s the purpose of `__name__ == '__main__'`?", options: ["Run code only if file is main", "Name function", "Debugging", "Import check"], answer: "Run code only if file is main", attempted: false, selected: "" },
        { num: 20, question: "20 What will be the output of `bool([])`?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
        { num: 21, question: "21 What is the difference between `is` and `==`?", options: ["`is` checks identity, `==` checks value", "`is` compares strings only", "They are same", "`==` is faster"], answer: "`is` checks identity, `==` checks value", attempted: false, selected: "" },
        { num: 22, question: "22 Which module is used for regular expressions?", options: ["re", "regex", "pattern", "match"], answer: "re", attempted: false, selected: "" },
        { num: 23, question: "23 What is a list comprehension?", options: ["Compact way to create list", "Loop structure", "Data structure", "Module"], answer: "Compact way to create list", attempted: false, selected: "" },
        { num: 24, question: "24 What does `re.findall(r'\\d+', 'abc123')` return?", options: ["['123']", "['a','b','c']", "['abc123']", "[123]"], answer: "['123']", attempted: false, selected: "" },
        { num: 25, question: "25 What is a Python module?", options: ["File with Python code", "Function", "Decorator", "Loop block"], answer: "File with Python code", attempted: false, selected: "" },
        { num: 26, question: "26 How to check memory location of a variable?", options: ["id()", "mem()", "location()", "ref()"], answer: "id()", attempted: false, selected: "" },
        { num: 27, question: "27 What is the output of `print(3 in [1, 2, 3])`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
        { num: 28, question: "28 What is `@classmethod` used for?", options: ["Define method for class, not instance", "Static method", "Private method", "Abstract method"], answer: "Define method for class, not instance", attempted: false, selected: "" },
        { num: 29, question: "29 What’s the output: `divmod(10, 3)`?", options: ["(3, 1)", "(10, 3)", "3.33", "Error"], answer: "(3, 1)", attempted: false, selected: "" },
        { num: 30, question: "30 Which symbol is used for unpacking dictionaries?", options: ["**", "*", "&", "##"], answer: "**", attempted: false, selected: "" },
        { num: 31, question: "31 What will `list(map(str, [1, 2]))` return?", options: ["['1', '2']", "[1, 2]", "'12'", "[str, str]"], answer: "['1', '2']", attempted: false, selected: "" },
        { num: 32, question: "32 Which Python keyword creates a private variable?", options: ["__", "_", "private", "hidden"], answer: "_", attempted: false, selected: "" },
        { num: 33, question: "33 What does `dir()` return?", options: ["List of object attributes and methods", "Current directory", "Module path", "File name"], answer: "List of object attributes and methods", attempted: false, selected: "" },
        { num: 34, question: "34 What is returned by `re.sub(r'\\d+', 'X', 'ab123cd')`?", options: ["abXcd", "ab123cd", "abcd", "X"], answer: "abXcd", attempted: false, selected: "" },
        { num: 35, question: "35 What’s the output: `None == False`?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
        { num: 36, question: "36 Which module helps to serialize objects?", options: ["pickle", "json", "marshal", "zipfile"], answer: "pickle", attempted: false, selected: "" },
        { num: 37, question: "37 How to get current working directory?", options: ["os.getcwd()", "os.path()", "getdir()", "sys.cwd()"], answer: "os.getcwd()", attempted: false, selected: "" },
        { num: 38, question: "38 What is the output of `bool('False')`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
        { num: 39, question: "39 What’s the output: `set('hello')`?", options: ["Set of unique characters", "List of chars", "'hello'", "Error"], answer: "Set of unique characters", attempted: false, selected: "" },
        { num: 40, question: "40 What is `__init__` in Python?", options: ["Constructor method", "Destructor", "Package", "Module"], answer: "Constructor method", attempted: false, selected: "" },
        { num: 41, question: "41 What does `[::-1]` do to a string?", options: ["Reverses it", "Skips every char", "Slices last char", "Returns empty"], answer: "Reverses it", attempted: false, selected: "" },
        { num: 42, question: "42 Which Python module handles date and time?", options: ["datetime", "time", "calendar", "dateutil"], answer: "datetime", attempted: false, selected: "" },
        { num: 43, question: "43 What does `split()` return?", options: ["List of substrings", "Tuple", "Set", "Char array"], answer: "List of substrings", attempted: false, selected: "" },
        { num: 44, question: "44 What is returned by `max([3, 1, 4])`?", options: ["4", "1", "3", "None"], answer: "4", attempted: false, selected: "" },
        { num: 45, question: "45 How to remove whitespace from both ends of a string?", options: ["strip()", "trim()", "remove()", "clear()"], answer: "strip()", attempted: false, selected: "" },
        { num: 46, question: "46 What does `count()` method do in lists?", options: ["Returns frequency of value", "Deletes value", "Appends value", "Sorts list"], answer: "Returns frequency of value", attempted: false, selected: "" },
        { num: 47, question: "47 What is returned by `re.match('a', 'abc')`?", options: ["Match object", "None", "['a']", "'a'"], answer: "Match object", attempted: false, selected: "" },
        { num: 48, question: "48 What will be the output of `round(2.675, 2)`?", options: ["2.67", "2.68", "2.7", "Error"], answer: "2.67", attempted: false, selected: "" },
        { num: 49, question: "49 How to make a shallow copy of a list?", options: ["list.copy()", "list.clone()", "list.duplicate()", "list.save()"], answer: "list.copy()", attempted: false, selected: "" },
        { num: 50, question: "50 What is slicing in Python?", options: ["Accessing parts of sequences", "Sorting values", "Merging lists", "Changing data type"], answer: "Accessing parts of sequences", attempted: false, selected: "" }  
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
