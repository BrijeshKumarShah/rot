const questions = [
        { num: 1, question: "1 What does Node.js primarily allow JavaScript to do?", options: ["Run on the server", "Run in browser", "Style webpages", "Access SQL"], answer: "Run on the server", attempted: false, selected: "" },
        { num: 2, question: "2 Which module is used to create a web server in Node.js?", options: ["http", "fs", "url", "net"], answer: "http", attempted: false, selected: "" },
        { num: 3, question: "3 What does 'npm' stand for?", options: ["Node Package Manager", "New Package Module", "Node Processing Machine", "Network Package Manager"], answer: "Node Package Manager", attempted: false, selected: "" },
        { num: 4, question: "4 Which method is used to read a file asynchronously in Node.js?", options: ["fs.readFile", "fs.readFileSync", "fs.open", "fs.loadFile"], answer: "fs.readFile", attempted: false, selected: "" },
        { num: 5, question: "5 What is the file extension for a Node.js module?", options: [".js", ".node", ".mod", ".json"], answer: ".js", attempted: false, selected: "" },
        { num: 6, question: "6 Which global object is used to get the current directory?", options: ["__dirname", "__filename", "process.cwd()", "dir"], answer: "__dirname", attempted: false, selected: "" },
        { num: 7, question: "7 Which command initializes a new Node.js project?", options: ["npm init", "node init", "npm start", "node new"], answer: "npm init", attempted: false, selected: "" },
        { num: 8, question: "8 What does 'require' do in Node.js?", options: ["Imports a module", "Exports a function", "Installs a package", "Creates a server"], answer: "Imports a module", attempted: false, selected: "" },
        { num: 9, question: "9 Which method is used to create a server in the 'http' module?", options: ["createServer", "initServer", "newServer", "startServer"], answer: "createServer", attempted: false, selected: "" },
        { num: 10, question: "10 What is 'event-driven' programming in Node.js?", options: ["Reacting to events", "Looping continuously", "Waiting for input", "Blocking the process"], answer: "Reacting to events", attempted: false, selected: "" },
        { num: 11, question: "11 What is the default scope of variables in Node.js?", options: ["Module scope", "Global", "Function", "Block"], answer: "Module scope", attempted: false, selected: "" },
        { num: 12, question: "12 Which core module handles file paths?", options: ["path", "fs", "url", "os"], answer: "path", attempted: false, selected: "" },
        { num: 13, question: "13 What does 'exports' do in a module?", options: ["Makes functions available to other files", "Exports files", "Imports packages", "Saves data"], answer: "Makes functions available to other files", attempted: false, selected: "" },
        { num: 14, question: "14 What is middleware in Express.js?", options: ["Function that handles request/response", "Module loader", "Database connection", "Route path"], answer: "Function that handles request/response", attempted: false, selected: "" },
        { num: 15, question: "15 Which method sends data in an HTTP response in Express?", options: ["res.send()", "res.write()", "res.emit()", "res.out()"], answer: "res.send()", attempted: false, selected: "" },
        { num: 16, question: "16 What does 'res.json()' do in Express.js?", options: ["Sends a JSON response", "Parses JSON", "Reads JSON", "Writes JSON to file"], answer: "Sends a JSON response", attempted: false, selected: "" },
        { num: 17, question: "17 What is the use of 'process.env'?", options: ["Access environment variables", "Terminate process", "Start server", "Set encoding"], answer: "Access environment variables", attempted: false, selected: "" },
        { num: 18, question: "18 How do you install a package globally using npm?", options: ["npm install -g package", "npm -g install package", "node install package", "install -g package"], answer: "npm install -g package", attempted: false, selected: "" },
        { num: 19, question: "19 What is the purpose of 'package.json'?", options: ["Project metadata and dependencies", "HTML template", "Styling config", "Runtime settings"], answer: "Project metadata and dependencies", attempted: false, selected: "" },
        { num: 20, question: "20 Which module is used to work with the operating system?", options: ["os", "sys", "process", "system"], answer: "os", attempted: false, selected: "" },
        { num: 21, question: "21 What does the 'cluster' module allow in Node.js?", options: ["Multi-core processing", "Database sync", "Network partition", "Memory increase"], answer: "Multi-core processing", attempted: false, selected: "" },
        { num: 22, question: "22 What does 'next()' do in Express middleware?", options: ["Calls the next middleware", "Skips to route", "Exits server", "Ends response"], answer: "Calls the next middleware", attempted: false, selected: "" },
        { num: 23, question: "23 What is the use of the 'Buffer' class in Node.js?", options: ["Handle binary data", "Display logs", "Build responses", "Encrypt data"], answer: "Handle binary data", attempted: false, selected: "" },
        { num: 24, question: "24 What is the purpose of 'body-parser'?", options: ["Parse incoming request bodies", "Render templates", "Style HTML", "Handle sessions"], answer: "Parse incoming request bodies", attempted: false, selected: "" },
        { num: 25, question: "25 What is an event emitter in Node.js?", options: ["Object that emits events", "Async function", "HTTP listener", "Route handler"], answer: "Object that emits events", attempted: false, selected: "" },
        { num: 26, question: "26 What is the command to install Express.js?", options: ["npm install express", "node install express", "npm express", "express install"], answer: "npm install express", attempted: false, selected: "" },
        { num: 27, question: "27 What port does a Node.js server typically run on?", options: ["3000", "80", "443", "22"], answer: "3000", attempted: false, selected: "" },
        { num: 28, question: "28 Which object handles incoming requests in Express?", options: ["req", "res", "http", "request"], answer: "req", attempted: false, selected: "" },
        { num: 29, question: "29 How do you export a function in Node.js?", options: ["module.exports = func", "export = func", "return func", "send func"], answer: "module.exports = func", attempted: false, selected: "" },
        { num: 30, question: "30 What is the purpose of 'require.cache'?", options: ["Store loaded modules", "Store environment", "Manage logs", "Secure routes"], answer: "Store loaded modules", attempted: false, selected: "" },
        { num: 31, question: "31 What is a route in Express.js?", options: ["Defines request paths", "Starts server", "Renders HTML", "Parses data"], answer: "Defines request paths", attempted: false, selected: "" },
        { num: 32, question: "32 Which object handles HTTP response in Express?", options: ["res", "req", "http", "response"], answer: "res", attempted: false, selected: "" },
        { num: 33, question: "33 What happens if you don't call 'res.end()'?", options: ["Request hangs", "App crashes", "Server restarts", "Response is sent"], answer: "Request hangs", attempted: false, selected: "" },
        { num: 34, question: "34 Which module helps work with query strings?", options: ["querystring", "url", "string", "qs"], answer: "querystring", attempted: false, selected: "" },
        { num: 35, question: "35 What is the correct way to handle errors in async/await?", options: ["try/catch", "then/catch", "on/error", "res.error"], answer: "try/catch", attempted: false, selected: "" },
        { num: 36, question: "36 Which function listens on a specified port in Express?", options: ["app.listen", "http.listen", "server.listen", "express.listen"], answer: "app.listen", attempted: false, selected: "" },
        { num: 37, question: "37 What is a callback in Node.js?", options: ["Function called after completion", "Main loop", "Variable name", "File loader"], answer: "Function called after completion", attempted: false, selected: "" },
        { num: 38, question: "38 What is the use of 'setTimeout' in Node.js?", options: ["Delay execution", "Start server", "Create threads", "Open sockets"], answer: "Delay execution", attempted: false, selected: "" },
        { num: 39, question: "39 What does 'res.status(404).send()' do?", options: ["Send 404 error", "Redirect", "Close server", "Log request"], answer: "Send 404 error", attempted: false, selected: "" },
        { num: 40, question: "40 What is a common use of 'crypto' module?", options: ["Hashing and encryption", "Database queries", "File transfers", "Routing"], answer: "Hashing and encryption", attempted: false, selected: "" },
        { num: 41, question: "41 How do you create a readable stream in Node.js?", options: ["fs.createReadStream()", "fs.readFile()", "stream.read()", "read.open()"], answer: "fs.createReadStream()", attempted: false, selected: "" },
        { num: 42, question: "42 What is used to compress HTTP responses?", options: ["compression", "zlib", "gzip", "minify"], answer: "compression", attempted: false, selected: "" },
        { num: 43, question: "43 Which method registers middleware in Express?", options: ["app.use()", "app.route()", "app.add()", "app.listen()"], answer: "app.use()", attempted: false, selected: "" },
        { num: 44, question: "44 What is the main benefit of using Express?", options: ["Simplifies server creation", "Adds UI", "Increases CPU", "Creates SQL queries"], answer: "Simplifies server creation", attempted: false, selected: "" },
        { num: 45, question: "45 How do you parse URL parameters in Express?", options: ["req.params", "req.body", "req.url", "req.query"], answer: "req.params", attempted: false, selected: "" },
        { num: 46, question: "46 Which method is used to write data to a stream?", options: ["stream.write()", "stream.data()", "stream.input()", "stream.send()"], answer: "stream.write()", attempted: false, selected: "" },
        { num: 47, question: "47 What does 'res.redirect()' do?", options: ["Redirects client to a URL", "Ends request", "Forwards error", "Reloads server"], answer: "Redirects client to a URL", attempted: false, selected: "" },
        { num: 48, question: "48 What is the use of 'dotenv' in Node.js?", options: ["Load environment variables", "Install dependencies", "Create routing", "Parse JSON"], answer: "Load environment variables", attempted: false, selected: "" },
        { num: 49, question: "49 Which database is commonly used with Node.js?", options: ["MongoDB", "PostgreSQL", "Oracle", "Firebase"], answer: "MongoDB", attempted: false, selected: "" },
        { num: 50, question: "50 What is the main purpose of Node.js?", options: ["Run JavaScript on server", "Design UI", "Manage styles", "Compile Java"], answer: "Run JavaScript on server", attempted: false, selected: "" }
      
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
