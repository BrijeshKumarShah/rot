const questions = [
        { num: 1, question: "1 What is the output of: list(map(lambda x: x**2, [1, 2, 3]))", options: ["[1, 4, 9]", "[2, 3, 4]", "[1, 2, 3]", "Error"], answer: "[1, 4, 9]", attempted: false, selected: "" },
        { num: 2, question: "2 What is the purpose of the 'with' statement in Python?", options: ["Handle exceptions", "Simplify resource management", "Import modules", "Loop through values"], answer: "Simplify resource management", attempted: false, selected: "" },
        { num: 3, question: "3 Which module in Python is used for regular expressions?", options: ["re", "regex", "string", "match"], answer: "re", attempted: false, selected: "" },
        { num: 4, question: "4 What will be the output of: 'hello'.replace('l', 'x')?", options: ["hexxo", "hexxxo", "hexlo", "hxlxo"], answer: "hexxxo", attempted: false, selected: "" },
        { num: 5, question: "5 What does the zip() function do in Python?", options: ["Combines multiple iterables", "Sorts a list", "Creates tuples from strings", "Compresses files"], answer: "Combines multiple iterables", attempted: false, selected: "" },
        { num: 6, question: "6 Which keyword is used to handle exceptions?", options: ["try", "check", "validate", "except"], answer: "except", attempted: false, selected: "" },
        { num: 7, question: "7 What is the output of: bool([])?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
        { num: 8, question: "8 Which of these is not a valid set method?", options: ["union()", "update()", "append()", "intersection()"], answer: "append()", attempted: false, selected: "" },
        { num: 9, question: "9 What does the 'global' keyword do in Python?", options: ["Declares a global variable inside a function", "Imports a module", "Initializes memory", "Creates a loop"], answer: "Declares a global variable inside a function", attempted: false, selected: "" },
        { num: 10, question: "10 What does @staticmethod decorator do?", options: ["Defines a static method", "Creates a global method", "Skips a method", "Initializes objects"], answer: "Defines a static method", attempted: false, selected: "" },
        { num: 11, question: "11 What will be the output of: 'abcd'.find('b')?", options: ["1", "2", "0", "-1"], answer: "1", attempted: false, selected: "" },
        { num: 12, question: "12 Which of these is used to create an iterator class?", options: ["__iter__ and __next__", "next() only", "yield", "__init__"], answer: "__iter__ and __next__", attempted: false, selected: "" },
        { num: 13, question: "13 What is the result of: type(lambda x: x)?", options: ["<class 'function'>", "<type 'lambda'>", "<class 'object'>", "<function>"], answer: "<class 'function'>", attempted: false, selected: "" },
        { num: 14, question: "14 How do you define an abstract class in Python?", options: ["Using ABC and @abstractmethod", "Using abstract keyword", "Using interface", "Using baseclass"], answer: "Using ABC and @abstractmethod", attempted: false, selected: "" },
        { num: 15, question: "15 What is the output of: [i for i in range(3)]?", options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[1, 2]"], answer: "[0, 1, 2]", attempted: false, selected: "" },
        { num: 16, question: "16 What is the purpose of 'is' keyword in Python?", options: ["Checks identity", "Checks equality", "Assigns value", "Imports module"], answer: "Checks identity", attempted: false, selected: "" },
        { num: 17, question: "17 Which function is used to get attributes of an object?", options: ["getattr()", "get()", "fetch()", "readattr()"], answer: "getattr()", attempted: false, selected: "" },
        { num: 18, question: "18 Which of these will raise a ZeroDivisionError?", options: ["1/0", "0/1", "0*0", "1*0"], answer: "1/0", attempted: false, selected: "" },
        { num: 19, question: "19 What does the enumerate() function return?", options: ["Index-value pairs", "Sorted list", "Reversed list", "Unique values"], answer: "Index-value pairs", attempted: false, selected: "" },
        { num: 20, question: "20 What does 'pass' keyword do?", options: ["Does nothing", "Skips error", "Returns None", "Stops loop"], answer: "Does nothing", attempted: false, selected: "" },
        { num: 21, question: "21 What does the dir() function do?", options: ["Lists attributes and methods", "Deletes variable", "Reads file", "Initializes list"], answer: "Lists attributes and methods", attempted: false, selected: "" },
        { num: 22, question: "22 What is the result of: set([1,2,2,3])?", options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "{1, 2, 2, 3}"], answer: "{1, 2, 3}", attempted: false, selected: "" },
        { num: 23, question: "23 What is the output of: print('abc'.upper())?", options: ["ABC", "abc", "Abc", "error"], answer: "ABC", attempted: false, selected: "" },
        { num: 24, question: "24 Which function converts a string to a number?", options: ["int()", "str()", "chr()", "ord()"], answer: "int()", attempted: false, selected: "" },
        { num: 25, question: "25 What is __name__ variable used for?", options: ["Module check", "Function naming", "Error handling", "Type checking"], answer: "Module check", attempted: false, selected: "" },
        { num: 26, question: "26 What does the super() function do?", options: ["Calls parent class methods", "Defines subclass", "Overrides method", "Initializes loop"], answer: "Calls parent class methods", attempted: false, selected: "" },
        { num: 27, question: "27 What is a lambda function?", options: ["Anonymous function", "String method", "Loop", "Class"], answer: "Anonymous function", attempted: false, selected: "" },
        { num: 28, question: "28 What will be output of: type({})?", options: ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"], answer: "<class 'dict'>", attempted: false, selected: "" },
        { num: 29, question: "29 Which method removes and returns last item of list?", options: ["pop()", "remove()", "delete()", "cut()"], answer: "pop()", attempted: false, selected: "" },
        { num: 30, question: "30 What is the result of: sorted([3,1,2])?", options: ["[1, 2, 3]", "[3, 2, 1]", "[2, 1, 3]", "[1, 3, 2]"], answer: "[1, 2, 3]", attempted: false, selected: "" },
        { num: 31, question: "31 Which library is used for data analysis in Python?", options: ["pandas", "matplotlib", "requests", "flask"], answer: "pandas", attempted: false, selected: "" },
        { num: 32, question: "32 What is the purpose of yield keyword?", options: ["Creates a generator", "Returns multiple values", "Breaks loop", "Handles errors"], answer: "Creates a generator", attempted: false, selected: "" },
        { num: 33, question: "33 What is the output of: bool(0)?", options: ["False", "True", "0", "None"], answer: "False", attempted: false, selected: "" },
        { num: 34, question: "34 What is a dictionary key required to be?", options: ["Hashable", "Mutable", "List", "Float"], answer: "Hashable", attempted: false, selected: "" },
        { num: 35, question: "35 What function is used to serialize an object in Python?", options: ["pickle.dump()", "json.save()", "marshal.write()", "serialize()"], answer: "pickle.dump()", attempted: false, selected: "" },
        { num: 36, question: "36 What’s the output: sum([i for i in range(3)])?", options: ["3", "6", "0", "2"], answer: "3", attempted: false, selected: "" },
        { num: 37, question: "37 What is duck typing?", options: ["Type based on behavior", "Type based on inheritance", "Strict typing", "No typing"], answer: "Type based on behavior", attempted: false, selected: "" },
        { num: 38, question: "38 Which keyword is used to define a generator?", options: ["yield", "return", "generate", "iterator"], answer: "yield", attempted: false, selected: "" },
        { num: 39, question: "39 What does *args allow in functions?", options: ["Pass variable number of arguments", "Create list", "Return tuple", "Import modules"], answer: "Pass variable number of arguments", attempted: false, selected: "" },
        { num: 40, question: "40 What is the result of: 10 % 3?", options: ["1", "0", "3", "10"], answer: "1", attempted: false, selected: "" },
        { num: 41, question: "41 What will 'None == 0' return?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
        { num: 42, question: "42 What’s the output of: type([])?", options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<type 'list'>"], answer: "<class 'list'>", attempted: false, selected: "" },
        { num: 43, question: "43 What is the use of 'assert' statement?", options: ["Debugging", "Looping", "Commenting", "Importing"], answer: "Debugging", attempted: false, selected: "" },
        { num: 44, question: "44 Which function returns the ASCII value of a character?", options: ["ord()", "chr()", "ascii()", "charcode()"], answer: "ord()", attempted: false, selected: "" },
        { num: 45, question: "45 What is the result of: [1, 2] + [3, 4]?", options: ["[1, 2, 3, 4]", "[4, 6]", "[1234]", "[1, 2, [3, 4]]"], answer: "[1, 2, 3, 4]", attempted: false, selected: "" },
        { num: 46, question: "46 Which function is used to read user input?", options: ["input()", "read()", "gets()", "scan()"], answer: "input()", attempted: false, selected: "" },
        { num: 47, question: "47 What does isinstance() check?", options: ["Object type", "Value comparison", "None check", "String type"], answer: "Object type", attempted: false, selected: "" },
        { num: 48, question: "48 What is the result of: ''.join(['a', 'b'])?", options: ["ab", "a b", "['a', 'b']", "None"], answer: "ab", attempted: false, selected: "" },
        { num: 49, question: "49 What does 'del' keyword do?", options: ["Deletes object", "Passes function", "Defines method", "Declares class"], answer: "Deletes object", attempted: false, selected: "" },
        { num: 50, question: "50 What is the result of bool('False')?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" } 
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
