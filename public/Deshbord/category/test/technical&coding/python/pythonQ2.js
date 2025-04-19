const questions = [
        { num: 51, question: "51 What does the zip() function do?", options: ["Combines iterables", "Compress files", "Encrypt data", "Adds elements"], answer: "Combines iterables", attempted: false, selected: "" },
        { num: 52, question: "52 What is the output of: len(set([1,2,2,3]))?", options: ["3", "4", "2", "0"], answer: "3", attempted: false, selected: "" },
        { num: 53, question: "53 What will '5' * 3 return?", options: ["15", "555", "Error", "53"], answer: "555", attempted: false, selected: "" },
        { num: 54, question: "54 How do you create a virtual environment?", options: ["python -m venv env", "virtual create", "python venv", "pip venv"], answer: "python -m venv env", attempted: false, selected: "" },
        { num: 55, question: "55 What does 're' module provide?", options: ["Regular expressions", "Random utilities", "Runtime functions", "Resource limits"], answer: "Regular expressions", attempted: false, selected: "" },
        { num: 56, question: "56 What will 'Hello'.find('e') return?", options: ["1", "2", "0", "-1"], answer: "1", attempted: false, selected: "" },
        { num: 57, question: "57 What is the result of bool([])?", options: ["True", "False", "Error", "None"], answer: "False", attempted: false, selected: "" },
        { num: 58, question: "58 How to check the type of a variable?", options: ["typeof(x)", "type(x)", "x.type()", "checktype(x)"], answer: "type(x)", attempted: false, selected: "" },
        { num: 59, question: "59 What is the keyword to define a coroutine function?", options: ["async", "await", "yield", "defer"], answer: "async", attempted: false, selected: "" },
        { num: 60, question: "60 What is the output of: [i for i in range(3)]?", options: ["[0,1,2]", "[1,2,3]", "[0,1,2,3]", "[3,2,1]"], answer: "[0,1,2]", attempted: false, selected: "" },
      
        { num: 61, question: "61 What is the purpose of map()?", options: ["Apply function to iterable", "Sort list", "Combine lists", "Filter values"], answer: "Apply function to iterable", attempted: false, selected: "" },
        { num: 62, question: "62 Which function returns the absolute value?", options: ["abs()", "fabs()", "math.abs()", "positive()"], answer: "abs()", attempted: false, selected: "" },
        { num: 63, question: "63 Which built-in can convert an iterable into a set?", options: ["set()", "list()", "dict()", "tuple()"], answer: "set()", attempted: false, selected: "" },
        { num: 64, question: "64 Which method removes the last item from a list?", options: ["pop()", "remove()", "delete()", "discard()"], answer: "pop()", attempted: false, selected: "" },
        { num: 65, question: "65 What is the output of: 3 * 'ab'?", options: ["ababab", "ab3", "ab ab ab", "Error"], answer: "ababab", attempted: false, selected: "" },
        { num: 66, question: "66 What does isinstance(x, y) return?", options: ["True or False", "x", "y", "Error"], answer: "True or False", attempted: false, selected: "" },
        { num: 67, question: "67 What is the result of [1, 2] + [3, 4]?", options: ["[1,2,3,4]", "[1,2]+[3,4]", "[4,6]", "Error"], answer: "[1,2,3,4]", attempted: false, selected: "" },
        { num: 68, question: "68 Which function reads the entire contents of a file?", options: ["read()", "readline()", "readall()", "fetch()"], answer: "read()", attempted: false, selected: "" },
        { num: 69, question: "69 What does the 'finally' block do?", options: ["Always executes", "Handles error", "Skips error", "Stops program"], answer: "Always executes", attempted: false, selected: "" },
        { num: 70, question: "70 What is the purpose of the filter() function?", options: ["Filters iterable based on function", "Sorts data", "Maps keys", "Extracts digits"], answer: "Filters iterable based on function", attempted: false, selected: "" },
      
        { num: 71, question: "71 Which of the following is not a valid Python keyword?", options: ["lambda", "def", "goto", "pass"], answer: "goto", attempted: false, selected: "" },
        { num: 72, question: "72 How to write multi-line comments?", options: ["''' comment '''", "// comment", "<!-- comment -->", "# comment"], answer: "''' comment '''", attempted: false, selected: "" },
        { num: 73, question: "73 What does chr(65) return?", options: ["'A'", "65", "'65'", "chr65"], answer: "'A'", attempted: false, selected: "" },
        { num: 74, question: "74 What will range(5) return?", options: ["0-4", "1-5", "0-5", "Error"], answer: "0-4", attempted: false, selected: "" },
        { num: 75, question: "75 Which function is used to convert to string?", options: ["str()", "string()", "toString()", "convert()"], answer: "str()", attempted: false, selected: "" },
        { num: 76, question: "76 What is the output of 'python'.capitalize()?", options: ["Python", "PYTHON", "python", "P"], answer: "Python", attempted: false, selected: "" },
        { num: 77, question: "77 Which function returns a sequence of numbers?", options: ["range()", "sequence()", "list()", "tuple()"], answer: "range()", attempted: false, selected: "" },
        { num: 78, question: "78 What is a correct way to create a set?", options: ["set([1, 2, 3])", "{1, 2, 3}", "both A and B", "list(1,2,3)"], answer: "both A and B", attempted: false, selected: "" },
        { num: 79, question: "79 Which keyword ends a function?", options: ["return", "stop", "end", "exit"], answer: "return", attempted: false, selected: "" },
        { num: 80, question: "80 What does the continue statement do?", options: ["Skips to next iteration", "Ends loop", "Skips loop", "Breaks loop"], answer: "Skips to next iteration", attempted: false, selected: "" },
      
        { num: 81, question: "81 What is the result of 10 // 3?", options: ["3", "3.33", "3.0", "1"], answer: "3", attempted: false, selected: "" },
        { num: 82, question: "82 What is the output of list('abc')?", options: ["['a', 'b', 'c']", "['abc']", "abc", "['a b c']"], answer: "['a', 'b', 'c']", attempted: false, selected: "" },
        { num: 83, question: "83 Which keyword defines a class?", options: ["class", "def", "struct", "module"], answer: "class", attempted: false, selected: "" },
        { num: 84, question: "84 What does the eval() function do?", options: ["Evaluates expressions", "Loops variable", "Gets input", "Returns string"], answer: "Evaluates expressions", attempted: false, selected: "" },
        { num: 85, question: "85 What is the output of max(3,5,2)?", options: ["5", "3", "2", "max"], answer: "5", attempted: false, selected: "" },
        { num: 86, question: "86 What will type([]) return?", options: ["<class 'list'>", "<type 'list'>", "list", "ListType"], answer: "<class 'list'>", attempted: false, selected: "" },
        { num: 87, question: "87 Which function converts characters to ASCII?", options: ["ord()", "ascii()", "chr()", "asc()"], answer: "ord()", attempted: false, selected: "" },
        { num: 88, question: "88 Which of the following is used for inheritance?", options: ["class Sub(Base):", "inherit Base()", "Base -> Sub", "class Base extends Sub"], answer: "class Sub(Base):", attempted: false, selected: "" },
        { num: 89, question: "89 What is __str__ used for?", options: ["Return readable string", "Print logs", "Convert type", "Return ID"], answer: "Return readable string", attempted: false, selected: "" },
        { num: 90, question: "90 What is the result of 3 == 3.0?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
      
        { num: 91, question: "91 What will round(4.5) return?", options: ["4", "5", "4.5", "Error"], answer: "4", attempted: false, selected: "" },
        { num: 92, question: "92 What is the output of 'hello'.replace('l','x')?", options: ["hexxo", "hexxxo", "hexxlo", "hxllo"], answer: "hexxxo", attempted: false, selected: "" },
        { num: 93, question: "93 What is the output of divmod(9,2)?", options: ["(4,1)", "(4.5)", "(4,2)", "(5,1)"], answer: "(4,1)", attempted: false, selected: "" },
        { num: 94, question: "94 What does the all() function return?", options: ["True if all are True", "False if one is False", "All values", "True if any True"], answer: "True if all are True", attempted: false, selected: "" },
        { num: 95, question: "95 What is the output of type({})?", options: ["<class 'dict'>", "list", "tuple", "set"], answer: "<class 'dict'>", attempted: false, selected: "" },
        { num: 96, question: "96 What is the result of not True?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
        { num: 97, question: "97 Which method can convert a string to lowercase?", options: ["lower()", "downcase()", "small()", "reduce()"], answer: "lower()", attempted: false, selected: "" },
        { num: 98, question: "98 What is returned by range(2, 5)?", options: ["[2,3,4]", "[2,3,4,5]", "[3,4,5]", "[2,4,5]"], answer: "[2,3,4]", attempted: false, selected: "" },
        { num: 99, question: "99 What is the use of 'assert'?", options: ["Debug check", "Raise error", "Loop over", "Define variable"], answer: "Debug check", attempted: false, selected: "" },
        { num: 100, question: "100 What does 'elif' stand for?", options: ["Else if", "Else loop", "Else where", "Eliminate if"], answer: "Else if", attempted: false, selected: "" }
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
