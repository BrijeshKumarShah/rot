const questions = [
        { num: 1, question: "1 What is Node.js primarily used for?", options: ["Server-side scripting", "Database management", "UI design", "Operating systems"], answer: "Server-side scripting", attempted: false, selected: "" },
        { num: 2, question: "2 Which module is used to create a server in Node.js?", options: ["http", "url", "fs", "querystring"], answer: "http", attempted: false, selected: "" },
        { num: 3, question: "3 What does 'require' do in Node.js?", options: ["Imports modules", "Defines a variable", "Starts the server", "Compiles code"], answer: "Imports modules", attempted: false, selected: "" },
        { num: 4, question: "4 What is the default file extension for Node.js modules?", options: [".js", ".json", ".node", ".mod"], answer: ".js", attempted: false, selected: "" },
        { num: 5, question: "5 Which method is used to read a file asynchronously in Node.js?", options: ["fs.readFile", "fs.readFileSync", "fs.openSync", "fs.writeFile"], answer: "fs.readFile", attempted: false, selected: "" },
        { num: 6, question: "6 What is the purpose of the 'exports' object in Node.js?", options: ["To expose functions from a module", "To execute SQL queries", "To manage routes", "To define global variables"], answer: "To expose functions from a module", attempted: false, selected: "" },
        { num: 7, question: "7 Which core module is used for working with file paths?", options: ["path", "url", "fs", "os"], answer: "path", attempted: false, selected: "" },
        { num: 8, question: "8 Which object represents the current module in Node.js?", options: ["module", "exports", "require", "__filename"], answer: "module", attempted: false, selected: "" },
        { num: 9, question: "9 Which method ends the response in an HTTP server?", options: ["res.end()", "res.send()", "res.close()", "res.terminate()"], answer: "res.end()", attempted: false, selected: "" },
        { num: 10, question: "10 What is the global object for accessing command-line arguments?", options: ["process.argv", "console.args", "args.input", "cli.args"], answer: "process.argv", attempted: false, selected: "" },
        { num: 11, question: "11 How do you install a package using npm?", options: ["npm install package-name", "node install package-name", "install package-name", "npm get package-name"], answer: "npm install package-name", attempted: false, selected: "" },
        { num: 12, question: "12 Which of the following is true about Node.js?", options: ["Single-threaded", "Compiled", "Multi-threaded", "Blocking"], answer: "Single-threaded", attempted: false, selected: "" },
        { num: 13, question: "13 What does 'process' represent in Node.js?", options: ["Current Node.js process", "HTTP response", "A module path", "A file stream"], answer: "Current Node.js process", attempted: false, selected: "" },
        { num: 14, question: "14 Which method is used to schedule a function to run after a delay?", options: ["setTimeout", "setInterval", "delay", "schedule"], answer: "setTimeout", attempted: false, selected: "" },
        { num: 15, question: "15 What is the purpose of 'npm init'?", options: ["To create a package.json file", "To start the Node server", "To install a module", "To clean the project"], answer: "To create a package.json file", attempted: false, selected: "" },
        { num: 16, question: "16 Which module is used to handle events in Node.js?", options: ["events", "stream", "fs", "os"], answer: "events", attempted: false, selected: "" },
        { num: 17, question: "17 What is a callback function in Node.js?", options: ["Function executed after another finishes", "A server response", "A type of event", "An error handler"], answer: "Function executed after another finishes", attempted: false, selected: "" },
        { num: 18, question: "18 Which method reads a stream in chunks?", options: ["stream.on('data')", "stream.read()", "stream.pipe()", "stream.write()"], answer: "stream.on('data')", attempted: false, selected: "" },
        { num: 19, question: "19 What is a middleware in Express.js?", options: ["A function that handles requests", "A template engine", "A configuration file", "A static file"], answer: "A function that handles requests", attempted: false, selected: "" },
        { num: 20, question: "20 Which database is commonly used with Node.js?", options: ["MongoDB", "Oracle", "MySQL", "Firebase"], answer: "MongoDB", attempted: false, selected: "" },
        { num: 21, question: "21 How do you create a server using the http module?", options: ["http.createServer()", "http.startServer()", "http.makeServer()", "http.buildServer()"], answer: "http.createServer()", attempted: false, selected: "" },
        { num: 22, question: "22 What is the use of __dirname in Node.js?", options: ["Gives directory name of current module", "Returns user directory", "Creates new directory", "Returns current URL"], answer: "Gives directory name of current module", attempted: false, selected: "" },
        { num: 23, question: "23 Which command updates all npm packages?", options: ["npm update", "npm upgrade", "npm refresh", "npm install --latest"], answer: "npm update", attempted: false, selected: "" },
        { num: 24, question: "24 How is a promise resolved?", options: ["resolve()", "then()", "await()", "try()"], answer: "resolve()", attempted: false, selected: "" },
        { num: 25, question: "25 What does the 'fs' module do?", options: ["Handles file system operations", "Creates servers", "Runs SQL", "Manages routes"], answer: "Handles file system operations", attempted: false, selected: "" },
        { num: 26, question: "26 Which command initializes a Node.js project?", options: ["npm init", "node start", "npm begin", "init node"], answer: "npm init", attempted: false, selected: "" },
        { num: 27, question: "27 Which keyword is used to handle asynchronous code in Node.js?", options: ["async", "wait", "callback", "thread"], answer: "async", attempted: false, selected: "" },
        { num: 28, question: "28 What does 'npm' stand for?", options: ["Node Package Manager", "Node Project Manager", "New Package Maker", "Node Public Module"], answer: "Node Package Manager", attempted: false, selected: "" },
        { num: 29, question: "29 What is the purpose of package-lock.json?", options: ["Locks versions of installed packages", "Blocks unwanted packages", "Contains project settings", "Manages user sessions"], answer: "Locks versions of installed packages", attempted: false, selected: "" },
        { num: 30, question: "30 What does 'require.cache' do?", options: ["Stores loaded modules", "Lists available packages", "Caches HTTP responses", "Clears cookies"], answer: "Stores loaded modules", attempted: false, selected: "" },
        { num: 31, question: "31 What is Express.js?", options: ["Web framework for Node.js", "Database library", "Testing library", "CLI tool"], answer: "Web framework for Node.js", attempted: false, selected: "" },
        { num: 32, question: "32 Which method parses incoming request bodies in Express?", options: ["express.json()", "express.parse()", "express.decode()", "express.body()"], answer: "express.json()", attempted: false, selected: "" },
        { num: 33, question: "33 How to export a function from a module?", options: ["module.exports = myFunction", "export myFunction", "module.myFunction", "require('myFunction')"], answer: "module.exports = myFunction", attempted: false, selected: "" },
        { num: 34, question: "34 Which environment variable sets the environment type?", options: ["NODE_ENV", "ENV_NODE", "NODE_TYPE", "NODE_MODE"], answer: "NODE_ENV", attempted: false, selected: "" },
        { num: 35, question: "35 What does 'next()' do in Express middleware?", options: ["Passes control to the next middleware", "Stops server", "Returns a response", "Clears the request"], answer: "Passes control to the next middleware", attempted: false, selected: "" },
        { num: 36, question: "36 What does 'res.send()' do in Express?", options: ["Sends response to client", "Renders a page", "Stops server", "Logs an error"], answer: "Sends response to client", attempted: false, selected: "" },
        { num: 37, question: "37 How do you handle errors in async/await?", options: ["try...catch", "await.catch", "resolve...reject", "promise.fail"], answer: "try...catch", attempted: false, selected: "" },
        { num: 38, question: "38 Which of these is a core Node.js module?", options: ["http", "express", "mongoose", "axios"], answer: "http", attempted: false, selected: "" },
        { num: 39, question: "39 How to import ES6 modules in Node.js?", options: ["import x from 'module'", "require('module')", "include module", "load module"], answer: "import x from 'module'", attempted: false, selected: "" },
        { num: 40, question: "40 What is 'cluster' module used for?", options: ["Creating child processes", "Handling streams", "Managing routes", "Working with events"], answer: "Creating child processes", attempted: false, selected: "" },
        { num: 41, question: "41 Which method pipes readable stream to writable?", options: ["readable.pipe(writable)", "stream.link()", "stream.connect()", "fs.transfer()"], answer: "readable.pipe(writable)", attempted: false, selected: "" },
        { num: 42, question: "42 Which tool restarts Node.js server on file changes?", options: ["nodemon", "npm-watch", "forever", "restart-cli"], answer: "nodemon", attempted: false, selected: "" },
        { num: 43, question: "43 What is the purpose of .env file?", options: ["Store environment variables", "Hold logs", "Keep database files", "Cache data"], answer: "Store environment variables", attempted: false, selected: "" },
        { num: 44, question: "44 How to load .env variables?", options: ["require('dotenv').config()", "load.env()", "init.env()", "config.env()"], answer: "require('dotenv').config()", attempted: false, selected: "" },
        { num: 45, question: "45 Which method is used to handle POST data in Express?", options: ["req.body", "req.data", "req.post", "req.payload"], answer: "req.body", attempted: false, selected: "" },
        { num: 46, question: "46 What does 'process.exit()' do?", options: ["Terminates the Node.js process", "Restarts the server", "Closes all modules", "Clears memory"], answer: "Terminates the Node.js process", attempted: false, selected: "" },
        { num: 47, question: "47 What is 'CORS' used for in Node.js apps?", options: ["Handle cross-origin requests", "Encrypt files", "Run cron jobs", "Optimize memory"], answer: "Handle cross-origin requests", attempted: false, selected: "" },
        { num: 48, question: "48 What is 'body-parser' in Express?", options: ["Middleware to parse request body", "Router", "Database handler", "Error handler"], answer: "Middleware to parse request body", attempted: false, selected: "" },
        { num: 49, question: "49 Which command removes a package?", options: ["npm uninstall package-name", "npm remove package-name", "npm delete package-name", "npm purge package-name"], answer: "npm uninstall package-name", attempted: false, selected: "" },
        { num: 50, question: "50 What does 'res.status(code)' do in Express?", options: ["Sets HTTP response status", "Redirects request", "Closes server", "Validates input"], answer: "Sets HTTP response status", attempted: false, selected: "" }  
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
